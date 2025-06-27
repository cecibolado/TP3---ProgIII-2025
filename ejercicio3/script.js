const lista = document.getElementById("lista")
const datos = fetch("https://jsonplaceholder.typicode.com/todos").then((res) => res.json())
console.log (datos)
datos.then((data) => {
    data.filter((tarea) =>{
        if(tarea.completed) {
            const li = document.createElement("li")
            li.textContent = tarea.title
            lista.appendChild(li)
        }
    })
})