import React from 'react';
import * as S from './styled';

export default function Button({ text = 'Entrar', backGroundColor = 'blue' }) {
	return (
		<S.constainer>
			<S.button backGroundColor={backGroundColor}>{text}</S.button>
		</S.constainer>
	);
}
