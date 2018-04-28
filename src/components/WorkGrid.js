import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const UnstyledWorkGrid = (props) => <div {...props} />;

const WorkGrid = styled(UnstyledWorkGrid)`
	display: grid;
	grid-column-gap: 40px;
	grid-row-gap: 40px;
	grid-template-columns: 1fr 1fr;
	padding: 80px 0 0;
	margin: 0 0 80px 0;
`;

const Title = styled.div`
    flex: 1;
	font-size: 26px;
    font-weight: 600;
    line-height: 1.3;
    padding-top: 12px;
`;

const Button = styled.button`
	background-color: #ffffff;
	border: none;
    border-radius: 5px;
	color: #24252a;
	font-family: inherit;
    font-size: 16px;
    font-weight: 600;
    padding: 10px 0;
	pointer-events: none;
    text-align: center;
`;

const UnstyledWorkGridItem = ({ title, ...props }) => (
	<Link {...props}>
		<Title>{ title }</Title>
		<Button>Learn more</Button>
	</Link>
);

const WorkGridItem = styled(UnstyledWorkGridItem)`
	background-image: url(${({ src }) => src});
	background-position: center center;
	background-size: cover;
    border-radius: 10px;
    box-shadow: 0 4px 7px rgba(0,0,0,0.2);
    color: #ffffff;
    display: flex;
    flex-direction: column;
    height: 290px;
	margin: 0;
    padding: 18px;
    text-decoration: none;
    transition: all 200ms ease;
    width: 100%;

	:hover {
		box-shadow: 0 10px 31px rgba(0,0,0,0.15);
		transform: scale(1.05);
	}
`;

export { WorkGrid, WorkGridItem };
export default WorkGrid;
