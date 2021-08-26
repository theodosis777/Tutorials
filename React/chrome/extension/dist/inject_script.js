///ADD LISTENER FOR STORAGE CHANGES
chrome.storage.onChanged.addListener(function (changes, namespace) {
  for (let key in changes) {
    ///IF STORAGE KEY SELECTED PIC CHANGES CHANGE THE IMAGE IN CONTAINER
    if (key === 'SelectedPic') {
      let storageChange = changes[key];
      imageSize = document.querySelector('img');
      imageSize.setAttribute('style', 'object-fit: contain');

      image = document.getElementsByClassName('image');
      image[0].src = storageChange.newValue;
    }
  }
});
