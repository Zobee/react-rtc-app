import { useState } from "react";
import Login from "./components/Login/Login";

const App:React.FC = () => {
  const [id, setId] = useState<string>("")
  return (
    <div className="App">
      <h1>{id}</h1>
      <Login setId={setId} />
    </div>
  );
}

export default App;
