import Input from "./components/Input";
import { useState } from "react";
import WeatherInfo from "./components/WeatherInfo";
import Container from "./components/Container";
import api from "../api/apiConfig";
import "./Styles/Fonts.css";
function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        console.log(result);
      });
  };

  return (
    <>
      <Container>
        <Input
          onChangeArg={(e) => setSearch(e.target.value)}
          onClickArg={searchPressed}
        />
        <WeatherInfo weather={weather} />
      </Container>
    </>
  );
}

export default App;
