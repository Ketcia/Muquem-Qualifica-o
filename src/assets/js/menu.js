
document.getElementById('menu-toggle').addEventListener('click', function () {
    const icon = this.querySelector('i');
    const sideBar = document.getElementById('side-bar');

    // Alterna a classe 'show' no menu
    sideBar.classList.toggle('show');

    // Troca o ícone
    if (sideBar.classList.contains('show')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
});
