# Fidget Pincher

- [jsDelivr CDN](https://cdn.jsdelivr.net/npm/fidget-pincher/): `<script src="https://cdn.jsdelivr.net/npm/fidget-pincher/dist/bundle.min.js"></script>`
- [unpkg CDN](https://unpkg.com/fidget-pincher/): `<script src="https://unpkg.com/fidget-pincher/dist/bundle.min.js"></script>`

## Minimum Viable Example

```html
<div id="fidget-pincher">
  <div class="container">
    <img draggable="false" src="https://picsum.photos/400/300" />
  </div>
</div>
<script src="https://unpkg.com/fidget-pincher/dist/bundle.min.js"></script>
<script>
  /* 1. Create a new instance of FidgetPincher */
  const fidgetPincher = new FidgetPincher({
    // enableInertia: false, // set to false implies all other inertia options are false
    // enableTranslateInertia: false, // inertia when touches from 1 to 0
    // enableFidgetSpinInertia: false, // inertia when touches from 2 to 1
    // enablePinchInertia: false, // inertia when touches from 2 to 0
    // stopTranslateInertiaOnTouch: false, // stop translate inertia when touches from 0 to 1
    // stopFidgetSpinInertiaOnPinch: false, // stop fidget spin inertia when touches from 1 to 2
    // stopFidgetSpinInertiaOnTouch: false, // stop fidget spin inertia when touches from 0 to 1
    // stopPinchInertiaOnPinch: false, // stop pinch inertia when touches from 1 to 2
    // stopPinchInertiaOnTouch: false, // stop pinch inertia when touches from 0 to 1
    // stopFidgetSpinInertiaOnPinchInertia: false, // stop fidget spin inertia when pinch inertia is applied
  });
  /* 2. Hook up the container, this element will listen for MouseEvent and TouchEvent */
  const container = document.querySelector('.container');
  const detach = fidgetPincher.setTouchElement(document.getElementById('fidget-pincher'), {
    onTransformed: (transform) => {
      console.log(transform.toCSSMatrix()); // return "matrix(a, b, c, d, e, f)" for css transform property
      console.log(transform.decompose()); // decompose matrix to { translateX, translateY, scale, rotate }
      const { a, b, c, d, e, f } = transform;
      console.log(a, b, c, d, e, f); // transform parameters can be directly passed to CanvasRenderingContext2D.setTransform()
      container.style.transform = transform.toCSSMatrix();
    },
  });
  /* 2b. Detach any time, listeners will be removed */
  // detach();
  /* 3. You can set transformation matrix at any time, this won't trigger onTransformed callback, next pinch movement will be relative to this matrix */
  console.log(fidgetPincher.getTransform()); // return { a, b, c, d, e, f }
  let a = 1, b = 0, c = 0, d = 1, e = 0, f = 0;
  fidgetPincher.setTransform([a, b, c, d, e, f]);  // you can pass array
  fidgetPincher.setTransform({ a, b, c, d, e, f });  // or object
  fidgetPincher.setTransform(new FidgetPincher.TransformationMatrix(a, b, c, d, e, f));  // or instance of TransformationMatrix
</script>
<style>
  #fidget-pincher {
    width: 400px;
    height: 300px;
    outline: 2px solid blue;
    background-color: rgba(0, 0, 0, 0.5);
    overflow: hidden;
  }
  .container {
    width: 400px;
    height: 300px;
    position: relative;
    border: 1px solid black;
  }
</style>
```
