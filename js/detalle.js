const banderas = document.getElementById('banderas')
const query = new URLSearchParams(window.location.search)
const params = query.get('name')
console.log(params)

document.addEventListener("DOMContentLoaded", e => {
    fetchData()
})

const fetchData = async () => {
    try {
        const res = await fetch('https://restcountries.com/v2/all')
        const data = await res.json()

        const filtroData = data.filter(item => item.name === params)

        banderillas(filtroData)
    } catch (error) {
        console.log(error)
    }
}

const banderillas = data => {
    let elementos = ''
    data.forEach(item => {
        elementos += `
        <article class="card">
            <img src="${item.flag}" alt="" class="img-fluid">
            <div class="card-content">
                <h3>${item.name}</h3>
                <p>
                    <b>Population: </b>
                    ${item.population}
                </p>
                <p>
                    <b>Capital: </b>
                    ${item.capital}
                </p>
                <p>
                    <b>Región: </b>
                    ${item.region}
                </p>
                     <p>
                    <b>zona horaria: </b>
                    ${item.timezones}
                </p>
            </div>
        </article>
        `
    });
    banderas.innerHTML = elementos
}