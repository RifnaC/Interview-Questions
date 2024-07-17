1.  what is React ?
* popular open-source JavaScript library for building user interfaces, particularly single-page applications where you need a fast, interactive user experience. 
* Developed by Facebook and released in 2013, React allows developers to create large web applications that can update and render efficiently in response to data changes.  
* Not a framework
* Focus on UI
* Rich ecosystem

2. why React?
* Component based architecture:
    * React's component-based architecture allows developers to build encapsulated components that manage their own state.
    * Reusability: Components can be reused across different parts of the application, reducing code duplication and improving maintainability.
    * Isolation: Each component is isolated, making it easier to debug and manage.
* Virtual DOM for Performance: 
    * React uses a virtual DOM to optimize updates to the actual DOM:
    * Efficiency: React minimizes the number of manipulations to the actual DOM, which is a performance bottleneck, by updating only parts of the DOM that have changed.
    * Speed: This leads to faster rendering and a more responsive user experience.
* Declarative UI:
    * React's declarative syntax makes it easier to design interactive UIs:
    * Readability: Developers describe what the UI should look like for a given state, and React handles the updates, leading to more readable and predictable code.
    * Debugging: A declarative approach simplifies debugging and makes it easier to understand the application's state at any given time.
* Strong Ecosystem and Community Support:
    * React has a robust ecosystem and a large community:
    * Libraries and Tools: A wide range of libraries and tools are available to complement React, such as React Router for routing, Redux for state management, and Next.js for server-side rendering.
    * Community: A large community means better support, a wealth of tutorials, extensive documentation, and rapid resolution of issues.
* Flexibility and Interoperability:
    * React is flexible and can be used in various contexts:
    * Integration: It can be integrated with other libraries or frameworks, allowing you to enhance an existing project incrementally.
    * Platforms: React Native extends React's principles to mobile app development, enabling developers to build native apps for iOS and Android using the same concepts.
* Hooks for Functional Components
    * React's introduction of hooks allows functional components to have state and other features:
    * Simplicity: Hooks simplify state management and side-effects in functional components, promoting cleaner and more concise code. 
    * Reusability: Custom hooks can be created to encapsulate and reuse logic across multiple components.
* SEO Friendliness
    * React can be optimized for SEO:
    * Server-Side Rendering (SSR): Frameworks like Next.js enable server-side rendering, which can improve SEO by providing a fully rendered page to search engines.
    * Static Site Generation (SSG): React can also be used to generate static sites, which are fast and SEO-friendly.
* Backward Compatibility and Upgrades
    * React prioritizes stability:
    * Backward Compatibility: React has a strong commitment to backward compatibility, ensuring that new versions do not break existing applications.
    * Gradual Upgrades: React's version upgrades are designed to be gradual and non-disruptive, allowing developers to adopt new features at their own pace.

3. How to create react app?
* using npx (node package excuter):
    * npx create-react-app < project_name >
* using npm :
    * npm install create-react-app-g
    * create-react-app< project_name >
* using vite :
    * npm create vite@latest.

4. What is components ?
* Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.
* Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.
* Component is a self-contained module that represents a part of the user interface. 
* Components can be thought of as the building blocks of a React application. They can be as simple as a button or as complex as a whole application.
* There are two types of components - 
    * Stateless Functional Components and 
    * Stateful Class Components

5. what is functional components?
* stateless Components/ presentational components.
* These are simple functions that accept props (properties) as arguments and return React elements.
* They do not have their own state or lifecycle methods, but with the introduction of React hooks, functional components can now use state and other features.
```react
import React from 'react';

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

export default Greeting;

```
6. what is functional components?
* These are ES6 classes that extend from React.Component.
* They can hold and manage their own state and have access to lifecycle methods.
``` react
import React, { Component } from 'react';

class Greeting extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

export default Greeting;
```
7. Difference between the functional and class component?

Functional components:
* Use React Hooks (useState, useReducer) for state.
* Use hooks like useEffect for side effects and lifecycle behavior.
* Less boilerplate, no need to use this, making them shorter and easier to write.
* Preferred in modern React development due to hooks which provide a powerful and flexible way to use state and side effects.
*  Modern, concise, and preferred with hooks for state and side effects.
* stateless components.

Class components:
* Use this.state and this.setState for state
* Use lifecycle methods (componentDidMount, shouldComponentUpdate, etc.) directly.
* More boilerplate due to this binding and lifecycle method implementation.
* Less commonly used in new code but still prevalent in many existing codebases.
* Traditional, more verbose, and still used in many older codebases but less common in new projects.

8. What is Hooks? 
* Hooks are special functions in React that allow functional components to use state and other React features like lifecycle methods. 
* Introduced in React 16.8, hooks enable developers to write more concise and functional components, avoiding the complexities of class components.
* Key Hooks:
    * useState: Adds state to functional components.
    * useEffect: Handles side effects like fetching data or subscribing to events.
    * useContext: Consumes context to avoid prop drilling.
    * useReducer: Manages complex state logic with reducers.
    * useRef: Accesses DOM elements and persists mutable values.
    * useMemo: Memoizes expensive calculations.
    * useCallback: Memoizes functions to prevent unnecessary re-creations.
9. what is JSX?
* JSX (JavaScript XML) is a syntax extension for JavaScript used in React to describe what the UI should look like. 
* Allows you to write HTML-like code within JavaScript, which is then transformed into React elements by tools like Babel.
* Features of JSX:
    * Combines JavaScript and HTML-like syntax in the same file.
    * Makes code more readable and easier to write.
    * Requires a build step (transpilation) to convert JSX to JavaScript.
    ```javascript
    import React from 'react';

    function Greeting(props) {
        return <h1>Hello, {props.name}!</h1>;
    }
    ```
* JSX in depth:
    * JSX elements can be assigned to variables, passed as arguments, or returned from functions.
    * It supports embedding JavaScript expressions using {}.
10. what is props
* Props (Properties) are read-only attributes passed from a parent component to a child component. 
* They allow data to flow down the component tree, making components more reusable and flexible.
* Features of Props:
* Immutable from the perspective of the receiving component.
* Passed as attributes in JSX and received as an object in the child component.
* Can be of any data type: string, number, function, array, object, etc.
``` javascript
    import React from 'react';

    function Greeting(props) {
      return <h1>Hello, {props.name}!</h1>;
    }

    function App() {
      return <Greeting name="Alice" />;
    }
```
* Props in depth:
    * Can be used to pass functions as callbacks.
    * Props can be defaulted using defaultProps.
11. what is state?
* State is a built-in object in React components used to hold data that may change over time and affect rendering. 
* Unlike props, state is local to the component and can be modified within the component.
* Features of State:
    * Mutable and can be updated using setState in class components or useState in functional components.
    * Changes in state trigger a re-render of the component to reflect the new state.
    ```javascript
    import React, { useState } from 'react';

    function Counter() {
      const [count, setCount] = useState(0);

      return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
        );
    }
    ```
* State in depth:
    * Typically used for dynamic and interactive features like form inputs, UI toggles, etc.
    * Can be initialized with default values and updated with event handlers.
12. Difference between prop vs state?
* Props:
    * Source: Passed from parent to child components.
    * Immutability: Read-only in the receiving component.
    * Usage: Used for rendering dynamic data and passing data/functions between components.
    * Lifecycle: Managed and controlled by the parent component.
    * Example:
    ```javascript
    function Parent() {
      return <Child color="blue" />;
    }

    function Child(props) {
      return <div style={{ color: props.color }}>This is blue!</div>;
    }
    ```
* State:
    * Source: Managed within the component itself.
    * Mutability: Can be updated by the component using setState or useState.
    * Usage: Holds data that changes over time and drives component behavior.
    * Lifecycle: Exists only in the component it’s defined in and controls the component's rendering.
    * Example:
    ```javascript
    function Toggle() {
        const [isOn, setIsOn] = useState(false);

      return (
        <button onClick={() => setIsOn(!isOn)}>
        {isOn ? 'On' : 'Off'}
        </button>
        );
    }
    ```