import {AsyncStorage} from 'react-native'
import {Notifications, Permissions} from 'expo'
const flashCardObject = {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    },
    HTML5: {
      title: 'HTML5',
      questions: [
        {
          question: 'What are the new tags introduced in HTML5?',
          answer: '<section><article><aside><header><footer>'
        }
      ]
    }
  }

const NOTIFICATION_KEY = 'Flashcards:notifications'

export function getDecks(){
    return flashCardObject;
}

export function getDeck(id){
    return flashCardObject[id];
}

export function saveDeckTitle(title){
    flashCardObject = {...flashCardObject, [title] : {title: `${title}`, questions: []}}
    return flashCardObject;
}

export function addCardToDeck(title,card){
  const {question, answer} = card;
  Object.values(flashCardObject).filter(stack => stack.title === title)[0].questions.push(
    {question: question,
    answer: answer
  })
  return flashCardObject;
}

export function clearLocalNotification () {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification () {
  return {
    title: "Let's study",
    body: "👋 don't forget to take your quiz today",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  }
}

export function setLocalNotification () {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()

              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate() + 1)
              tomorrow.setHours(20)
              tomorrow.setMinutes(0)

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day',
                }
              )

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })
}