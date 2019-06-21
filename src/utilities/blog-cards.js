const createExcerpt = (post) => {
  return post.slice(0, 300) + " (...)"
}

const createPrintedDate = (date) => {
  console.log(date)
  const newDate = new Date(date)
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return newDate.toLocaleDateString('default', options)

}


export { createExcerpt, createPrintedDate };
