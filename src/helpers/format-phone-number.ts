export const formatPhoneNumber = (phone: string) => {
	const res = phone.replace(/[^0-9]/g, '');

	return res.slice(1, res.length);
};
