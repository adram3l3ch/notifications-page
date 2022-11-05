import Notification from "./Notification";
import data from "../data";

const Notifications = () => {
	const newMessagesCount = data.filter(n => n.isNew).length;
	return (
		<div className="notifications">
			<header>
				<h1>Notifications</h1>
				{newMessagesCount && <span>{newMessagesCount}</span>}
				<p>Mark all as read</p>
			</header>
			<section className="notifications__list">
				{data.map((notification, i) => (
					<Notification key={i} {...notification} />
				))}
				{/* <Notification
					name="Mark Webber"
					notification="reacted to your recent post"
					action="My first tournament today!"
					image={image}
					time="1m ago"
					isNew={true}
				/>
				<Notification
					name="Angela Gray"
					notification="followed you"
					image={image}
					time="5m ago"
					isNew={true}
				/>
				<Notification
					name="Rizky Hasanuddin"
					notification="sent you a private message"
					image={image}
					time="5 days ago"
					isMessage={true}
					message=" Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and 
					I'm already having lots of fun and improving my game."
				/>
				<Notification
					name="Angela Gray"
					notification="followed you"
					image={image}
					imageNotification={true}
					time="5m ago"
					picture={image2}
				/> */}
			</section>
		</div>
	);
};

export default Notifications;
