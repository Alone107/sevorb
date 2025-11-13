const marqueeWrap = document.querySelector(".marquee-wrap");

if (marqueeWrap) {
  const marqueeRow = document.querySelector(".marquee-row").offsetWidth;

  console.log(marqueeRow);

  marqueeWrap.style.width = marqueeRow * 2 - 34 + "px";
}
