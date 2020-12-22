import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
// components
import Wrapper from 'components/manager/analysis/audio/Wrapper'
import Waveform from 'components/manager/analysis/audio/Waveform'
import Zone from 'components/manager/analysis/audio/Zone'
import Message from 'components/manager/analysis/audio/Message'
import EmptyMessage from 'components/manager/analysis/EmptyMessage'
// modules
import { newSnackbar } from 'modules/snackbar'

const Audio = ({ student, videoRef }) => {
	const dispatch = useDispatch();
	const [message, setMessage] = useState('');
	const [empty, setEmpty] = useState(true);
	const pass_zones = [];
	let std = 0;

	student.audio_result.forEach(t => {
		if (Number(t[0]) !== std) {
			pass_zones.push([std, t[0]]);
		}
		std = Number(t[1]);
	});
	if (student.audio_result.length === 0) {
		pass_zones.push([0, student.audio_playtime]);
	} else if (std !== 0 && std !== student.audio_playtime) {
		pass_zones.push([std, student.audio_playtime]);
	}

	if (student.audio_result.length === 0) {
		pass_zones.splice(0, pass_zones.length);
	}

	const onClickZone = (startTime, idx, pass) => {
		if (!videoRef || !videoRef.current) {
			dispatch(newSnackbar('새로고침 후 다시 이용해주세요', 'error'));
			return;
		}

		videoRef.current.currentTime = startTime;
		videoRef.current.play();

		if (pass) {
			setMessage('');
		} else {
			setMessage(student.audio_messages[idx]);	
		}
	}

	const RedZones = student.audio_result.map(
		(r, idx) => <Zone key={idx}
											pass={false}
											start={Math.floor(Number(r[0]) / student.audio_playtime * 100)}
											end={Math.floor(Number(r[1]) / student.audio_playtime * 100)}
											onClick={() => onClickZone(Math.floor(r[0]), idx, false)} />
	);

	const GreenZones = pass_zones.map(
		(r, idx) => <Zone key={idx}
											pass={true}
											start={Math.floor(Number(r[0]) / student.audio_playtime * 100)}
											end={Math.floor(Number(r[1]) / student.audio_playtime * 100)}
											onClick={() => onClickZone(Math.floor(r[0]), idx, true)} />
	);

	useEffect(() => {
		if (student.audio_result.length === 0) {
			setEmpty(true);
		} else {
			setEmpty(false);
		}
	}, [student]);

	return (<>
		{!empty && <Wrapper>
			<Waveform src={student.audio_img_path} />
			{RedZones}
			{GreenZones}
		</Wrapper>}
		{!!empty && <EmptyMessage message="오디오가 존재하지 않습니다." />}
		{message !== '' && <Message message={message}
																onClick={() => setMessage('')} />}
	</>);
}

export default Audio