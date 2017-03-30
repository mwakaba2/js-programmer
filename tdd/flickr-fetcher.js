var FlickrFetcher;

FlickrFetcher = {
  photoObjToUrl: function(photoObj) {
    let domain = `https://farm${photoObj.farm}.staticflickr.com`;
    let path = `/${photoObj.server}/${photoObj.id}_${photoObj.secret}_b.jpg`;
    return `${domain}${path}`;
  },
  transformPhotoObj: function(photoObj) {
    return {
      title: photoObj.title,
      url: FlickrFetcher.photoObjToUrl(photoObj)
    };
  }
};

module.exports = FlickrFetcher;