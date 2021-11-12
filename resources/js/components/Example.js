import React from 'react';
import ReactDOM from 'react-dom';

function Example() {
    return (
        <p>
            Hello world!
        </p>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
