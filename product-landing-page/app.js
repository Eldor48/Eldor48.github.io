const navSlide = ()=>{
    const burger = document.querySelector('.burger'); 
    const nav = document.querySelector('.nav-links'); 
    const navLinks = document.querySelectorAll('nav#nav-bar .nav-links li a');
    // toggle menu
    burger.addEventListener('click', ()=>{
     nav.classList.toggle('nav-active');


    });

    // Links 

    navLinks.forEach((link, index) => {
      
      link.style.animation = `navLinkFade 0.5s ease fowards ${index / 7}s`;
      console.log(index /  7 ); 
              
    });
  
};

navSlide(); 