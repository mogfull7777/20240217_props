import "./App.css";
import { Outlet, Route, Routes } from "react-router";
import Nav from "./components/Nav";
import DisplayComponent from "./components/DisplayComponent";
import InputComponent from "./components/InputComponent";
import { ItemsProvider } from "./api/Context";

const LayOut = () => {
  return (
    <div>
      <Nav />

      <Outlet />
    </div>
  );
};

function App() {
  return (
    <ItemsProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<LayOut />}>
            <Route index element={<InputComponent />}></Route>
            <Route path="/display" element={<DisplayComponent />}></Route>
          </Route>
        </Routes>
      </div>
    </ItemsProvider>
  );
}

export default App;
