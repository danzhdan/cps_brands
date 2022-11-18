const actionButton = document.querySelector(".swiper-slide__button");
const showBlocks = document.querySelectorAll(".swiper-slide");

function handleToggleClick() {
  if (actionButton.textContent === "Показать все") {
    actionButton.textContent = "Скрыть";
  } else {
    actionButton.textContent = "Показать все";
  }

  actionButton.classList.toggle("swiper-slide__button_rotate");

  actionButton.classList.toggle("swiper-slide__button_active");

  for (let i = showBlocks.length - 5; i < showBlocks.length; i++) {
    showBlocks[i].classList.toggle("swiper-slide_show");
  }
}

actionButton.addEventListener("click", handleToggleClick);

const slider = document.querySelector(".swiper-container");

function mobileSlider() {
  if (window.innerWidth <= 768) {
    const mySwiper = new Swiper(slider, {
      slidesPerView: "auto",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
}

mobileSlider();
