
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Hooks from "./pages/Hooks.jsx"
import Prac from "./pages/components/best-practices/Prac"
import PracIdeal from "./pages/components/best-practices/PracIdeal"
import State from "./pages/components/best-practices/State"
import Lifecycle from "./pages/components/lifecycle/Lifecycle"
import Lifecycle from "./pages/components/context-hook/ContextHook"
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/hooks" element={<Hooks />}></Route>
        <Route path="/best-practices" element={<Prac />}></Route>
        <Route path="/best-practices-ideal" element={<PracIdeal />}></Route>
        <Route path="/state" element={<State />}></Route>
        <Route path="/lifecycle" element={<Lifecycle />}></Route>
        <Route path="/context-hook" element={<ContextHook/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
