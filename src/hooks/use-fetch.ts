import { useState, useEffect } from 'react';
import { ResponseStatus } from '../const/response-status';

type useFetchProps<DataType, ParamsType> = {
	fetchFn: (params: ParamsType) => Promise<DataType>;
	fetchFnParams: ParamsType;
};

export const useFetch = <DataType, ParamsType>({
	fetchFn,
	fetchFnParams,
}: useFetchProps<DataType, ParamsType>) => {
	const [data, setData] = useState<DataType | undefined>(undefined);
	const [status, setStatus] = useState<ResponseStatus>(ResponseStatus.Unknown);
	const [error, setError] = useState('');

	useEffect(() => {
		const fetchData = async (params: ParamsType) => {
			try {
				setStatus(ResponseStatus.Loading);

				const data = await fetchFn(params);

				setData(data);
				setStatus(ResponseStatus.Succes);
			} catch (error) {
				if (error instanceof Error) {
					setStatus(ResponseStatus.Error);
					setError(error.message);
				}
			}
		};

		void fetchData(fetchFnParams);
	}, [fetchFn, fetchFnParams]);

	return { status, data, error };
};
