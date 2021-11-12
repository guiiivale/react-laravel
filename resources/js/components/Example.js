import React from 'react';
import ReactDOM from 'react-dom';

function Example() {
    return (
      
            <select>
              <option value="1">First</option>
              <option value="2">Second</option>
            </select>
       
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
