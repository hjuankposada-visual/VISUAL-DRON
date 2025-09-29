document.addEventListener('DOMContentLoaded', () => {
    // Texto de bienvenida dinámico en explorador
    const bienvenida = document.getElementById('bienvenida-explorador');
    if (bienvenida) {
        bienvenida.textContent = 'Ven y conoce todo sobre "VISUALDRON"';
        bienvenida.style.opacity = '0';
        bienvenida.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            bienvenida.style.transition = 'opacity 0.8s, transform 0.8s';
            bienvenida.style.opacity = '1';
            bienvenida.style.transform = 'translateY(0)';
        }, 300);
    }
    // Tooltips para los botones del menú
    const menuBtns = document.querySelectorAll('.menu-btn');
    menuBtns.forEach(btn => {
        const tooltipText = btn.getAttribute('data-tooltip');
        if (tooltipText) {
            const tooltip = document.createElement('div');
            tooltip.className = 'menu-btn-tooltip';
            tooltip.innerText = tooltipText;
            btn.appendChild(tooltip);
            btn.addEventListener('mouseenter', () => {
                tooltip.style.opacity = '1';
            });
            btn.addEventListener('mouseleave', () => {
                tooltip.style.opacity = '0';
            });
            btn.addEventListener('focus', () => {
                tooltip.style.opacity = '1';
            });
            btn.addEventListener('blur', () => {
                tooltip.style.opacity = '0';
            });
        }
    });
    // Funcionalidad para el botón de la tarjeta
    const cardButton = document.querySelector('.card button');
    if(cardButton) {
        cardButton.addEventListener('click', () => {
            window.location.href = 'explorador.html';
        });
    }
    // Barra de marcas dinámica con alternancia de color
    const marcas = [
        "REIF", "DOLESE", "DIRKS ENTERPRISES", "Lhoist", "STEAX CONSULTING", "GRÖSCHLER", "LOUIS AND",
        "DJI", "Parrot", "Yuneec", "Trimble", "Topcon", "Leica Geosystems", "Caterpillar", "Komatsu"
    ];
    const colores = [
        "#0ca3c9", "#ffe600", "#2a4d7c", "#6b5d15", "#ebe3e3", "#d1e2c4", "#f10bc7ff", "#fffbe6"
    ];
    const fuentes = [
        "marca-fuente-1", "marca-fuente-2", "marca-fuente-3", "marca-fuente-4"
    ];
    let marcaIndex = 0;
    const textoMarca = document.getElementById('texto-marca-dinamico');
    const barraMarcas = document.querySelector('.barra-marcas');
    if (textoMarca && barraMarcas) {
        setInterval(() => {
            textoMarca.textContent = marcas[marcaIndex];
            barraMarcas.style.background = colores[marcaIndex % colores.length];
            // Alterna la clase de fuente/sombra
            fuentes.forEach(f => textoMarca.classList.remove(f));
            textoMarca.classList.add(fuentes[marcaIndex % fuentes.length]);
            marcaIndex = (marcaIndex + 1) % marcas.length;
        }, 1800);
    }
    // FAQ desplegable con flecha
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', function() {
            const answer = btn.nextElementSibling;
            const isOpen = answer.classList.contains('faq-visible');
            // Cierra todas las respuestas excepto la actual
            document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('faq-visible'));
            document.querySelectorAll('.faq-question').forEach(b => b.classList.remove('faq-open'));
            if (!isOpen) {
                answer.classList.add('faq-visible');
                btn.classList.add('faq-open');
            }
        });
    });

    // Formulario con mensaje de éxito
    const form = document.getElementById('form-contacto');
    const modalBg = document.getElementById('modal-exito-bg');
    const modalBtn = document.getElementById('modal-exito-btn');
    if (form && modalBg && modalBtn) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            modalBg.classList.add('visible');
            this.reset();
        });
        modalBtn.addEventListener('click', function() {
            modalBg.classList.remove('visible');
        });
    }
    // Formulario de registro empresa/cliente
    const tipoUsuario = document.getElementById('tipo-usuario');
    const camposEmpresa = document.getElementById('campos-empresa');
    const camposCliente = document.getElementById('campos-cliente');
    const formRegistro = document.getElementById('form-registro');
    const mensajeRegistro = document.getElementById('mensaje-registro');
    const idEmpresa = document.getElementById('id-empresa');
    if (idEmpresa) {
        idEmpresa.setAttribute('maxlength', '4');
        idEmpresa.setAttribute('pattern', '\\d{1,4}');
        idEmpresa.addEventListener('input', function() {
            this.value = this.value.replace(/[^0-9]/g, '').slice(0, 4);
        });
    }
    if (tipoUsuario && camposEmpresa && camposCliente) {
        tipoUsuario.addEventListener('change', function() {
            if (this.value === 'empresa') {
                camposEmpresa.style.display = 'block';
                camposCliente.style.display = 'none';
            } else {
                camposEmpresa.style.display = 'none';
                camposCliente.style.display = 'block';
            }
        });
    }
    if (formRegistro && mensajeRegistro) {
        formRegistro.addEventListener('submit', function(e) {
            if (tipoUsuario.value === 'empresa') {
                if (!idEmpresa.value.match(/^\d{1,4}$/)) {
                    mensajeRegistro.style.display = 'block';
                    mensajeRegistro.textContent = 'El ID debe ser numérico y máximo de 4 dígitos.';
                    e.preventDefault();
                    return;
                }
            }
            e.preventDefault();
            mensajeRegistro.style.display = 'block';
            mensajeRegistro.textContent = '¡Registro exitoso!';
            setTimeout(function(){
                window.location.href = 'index.html';
            }, 1200);
            formRegistro.reset();
            camposEmpresa.style.display = 'none';
            camposCliente.style.display = 'none';
        });
    }
    // Mejor experiencia al enviar encuesta
    const formEncuesta = document.getElementById('form-encuesta');
    if (formEncuesta) {
        formEncuesta.addEventListener('submit', function(e) {
            e.preventDefault();
            const mensaje = document.getElementById('mensaje-encuesta');
            if (mensaje) {
                mensaje.innerHTML = '<div class="agradecimiento-encuesta">Encuesta enviada. ¡Gracias por participar!</div>';
                mensaje.style.display = 'block';
            }
            formEncuesta.style.display = 'none';
            setTimeout(() => {
                if (mensaje) {
                    mensaje.style.display = 'none';
                }
                formEncuesta.reset();
                formEncuesta.style.display = 'block';
            }, 2000);
        });
    }
});
