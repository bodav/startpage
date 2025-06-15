import "@/App.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { backgroundConfig } from "@/lib/config";
import LinkGrid from "./components/LinkGrid";
import { QueryProvider } from "./context/QueryContext";

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
      className="fixed overflow-auto w-full h-full"
      style={backgroundStyle}>
      <div
        id="backgroundOverlay"
        style={backgroundFilterStyle}
        className="fixed overflow-auto w-full h-full">
        <div
          id="container"
          className="grid grid-rows-[auto_1fr_auto] z-10 h-full p-4">
          <div className="row-start-1">
            <Header />
          </div>
          <div className="row-start-2">
            <QueryProvider>
              <LinkGrid />
            </QueryProvider>
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
