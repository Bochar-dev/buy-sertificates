import { useNavigate } from 'react-router-dom';
import Layout from '../../components/layout/layout';
import Button from '../../components/ui/button/button';

const OrderPage = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/');
	};

	return (
		<Layout title='Оплата'>
			<Button onClick={handleClick}>На главную</Button>
		</Layout>
	);
};

export default OrderPage;
