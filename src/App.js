import Todo from "./components/Todo";
import Sidebar from "./components/Sidebar";
import Introduce from "./components/Introduce";
import Alert from "./components/Alert";
import Schedule from "./components/Schedule";
import Header from "./components/Header";

const App = () => {
  return (
  <>
    <Todo />
    <Sidebar />
    <Introduce />
    <Alert />
    <Schedule />
    <Header />
  </>
  );
};

export default App;
