 document.querySelector('.home.home .navbar').classList.remove('nav-show')
 window.addEventListener('scroll', ()=>{
     console.log('mario')
     if (window.scrollY > 80){
         document.querySelector('.home.home .navbar').classList.add('nav-show')
     }else{
         document.querySelector('.home.home .navbar').classList.remove('nav-show')
     }
 })
