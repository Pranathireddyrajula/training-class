const b = React.createElement(
    'h1',
    { id: 'a' },
    "I am RB"
);

const element = document.getElementById('root');
const root = ReactDOM.createRoot(element);

root.render(b);
