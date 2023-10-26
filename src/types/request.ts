export type RequestParams = {
	ApiKey: string;
	MethodName: string;
};

export type Request = {
	Id: string;
	TableName: string;
	PrimaryKey: string;
	Price: number;
	Summa: number;
	ClientName: string;
	Phone: string;
	Email: string;
	PaymentTypeId: number;
	UseDelivery: number;
	IsGift: number;
	MsgText: string;
	PName: string;
	PPhone: string;
} & RequestParams;
