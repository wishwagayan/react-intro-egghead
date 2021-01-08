const App = () => {
    const element = document.createElement('div');
    // clearing up the inner text insider of the div
    rootElement.textContent = '';

    // setting up the inner text of the child elemnt
    element.textContent = 'hello world';
    element.className = 'container';

    return (element);
}

export default App;