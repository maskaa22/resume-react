import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <a href="#main" className="skipLink">
        Skip to content
      </a>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
