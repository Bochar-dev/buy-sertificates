import { useNavigate } from 'react-router-dom';
import Layout from '../../components/layout/layout';
import Button from '../../components/ui/button/button';

const NotFoundPage = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/');
	};

	return (
		<Layout title='Страницы не существует'>
			<Button onClick={handleClick}>На главную</Button>
		</Layout>
	);
};

export default NotFoundPage;
