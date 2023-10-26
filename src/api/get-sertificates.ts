import { BASE_URL } from '../const/base-url';
import { RequestParams } from '../types/request';
import { Sertificate } from '../types/sertificate';

export const getSertificates = async (params: RequestParams) => {
	const res = await fetch(
		`${BASE_URL}?ApiKey=${params.ApiKey}&MethodName=${params.MethodName}`
	);

	const resData = await res.json();

	return resData.data as Promise<Sertificate[]>;
};
