import Card from "./Card";
import "../Styles/weatherInfo.css";
const WeatherInfo = ({ weather }) => {
  const To24 = (unixTimestamp) => {
    const date = new Date(unixTimestamp * 1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    minutes = minutes.substr(-2);
    var readableTime = hours + ":" + minutes;
    return readableTime;
  };

  return (
    <div>
      {typeof weather.main !== "undefined" ? (
        <div className="weatherInfo__div">
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="Weather Icon"
          />
          <p>{weather.name}</p>
          <p>{Math.trunc(weather.main.temp)}°C</p>
          <p className="weatherInfo__p--desc">{weather.weather[0].main}</p>

          <Card>
            <div>
              <p>sunrise:</p>
              <p>{To24(weather.sys.sunrise)}</p>
            </div>
            <div>
              <p>sunset:</p>
              <p>{To24(weather.sys.sunset)}</p>
            </div>
            <div>
              <p>wind:</p>
              <p>{weather.wind.speed}km/h</p>
            </div>
            <div>
              <p>humidity:</p>
              <p>{weather.main.humidity}%</p>
            </div>
          </Card>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default WeatherInfo;
