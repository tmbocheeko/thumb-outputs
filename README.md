# thumb-outputs
Thumb Outputs for HTML by [tmbocheeko](https://www.twitter.com/tmbocheeko_).

See it in action [here](https://codepen.io/tmbocheeko/pen/xxWGobr).

## Using this in your project

### Import thumb-outputs
Use jsDelivr to import this into your project!

CSS _(Put this in your `<head>`)_

```html
<link href="https://cdn.jsdelivr.net/gh/tmbocheeko/thumb-outputs@v1.0/thumb-outputs.css" rel="stylesheet" type="text/css" />
```

Javascript _(Put this in your `<body>`)_:

```html
<script src="https://cdn.jsdelivr.net/gh/tmbocheeko/thumb-outputs@v1.0/thumb-outputs.js" crossorigin="anonymous"></script>
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
  <div class="to-slider-container" style="--slider-thumb-color: red; --slider-progress: pink">
    <input class="to-slider" type="range" min="0" max="100" value="50" id="yourIDHere" step="1"> // Make sure to replace yourIDHere
    <output for="yourIDHere" class="to-slider-thumb"></output>                                   // on both of these lines!
  </div>
```

## CSS Variables

- `--slider-thumb`: The size of the slider's thumb. _(Default: 22px)_
- `--slider-height`: The slider's height. _(Default: 8px)_
- `--slider-width`: The slider's width. _(Default: 110px)_
- `--slider-progress`: The color for the area of the slider before the thumb. _(Default: #82CFD0)_
- `--slider-background`: The color for the area of the slider after the thumb. _(Default: gray)_
- `--slider-thumb-color`: The color for the thumb. _(Default: blue)_
- `--slider-font-color`: The color for the value on the thumb. _(Default: white)_
- `--slider-additional-margin`: Additional margin besides the bounding box of the input and thumb. _(Default: 2px)_

## Javascript Functions

`thumbOutputInitialize(el, isNew)`: Initializes a slider.
- **el** _(Element)_: The container that has the slider (must be a `div` with the class `to-slider-container`).
- **isNew** _(True/False, Optional)_: Forces the function to try and fix the input and output elements.
