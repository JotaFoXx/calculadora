const screen = document.querySelector('.screen')
const botonOperacion = document.querySelectorAll('.btn')

botonOperacion.forEach(boton => {
    boton.addEventListener('click', () => {
        const botones = boton.textContent;

        if(boton.id === "borrar"){
            screen.textContent = "0";
            return;
        }
        if(boton.id === "delete"){
            if(screen.textContent.length === 1 || screen.textContent === 'syntaxERROR!'){
               screen.textContent = "0"; 
            }else{
                screen.textContent = screen.textContent.slice(0, -1);
            }
            return;
        }
        if(boton.id==="igual"){
            try{
                screen.textContent = eval(screen.textContent)
            } catch{
                screen.textContent = "syntaxERROR!"
            }
            return;
        }    
         if(screen.textContent==="0" || screen.textContent === 'syntaxERROR!'){
            screen.textContent = botones;
         }else{
            screen.textContent += botones;
         }
    })
})