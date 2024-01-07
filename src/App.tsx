import "./App.css";
import { useState } from "react";
import EmailItem from "./components/EmailItem.tsx";
import EmailBody from "./components/EmailBody.tsx";

export type EmailData = {
  name: string;
  subject: string;
  avatar: string;
  body: string;
  isUnread: boolean;
  isSelected: boolean;
};

const data: EmailData[] = [
  {
    avatar:
      "https://ui-avatars.com/api/?name=Deloria+Tern&rounded=true&background=random",
    name: "Deloria Tern",
    subject: "Jobs",
    body: "Aliquam augue quam, sollicitudin vitae, consectetuer eget, commodo placerat.",
    isUnread: false,
    isSelected: true,
  },
  {
    avatar:
      "https://ui-avatars.com/api/?name=Samaria+Zorzetti&rounded=true&background=random",
    name: "Samaria Zorzetti",
    subject: "Tutoring",
    body: "Aenean auctor gravida sem.",
    isUnread: true,
    isSelected: false,
  },
  {
    avatar:
      "https://ui-avatars.com/api/?name=Bradford+Hendrick&rounded=true&background=random",
    name: "Bradford Hendrick",
    subject: "Library Help",
    body: "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    isUnread: false,
    isSelected: false,
  },
  {
    avatar:
      "https://ui-avatars.com/api/?name=Timmie+Eacle&rounded=true&background=random",
    name: "Timmie Eacle",
    subject: "Discounts",
    body: "Integer tincidunt ante vel ipsum.",
    isUnread: false,
    isSelected: false,
  },
  {
    avatar:
      "https://ui-avatars.com/api/?name=Evered+Johantges&rounded=true&background=random",
    name: "Evered Johantges",
    subject: "Bun on the Run",
    body: "Praesent lectus.",
    isUnread: false,
    isSelected: false,
  },
  {
    avatar:
      "https://ui-avatars.com/api/?name=Dorthea+Gosz&rounded=true&background=random",
    name: "Dorthea Gosz",
    subject: "Parking",
    body: "Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis olestie lorem.",
    isUnread: false,
    isSelected: false,
  },
  {
    avatar:
      "https://ui-avatars.com/api/?name=Ammamaria+Kelby&rounded=true&background=random",
    name: "Ammamaria Kelby",
    subject: "Technology",
    body: "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, turpis.",
    isUnread: false,
    isSelected: false,
  },
];

function App() {
  const [emails, setEmails] = useState(data);
  const [emailIndex, setEmailIndex] = useState(0);
  const [inboxCount, setInboxCount] = useState(
    emails.filter((email) => email.isUnread).length
  );

  function refreshEmails(index: number) {
    const newEmails: EmailData[] = [
      ...emails
        .map((email) => ({ ...email, isSelected: false }))
        .map((email, i) => {
          if (index === i)
            return { ...email, isSelected: true, isUnread: false };
          return email;
        }),
    ];

    setEmails(newEmails);
  }

  function handleComposeClick() {
    console.log("in handleComposeClick");
  }

  function refreshInboxCount() {
    setInboxCount(emails.filter((email) => email.isUnread).length);
  }

  function handleEmailItemClick(e: React.MouseEvent<HTMLDivElement>) {
    const index = Number(e.currentTarget.dataset.index);
    setEmailIndex(index);
    refreshEmails(index);
    refreshInboxCount();
  }

  return (
    <div id="layout" className="content pure-g">
      <div id="nav" className="pure-u">
        <a href="#" className="nav-menu-button">
          Menu
        </a>

        <div className="nav-inner">
          <button
            className="primary-button pure-button"
            onClick={handleComposeClick}
          >
            Compose
          </button>

          <div className="pure-menu">
            <ul className="pure-menu-list">
              <li className="pure-menu-item">
                <a href="#" className="pure-menu-link">
                  Inbox{" "}
                  {inboxCount > 0 && (
                    <span className="email-count">({inboxCount})</span>
                  )}
                </a>
              </li>
              <li className="pure-menu-item">
                <a href="#" className="pure-menu-link">
                  Important
                </a>
              </li>
              <li className="pure-menu-item">
                <a href="#" className="pure-menu-link">
                  Sent
                </a>
              </li>
              <li className="pure-menu-item">
                <a href="#" className="pure-menu-link">
                  Drafts
                </a>
              </li>
              <li className="pure-menu-item">
                <a href="#" className="pure-menu-link">
                  Trash
                </a>
              </li>
              <li className="pure-menu-heading">Labels</li>
              <li className="pure-menu-item">
                <a href="#" className="pure-menu-link">
                  <span className="email-label-personal"></span>Personal
                </a>
              </li>
              <li className="pure-menu-item">
                <a href="#" className="pure-menu-link">
                  <span className="email-label-work"></span>Work
                </a>
              </li>
              <li className="pure-menu-item">
                <a href="#" className="pure-menu-link">
                  <span className="email-label-travel"></span>Travel
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div id="list" className="pure-u-1">
        {emails.map((email, i) => (
          <EmailItem
            key={i}
            id={i}
            avatar={email.avatar}
            name={email.name}
            subject={email.subject}
            body={email.body}
            isUnread={email.isUnread}
            isSelected={email.isSelected}
            handleClick={handleEmailItemClick}
          />
        ))}
      </div>

      <div id="main" className="pure-u-1">
        <EmailBody
          title={emails[emailIndex]?.subject}
          name={emails[emailIndex]?.name}
          body={emails[emailIndex]?.body}
        />
      </div>
    </div>
  );
}

export default App;
