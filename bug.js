```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render
    console.log('Component rendered with count:', count);
  }, [count]); // Add count to the dependency array

  const handleClick = () => {
    setCount(count + 1); 
    //Problem: If you forget to add the count variable to the dependency array in the useEffect hook, the effect will only run once after the initial render. This is because the dependency array is empty, and React assumes that the effect doesn't depend on any state variables.
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
```