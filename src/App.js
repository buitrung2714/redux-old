import "./App.css";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";
import store from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />
        <Todos />
      </Provider>
    </div>
  );
}

export default App;
