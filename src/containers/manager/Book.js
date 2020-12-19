import React, { useState } from 'react'
// components
import BookWrapper from 'components/manager/BookWrapper'
import BookBtn from 'components/manager/BookBtn'

const Book = () => {
	const [show, setShow] = useState(false);

	return (<>
		<BookBtn icon="menu" onClick={() => setShow(!show)} />
		<BookWrapper show={show}>
			<BookBtn icon="close" onClick={() => setShow(!show)} />

		</BookWrapper>
	</>);
}

export default Book