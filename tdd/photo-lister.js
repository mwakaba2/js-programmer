var PhotoLister;

PhotoLister = {
  photoToListItem: function(photo) {
    return `<li><figure><img src="${photo.url}" alt=""/>`
                   + `<figcaption>${photo.title}</figcaption></figure></li>`;
  },
  photoListToHTML: function(photoList){
    return `<ul>${photoList.map(PhotoLister.photoToListItem).join('')}</ul>`;
  },
  addPhotosToElement: function($, selector, list) {
    return $(selector).append(list);
  }
};

if ((typeof module !== 'undefined') && (typeof module.exports !== 'undefined')) {
  module.exports = PhotoLister;
}