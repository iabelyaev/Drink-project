const menuBurger=document.querySelector(".menu__burger"),list=document.querySelector(".menu__list");menuBurger.addEventListener("click",(()=>{list.classList.toggle("menu__list--opened"),menuBurger.classList.toggle("menu__burger--opened")}));