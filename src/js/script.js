document.addEventListener('DOMContentLoaded', (event) => {
    var exampleModal = document.getElementById('exampleModal');
    var bsOffcanvas = new bootstrap.Offcanvas(exampleModal);
    bsOffcanvas.show();
});

document.addEventListener('DOMContentLoaded', function() {
    // Muestra el modal automáticamente
    var myModal = new bootstrap.Modal(document.getElementById('cookieModal'), {
        backdrop: 'static', // No se cierra al hacer clic fuera del modal
        keyboard: false // No se cierra con la tecla Esc
    });
    myModal.show();
});