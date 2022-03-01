const li = document.querySelectorAll(".li");
const cajita = document.querySelectorAll(".cajita");
li.forEach((cada_li, i)=>{
    li[i].addEventListener('click', ()=>{
        li.forEach((cada_li, i)=>{
            li[i].classList.remove("activo");
            cajita[i].classList.remove("activo");
        });
        li[i].classList.add("activo");
        cajita[i].classList.add("activo");
    });
});

//# sourceMappingURL=index.eff8aa07.js.map
