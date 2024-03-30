  const navigation = document.querySelector(".navigation");
  const navA = navigation.querySelectorAll("a");


  window.addEventListener('scroll' , () =>{
    const scrollPosition = window.scrollY;
    if(scrollPosition >= 100) {
      navigation.classList.add("bgcWhite");

  navA.forEach((item) => {
    item.style.color = "block";
  });


    }

    else{
      navigation.classList.remove("bgcWhite");

      navA.forEach((item) => {
        item.style.color = "White";
      });
    }
  });

  // gallery
const galleryAllTabs = document.querySelector('.gallery__tabs'),
     galleryTab = document.querySelectorAll('.gallery__tab'),
     galleryContent = document.querySelectorAll('.gallery__body');
    



// contact yashirish

function hideGalleryContent(){
      galleryContent.forEach(item =>{
        item.classList.add('hide');
        item.classList.remove('show' , 'fade');
      })
      galleryTab.forEach(item =>{
        item.classList.remove('active');
      })
     }


   function showGalleryContent (i){
   galleryContent[i].classList.add('show', 'fade');
   galleryContent[i].classList.remove('hide');
   galleryTab[i].classList.add('active');
   }
   hideGalleryContent();
   showGalleryContent(3);


  //  bosilganda ishga tushl

  
   galleryAllTabs.addEventListener('click', (e) =>{
     const target = e.target;
     if(target && target.classList.contains('gallery__tab')){
      galleryTab.forEach((item, idx) =>{
        if(target == item){
        hideGalleryContent();
        showGalleryContent(idx);
        }
      })
     }
   })




   const swiper = new Swiper('.swiper', {

     loop: true,
     autoplay:{
      delay: 2000,
      disableOnItaraction: false,
    },

  });