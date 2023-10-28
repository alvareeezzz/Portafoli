// Animation to Sobre Mi
document.addEventListener("DOMContentLoaded", function () {
    const enlacesNavegacion = document.querySelectorAll(".navbar a");

    enlacesNavegacion.forEach(function (enlace) {
        enlace.addEventListener("click", function (e) {
            e.preventDefault();

            const destinoId = this.getAttribute("href").substring(1);
            const destino = document.getElementById(destinoId);

            if (destino) {
                destino.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
});
