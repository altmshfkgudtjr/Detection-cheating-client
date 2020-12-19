import React from 'react'
import { Helmet } from "react-helmet-async"
// containers
import Footer from 'containers/Footer'

const ManagerPage = () => {
	return (<>
		<Helmet>
			<title>긍정행위 - 관리자</title>
		</Helmet>

		<Footer />
	</>);
}

export default ManagerPage