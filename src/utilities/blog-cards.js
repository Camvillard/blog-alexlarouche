// reuturns the excerpt of a text
// @post = String
const createExcerpt = (post) => {
  return post.slice(0, 240) + " (...)"
}


// returns correctly printed date
// @date = Date
const createPrintedDate = (date) => {
  const newDate = new Date(date)
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return newDate.toLocaleDateString('default', options)
}


// return a word or its plural depending on the array
// it describes
// @array = Array
// @word = String
const pluralizeWord = (array, word) => {
  if (array.length <= 1) {
    return word
  } else {
    return word + "s"
  }
}

const truncateWord = (string, words) => {
  return string.split(' ').slice(0, words).join(' ')
}

export { createExcerpt, createPrintedDate, pluralizeWord, truncateWord };
