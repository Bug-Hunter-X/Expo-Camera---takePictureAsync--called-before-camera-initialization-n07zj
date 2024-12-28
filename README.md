# Expo Camera: 'takePictureAsync' called before initialization

This repository demonstrates a common error when using Expo's Camera API: calling `takePictureAsync` before the camera has fully initialized. The bug and its solution are presented in separate JavaScript files for clarity.

## Bug (`bug.js`)
The `bug.js` file shows the incorrect implementation, attempting to call `takePictureAsync` immediately, leading to an error.

## Solution (`bugSolution.js`)
The `bugSolution.js` file provides the corrected implementation, ensuring that `takePictureAsync` is only called after the camera is fully initialized and ready.

This example utilizes asynchronous operations and state management to handle the camera initialization process effectively.