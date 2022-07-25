//* Base
import * as React from "react";

//* Lottie
import Lottie from "react-lottie";
import animationLoadingSpinnerText from "assets/Lotties/loading-spinner-text.json";

//* MUI
import { Box } from "@mui/material";

//* Hooks
import useDetectHeight from "utilities/Hooks/useDetectHeight.jsx";

//* Main
export default function LoadingSpinnerText() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationLoadingSpinnerText,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  //* Hooks
  const height = useDetectHeight();

  return (
    <Box
      sx={{
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        height: `calc(${height}px - 65px)`,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Lottie
          options={defaultOptions}
          resizeMode="cover"
          animationPosition="center"
          height={140}
          width={140}
          speed={1.4}
          isClickToPauseDisabled
        />
      </Box>
    </Box>
  );
}
