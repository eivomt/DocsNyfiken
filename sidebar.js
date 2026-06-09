const content = document.getElementById("content");
const homeHTML = content.innerHTML;

document.querySelectorAll("[data-target]").forEach(button => {
    button.addEventListener("click", () => {
        const target = document.getElementById(button.dataset.target);
        target.classList.toggle("open");
    });
});

document.querySelectorAll("[data-page]").forEach(button => {
    button.addEventListener("click", async () => {
        const response = await fetch(button.dataset.page);
        const html = await response.text();
        content.innerHTML = html;
    });
});

document.addEventListener("click", async (event) => {
    const home = event.target.closest("#home");

    if (home) {
        event.preventDefault();
        content.innerHTML = homeHTML;
        return;
    }

    const link = event.target.closest(".nav-link");

    if (!link) return;

    event.preventDefault();

    const file = link.getAttribute("href");

    const response = await fetch(file);
    const html = await response.text();

    content.innerHTML = html;
});