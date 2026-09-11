import { useRoutes } from "react-router-dom";
import Routes from "./routes";
import "./App.css";

import TopBar from "./components/TopBar/TopBar";
import SideBar from "./components/SideBar/SideBar";

function App() {
  const router = useRoutes(Routes);
  return (
    <>
      <TopBar />
      <div className="container">
        <SideBar />
        {router}
      </div>
    </>
  );
}

export default App;
