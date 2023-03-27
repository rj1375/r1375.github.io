document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('.content-section');

    const topColor = { r: 184, g: 168, b: 138 }; // Sepia
    const bottomColor = { r: 255, g: 0, b: 0 }; // Red

    function lerp(start, end, t) {
        return start * (1 - t) + end * t;
    }

    function updateBackgroundColor() {
        const scrollHeight = body.scrollHeight - window.innerHeight;
        const scrollPosition = window.scrollY;
        const t = scrollPosition / scrollHeight;

        const r = Math.round(lerp(topColor.r, bottomColor.r, t));
        const g = Math.round(lerp(topColor.g, bottomColor.g, t));
        const b = Math.round(lerp(topColor.b, bottomColor.b, t));

        body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }

    updateBackgroundColor();
    window.addEventListener('scroll', updateBackgroundColor);
});
