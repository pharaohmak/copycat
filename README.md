# CopyCat Component

This project contains a React component called CopyCat, which mimics the user’s input and displays it conditionally based on a boolean state. The component features an image that changes based on whether it is copying the input or not.

## Component Overview

The CopyCat component is a class-based React component. It displays a title, an input field, an image, and a paragraph that shows the input text when the component is in “copying” mode.

### Key Features

- Prop Management: The component receives several props, including input, name, handleChange, copying, and toggleTape.
- Conditional Rendering: The image and paragraph text are conditionally rendered based on the copying prop.
- Inline Styles: The component uses inline styles to style the div and image elements.
