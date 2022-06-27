import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Main from "./components/Main";
function App() {

  let [search, setSearch] = useState([]);

  return (
    <div className="d-flex">
      <div className="site-left"></div>
      <div className="site-right">
        <Header />
        <Hero />
        <Main search={search} setSearch={setSearch}/>
      </div>
    </div>
  );
}

export default App;
