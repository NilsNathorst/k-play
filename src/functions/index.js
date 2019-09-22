const filterContentByTag = (contentArray, tag) => {
  return contentArray.filter(content => content.tags.includes(tag));
};

const getRelatedMedia = (media, tags) => {
  return [...new Set(tags.map(tag => filterContentByTag(media, tag)).flat())];
};

const sortMediaByType = (media, type) => {
  console.log(media, type);
};

export { sortMediaByType, getRelatedMedia, filterContentByTag };
