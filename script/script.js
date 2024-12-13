// Sélectionner les éléments du carrousel
const testimonials = document.querySelectorAll('.testimonial');
let currentTestimonial = 0;

// Fonction pour afficher un témoignage spécifique
function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.remove('active'); // Masquer tous les témoignages
        if (i === index) {
            testimonial.classList.add('active'); // Afficher le témoignage actif
        }
    });
}

// Afficher le premier témoignage au début
showTestimonial(currentTestimonial);

// Gérer le clic sur les flèches
document.querySelector('.left').addEventListener('click', () => {
    currentTestimonial = (currentTestimonial === 0) ? testimonials.length - 1 : currentTestimonial - 1;
    showTestimonial(currentTestimonial);
});

document.querySelector('.right').addEventListener('click', () => {
    currentTestimonial = (currentTestimonial === testimonials.length - 1) ? 0 : currentTestimonial + 1;
    showTestimonial(currentTestimonial);
});
