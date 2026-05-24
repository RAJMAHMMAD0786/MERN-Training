let slider = document.querySelector(".BigDiscount");

setInterval(() => {
    slider.scrollBy({
        left: 400,
        behavior: "smooth"
    });

    if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth - 430) {
        slider.scrollTo({
            left: 0,
            behavior: "smooth"
        });
    }
}, 1500);