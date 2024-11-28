//whatsapp 
document.addEventListener('scroll', function() {
    const whatsappContainer = document.getElementById('whatsapp-container');
    const footer = document.querySelector('footer'); // Suponiendo que tu footer tiene la etiqueta <footer>

    // Calcula la distancia entre el botón y la parte inferior de la página
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const footerTop = footer.getBoundingClientRect().top + scrollPosition;

    // Ajusta la posición del botón de WhatsApp para que no se superponga con el footer
    if (scrollPosition + windowHeight >= footerTop) {
        const overlap = (scrollPosition + windowHeight) - footerTop;
        whatsappContainer.style.bottom = `${5 + overlap}px`;
    } else {
        whatsappContainer.style.bottom = '2%'; // Valor predeterminado
    }
});