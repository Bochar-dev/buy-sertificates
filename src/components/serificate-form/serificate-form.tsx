import { InputMask } from '@react-input/mask';
import { useForm } from 'react-hook-form';
import Button from '../ui/button/button';
import Input from '../ui/input/input';
import './serificate-form.scss';
import { Link, useNavigate } from 'react-router-dom';
import { formSertificateData } from '../../types/form-sertificate-data';
import { formatPhoneNumber } from '../../helpers/format-phone-number';
import { usePostFetch } from '../../hooks/use-post-fetch';
import { PostSertificate } from '../../api/post-sertificat';
import { Sertificate } from '../../types/sertificate';
import { useEffect } from 'react';
import { ResponseStatus } from '../../const/response-status';

type SertificateFormProps = {
	sertificate: Sertificate;
};

const SertificateForm = ({ sertificate }: SertificateFormProps) => {
	const { error, status, post } = usePostFetch(PostSertificate);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<formSertificateData>();

	const navigate = useNavigate();

	const handleSubmitForm = handleSubmit((data) => {
		const phoneForBack = formatPhoneNumber(data.phone);

		const postData = {
			ApiKey: `${import.meta.env.VITE_API_KEY}`,
			MethodName: 'OSSale',
			Id: sertificate.ID,
			TableName: sertificate.TABLENAME,
			PrimaryKey: sertificate.PRIMARYKEY,
			Price: Number(sertificate.PRICE),
			Summa: Number(sertificate.SUMMA),
			ClientName: data.name,
			Phone: phoneForBack,
			Email: data.email,
			PaymentTypeId: 2,
			UseDelivery: 0,
			IsGift: 0,
			MsgText: '',
			PName: '',
			PPhone: '',
		};

		post(postData);
	});

	useEffect(() => {
		if (status === ResponseStatus.Succes) {
			navigate('/order');
		}
	}, [status, navigate]);

	const emailPattern =
		/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,15})$/;

	const phonePattern = /\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}/;

	const isDisabled = status === ResponseStatus.Loading;

	return (
		<form className='form' onSubmit={handleSubmitForm}>
			<Input
				label='ФИО'
				placeholder='Введите имя'
				{...register('name', { required: 'Это обязательное поле' })}
				isEroror={!!errors.name}
				errorText={errors.name?.message}
				disabled={isDisabled}
			/>
			<InputMask
				component={Input}
				mask='+7 (___) ___-__-__'
				replacement={{ _: /\d/ }}
				label='Телефон'
				placeholder='+7 (___) ___-__-__'
				{...register('phone', {
					required: 'Это обязательное поле',
					pattern: {
						value: phonePattern,
						message: 'Поле заполнено неверно',
					},
				})}
				disabled={isDisabled}
				isEroror={!!errors.phone}
				errorText={errors.phone?.message}
			/>
			<Input
				label='Почта'
				placeholder='Введите почту'
				{...register('email', {
					required: 'Это обязательное поле',
					pattern: {
						value: emailPattern,
						message: 'Поле заполнено неверно',
					},
				})}
				disabled={isDisabled}
				isEroror={!!errors.email}
				errorText={errors.email?.message}
			/>
			<div className='form__controls'>
				<Link className='form__button' to='/'>
					Назад
				</Link>
				<Button type='submit' variant='white' disabled={isDisabled}>
					Перейти к оплате
				</Button>
			</div>
			{status === ResponseStatus.Error && <span>{error}</span>}
		</form>
	);
};

export default SertificateForm;
