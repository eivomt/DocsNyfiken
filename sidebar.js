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
        document.getElementById("content").innerHTML = html;
    });
});

