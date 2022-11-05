import Notification from "./Notification";

const Notifications = () => {
	return (
		<div className="notifications">
			<header>
				<h1>Notifications</h1>
				<span>3</span>
				<p>Mark all as read</p>
			</header>
			<section className="notifications__list">
				<Notification />
				<Notification />
				<Notification />
			</section>
		</div>
	);
};

export default Notifications;
