import "./App.css";
import Nav from "./components/Header/Nav";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/Routes/Login";
import { Explore } from "./components/Routes/Explore";
import { Android } from "./components/Routes/Android";
import { NewChat } from "./components/Routes/NewChat";
import { VsCode } from "./components/Routes/ VsCode";
import { Home } from "./components/Routes/Home";
import { HomePageIntro } from "./HomePageIntroComponent/HomeIntro/HomePageIntro";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Explore" element={<Explore />} />
        <Route path="/Android" element={<Android />} />
        <Route path="/NewChat" element={<NewChat />} />
        <Route path="/vscode" element={<VsCode />} />
        <Route path="/homeIntro" element={<HomePageIntro />} />
      </Routes>
    </div>
  );
}

export default App;
