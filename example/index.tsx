import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
// Import useRef hook and useMouseOnRef
import { useOnMouseHold } from '../src';
import { useRef } from 'react';

const App = () => {
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
  const buttonRef = useRef<null | HTMLButtonElement>(null);

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
};


ReactDOM.render(<App />, document.getElementById('root'));
