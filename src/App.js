import React from 'react'
import { Switch, Route } from 'react-router-dom'
// Pages
import HomePage from 'pages/HomePage'
import NotFound from 'pages/NotFound'
// Containers
import Modal from 'containers/modal'

const App = () => {
	return (
		<>
			<Switch>
				<Route path="/" component={HomePage} exact />
				<Route path="*" component={NotFound} status={404} />
			</Switch>
			<Modal /> {/* Modal Position */}
		</>
	);
}

export default App
