export type MessageProps = {
	isMessage: true;
	imageNotification?: false;
	message: string;
};

export type NonMessageProps = {
	isMessage?: false;
	action?: string;
	imageNotification?: false;
	isSpecial?: boolean;
};

export type ImageNotification = {
	imageNotification: true;
	picture: string;
	isMessage?: false;
};

export type CommonProps = {
	name: string;
	image: string;
	time: string;
	notification: string;
	isNew?: boolean;
};

export type NotificationProps =
	| (MessageProps & CommonProps)
	| (NonMessageProps & CommonProps)
	| (ImageNotification & CommonProps);
