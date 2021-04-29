window.addEventListener('scroll', function () {
   var scroll = document.querySelector('.scrollTop');
   scroll.classList.toggle("active", window.scrollY > 500)
})

function scrollToTop() {
   window.scrollTo({
      top: 0,
      behavior: 'smooth'
   })
}

window.addEventListener("scroll", function () {
   const header = document.querySelector('header');
   header.classList.toggle('sticky', window.scrollY > 0);
});



const navigation = document.querySelector('.nav');
document.querySelector('.toggle').onclick = function () {
   this.classList.toggle('active');
   navigation.classList.toggle('active');
}


document.querySelector('.toggle').addEventListener('click', () => {
   document.querySelector('body').classList.toggle('lock');
});