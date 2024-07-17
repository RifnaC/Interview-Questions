#### What is event propagation ?

The way events travel or propogate through the Document Object Model (DOM) tree. It consists of three phases:
1. Capturing Phase (Capture Phase): 
    The event starts from the window object and travels down to the target element. During this phase, event listeners set for capturing on the ancestor elements will be triggered.
2. Target Phase: 
    The event has reached the target element, and event listeners on the target element itself will be triggered.

3. Bubbling Phase: 
    After reaching the target, the event bubbles up from the target element to the window, triggering event listeners set for bubbling on ancestor elements.