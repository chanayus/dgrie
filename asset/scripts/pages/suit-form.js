const inputs = document.querySelectorAll("input");
const clearButton = document.querySelector("#clear-form-button");

const slideOption = {
  type: "loop",
  perPage: 1,
  perMove: 1,
  pagination: true,
};
const slide = new Splide("#suggest-carousel", slideOption).mount();

const changeSlideContent = (contentIndex) => {
  const slideContent = document.querySelector("#suggest-slide-container");

  slideContent.innerHTML = "";
  suggestSlide[contentIndex].slide.map(
    (value, index) =>
      (slideContent.innerHTML += `
          <div class="w-full h-full splide__slide">
              <div class="h-[73%] w-full aspect-video">
                  <img src="${suggestSlide[contentIndex].imgPath}${value.imgName}" alt="" class="w-full h-full  ${value.vertical ? "object-contain" : "object-cover"}" />
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
  const totalSlide = suggestSlide[contentIndex].slide.length;

  // Hide arrow button if Slide page less than 2
  for (const button of slideButton) {
    if (totalSlide <= 1) {
      button.className = button.className.replace("block", "hidden");
    } else {
      button.className = button.className.replace("hidden", "block");
    }
  }

  // refresh Slides
  slide.options = { ...slideOption, drag: totalSlide <= 1 ? false : true };
  slide.go(0);
  slide.refresh();
};

// Add addEventListener for all input
for (const [index, item] of inputs.entries()) {
  item.addEventListener("focus", () => {
    index <= suggestSlide.length - 1 && changeSlideContent(index);
  });
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
