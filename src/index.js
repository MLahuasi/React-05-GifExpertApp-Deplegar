import React from 'react';
import ReactDOM from 'react-dom';

import GitExpertApp from './GitExpertApp';
import './index.css';

ReactDOM.render(
  <GitExpertApp defaultCategorias={['metallica', 'iron maiden', 'megadeth']} />,
  document.getElementById('root')
);
