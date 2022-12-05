function App() {

  return(
    <div className="App">
      <User name= "dina"/>
      <User name= "vishal"/>
      <User name= "nanaa"/>
    </div>
  );
}

function User(props){
  return <h1>hello, {props.name} ❤️❤️</h1>;
}

export default App;


