//* Base
import * as React from "react";

//* Lottie
import Lottie from "react-lottie";
import animationLoadingBlocks from "assets/Lotties/loading-blocks.json";

//* MUI
import { Box, Typography } from "@mui/material";

//* Hooks
import useDetectHeight from "utilities/Hooks/useDetectHeight.jsx";

//* Main
export default function LoadingBlocks() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationLoadingBlocks,
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
          height={250}
          width={250}
          isClickToPauseDisabled
        />
      </Box>
    </Box>
  );
}
