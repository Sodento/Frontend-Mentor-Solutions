import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import { Countries } from "./types";



function App() {
  const [theme, setTheme] = useState<boolean>(false);
  const [countries, setCountries] = useState<Countries[]>([]);

  const themeClick = () => {
    setTheme((prevValue) => !prevValue);
  };

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => console.log("Error -> ", error));
  }, []);

  return (
    <Router>
      <div>
        <Header theme={theme} themeClick={themeClick} />
        <Routes>
          <Route path="/" element={<Home theme={theme} countries={countries} />} />
          <Route path="/detail/:ccn3" element={<Detail theme={theme} countries={countries}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
