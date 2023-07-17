// Adicione um evento de clique a um botão ou elemento que controlará a minimização da barra lateral
var toggleSidebarButton = document.getElementById('toggle-sidebar-button');
var sidebar = document.querySelector('.sidebar-main');

toggleSidebarButton.addEventListener('click', function() {
    sidebar.classList.toggle('minimized');
});
