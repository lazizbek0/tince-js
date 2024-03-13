window.addEventListener('DOMContentLoaded', () =>{


    const navigation = document.querySelector(".navigation");
    const navA = navigation.querySelectorAll(" a");
    const navBars = navigation.querySelector("i");
    const bars = document.querySelector('.fa-bars');
    
    bars.addEventListener('click', () =>{
      navigation.classList.toggle('height')
    })
    
    
    window.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition >= 100) {
        navigation.classList.add("bgcWhite");
    
        navBars.style.color = "black";
        navA.forEach((item) => {
          item.style.color = "black";
        });
      } else {
        navigation.classList.remove("bgcWhite");
    
        navBars.style.color = "white";
        navA.forEach((item) => {
          item.style.color = "white";
        });
    }
    document.addEventListener('keydown', e =>{
      if(e.code == 'Escape'){
        handleHideModal()
      }
    })
    
    document.addEventListener('keydown', e =>{
      if(e.code == 'Insert'){
        const isClose = confirm('saytni yopmoqchimsz');
        if (isClose){
          close()
        }
        else{
          alert('saytdan foydalanishingiz mumkin')
        }
      }
    })

    })

    })