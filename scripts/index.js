// Função para mostrar o menu
function mostrarMenu() {
    $('#menu-principal').css('display', 'flex');
    $('#menu').css('display', 'none');
    $('#menuX').css('display', 'block');
}

function esconderMenu() {
    $('#menu-principal').css('display', 'none');
    $('#menu').css('display', 'block');
    $('#menuX').css('display', 'none');
}

$('#menu').on('click', mostrarMenu);
$('#menuX').on('click', esconderMenu);

esconderMenu();
//para o video
document.querySelectorAll('videos').forEach(v => v.click());