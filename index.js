/** toggle navbar icon    */

let menuIcon = document.querySelector('#menuIcon');
let navbar = document.querySelector('.navbar');

menuIcon,onclick = () => {
  menuIcon.classList.toggle("fa-xmark")
  navbar.classList.toggle('active')
}

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a')


window.onscroll =() => {
  sections.forEach(sec => {
    let top = windwo.onscrollY;
    let offset = windwo.offset - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height ){
      navlinks.forEach.apply(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
      });
    };

  });

  /* stick nav */

let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

menuIcon.classList.remove('fa-xmark');
navbar.classList.remove('active');

}

