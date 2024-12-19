import { Header } from "./composants/containers/Header/Header";
import { Footer } from "./composants/containers/Footer/Footer";
import Routine from "./components/Routine";
import Menu from "./components/Menu";
import Hobbies from "./components/Hobbies";

function App() {
  return (
    <div>
      <Header />
      <Hobbies />
      <Footer />
    </div>
  );
}

export default App;
