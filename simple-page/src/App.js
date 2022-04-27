import React from "react"
import Footer from "./components/footer";
import Header from "./components/header";
import PostItem from "./components/PostItem";
import Sticker from "./components/sticker";
import "./styles/App.css"


function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Sticker />
        <h2>НАШИ САМЫЕ БОЛЬШИЕ ПРОЕКТЫ</h2>
        <div className="post-wrap">
          <PostItem />
          <PostItem />
          <PostItem />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
