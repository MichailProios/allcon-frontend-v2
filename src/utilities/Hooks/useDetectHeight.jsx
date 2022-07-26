import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

export default function useDetectHeight() {
  const getWindowWidth = () => window.innerHeight;
  const [height, setHeight] = useState(getWindowWidth());

  useEffect(() => {
    const onResize = () => {
      setHeight(getWindowWidth());
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
    //eslint-disable-next-line
  }, []);

  if (!isMobile) {
    return height;
  } else {
    return window.screen.height - 150;
  }
}
