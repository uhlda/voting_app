import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ProductList from './components/ProductList-1';
import './components/ProductList.css';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <ProductList />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
