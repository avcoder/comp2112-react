import "./App.css";
import Article from "./components/Article.tsx";

export type Person = {
  login: string;
  avatar_url: string;
  name: null | string;
};

const people: Person[] = [
  {
    login: "avcoder",
    avatar_url: "https://avatars.githubusercontent.com/u/7874705?v=4",
    name: "avcoder",
  },
  {
    login: "smccrindle",
    avatar_url: "https://avatars.githubusercontent.com/u/1187460?v=4",
    name: "Scott McCrindle",
  },
  {
    login: "ifotn",
    avatar_url: "https://avatars.githubusercontent.com/u/6728111?v=4",
    name: null,
  },
];

function App() {
  return (
    <main className="mw6 center">
      {people.map((person) => (
        <Article person={person} />
      ))}
    </main>
  );
}

export default App;
