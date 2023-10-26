import { Sertificate } from '../../../types/sertificate';
import { Link } from 'react-router-dom';
import './sertificate-item.scss';

type SertificateItem = {
	sertificate: Sertificate;
};

const SertificateItem = ({ sertificate }: SertificateItem) => {
	return (
		<div className='setificate-card'>
			<h2 className='setificate-card__title'>{sertificate.NAME}</h2>
			<div className='setificate-card__item'>
				<span className='setificate-card__item-name'>Цена:</span>{' '}
				<span className='setificate-card__item-value'>
					{Number(sertificate.PRICE).toFixed(0)}₽
				</span>
			</div>
			<Link className='setificate-card__button' to='/form' state={sertificate}>
				Оформить
			</Link>
		</div>
	);
};

export default SertificateItem;
