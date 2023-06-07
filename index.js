const leftBtn = document.querySelector('.left_btn')
const rightBtn = document.querySelector('.right_btn')
const gallery = document.querySelector('.gallery');
const photoCount = gallery.querySelectorAll('div')[1];

let firstPhotoWidth = photoCount.clientWidth + 14

leftBtn.addEventListener('click', () => {
    gallery.scrollLeft -= firstPhotoWidth

})

rightBtn.addEventListener('click', () => {
    gallery.scrollLeft += firstPhotoWidth
    photoCount[0].classList.remove('active')
    
})


