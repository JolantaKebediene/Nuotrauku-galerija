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

let imageIndex = 0;

data.forEach((imgData, index)=> {
    const img = document.createElement('img');

    img.src = imgData.src;
    img.alt = imgData.alt;
    img.className = 'small-img';
    img.addEventListener('click', () => {
      imageIndex = index;
      zoomImg();
    });
   
  document.getElementById('foto').appendChild(img)
});

function zoomImg() {
  const newDiv = document.createElement('div'); //create new div element
  newDiv.id='zoomed-img'; //give ID to newDiv
  newDiv.appendChild(arrowLeft());//create left arrow in newDiv
  newDiv.appendChild(bigImg()); //create bigImg
  newDiv.appendChild(arrowRight()); //create right arrow in newDiv
  const currentDiv = document.getElementById('foto');
  document.body.insertBefore(newDiv, currentDiv); //insert new div with big picture before foto gallery
  newDiv.addEventListener('click', (event) => {  //nuima listneri nuo div'o elementu, palikdamas tik ant fono
    let clickValue = String(event.target.id)
    switch (clickValue){
    case 'arrow-left': arrowLeft();
    break
    case 'big-img': bigImg();
    break
    case 'arrow-right': arrowRight();
    break
    default:
    newDiv.remove();
    } 
  })
};

function arrowLeft() {
  let arrowLeft = document.createElement('img');
  arrowLeft.src = 'arrow-left.png';
  arrowLeft.id = 'arrow-left';
  arrowLeft.addEventListener('click', function () {
   imageIndex--
   if (imageIndex < 0) {
     imageIndex = data.length -1;
   }
   document.getElementById('big-img').src = data[imageIndex].src;
  });
  return arrowLeft;
}

function arrowRight() {
  let arrowRight = document.createElement('img');
  arrowRight.src = 'arrow-right.png';
  arrowRight.id = 'arrow-right';
  arrowRight.addEventListener('click', function () {
      imageIndex++;
      if (imageIndex > data.length -1) {
        imageIndex = 0;
      }
      document.getElementById('big-img').src = data[imageIndex].src;
  });
  return arrowRight;
}

function bigImg() {
  let bigImg = document.createElement('img');
  bigImg.src= data[imageIndex].src;
  bigImg.id='big-img' ;
  return bigImg;
};