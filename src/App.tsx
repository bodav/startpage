import "@/App.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LinkGrid from "./components/LinkGrid";
import { QueryProvider } from "./context/QueryContext";
import configJson from "@/config.json";
import { StartpageConfig } from "./types/config";

function App() {
  const config = configJson as StartpageConfig;

  const backgroundStyle = {
    backgroundImage: `url(${config.background.url})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  };

  return (
    <div
      id="backgroundWrapper"
      className="theme-white fixed overflow-auto w-full h-full"
      style={backgroundStyle}>
      <div
        id="container"
        className="grid grid-rows-[auto_1fr_auto] z-10 h-full p-4 text-black dark:text-white">
        <div className="row-start-1">
          <Header />
        </div>
        <div className="row-start-2">
          <QueryProvider>
            <LinkGrid />
          </QueryProvider>
        </div>
        <div className="row-start-3">
          <Footer internalUrl={config.internalUrl} />
        </div>
      </div>
    </div>
  );
}

export default App;
