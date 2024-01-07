export type EmailBody = {
  title: string;
  name: string;
  body: string;
};

const EmailBody: React.FC<EmailBody> = ({ title, name, body }) => {
  // OR function EmailBody({ title, name }: EmailBody) {
  const randomDate: number = new Date() as unknown as number;
  const date = new Date(randomDate - Math.random() * 1e9).toString();

  return (
    <>
      <div className="email-content">
        <div className="email-content-header pure-g">
          <div className="pure-u-1-2">
            <h1 className="email-content-title">{title}</h1>
            <p className="email-content-subtitle">
              From <a>{name}</a> at <span>{date}</span>
            </p>
          </div>

          <div className="email-content-controls pure-u-1-2">
            <button className="secondary-button pure-button">
              Mark as Unread
            </button>
            <button className="secondary-button pure-button">Delete</button>
            <button className="secondary-button pure-button">Label it</button>
          </div>
        </div>

        <div className="email-content-body">
          {body}
          <p>
            Regards,
            <br />
            {name}
          </p>
        </div>
      </div>
    </>
  );
};

export default EmailBody;
