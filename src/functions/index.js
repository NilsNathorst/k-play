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

const searchContent = (query, data) => {
  query = query.toLowerCase();
  // Splitting up query by space
  const descriptionResults = data.filter(media => {
    // Searching through description if exist
    if (media.description !== null) {
      return media.description.toLowerCase().includes(query);
    }
  });
  const titleResults = data.filter(media => {
    return media.title.toLowerCase().includes(query);
  });
  const tagResults = data.filter(media => {
    return media.tags
      .join(" ")
      .toLowerCase()
      .includes(query);
  });
  let results = [titleResults, descriptionResults, tagResults].flat();
  results = [...new Set(results)];
  return results;
};

export {
  searchContent,
  getMediaById,
  sortMediaByType,
  getRelatedMedia,
  filterContentByTag
};
