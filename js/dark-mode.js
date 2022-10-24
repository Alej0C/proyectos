const btnDark = document.querySelector('.btn-dark-mode');

btnDark.addEventListener('click', () => {
    console.log('Diste click');
    document.body.classList.toggle('dark-mode');

    if (document.body.className === 'dark-mode') {
        btnDark.innerHTML = `
        <i class="fa-regular fa-moon"></i>
                Modo oscuro
        `
    } else {
        btnDark.innerHTML = `
        <i class="fa-regular fa-sun"></i>
                Modo Claro
         `
    }
})

