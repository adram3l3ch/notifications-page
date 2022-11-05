import image from "../assets/images/avatar-angela-gray.webp";

const Notification = () => {
	return (
		<article className="notification">
			<img src={image} alt="avatar" />
			<div className="notification__details">
				<header>
					<p>
						<span className="name">Mark Webber</span> reacted to your recent post{" "}
						<span className="action">My first tournament today!</span>
					</p>
					<div className="new" />
				</header>
				<p className="time">1m ago</p>
			</div>
		</article>
	);
};

export default Notification;
