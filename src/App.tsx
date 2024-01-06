import "./App.css";
import Article from "./components/Article.tsx";

export type Hero = {
  twitter: string;
  pic: string;
  name: null | string;
};

const heroes: Hero[] = [
  {
    name: "Prof. Xavier",
    twitter: "@profx",
    pic: "http://www.animatedimages.org/data/media/450/animated-marvel-avatar-image-0004.gif",
  },
  {
    name: "Spiderman",
    twitter: "@spidey",
    pic: "http://www.animatedimages.org/data/media/450/animated-marvel-avatar-image-0008.gif",
  },
  {
    name: "Wolverine",
    pic: "http://www.animatedimages.org/data/media/450/animated-marvel-avatar-image-0011.gif",
    twitter: "@logan",
  },
];

function App() {
  return (
    <main className="mw6 center">
      {heroes.map((hero) => (
        <Article person={hero} />
      ))}
    </main>
  );
}

export default App;
