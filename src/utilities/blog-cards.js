const createExcerpt = (post) => {
  return post.slice(0, 200) + "(...)"
}


export { createExcerpt };
