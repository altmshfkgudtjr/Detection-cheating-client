import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// components
import BookWrapper from 'components/manager/book/BookWrapper'
import BookBtn from 'components/manager/book/BookBtn'
import Statistics from 'components/manager/book/Statistics'
import Title from 'components/manager/book/Title'
import ContentWrapper from 'components/manager/book/ContentWrapper'
import Student from 'components/manager/book/Student'
// moduels
import { getStudent } from 'modules/exam'

const Book = () => {
	const dispatch = useDispatch();
	const studentList = useSelector(state => state.exam.student_list);
	const [show, setShow] = useState(false);
	const [statistics, setStatistics] = useState({ all: 0, pass: 0, nonPass: 0 });
	const [selectedId, setSelectedId] = useState(null);
	const [loading, setLoading] = useState(false);

	const onClickMenu = () => {
		if (show) {
			document.body.style.overflow = '';
		} else {
			document.body.style.overflow = 'hidden';
		}
		setShow(!show);
	}

	const onClickStudent = (id) => {
		if (loading) return;

		setLoading(true);
		setSelectedId(id);
		if (show) setShow(false);
		dispatch(getStudent(id)).then((res) => {
			if (!res) setSelectedId(null);
			setLoading(false);
		});
	}

	const StudentList = studentList.map(
		data => <Student key={data.student_number}
										 onClick={() => onClickStudent(data.student_number)}
										 state={data.state}
										 info={`${data.student_number} ${data.name}`}
										 selected={selectedId === data.student_number} />
	);

	useEffect(() => {
		const all = studentList.length;
		const pass = studentList.filter(s => s.state === 'pass').length;
		const nonPass = studentList.filter(s => s.state === 'rejected').length;
		setStatistics({ all, pass, nonPass });
	}, [studentList]);

	return (<>
		<BookBtn icon="menu" onClick={onClickMenu} />
		<BookWrapper show={show}>
			<BookBtn icon="close" onClick={onClickMenu} />
			
			<Title title="학생 그룹" />
			<Statistics all={statistics.all}
									pass={statistics.pass}
									nonPass={statistics.nonPass} />
			<ContentWrapper>
				{StudentList}
			</ContentWrapper>
		</BookWrapper>
	</>);
}

export default Book