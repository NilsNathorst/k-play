const filterContentByTag = (contentArray, tag) => {
  return contentArray.filter(content => content.tags.includes(tag));
};

const getRelatedMedia = (media, tags) => {
  if (!tags) return;
  return [...new Set(tags.map(tag => filterContentByTag(media, tag)).flat())];
};

const sortMediaByType = (media, type) => {
  console.log(media, type);
};

const getMediaById = (contentArray, id) => {
  return contentArray.filter(media => media.id == id)[0];
};
export { getMediaById, sortMediaByType, getRelatedMedia, filterContentByTag };
