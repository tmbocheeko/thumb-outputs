document.querySelectorAll(".to-slider-container").forEach(function (currentValue) {
  var isNew = true;
  if (currentValue.querySelector(".to-slider[id][min][max][value][type]") && currentValue.querySelector(".to-slider-thumb[for]")) var isNew = false;
  thumbOutputInitialize(currentValue, isNew);
});

function thumbOutputInitialize(el, isNew) {
  if (isNew == undefined || isNew == null) var isNew = true;
  var slider = el.querySelector(".to-slider");
  var thumb = el.querySelector(".to-slider-thumb");
  if (isNew || !(slider) || !(thumb)) {
    var appendSlider = false;
    var appendThumb = false;
    if (!(slider)) {
      var slider = document.createElement("input");
      slider.type = "range";
      slider.classList.add("to-slider");
      var appendSlider = true;
    }
    if (!(thumb)) {
      var thumb = document.createElement("output");
      thumb.classList.add("to-slider-thumb");
      var appendThumb = true;
    }
    var id = "to" + Math.floor(Math.random() * Math.floor(Math.random() * Date.now()));
    console.log(thumb);
    if (slider.id) var id = slider.id;
    else if (thumb.getAttribute("for")) var id = thumb.getAttribute("for");
    else if (el.id) var id = "to" + el.id;
    if (!(slider.id)) slider.id = id;
    if (!(slider.min)) slider.min = 0;
    if (!(slider.max)) slider.max = 100;
    if (!(slider.value)) slider.value = 50;
    if (!(slider.type)) slider.type = "range";
    if (!(thumb.getAttribute("for"))) thumb.setAttribute("for", id);
    if (appendSlider) el.appendChild(slider);
    if (appendThumb) el.appendChild(thumb);
  }
  thumbOutputUpdate(slider);
  slider.addEventListener("input", ()  => {
    thumbOutputUpdate(slider);
  });
}
  
function thumbOutputUpdate(el) {
  var value = el.value;
  var min = el.min;
  var max = el.max;
  var inputPos = el.getBoundingClientRect();
  var inputWidth = inputPos.width;
  var percent = (value - min) / (max - min) * 100;
  var output = document.querySelector("[for=" + el.id + "]");
  var outputPos = output.getBoundingClientRect();
  var outputWidth = outputPos.width;
  var widthPercent = outputWidth / inputWidth * 100;
	output.value = value;
  output.style.transform = "translateX(" + (outputWidth * (percent / widthPercent) - outputWidth / 2) + 'px)';
  output.style.right = "initial";
	var root = document.querySelector(":root");
	var styles = getComputedStyle(root);
  var progress = styles.getPropertyValue("--slider-progress").trim();
  var background = styles.getPropertyValue("--slider-background").trim();
  el.style.background = "linear-gradient(to right, var(--slider-progress) 0%, var(--slider-progress) " + percent + "%, var(--slider-background) " + percent + "%, var(--slider-background) 100%)";
};
