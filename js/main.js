// ===== Global Variables =====
let currentCategory = '';
let currentImageIndex = 0;
const imagesPerCategory = 5;

const categories = {
    positiva: {
        name: 'Positiva',
        path: 'assets/images/positiva/',
        mode: 'anaglyph',
        total: 5
    },
    negativa: {
        name: 'Negativa',
        path: 'assets/images/negativa/',
        mode: 'anaglyph',
        total: 5
    },
    nula: {
        name: 'Nula',
        path: 'assets/images/nula/',
        mode: 'anaglyph',
        total: 5
    },
    sidebyside: {
        name: 'Side by Side',
        path: 'assets/images/sidebyside/',
        mode: 'sidebyside',
        total: 5
    }
};

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
    animateOnScroll();
});

// ===== Setup Event Listeners =====
function setupEventListeners() {
    // Gallery item clicks
    const galleryItems = document.querySelectorAll('[data-category]');
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            currentCategory = this.dataset.category;
            currentImageIndex = parseInt(this.dataset.index);
            openViewer();
        });
    });

    // Modal carousel controls
    const modalPrevBtn = document.getElementById('modalPrevBtn');
    const modalNextBtn = document.getElementById('modalNextBtn');
    
    if (modalPrevBtn) modalPrevBtn.addEventListener('click', previousImage);
    if (modalNextBtn) modalNextBtn.addEventListener('click', nextImage);

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        const modal = bootstrap.Modal.getInstance(document.getElementById('viewerModal'));
        if (modal) {
            if (e.key === 'ArrowLeft') previousImage();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'Escape') modal.hide();
        }
    });

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===== Open Viewer =====
function openViewer() {
    const category = categories[currentCategory];
    if (!category) return;
    
    // Update modal title
    document.getElementById('modalCategory').textContent = category.name;
    document.getElementById('modalImageNumber').textContent = currentImageIndex + 1;
    document.getElementById('modalTotalImages').textContent = category.total;
    
    // Display image
    displayImage();
    
    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('viewerModal'));
    modal.show();
}

// ===== Display Image =====
function displayImage() {
    const category = categories[currentCategory];
    if (!category) return;
    
    const modalViewerContent = document.getElementById('modalViewerContent');
    const imageSrc = `${category.path}image${currentImageIndex + 1}.jpg`;
    const imageAlt = `${category.name} ${currentImageIndex + 1}`;
    
    // Add loading animation
    modalViewerContent.classList.add('loading');
    
    setTimeout(() => {
        if (category.mode === 'sidebyside') {
            modalViewerContent.innerHTML = `
                <img src="${imageSrc}" alt="${imageAlt}" class="slide-in-left">
            `;
        } else if (category.mode === 'anaglyph') {
            modalViewerContent.innerHTML = `
                <div class="anaglyph-container">
                    <img src="${imageSrc}" alt="${imageAlt}" class="anaglyph-layer anaglyph-left">
                    <img src="${imageSrc}" alt="${imageAlt}" class="anaglyph-layer anaglyph-right">
                </div>
            `;
        }
        
        modalViewerContent.classList.remove('loading');
        updateCarouselControls();
    }, 200);
}

// ===== Navigation Functions =====
function previousImage() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        document.getElementById('modalImageNumber').textContent = currentImageIndex + 1;
        displayImage();
    }
}

function nextImage() {
    const category = categories[currentCategory];
    if (currentImageIndex < category.total - 1) {
        currentImageIndex++;
        document.getElementById('modalImageNumber').textContent = currentImageIndex + 1;
        displayImage();
    }
}

// ===== Update Carousel Controls =====
function updateCarouselControls() {
    const category = categories[currentCategory];
    if (!category) return;
    
    const modalPrevBtn = document.getElementById('modalPrevBtn');
    const modalNextBtn = document.getElementById('modalNextBtn');
    const modalCurrentImage = document.getElementById('modalCurrentImage');
    
    // Update counter
    modalCurrentImage.textContent = currentImageIndex + 1;
    
    // Update button states
    modalPrevBtn.disabled = currentImageIndex <= 0;
    modalNextBtn.disabled = currentImageIndex >= category.total - 1;
}



// ===== Animate on Scroll =====
function animateOnScroll() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(item);
    });

    // Observe feature boxes
    const featureBoxes = document.querySelectorAll('.feature-box');
    featureBoxes.forEach((box, index) => {
        box.style.opacity = '0';
        box.style.transform = 'translateY(30px)';
        box.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(box);
    });
}

// ===== Navbar Scroll Effect =====
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.glass-nav');
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// ===== Mouse Parallax Effect =====
document.addEventListener('mousemove', function(e) {
    const bubbles = document.querySelectorAll('.bubble');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    bubbles.forEach((bubble, index) => {
        const speed = (index + 1) * 10;
        const xOffset = (x - 0.5) * speed;
        const yOffset = (y - 0.5) * speed;
        
        bubble.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    });
});

// ===== Loading Animation =====
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ===== Console Welcome Message =====
console.log('%c🎨 Visor Estereoscópico 3D', 'font-size: 24px; font-weight: bold; color: #6366f1;');
console.log('%cDesarrollado por: Jez', 'font-size: 14px; color: #8b5cf6;');
console.log('%c© 2025 - Todos los derechos reservados', 'font-size: 12px; color: #94a3b8;');

// ===== Touch Swipe Support =====
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('DOMContentLoaded', function() {
    const modalViewerContent = document.getElementById('modalViewerContent');
    
    if (modalViewerContent) {
        modalViewerContent.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        });

        modalViewerContent.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });
    }
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - next image
            nextImage();
        } else {
            // Swipe right - previous image
            previousImage();
        }
    }
}

// ===== Error Handling for Missing Images =====
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23ddd" width="400" height="300"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="24" dy="10.5" font-weight="bold" x="50%25" y="50%25" text-anchor="middle"%3EImagen no disponible%3C/text%3E%3C/svg%3E';
    }
}, true);
