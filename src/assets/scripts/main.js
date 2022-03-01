

/*Definimos directamente todos los li y todas las imagenes*/
const li = document.querySelectorAll('.li')
const cajita = document.querySelectorAll('.cajita')


/*recorremos todos los li*/
li.forEach((cada_li, i)=>{
    /*con un click*/
    li[i].addEventListener('click',()=>{


        /*recorremos todos y le quitamos la clase activo y de cada imagen*/
        li.forEach((cada_li,i)=>{
            li[i].classList.remove('activo')
            cajita[i].classList.remove('activo')
        })

        /*Y activamos la imagen y el li de la posicion que hemos echo click del li*/
        li[i].classList.add('activo')
        cajita[i].classList.add('activo')
    })
})




const grande    = document.querySelector('.grande')
const punto     = document.querySelectorAll('.punto')



/*recorremos*/
punto.forEach( ( cadaPunto , i )=> {
    punto[i].addEventListener('click',()=>{

        /*nos quedamos con la posicion*/
        let posicion  = i
        let operacion = posicion * -50

        /*lo movemos*/
        grande.style.transform = `translateX(${ operacion }%)`

        /*recorremos los puntos*/
        punto.forEach( ( cadaPunto , i )=>{
            /*quitamos la clase activo de este punto*/
            punto[i].classList.remove('activo')
        })
        /*le añadimos la clase activo al de la posicion recogida donde hemos hecho click*/
        punto[i].classList.add('activo')

    })
})

