import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utils/store";
import {Provider} from "react-redux";

const appRouter = createBrowserRouter([{
  path: "/",
  element: ""

}])

function App() {
  return (
    <Provider store={store}>

    <div>
      <Header />
      <Body />
    </div>
    
    </Provider>
  );
}

export default App;
