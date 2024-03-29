
/*Horarios*/
function navigateToSection(sectionId) {
    // Navegar a la sección correspondiente
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

/*scripts para activar/desactivar el menú hamburguesa */
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.menu-toggle').addEventListener('click', function() {
        document.querySelector('.navbar-menu').classList.toggle('active');
    });
});



function showSchedule(imageUrl, button) {
    // Verificar si ya hay un contenedor desplegado
    const existingContainer = button.nextElementSibling;
    if (existingContainer && existingContainer.classList.contains('schedule-container')) {
        existingContainer.remove(); // Eliminar el contenedor existente si lo hay
        return; // Salir de la función
    }

    // Crear el contenedor y la imagen
    const scheduleContainer = document.createElement('div');
    scheduleContainer.classList.add('schedule-container');
    const image = document.createElement('img');
    image.src = imageUrl;
    image.alt = 'Horario';
    image.classList.add('schedule-image');
    scheduleContainer.appendChild(image);

    // Insertar el contenedor después de clickear el botón
    button.parentNode.insertBefore(scheduleContainer, button.nextSibling);
}


