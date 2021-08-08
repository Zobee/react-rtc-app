import Login from "./components/Login/Login";
import useLocalStorage from "./hooks/useLocalStorage";

const App:React.FC = () => {
  const [id, setId] = useLocalStorage("key")
  return (
    <div className="App">
      <h1>{id}</h1>
      <Login setId={setId} />
    </div>
  );
}

export default App;
