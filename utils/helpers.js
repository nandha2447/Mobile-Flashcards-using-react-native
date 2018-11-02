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
    }
  }

export function getDecks(){
    return flashCardObject;
}

export function getDeck(id){
    return flashCardObject[id];
}

export function saveDeckTitle(title){
    flashCardObject = {...flashCardObject, [title] : {title: `${title}`}}
    return flashCardObject;
}

export function addCardToDeck(title,card){
    /* const {question, answer} = card;
    flashCardObject = {
        ...flashCardObject,
        [title]: {...flashCardObject[title],
                [questions]: [question,answer]
        },
    } */
    return flashCardObject;
}