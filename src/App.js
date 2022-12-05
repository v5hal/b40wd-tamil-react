import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <User
        name="dina"
        pic="https://www.wallpapertip.com/wmimgs/229-2293040_anime-cat-wallpaper.png"
      />
      <User name="vishal" pic="https://wallpaperaccess.com/full/2309745.jpg" />
      <User name="nanaa" pic="https://wallpaperaccess.com/full/2288412.jpg" />
    </div>
  );
}

function User(props) {
  // const{pic,name}=props;
  return (
    <section>
      <img className="profile" src={props.pic} alt={props.name} />
      <h1>
        hello, <span className="font">{props.name} </span>❤️❤️
      </h1>
    </section>
  );
}

export default App;
