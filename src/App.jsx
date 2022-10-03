
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Hooks from "./pages/Hooks.jsx"
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/hooks" element={<Hooks />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
