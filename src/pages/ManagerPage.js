import React from 'react'
import { Helmet } from "react-helmet-async"
// containers
import Board from 'containers/manager/Board'
import Book from 'containers/manager/Book'
import Footer from 'containers/Footer'
// components
import Layout from 'components/manager/Layout'

const ManagerPage = () => {
	return (<>
		<Helmet>
			<title>긍정행위 - 관리자</title>
		</Helmet>

		<Layout>
			<Board />
			<Book />
		</Layout>
		<Footer />
	</>);
}

export default ManagerPage