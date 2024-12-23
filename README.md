# React useEffect Hook Dependency Array Issue

This repository demonstrates a common error in React when using the `useEffect` hook: forgetting to include state variables in the dependency array.

## The Problem

The `useEffect` hook allows you to perform side effects in functional components.  The dependency array determines when the effect runs.  If you omit state variables from the array that the effect uses, the effect might not update when you expect it to. This results in stale closures and unexpected behavior.

## How to Reproduce

1. Clone this repository.
2. Run `npm install`
3. Run `npm start`
4. Observe the console output as you click the 'Increment' button. The console will show that the count is not updating properly.

## Solution

To correct this, ensure that all state variables used within the `useEffect` are included in the dependency array.

The solution file (`bugSolution.js`) shows the correct implementation.