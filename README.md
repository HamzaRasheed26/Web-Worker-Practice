# Web Worker Performance Demo

## Project Description
This project is aimed at demonstrating the concept of Web Workers and the performance benefits they offer. It includes a simple web page with three buttons:
1. Calculate Sum with Web Worker
2. Calculate Sum without Web Worker
3. Change Background Color

The main focus is on comparing the performance of calculating the sum of a large number (1,000,000,000) using a Web Worker versus not using a Web Worker.

## How to Run the Project Locally
To run the project locally, follow these steps:
1. Clone the repository to your local machine.
2. Open the `index.html` file in a web browser.
3. Click on the buttons to perform the respective actions:
   - The "Calculate Sum with Web Worker" button calculates the sum using a Web Worker.
   - The "Calculate Sum without Web Worker" button calculates the sum without using a Web Worker.
   - The "Change Background Color" button changes the background color of the page.

## Performance Findings
Using a Web Worker for computationally intensive tasks, such as calculating the sum of a large number, significantly improves performance. The UI remains responsive during the calculation process when using a Web Worker, whereas without a Web Worker, the UI may freeze or become unresponsive until the calculation is complete.

## Challenges Faced and Solutions
### Challenges:
1. Understanding how to use Web Workers.
2. Sending and receiving messages between the main thread and the Web Worker.

### Solutions:
1. To understand how to use Web Workers, I referred to the Mozilla Developer Network (MDN) documentation and various online tutorials.
2. For sending and receiving messages between the main thread and the Web Worker, I utilized the `postMessage` method to send data to the Web Worker and the `onmessage` event handler to receive messages from the Web Worker.

## References and Resources
- [Mozilla Developer Network (MDN) Web Workers Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)
- Online tutorials and examples on using Web Workers.