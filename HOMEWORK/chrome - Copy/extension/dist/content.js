const name = document.URL;

chrome.storage.sync.set(
  {
    name,
  },
  () => {
    // console.log(pageURL);
  }
);
