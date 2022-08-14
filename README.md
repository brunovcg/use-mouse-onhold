# useMouseOnHold

This React hook helps us to add a hold event to mouse left button.

## Install

TSDX scaffolds your new library inside `/src`, and also sets up a [Parcel-based](https://parceljs.org) playground for it inside `/example`.

The recommended workflow is to run TSDX in one terminal:

```bash
npm i use-mouse-onhold
```

or

```bash
yarn add use-mouse-onhold
```

## Basic Exemple

On the functional component you are setting this hook.

### Using React(Javascript)

```javascript
// Import useRef hook and useMouseOnRef
import { useOnMouseHold } from 'use-mouse-onhold';
import { useRef } from 'react';

export function MyComponent() {
  // Create the callback function that will be trigged on holding mouse button on the refered element
  function myCallback() {
    console.log('clicked');
  }

  // Create a ref for your element
  const buttonRef = useRef(null);

  // Assign this hook into a constant, passing the element Ref and the callback function
  const onHold = useOnMouseHold(buttonRef, myCallback);

  return (
    <div>
      {/* Set the ref created to a prop ref and spread the const created to store the hook return  */}
      <button type="button" ref={buttonRef} {...onHold}>
        click here
      </button>
    </div>
  );
}
```

Hold the button, and check the result on your console.

### Using React (Typescript)

```javascript
// Import useRef hook and useMouseOnRef
import { useOnMouseHold } from 'use-mouse-onhold';
import { useRef } from 'react';

export function MyComponent() {
  // Create the callback function that will be trigged on holding mouse button on the refered element
  function myCallback() {
    console.log('clicked');
  }
  // Create a ref for your element
  /* We have to set the type of the HTML Element we are implementing, e.g. 
  - HTMLButtonElement
  - HTMLDivElement
  - HTMLMaintElement
  - HTMLInputElement
  etc..
  */
  const buttonRef = useRef < null | HTMLButtonElement > (null);

  // Assign this hook into a constant, passing the element Ref and the callback function
  const onHold = useOnMouseHold(buttonRef, myCallback);

  return (
    <div>
    {/* Set the ref created to a prop ref and spread the const created to store the hook return  */}
      <button type="button" ref={buttonRef} {...onHold}>
        click here
      </button>
    </div>
  );
}
```

Hold the button, and check the result on your console.
