const banderas = document.getElementById('banderas')

document.addEventListener("DOMContentLoaded", e => {
    fetchData()
})

const fetchData = async () => {
    try {
        const res = await fetch('https://restcountries.com/v2/all')
        const data = await res.json()
        banderillas(data)
    } catch (error) {
        console.log(error);
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
                    <b>Poblacion:</b>
                    ${item.population}
                </p>
                <p>
                    <b>Capital</b>
                    ${item.capital}
                </p>
            </div>
        </article>
        `
    });
    banderas.innerHTML = elementos
}