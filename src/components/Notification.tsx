import { NotificationProps } from "./types";

const Message = ({ message }: { message: string }) => {
	return <p className="message">{message}</p>;
};

const Notification = (props: NotificationProps) => {
	const { image, name, notification, time, isMessage, isNew, imageNotification } = props;
	const neitherMessageNorImage = !isMessage && !imageNotification;
	return (
		<article className="notification">
			<img src={image} alt="avatar" />
			<div className="notification__details">
				<header>
					<p>
						<span className="name">{name} </span>
						{notification}{" "}
						{neitherMessageNorImage && (
							<span className={`action ${props.isSpecial ? "special" : ""}`}>
								{props.action}
							</span>
						)}
					</p>
					{isNew && <div className="new" />}
				</header>
				<p className="time">{time}</p>
			</div>
			{imageNotification && <img className="picture" src={props.picture} />}
			{isMessage && <Message message={props.message} />}
		</article>
	);
};

export default Notification;
