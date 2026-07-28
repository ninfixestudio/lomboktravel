document.getElementById("year").textContent = new Date().getFullYear();

// Reveal
const reveals = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right"
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            entry.target.classList.add("active");

            // Hapus delay setelah reveal selesai
            setTimeout(() => {
                entry.target.style.removeProperty("--delay");
            }, 800);

            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2
});

reveals.forEach(item => {
    observer.observe(item);
});

// Delay Reveal 1 per 1 card di Things Card
document.querySelectorAll(".thing-card.reveal").forEach((card, index) => {

    card.style.setProperty("--delay", `${index * 150}ms`);

});