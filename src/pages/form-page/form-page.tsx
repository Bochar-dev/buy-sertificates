import { useLocation } from 'react-router-dom';
import Layout from '../../components/layout/layout';
import { Sertificate } from '../../types/sertificate';
import SertificateForm from '../../components/serificate-form/serificate-form';

const FormPage = () => {
	const { state } = useLocation();
	const sertificate = state as Sertificate;

	return (
		<Layout title={sertificate.NAME}>
			<SertificateForm sertificate={sertificate} />
		</Layout>
	);
};

export default FormPage;
