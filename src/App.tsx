import "./App.css";
import EmailItem from "./components/EmailItem.tsx";

export type Person = {
  avatar: string;
  name: string;
  subject: string;
  body: string;
};

const data: Person[] = [
  {
    avatar:
      "https://ui-avatars.com/api/?name=Deloria+Tern&rounded=true&background=random",
    name: "Deloria Tern",
    subject: "Finance",
    body: "Aliquam augue quam, sollicitudin vitae, consectetuer eget, commodo placerat.",
  },
  {
    avatar:
      "https://ui-avatars.com/api/?name=Samaria+Zorzetti&rounded=true&background=random",
    name: "Samaria Zorzetti",
    subject: "Finance",
    body: "Aenean auctor gravida sem.",
  },
  {
    avatar:
      "https://ui-avatars.com/api/?name=Bradford+Hendrick&rounded=true&background=random",
    name: "Bradford Hendrick",
    subject: "Capital Goods",
    body: "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
  },
  {
    avatar:
      "https://ui-avatars.com/api/?name=Timmie+Eacle&rounded=true&background=random",
    name: "Timmie Eacle",
    subject: "Health Care",
    body: "Integer tincidunt ante vel ipsum.",
  },
  {
    avatar:
      "https://ui-avatars.com/api/?name=Evered+Johantges&rounded=true&background=random",
    name: "Evered Johantges",
    subject: "",
    body: "Praesent lectus.",
  },
  {
    avatar:
      "https://ui-avatars.com/api/?name=Dorthea+Gosz&rounded=true&background=random",
    name: "Dorthea Gosz",
    subject: "Finance",
    body: "Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis olestie lorem.",
  },
  {
    avatar:
      "https://ui-avatars.com/api/?name=Ammamaria+Kelby&rounded=true&background=random",
    name: "Ammamaria Kelby",
    subject: "Technology",
    body: "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, turpis.",
  },
];

function App() {
  return (
    <div id="layout" className="content pure-g">
      <div id="nav" className="pure-u">
        <a href="#" className="nav-menu-button">
          Menu
        </a>

        <div className="nav-inner">
          <button className="primary-button pure-button">Compose</button>

          <div className="pure-menu">
            <ul className="pure-menu-list">
              <li className="pure-menu-item">
                <a href="#" className="pure-menu-link">
                  Inbox <span className="email-count">(2)</span>
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
        {data.map((person) => (
          <EmailItem
            avatar={person.avatar}
            name={person.name}
            subject={person.subject}
            body={person.body}
          />
        ))}
      </div>

      <div id="main" className="pure-u-1">
        <div className="email-content">
          <div className="email-content-header pure-g">
            <div className="pure-u-1-2">
              <h1 className="email-content-title">Hello from Toronto</h1>
              <p className="email-content-subtitle">
                From <a>Tilo Mitra</a> at <span>3:56pm, April 3, 2012</span>
              </p>
            </div>

            <div className="email-content-controls pure-u-1-2">
              <button className="secondary-button pure-button">Reply</button>
              <button className="secondary-button pure-button">Forward</button>
              <button className="secondary-button pure-button">Move to</button>
            </div>
          </div>

          <div className="email-content-body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit
              essecillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
            <p>
              Aliquam ac feugiat dolor. Proin mattis massa sit amet enim iaculis
              tincidunt. Mauris tempor mi vitae sem aliquet pharetra. Fusce in
              dui purus, nec malesuada mauris. Curabitur ornare arcu quis mi
              blandit laoreet. Vivamus imperdiet fermentum mauris, ac posuere
              urna tempor at. Duis pellentesque justo ac sapien aliquet egestas.
              Morbi enim mi, porta eget ullamcorper at, pharetra id lorem.
            </p>
            <p>
              Donec sagittis dolor ut quam pharetra pretium varius in nibh.
              Suspendisse potenti. Donec imperdiet, velit vel adipiscing
              bibendum, leo eros tristique augue, eu rutrum lacus sapien vel
              quam. Nam orci arcu, luctus quis vestibulum ut, ullamcorper ut
              enim. Morbi semper erat quis orci aliquet condimentum. Nam
              interdum mauris sed massa dignissim rhoncus.
            </p>
            <p>
              Regards,
              <br />
              Tilo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
