import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Movies from "./containers/Movies";
import AddMovie from "./components/AddMovie";

function App() {
  return (
    <div className="App">
      <Header />
      <Movies />
      <AddMovie />
      <Footer />
    </div>
  );
}

export default App;
