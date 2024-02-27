const card = document.getElementById('poster');
const height = card.clientHeight;
const width = card.clientWidth;

let isHovered = false;

card.style.transition = 'transform 0.5s ease';

card.addEventListener('mouseenter', () => {
    isHovered = true;
});

card.addEventListener('mousemove', (e) => {
    const { layerX, layerY } = e;

    const yRotation = ((layerX - width / 2) / width) * 20;
    const xRotation = ((layerY - height / 2) / height) * 20;

    const string = `
        perspective(500px)
        scale(1.1)
        rotateX(${xRotation}deg)
        rotateY(${yRotation}deg)
    `;

    card.style.transition = isHovered ? 'transform 0.2s ease' : 'none';
    card.style.transform = string;
});

card.addEventListener('mouseleave', () => {
    isHovered = false;

    card.style.transition = 'transform 1s ease';
    card.style.transform = `
        perspective(500px)
        scale(1)
        rotateX(0)
        rotateY(0)
    `;
});
