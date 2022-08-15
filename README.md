# useOnMouseHold

This React hook helps us to add a hold event to mouse left button.
It will recursively call that function while the button is being hold.

## Install

The recommended workflow is to run in one terminal:

```bash
npm i @brunovcg/use-on-mouse-hold
```

or

```bash
yarn add @brunovcg/use-on-mouse-hold
```

## Basic Exemple

On the functional component you are setting this hook.

### Using React(Javascript)

```javascript
// Import useRef hook and useMouseOnRef
import { useOnMouseHold } from 'use-on-mouse-hold';
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
import { useOnMouseHold } from 'use-on-mouse-hold';
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
