import React from 'react'
import { Helmet } from "react-helmet-async"
// containers
import Main from 'containers/Main'
import Footer from 'containers/Footer'

const HomePage = () => {
	return (<>
		<Helmet>
			<title>AI 온라인 감독</title>
		</Helmet>

		<Main />
		<Footer />
	</>);
}

export default HomePage