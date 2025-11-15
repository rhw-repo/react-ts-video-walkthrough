import "./index.css";
import Navbar from "./components/navbar/Navbar";
import VideoPlayer from "./components/video-player/VideoPlayer";
import Footer from "./components/footer/Footer";

const Layout = (): React.JSX.Element => {
  return (
    <>
      <Navbar />
      <main>
        <VideoPlayer />
      </main>
      <Footer />
    </>
  );
};

function App() {
  return (
    <>
      <Layout />
    </>
  );
}

export default App;
