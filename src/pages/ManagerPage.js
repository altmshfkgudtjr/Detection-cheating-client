import React, { useState } from 'react'
import { Helmet } from "react-helmet-async"
// containers
import Board from 'containers/manager/Board'
import Book from 'containers/manager/Book'
import Footer from 'containers/Footer'
// components
import Layout from 'components/manager/Layout'
import PageLoadingWrapper from 'components/PageLoadingWrapper'
import Loading from 'components/common/Loading'

const ManagerPage = () => {
	const [loading, setLoading] = useState(false);

	const onToggleLoading = (value) => {
		if (value) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		setLoading(value);
	}

	return (<>
		<Helmet>
			<title>Detection-Cheating - Management</title>
		</Helmet>

		<Layout>
			<Board onToggleLoading={onToggleLoading} />
			<Book />
		</Layout>

		<Footer />

		{loading && <PageLoadingWrapper><Loading /></PageLoadingWrapper>}
	</>);
}

export default ManagerPage