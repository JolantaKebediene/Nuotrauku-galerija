const data = [
  {
    src: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564",
    alt: "nebula cloud",
  },
  {
    src: "https://images.unsplash.com/photo-1570032257806-7272438f38da",
    alt: "mountains reflection on water",
  },
  {
    src: "https://images.unsplash.com/photo-1525054098605-8e762c017741",
    alt: "strong waves"
  },
  {
    src: "https://images.unsplash.com/photo-1562207520-19c0ebd8264f",
    alt: "green mountains and blue sky",
  },
  {
    src: "https://images.unsplash.com/photo-1617191519105-d07b98b10de6",
    alt: "blue and purple galaxy",
  },
  {
    src: "https://images.unsplash.com/photo-1441829266145-6d4bfbd38eb4",
    alt: "blue wavy ocean with horizon",
  },
  {
    src: "https://images.unsplash.com/photo-1615114814213-a245ffc79e9a",
    alt: "brown and black galaxy",
  },
  {
    src: "https://images.unsplash.com/photo-1552604660-a8c4dde15b2e",
    alt: "person on clif in canyon",
  },
  {
    src: "https://images.unsplash.com/photo-1564295644023-16f14ac50b93",
    alt: "whale tale above water surface",
  },
]

function createImage(imgData) {
  let img = document.createElement('img');
  img.src = imgData.src;
  img.alt = imgData.alt;
  img.className = 'small-img';
  img.addEventListener('click', zoomImg)
  return img;
};

data.forEach(img => {
  document.getElementById('foto').appendChild(createImage(img))
});

function zoomImg() {
  //create new div element
  const newDiv = document.createElement('div');
  //give ID to newDiv
  newDiv.id='zoomed-img';
  //create array in newDiv
  newDiv.appendChild(arrowLeft());
  const currentDiv = document.getElementById('foto');
  document.body.insertBefore(newDiv, currentDiv);
  //newDiv.appendChild (bigImg());
  //document.body.insertAfter(newDiv, currentDiv);
  newDiv.appendChild(arrowRight());
  document.body.insertBefore(newDiv, currentDiv); 
};

function arrowLeft() {
  let arrowLeft = document.createElement('img');
  arrowLeft.src = 'arrow-left.png';
  arrowLeft.id = 'arrow-left';
  return arrowLeft;
}

function arrowRight() {
  let arrowRight = document.createElement('img');
  arrowRight.src = 'arrow-right.png';
  arrowRight.id = 'arrow-right';
  return arrowRight;
}

function bigImg() {
  let bigImg = document.createElement('img');
  bigImg.src= currentTarget.src; //??????
  bigImg.id='big-img' 
}