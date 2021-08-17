let myImages = ['/icon.png'];

const imgs = document.getElementsByTagName('img');

for (let i = 0; i < imgs.length; i++) {
  imgs[i].src = myImages[0];
}
