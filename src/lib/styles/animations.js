import { keyframes } from 'styled-components';

const fadeIn = keyframes`
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
`;

const fadeOut = keyframes`
	0% {
		opacity: 1;
	}
	100% {
		opacity: 0;
	}
`;

const fadeInCenter = keyframes`
	0% {
		opacity: 0;
		transform: scale(.5, .5);
	}
	100% {
		opacity: 1;
		transform: scale(1, 1);
	}
`;

const fadeOutCenter = keyframes`
	0% {
		opacity: 1;
		transform: scale(1, 1);
	}
	100% {
		opacity: 0;
		transform: scale(.5, .5);
	}
`;

const fadeInTop = keyframes`
	0% {
		opacity: 0;
		transform: translateY(-20px);
	}
	100% {
		opacity: 1;
		transform: translateY(0);
	}
`;

const fadeOutTop = keyframes`
	0% {
		opacity: 1;
		transform: translateY(0);
	}
	100% {
		opacity: 0;
		transform: translateY(-20px);
	}
`;

const fadeInBottom = keyframes`
	0% {
		opacity: 0;
		transform: translateY(20px);
	}
	100% {
		opacity: 1;
		transform: translateY(0);
	}
`;

const fadeOutBottom = keyframes`
	0% {
		opacity: 1;
		transform: translateY(0);
	}
	100% {
		opacity: 0;
		transform: translateY(20px);
	}
`;

const fadeInRight = keyframes`
	0% {
		opacity: 0;
		transform: translateX(40px);
	}
	100% {
		opacity: 1;
		transform: translateX(0);
	}
`;

const fadeOutRight = keyframes`
	0% {
		opacity: 1;
		transform: translateX(0);
	}
	100% {
		opacity: 0;
		transform: translateX(40px);
	}
`;

const fadeInLeft = keyframes`
	0% {
		opacity: 0;
		transform: translateX(-20px);
	}
	100% {
		opacity: 1;
		transform: translateX(0);
	}
`;

const fadeOutLeft = keyframes`
	0% {
		opacity: 1;
		transform: translateX(0);
	}
	100% {
		opacity: 0;
		transform: translateX(-20px);
	}
`;

const zoomIn = keyframes`
	0% { opacity: 0; transform: scale(.5, .5); }
	100% { opacity: 1; transform: scale(1, 1); }
`;

const zoomOut = keyframes`
	0% { opacity: 1; transform: scale(1, 1); }
	100% { opacity: 0; transform: scale(.5, .5); }
`;

const tooltip = keyframes`
	0% { opacity: 0; }
	40% { opacity: 0; }
	50% { opacity: 1; } 
	100% { opacity: 1; }
`;

const loading = keyframes`
  0% { transform: scaleX(0) translateX(-200px); }
  30% { transform: scaleX(2) translate(-200px); }
  40% { transform: scaleX(2) translate(-200px); }
  80% { transform: scaleX(0) translate(-400px); }
  100% { transform: scaleX(0) translate(-200px); }
`;

const chartBar = keyframes`
	0% { transform: scale(0, 0);  }
	50% { transform: scale(0, 1); }
	100% { transform: scale(1, 1); }
`;

const timeExtend = keyframes`
	0% { width: 0; }
	50% { width: 0; }
	100% { width: 30%; }
`;

const animations = {
	fadeIn,
	fadeOut,
	fadeInCenter,
	fadeOutCenter,
	fadeInLeft,
	fadeOutLeft,
	fadeInRight,
	fadeOutRight,
	fadeInTop,
	fadeOutTop,
	fadeInBottom,
	fadeOutBottom,
	zoomIn,
	zoomOut,
	tooltip,
	loading,
	chartBar,
	timeExtend
};

export default animations