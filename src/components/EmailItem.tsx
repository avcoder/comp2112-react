import classNames from "classnames";
import { EmailData } from "../App.tsx";

export type EmailItemProps = EmailData & {
  id: number;
  handleClick: (e: React.MouseEvent<HTMLDivElement>) => void;
};

const EmailItem: React.FC<EmailItemProps> = (emailItemProps) => {
  // OR function EmailItem({ name, subject, avatar, body}: Person) {
  const { name, subject, body, avatar, isUnread, handleClick, id, isSelected } =
    emailItemProps;
  const classes = classNames("email-item pure-g", {
    "email-item-unread": isUnread,
    "email-item-selected": isSelected,
  });

  return (
    <div className={classes} onClick={handleClick} data-index={id}>
      <div className="pure-u">
        <img
          width="64"
          height="64"
          alt={`${name}'s avatar`}
          className="email-avatar"
          src={avatar}
        />
      </div>
      <div className="pure-u-3-4">
        <h5 className="email-name">{name}</h5>
        <h4 className="email-subject">{subject}</h4>
        <p className="email-desc">{body}</p>
      </div>
    </div>
  );
};

export default EmailItem;
