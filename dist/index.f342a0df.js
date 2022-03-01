const li=document.querySelectorAll(".li"),cajita=document.querySelectorAll(".cajita");li.forEach(((a,c)=>{li[c].addEventListener("click",(()=>{li.forEach(((a,c)=>{li[c].classList.remove("activo"),cajita[c].classList.remove("activo")})),li[c].classList.add("activo"),cajita[c].classList.add("activo")}))}));
//# sourceMappingURL=index.f342a0df.js.map
