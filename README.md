# thumb-outputs
Thumb Outputs for HTML by [tmbocheeko](https://www.twitter.com/tmbocheeko_).

See it in action [here](https://codepen.io/tmbocheeko/pen/xxWGobr).

## Using this in your project

### Import thumb-outputs
Use jsDelivr to import this into your project!

CSS _(Put this in your `<head>`)_

```html
<link href="https://cdn.jsdelivr.net/gh/tmbocheeko/thumb-outputs@v1.0/searchableinputs.css" rel="stylesheet" type="text/css" />
```

Javascript _(Put this in your `<body>`)_:

```html
<script src="https://cdn.jsdelivr.net/gh/tmbocheeko/thumb-outputs@v1.0/searchableinputs.js" crossorigin="anonymous"></script>
```
### Use it in your HTML

Example _(no styling)_:

```html
  <div class="to-slider-container">
    <input class="to-slider" type="range" min="0" max="100" value="50" id="yourIDHere" step="1"> // Make sure to replace yourIDHere
    <output for="yourIDHere" class="to-slider-thumb"></output>                                   // on both of these lines!
  </div>
```

Example _(with styling)_:

```html
  <div class="to-slider-container" style="--slider-thumb: 30px; --slider-height: 10px; --slider-width: 160px; --slider-thumb-color: red; --slider-background: transparent; --slider-progress: pink">
    <input class="to-slider" type="range" min="0" max="100" value="50" id="yourIDHere" step="1"> // Make sure to replace yourIDHere
    <output for="yourIDHere" class="to-slider-thumb"></output>                                   // on both of these lines!
  </div>
```

## Javascript Functions

`thumbOutputInitialize(el, isNew)`: Initializes a slider.
- **el** _(Element)_: The container that has the slider (must be a `div` with the class `to-slider-container`).
- **isNew** _(True/False, Optional)_: Forces the function to try and fix the input and output elements.
