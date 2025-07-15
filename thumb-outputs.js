document.querySelectorAll(".to-slider-container").forEach(function (currentValue) {
  var isNew = true;
  if (currentValue.querySelector(".to-slider[id][min][max][value][type]") && currentValue.querySelector(".to-slider-thumb[for]")) var isNew = false;
  thumbOutputInitialize(currentValue, isNew);
});

var thumbOutputDefaults = {
  min: 0,
  max: 100,
  value: 50,
  step: 1,
}

function thumbOutputInitialize(el, isNew, defaults = thumbOutputDefaults) {
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
    var id = slider.id ||
        thumb.getAttribute("for") ||
        "to" + el.id ||
        "to" + Math.floor(Math.random() * Math.floor(Math.random() * Date.now()));
    
    if (!Array.isArray(defaults)) {
      var defaults = {
        min: 0,
        max: 100,
        value: 50,
        step: 1,
      }
    }
    
    if (!(slider.id)) slider.id = id;
    if (!(slider.min)) slider.min = defaults.min;
    if (!(slider.max)) slider.max = defaults.max;
    if (!(slider.value)) slider.value = defaults.value;
    if (!(slider.step)) slider.step = defaults.step;
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
  var parEl = el.closest(".to-slider-container");
  var percent = (value - min) / (max - min) * 100;
  var output = parEl.querySelector("[for=" + el.id + "]");
	output.value = value;
  parEl.style.setProperty("--slider-value", percent + "%");
};
