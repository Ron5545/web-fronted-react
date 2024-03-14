import "./App.scss";
import About from "./components/About/About";
import Button from "./components/Button";
import Counter from "./components/Counter/Counter";
import Header from "./components/Header/Header";
import Spinners from "./components/Spinners";

function App() {
  return (
    <main>
      <Header />
      <div className="flex flex-col items-center gap-10">
        <Button color="red" text="Hi" />
        <Spinners />
        <About />
        <Counter />
        <h1 className="text-4xl font-bold">Hello World</h1>
      </div>
    </main>
  );
}

export default App;

