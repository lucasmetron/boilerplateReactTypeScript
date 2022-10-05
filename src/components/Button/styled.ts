import styled from 'styled-components';

interface Props {
	backGroundColor: string;
}

export const constainer = styled.div`
	width: 100%;
	background-color: antiquewhite;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const button = styled.button<Props>`
	background-color: ${(props) =>
		props.backGroundColor ? props.backGroundColor : 'red'};
	color: black;
	padding: 1rem;
	cursor: pointer;
`;
