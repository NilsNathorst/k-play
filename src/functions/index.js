const filterContentByTag = (contentArray, tag) => {
  let newArr = contentArray.filter(content => content.tags.includes(tag));
  return newArr;
};

const getRelatedMedia = (media, tags) => {
  return [...new Set(tags.map(tag => filterContentByTag(media, tag)).flat())];
};

const sortMediaByType = (media, type) => {
  console.log(media, type);
};

export { sortMediaByType, getRelatedMedia, filterContentByTag };
