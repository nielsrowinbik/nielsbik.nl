import 'inter-ui';
import 'typeface-ubuntu';
import React from 'react';
import Helmet from 'react-helmet';
import { injectGlobal } from 'styled-components';
import { global } from '../mixins';

injectGlobal`${global}`;

const TemplateWrapper = (props) => {
	const { children } = props;

	return (
		<div id="app">
			<Helmet
				defaultTitle="Niels Bik - Business Informatics student from Utrecht"
				titleTemplate="%s - Niels Bik"
			/>
			{ children() }
		</div>
	);
};

export default TemplateWrapper;
