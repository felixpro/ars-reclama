import '../styles/style.css';
import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import ClientContextProvider from './app/context/client-context';

const app = (
	<ClientContextProvider>
		<App />
	</ClientContextProvider>
);

render(app, document.getElementById('root'));
