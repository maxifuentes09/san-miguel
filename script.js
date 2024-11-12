document.addEventListener('DOMContentLoaded', function() {
    // Animación del logo
    const logo = document.getElementById('logo');
    logo.style.opacity = '0';
    logo.style.transform = 'translateY(-20px)';
    setTimeout(() => {
        logo.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        logo.style.opacity = '1';
        logo.style.transform = 'translateY(0)';
    }, 100);

    // Animación de los elementos del menú
    const menuItems = document.querySelectorAll('nav ul li');
    menuItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 100 * (index + 1));
    });

    // Animación de las secciones al hacer scroll
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(section);
    });

    // Funcionalidad de agregar al carrito
    const botonesAgregar = document.querySelectorAll('.agregar-carrito');
    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', function() {
            const producto = this.closest('.producto');
            const nombreProducto = producto.querySelector('h3').textContent;
            alert(`¡${nombreProducto} agregado al carrito!`);
        });
    });
});



// tortas


document.addEventListener('DOMContentLoaded', function() {
    // Variables
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const closeModal = document.querySelector('.close-modal');
    const quantityInput = document.querySelector('.quantity-controls input');
    const minusBtn = document.querySelector('.minus');
    const plusBtn = document.querySelector('.plus');
    const addToCartBtn = document.querySelector('.add-to-cart');

    // Thumbnail Gallery
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // Update main image
            mainImage.src = this.src;
            // Update active thumbnail
            thumbnails.forEach(thumb => thumb.classList.remove('active'));
            this.classList.add('active');
            
            // Animate main image
            mainImage.style.opacity = '0';
            setTimeout(() => {
                mainImage.style.opacity = '1';
            }, 100);
        });
    });

    // Image Zoom Modal
    mainImage.addEventListener('click', function() {
        modal.style.display = 'block';
        modalImage.src = this.src;
        document.body.style.overflow = 'hidden';
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Quantity Controls
    minusBtn.addEventListener('click', function() {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });

    plusBtn.addEventListener('click', function() {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue < 10) {
            quantityInput.value = currentValue + 1;
        }
    });

    // Add to Cart Animation
    addToCartBtn.addEventListener('click', function() {
        this.classList.add('clicked');
        this.textContent = '¡AGREGADO!';
        
        setTimeout(() => {
            this.classList.remove('clicked');
            this.textContent = 'AGREGAR AL CARRITO';
        }, 2000);
    });

    // Header Animation
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            item.style.transition = 'all 0.3s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 100 * index);
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for Animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.product-info, .product-gallery').forEach(el => {
        observer.observe(el);
    });
});