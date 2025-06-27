    const palabras = [
        "manzana",
        "banana",
        "pera",
        "durazno",
        "frutilla",
        "mango", 
    ]

    const entrada = document.getElementById("entrada")    
    const boton = document.getElementById("filtrar")
    const resultado = document.getElementById("resultado")
    const mensaje = document.getElementById("mensaje")

    boton.addEventListener("click", (e) => {
        e.preventDefault
        const texto = entrada.value.trim().toLowerCase()
        resultado.innerHTML = " "
        mensaje.textContent = " "
        
        if (texto === '') {
            mensaje.textContent = 'Por favor ingrese una palabra para filtrar';
            return;
         }
         const filtro = palabras.filter((palabra) =>
        palabra.toLowerCase().includes(texto)
        )
        
        if (filtro.length === 0) {
            mensaje.textContent = "No se encontraron resultados."
        }else {
            filtro.forEach((palabra) => {
                const li = document.createElement("li")
                li.textContent = palabra
                resultado.appendChild(li)
            })
        }
    })
   
           
    