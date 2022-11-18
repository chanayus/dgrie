const inputs = document.querySelectorAll("input");
const clearButton = document.querySelector("#clear-form-button");

const slide = new Splide("#suggest-carousel", {
  type: "loop",
  perPage: 1,
  perMove: 1,
  pagination: true,
}).mount();

const changeSlideContent = (contentIndex) => {
  const slideContent = document.querySelector("#suggest-slide-container");
  slideContent.innerHTML = "";
  suggestSlide[contentIndex].slide.map(
    (value, index) =>
      (slideContent.innerHTML += `
          <div class="w-full h-full splide__slide">
              <div class="h-[73%]">
                  <img src="${suggestSlide[contentIndex].imgPath}${value.imgName}" alt="" class="w-full h-full object-cover" />
              </div>
              <div class="text-center 2xl:p-8 p-6 h-[25%] flex flex-col xl:max-h-[15vh]">
                  <div>
                    <h2 class="text-2xl">${suggestSlide[contentIndex].titleEng}</h2>
                    <h3 class="">${suggestSlide[contentIndex].titleTh}</h3>
                  </div>
                  <p class="max-w-[67ch] mt-0 mx-auto 2xl:pt-6 pt-4 font-light">
                    ${value.desc}
                  </p>
              </div>
          </div>`)
  );

  const slideButton = document.querySelectorAll(".splide__arrows");
  for (const button of slideButton) {
    if (suggestSlide[contentIndex].slide.length <= 1) {
      button.style.display = "none";
    } else {
      button.style.display = "block";
    }
  }
  slide.go(0);
  slide.refresh();
};

// Add addEventListener for all input
for (const [index, item] of inputs.entries()) {
  item.addEventListener("focus", () => {
    index <= suggestSlide.length - 1 && changeSlideContent(index);
  });
  // item.addEventListener("keyup", () => {
  //   item.value = item.value.replace(/\D/, "");
  // });
}

// Clear input value
clearButton.addEventListener("click", () => {
  for (const item of inputs) {
    item.value = "";
  }
});

const initSlide = () => {
  changeSlideContent(0);
  slide.refresh();
};

initSlide();
