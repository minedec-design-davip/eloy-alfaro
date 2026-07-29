
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    if (container) {
        container.style.opacity = "0";
        container.style.transform = "translateY(-20px)";
        setTimeout(() => {
            container.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
            container.style.opacity = "1";
            container.style.transform = "translateY(0)";
        }, 100);
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".next-button");
    if (button) {
        button.addEventListener("mouseover", () => {
            button.style.boxShadow = "0px 0px 15px rgba(255, 165, 0, 0.8)";
        });
        button.addEventListener("mouseout", () => {
            button.style.boxShadow = "none";
        });
    }
});