import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../../App';

it('renders without crashing', () => {
    const div = document.createElement('div');
    <BrowserRouter>
        ReactDOM.render(<App />, div);
      </BrowserRouter>
    ReactDOM.unmountComponentAtNode(div);
});