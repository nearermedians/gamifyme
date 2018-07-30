import React from 'react';
import Routes from './component/Routes';

import { Header } from './component/layout';

class App extends React.Component {
  render() {
    return (
     	<div className="container-fluid">
     		<Header/>
     		<div className="container-fluid tawba-content">
     			<Routes/>
     		</div>
     		<footer className="tawba-bars" id="tawba-footer">
     			<p align="center" id="tawba-footer-content" className="tawba-brands">Strawberry Optimistic, Inc.</p>
     		</footer>
     	</div>
    );
  }
}

export default App;
