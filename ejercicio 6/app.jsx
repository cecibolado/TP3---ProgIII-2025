const { useState } = React

const App = () => {
    const [peso, setPeso] = useState (" ")
    const [altura, setAltura] = useState (" ")
    const [resultado, setResultado] = useState (null)

    const calcularIMC = (e) => {
        e.preventDefault()
        if(!peso || !altura || altura <= 0) {
            setResultado({ mensaje: "Ingrese valores válidos", color: "gray"})
            return
        }
        const imc = peso / Math.pow(altura, 2)
        let mensaje = ""
        let color = ""
        if (imc < 18.5) {
            mensaje = `IMC: ${imc.toFixed(2)} - Nivel Bajo`
            color = "yellow"
        }else if (imc >= 18.5 && imc < 25) {
            mensaje = `IMC: ${imc.toFixed(2)} - Nivel Normal`
            color = "green"
        }else if (imc >= 25 && imc < 30) {
            mensaje = `IMC: ${imc.toFixed(2)} - Sobrepeso`
            color = "orange"
        }else {
            mensaje = `IMC: ${imc.toFixed(2)} - Obesidad`
            color = "red"
        }
        setResultado({mensaje,color})
    }
    return (
         <>
        <h2>Calculadora de IMC</h2>
        <form className="formulario" onSubmit={calcularIMC}>
            <input type="number" value={peso} placeholder="Peso en kg" onChange={(e) => setPeso(Number(e.target.value))} min="0" step="any" />
            <input type="number" value={altura} placeholder="Altura en metros (ej: 1.60)" onChange={(e) => setAltura(Number(e.target.value))} min="0" step="any" />

            <button type="submit"> Calcular IMC</button>
            {resultado && (
                <div style={{marginTop: 20, color: resultado.color, fontWeight: "verdana", }}>{resultado.mensaje}</div>

            )}           
        </form>
        </>
    )
}
const contenedor = document.getElementById("root")
const root = ReactDOM.createRoot(contenedor)
root.render(<App />)