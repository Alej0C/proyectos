const formulario = document.getElementById('formulario');
const inputFormulario = document.getElementById('inputFormulario');

const formularioClientes = data => {
    formulario.addEventListener('keyup', e => {
        e.preventDefault()

        const textoCliente = inputFormulario.value.toLowerCase()
        // console.log(textoCliente)

        const formularioFiltrado = data.filter(item => {
            const textoApi = item.name.toLowerCase()
            if (textoApi.indexOf(textoCliente) !== -1) {
                return item
            }
        })
        banderillas(formularioFiltrado)
    })
}