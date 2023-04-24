function movieTitleFormatter(title) {
  // split the string into an array of words
  const words = str.split(" ");
  // iterate over each word and capitalize the first letter
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  // join the words back together into a string and return it
  return words.join(" ");
}

export { movieTitleFormatter };
