import { useEffect, useRef } from "react";
import { NotificationProps } from "./types";

const Message = ({ message }: { message: string }) => {
	return <p className="message">{message}</p>;
};

const Notification = (props: NotificationProps) => {
	const { image, name, notification, time, isMessage, isNew, imageNotification, showAnimation } = props;
	const neitherMessageNorImage = !isMessage && !imageNotification;

	const notificationRef = useRef<null | HTMLElement>(null);

	useEffect(() => {
		if (notificationRef.current) {
			const { height } = notificationRef.current.getBoundingClientRect();
			notificationRef.current.parentElement?.style.setProperty("--height", `${height}px`);
		}
	}, [notificationRef.current]);

	return (
		<div className={`${showAnimation ? "new-notification" : ""}`}>
			<article
				className={`notification ${isNew ? "new" : ""} ${imageNotification ? "picture" : ""}`}
				ref={notificationRef}
			>
				<h2 className="sr-only">{`${name} ${notification}`}</h2>
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
				{imageNotification && (
					<img className="picture" src={props.picture} alt="notification image" />
				)}
				{isMessage && <Message message={props.message} />}
			</article>
		</div>
	);
};

export default Notification;
