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
  
function createImage (imgSrc, imgAlt) {
  let img = document.createElement ('img');
  img.src = imgSrc;
  img.alt = imgAlt;
  return img;
}

data.forEach(img => {
  for (let i=0; i < data.length; i++){
  document.getElementById('Foto').appendChild(createImage (data[i]['src'], data[i]['alt']))
}})

const imgClick = document.querySelectorAll('img');

function createImageZoomed (imgSrc, imgAlt) {
  let img = document.createElement ("img");
  img.src = imgSrc;
  img.alt = imgAlt;
  img.width = 'max-width';
  img.height = 'max-height';
return img;
}

imgClick.addEventListener("click", (eventZoom) => {
  createImageZoomed();
})
