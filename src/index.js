import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
//import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/custom.css';

render((
	<BrowserRouter>
		<App />
	</BrowserRouter>), 
		document.getElementById('root')
	);
registerServiceWorker();

if (module.hot) {
	module.hot.accept();
}
