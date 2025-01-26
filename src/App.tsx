import "@/App.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { backgroundConfig } from "@/lib/config";
import LinkGrid from "./components/LinkGrid";

function App() {
  const config = backgroundConfig;

  const backgroundStyle = {
    backgroundImage: `url(${config.backgroundImage})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  };

  const backgroundFilterStyle = {
    backdropFilter: `brightness(${config.brightness}%)`
  };

  return (
    <div
      id="backgroundWrapper"
      className="fixed overflow-auto w-full h-full transition-all"
      style={backgroundStyle}>
      <div
        id="backgroundOverlay"
        style={backgroundFilterStyle}
        className="fixed overflow-auto w-full h-full">
        <div
          id="container"
          className="container m-auto grid grid-rows-[auto_1fr_auto] z-10 h-full">
          <div className="row-start-1">
            <Header />
          </div>
          <div className="row-start-2">
            <LinkGrid />
          </div>
          <div className="row-start-3">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
