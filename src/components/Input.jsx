import "../Styles/Input.css";
const Input = ({ onChangeArg, onClickArg }) => {
  const onFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="input__div">
      <h1>Enter a city name:</h1>
      <form onSubmit={onFormSubmit}>
        <section>
          <div>
            <input
              type="text"
              placeholder="London..."
              onChange={onChangeArg}
            ></input>
          </div>
          <div>
            <button onClick={onClickArg}>Search</button>
          </div>
        </section>
      </form>
    </div>
  );
};
export default Input;
