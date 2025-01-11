// Intersection Observer API untuk mengaktifkan animasi berbeda pada elemen yang muncul di layar
const observer = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Tambahkan animasi spesifik berdasarkan class yang ada di elemen
                const animationClass = entry.target.getAttribute('data-animate');
                if (animationClass) {
                    entry.target.classList.add(animationClass);
                }
                observer.unobserve(entry.target); // Hentikan observasi setelah animasi
            }
        });
    },
    { threshold: 0.1 } // Elemen terlihat 10% di layar
);

// Pilih semua elemen yang perlu animasi
const elements = document.querySelectorAll('.animate__animated');

// Tambahkan elemen ke observer
elements.forEach(el => observer.observe(el));
