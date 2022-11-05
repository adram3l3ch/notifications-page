import { angela, anna, chess, jacob, kimberly, mark, nathan, rizky } from "./assets/images";
import { NotificationProps } from "./components/types";

const data: NotificationProps[] = [
	{
		name: "Mark Webber",
		image: mark,
		notification: "reacted to your post",
		action: "My first tournament today!",
		isNew: true,
		time: "1m ago",
		id: 1,
	},
	{
		name: "Angela Gray",
		image: angela,
		notification: "followed you",
		isNew: true,
		time: "5m ago",
		id: 2,
	},
	{
		name: "Jacob Thompson",
		image: jacob,
		notification: "has joined your group",
		action: "Chess Club",
		isSpecial: true,
		isNew: true,
		time: "1 day ago",
		id: 3,
	},
	{
		name: "Rizky Hasanuddin",
		image: rizky,
		isMessage: true,
		notification: "sent you a private message",
		message:
			" Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
		time: "5 days ago",
		id: 4,
	},
	{
		name: "Kimberly Smith",
		image: kimberly,
		notification: "commented on your picture",
		time: "1 week ago",
		imageNotification: true,
		picture: chess,
		id: 5,
	},
	{
		name: "Nathan Peterson",
		image: nathan,
		notification: "reacted to your recent post",
		action: "5 end-game strategies to increase your win rate",
		time: "2 weeks ago",
		id: 6,
	},
	{
		name: "Anna kim",
		image: anna,
		notification: "left the group",
		action: "Chess Club",
		isSpecial: true,
		time: "2 weeks ago",
		id: 7,
	},
];

export default data;
