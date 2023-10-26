import { Sertificate } from '../../types/sertificate';
import SertificateItem from './sertificate-item/sertificate-item';
import './sertificates-list.scss';

type SertificatesListProps = {
	setificates: Sertificate[];
};

const SertificatesList = ({ setificates }: SertificatesListProps) => {
	return (
		<ul className='grid'>
			{setificates.map((sertificate) => (
				<li key={sertificate.ID} className='grid-item'>
					<SertificateItem sertificate={sertificate} />
				</li>
			))}
		</ul>
	);
};

export default SertificatesList;
