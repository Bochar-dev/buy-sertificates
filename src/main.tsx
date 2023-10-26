import React from 'react';
import ReactDOM from 'react-dom/client';
import Providers from './components/providers/providers';
import App from './components/app/app';
import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Providers>
			<App />
		</Providers>
	</React.StrictMode>
);
