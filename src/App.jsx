import Header from "./components/Header";
import Hero from "./components/Hero";
import Main from "./components/Main";
function App() {
  return (
    <div className="d-flex">
      <div className="site-left"></div>
      <div className="site-right">
        <Header />
        <Hero />
        <Main />
      </div>
    </div>
  );
}

export default App;
