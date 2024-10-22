document.addEventListener("DOMContentLoaded", function () {
    const visibleElements = document.querySelectorAll(".visible");

    visibleElements.forEach(visible => {
        visible.addEventListener("click", function () {

            const hidden = this.parentNode.querySelector(".hidden");
            const arrow = this.querySelector(".visible-arrow img");
            const h = document.getElementById("FAQ");


            if (hidden.classList.contains("active")) {
                hidden.style.height = 0;
                hidden.style.opacity = 0;
                h.style.height = 70 + "vh";
                arrow.classList.remove("rotate");

                setTimeout(() => {
                    hidden.classList.remove("active");
                }, 500);
            } else {
                hidden.classList.add("active");
                hidden.style.height = hidden.scrollHeight + "px";
                hidden.style.opacity = 1;
                h.style.height = 80 + "vh";
                arrow.classList.add("rotate");
            }
        });
    });
});
