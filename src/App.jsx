import { useState } from "react";
import LoadingScreen from "./LoadingScreen/loadingScreen.jsx";
import ImagePreloader from "./ImagePreloader.js";
import SmoothScroll from "./SmoothScroll";
import Home from "./Home/Home.jsx";

export default function App() {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  return (
    <SmoothScroll>
      {!imagesLoaded && (
        <ImagePreloader
          onComplete={() => setImagesLoaded(true)}
        />
      )}

      {showLoader || !imagesLoaded 
        ? (
          <LoadingScreen
            onFinish={() => setShowLoader(false)}
          />
        )
        : (
          <Home />
        )
      }
      {/* <Home/> */}
    </SmoothScroll>
  );
}