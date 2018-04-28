import { css } from 'styled-components';

export default css`
	*,
	*:before,
	*:after {
		box-sizing: border-box;
	}

	*:focus {
		outline: none;
	}

	html, body {
		background-color: #ffffff;
		color: #383c43;
		font-family: 'Inter UI', sans-serif;
		font-size: 14px;
		line-height: normal;
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
    	-webkit-print-color-adjust: exact;
	}

	body {
		margin: 0;
		overflow-x: hidden;
		overflow-y: scroll;
	}

	p {
		color: #6b737b;
		font-size: 18px;
		line-height: 28px;
		margin: 20px 0;

		:first-of-type {
			color: #383c43;
			font-weight: 600;
		}
	}
		
	a {
		color: inherit;
		font-size: 14px;
		font-weight: 600;
		margin: 0 30px 0 0;
		text-decoration: none;

		img,
		svg {
			height: 18px;
			margin-right: 8px;
			transform: translateY(3px);
			width: 25px;
		}
	}
`;
