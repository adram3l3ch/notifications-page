import Notification from "./Notification";
import data from "../data";
import { useCallback, useState } from "react";

let timeout: number;

const Notifications = () => {
	const [notifications, setNotifications] = useState(data);
	const newMessagesCount = notifications.filter(n => n.isNew).length;
	const [addingNotifications, setAddingNotifications] = useState(false);
	const markAllAsRead = () => {
		setNotifications(n => n.map(n => ({ ...n, isNew: false })));
	};
	const addNotification = useCallback(() => {
		const randomNotification = data[Math.floor(Math.random() * data.length)];
		setNotifications(n => [
			{ ...randomNotification, showAnimation: true, id: n.length + 1, isNew: true },
			...n,
		]);
		timeout = setTimeout(addNotification, 5000);
	}, [data]);

	const handleClick = () => {
		if (addingNotifications) {
			setAddingNotifications(false);
			clearTimeout(timeout);
		} else {
			setAddingNotifications(true);
			addNotification();
		}
	};

	return (
		<div className="notifications">
			<button onClick={handleClick}>
				{addingNotifications ? "Cancel Animation" : "Start Animation"}
			</button>
			<header>
				<h1>Notifications</h1>
				{!!newMessagesCount && <span>{newMessagesCount}</span>}
				<p onClick={markAllAsRead}>Mark all as read</p>
			</header>
			<section className="notifications__list customScrollBar">
				{notifications.map(notification => (
					<Notification {...notification} key={notification.id} />
				))}
			</section>
		</div>
	);
};

export default Notifications;
