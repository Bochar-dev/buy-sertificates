import { getSertificates } from '../../api/get-sertificates';
import Layout from '../../components/layout/layout';
import SertificatesList from '../../components/sertificates-list/sertificates-list';
import { ResponseStatus } from '../../const/response-status';
import { useFetch } from '../../hooks/use-fetch';
import { RequestParams } from '../../types/request';
import { Sertificate } from '../../types/sertificate';

const params: RequestParams = {
	ApiKey: `${import.meta.env.VITE_API_KEY}`,
	MethodName: 'OSGetGoodList',
};

const MainPage = () => {
	const { status, data, error } = useFetch<Sertificate[], RequestParams>({
		fetchFn: getSertificates,
		fetchFnParams: params,
	});

	return (
		<Layout title='Сертификаты'>
			{status === ResponseStatus.Error && <span>{error}</span>}
			{status === ResponseStatus.Loading && <span>Loading...</span>}
			{data && <SertificatesList setificates={data} />}
		</Layout>
	);
};

export default MainPage;
