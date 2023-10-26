import { BASE_URL } from '../const/base-url';
import { Request } from '../types/request';

export const PostSertificate = async (data: Request) => {
	const res = await fetch(`${BASE_URL}`, {
		method: 'POST',
		headers: {
			'Content-type': 'application/x-www-form-urlencoded',
		},
		body: JSON.stringify(data),
	});

	return res.json();
};
