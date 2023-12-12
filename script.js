const menuToggle = document.querySelector('.toggle');
const main = document.querySelector('.main');
const serviceContainers = [...document.querySelectorAll('.service-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];



menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  main.classList.toggle('active');
})

serviceContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})