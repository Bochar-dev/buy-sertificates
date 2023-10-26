import { useState } from 'react';
import { ResponseStatus } from '../const/response-status';
import { Response } from '../types/response';

export const usePostFetch = <DataType>(
	postFn: (data: DataType) => Promise<Response>
) => {
	const [data, setData] = useState<Response | undefined>(undefined);
	const [status, setStatus] = useState<ResponseStatus>(ResponseStatus.Unknown);
	const [error, setError] = useState('');

	const post = async (data: DataType) => {
		setStatus(ResponseStatus.Loading);

		try {
			const postData = await postFn(data);
			setData(postData);
			setStatus(ResponseStatus.Succes);
		} catch (error) {
			if (error instanceof Error) {
				setStatus(ResponseStatus.Error);
				setError(error.message);
			}
		}
	};

	return { data, status, error, post };
};
