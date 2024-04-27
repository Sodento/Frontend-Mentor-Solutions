import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Monitor from "./components/Monitor";

export default function App() {
  return (
    <>
      <div className="container">
        <Header />
        <div className="container__card">
          <Monitor />
          <Dashboard />
          <About />
        </div>
      </div>
    </>
  );
}
