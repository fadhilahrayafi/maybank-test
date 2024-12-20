MULTIPLE CHOICE
1. React Fiber Architecture: What is a key feature of React's Fiber architecture?
    a. Asynchronous rendering

2. Higher-Order Components (HOCs): What is a potential pitfall when using HOCs in React?
    b. Prop name collisions

3. React Hooks Dependency Array: What happens if you omit a required dependency in the dependency array of useEffect?
    b. The effect runs on every render.

4. React Concurrent Mode: Which of the following is a feature of React's Concurrent Mode?
    b. Time slicing

5. React Performance: When using React.memo, what type of component comparison is performed?
    b. Shallow comparison


SHORT ANSWER
1. Explain the use case and limitations of the useLayoutEffect hook in React.
    The useLayoutEffect hook is similar to useEffect but is triggered synchronously after the DOM has been painted. It can be useful in scenarios where you need to make changes to the DOM before the browser has painted, ensuring that your effect runs after DOM mutations but before the user sees the changes.

2. Describe how React's Context API can be optimized for performance in large-scale applications.
    -  Minimize Context Providers: Avoid too many context providers to prevent unnecessary re-renders. Use smaller, specialized    contexts where possible.
	-	Memoize Context Values: Use useMemo or useCallback to prevent recreating objects/functions on every render, which helps avoid unnecessary re-renders.
	-	Split Large Contexts: Instead of one large context, create separate contexts for different concerns (e.g., theme, authentication) to minimize the impact of updates.
	-	Use React.memo: Wrap components that consume context with React.memo to prevent re-renders unless props or context values change.
	-	Avoid Frequent Context Updates: Keep context values stable and avoid updating them too frequently, as it triggers re-renders of all consumers.
	-	Use Efficient State Management: For large, frequently changing data, use more specialized state management libraries (e.g., Redux or Zustand) rather than Context.
	-	Lazy Load Context Providers: Load context providers only when needed to reduce unnecessary rendering.