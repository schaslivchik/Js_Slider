'use strict';

const slides = [
  {
    src: 'https://photar.ru/wp-content/uploads/2021/04/Zak-van-Biljon-17.jpg',
    alt: 'lanscape 1',
    description: {
      title: 'Header 1',
      describe: '1_Lorem, veniam molestias minus nesciunt accusamus. Rerum quis voluptatibus nihil, laudantium molestiae'
    },
  },
  {
    src: 'https://i.pinimg.com/originals/cc/11/66/cc11665c0f6565ab973907a73fa7d8b5.jpg',
    alt: 'lanscape 2',
    description: {
      title: 'Header 2',
      describe: '2_Lorem, veniam molestias minus nesciunt accusamus. Rerum quis voluptatibus nihil, laudantium molestiae'
    },
  },
  {
    src: 'https://cameralabs.org/media/k2/items/cache/b19561bfe5acb7716f4100f417429700_L.jpg',
    alt: 'lanscape 3',
    description: {
      title: 'Header 3',
      describe: '3_Lorem, veniam molestias minus nesciunt accusamus. Rerum quis voluptatibus nihil, laudantium molestiae'
    },
  },
  {
    src: 'https://7oom.ru/wp-content/uploads/peizaji-01.jpg',
    alt: 'lanscape 4',
    description: {
      title: 'Header 4',
      describe: '4_Lorem, veniam molestias minus nesciunt accusamus. Rerum quis voluptatibus nihil, laudantium molestiae'
    },
  },
];
try {
  const slider = new Slider(slides, 0);

  const imgEl = document.querySelector('.img-wrapper>img');
  const descriptionEl = document.querySelector('.description');
  const titleEl = document.querySelector('.title-slide')
  const [prevBtn, nextBtn] = document.querySelectorAll('button');

  updateSlide(slider.currentSlide);

  nextBtn.onclick = () => {
    slider.incSlideIndex();

    updateSlide(slider.currentSlide);
  };

  prevBtn.onclick = () => {
    slider.decSlideIndex();

    updateSlide(slider.currentSlide);
  };

  function updateSlide(currentSlide) {
    imgEl.src = currentSlide.src;
    imgEl.alt = currentSlide.alt;
    titleEl.textContent = currentSlide.description.title; 
    descriptionEl.textContent = currentSlide.description.describe; 

  }
} catch (e) {
  console.log('e :>> ', e);
  const imgEl = document.querySelector('.img-wrapper>img');
  imgEl.src =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOVvXR57AwEbzurnmhGSOfeW-xxviWubWn5Q&usqp=CAU';
}
