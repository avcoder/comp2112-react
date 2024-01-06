import { Person } from "../App.tsx";

const EmailItem: React.FC<Person> = ({ name, subject, avatar, body }) => {
  // OR function EmailItem({ name, subject, avatar, body}: Person) {
  return (
    <div className="email-item pure-g">
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
