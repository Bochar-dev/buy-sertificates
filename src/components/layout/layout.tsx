import './layout.scss';

type LayoutProps = {
	title: string;
	children?: React.ReactNode;
};

const Layout = ({ title, children }: LayoutProps) => {
	return (
		<main className='page'>
			<div className='container'>
				<h1 className='page__title'>{title}</h1>
				{children}
			</div>
		</main>
	);
};

export default Layout;
