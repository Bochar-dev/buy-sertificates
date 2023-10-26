import { Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../const/app-route';
import MainPage from '../../pages/main-page/main-page';
import FormPage from '../../pages/form-page/form-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import OrderPage from '../../pages/order-page/order-page';

const AppRouter = () => {
	return (
		<Routes>
			<Route path={AppRoute.Home} element={<MainPage />} />
			<Route path={AppRoute.Form} element={<FormPage />} />
			<Route path={AppRoute.Order} element={<OrderPage />} />
			<Route path={'*'} element={<NotFoundPage />} />
		</Routes>
	);
};

export default AppRouter;
