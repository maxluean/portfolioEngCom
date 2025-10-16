// This file contains JavaScript functions that manage animations throughout the portfolio, enhancing the user experience with dynamic effects.

document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.animate');

    elementsToAnimate.forEach(element => {
        element.classList.add('opacity-0');
        element.classList.add('translate-y-10');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('opacity-0');
                    entry.target.classList.remove('translate-y-10');
                    entry.target.classList.add('opacity-100');
                    entry.target.classList.add('translate-y-0');
                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(element);
    });
});

function fadeIn(element, duration = 500) {
    element.style.opacity = 0;
    element.style.transition = `opacity ${duration}ms`;
    element.style.opacity = 1;
}

function slideIn(element, duration = 500) {
    element.style.transform = 'translateX(-100%)';
    element.style.transition = `transform ${duration}ms`;
    element.style.transform = 'translateX(0)';
}