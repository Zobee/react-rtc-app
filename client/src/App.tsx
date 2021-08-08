import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard";
import useLocalStorage from "./hooks/useLocalStorage";

const App:React.FC = () => {
  const [id, setId] = useLocalStorage("key")
  return (
    <div className="App">
      {id ? <Dashboard id={id} /> : <Login setId={setId} />}
    </div>
  );
}

export default App;
