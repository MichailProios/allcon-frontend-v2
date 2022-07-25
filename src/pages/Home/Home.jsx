//* Base
import * as React from "react";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";

//* Lottie
import Lottie from "react-lottie";
import animationAboutUs from "assets/Lotties/about-us.json";

//* Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

//* MUI
import { Box, Fade, Button } from "@mui/material";
import { Apartment } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import Image from "mui-image";

//* Hooks
import useDetectHeight from "utilities/Hooks/useDetectHeight.jsx";

//* Utility Functions
import cacheImages from "utilities/Functions/cacheImages.jsx";

//* Icons
import { Menu } from "@mui/icons-material";

//* Components
import LoadingSpinnerText from "components/LoadingSpinnerText/LoadingSpinnerText.jsx";
import { Typography } from "@mui/material";

//* Images
const lupton =
  "https://allconcontracting.com/image-resizing?&quality=90&height=3840&width=2160&sharpen=1&metadata=none&image=https://allconcontracting.com:2096/files/getFile/Projects/lupton-hall/10-23-1-22.jpg";
const elwood =
  "https://allconcontracting.com/image-resizing?&quality=90&height=3840&width=2160&sharpen=1&metadata=none&image=https://allconcontracting.com:2096/files/getFile/Projects/OGS_Elwood/20220412_120728229_iOS.jpg";
const policeStation =
  "https://allconcontracting.com/image-resizing?&quality=90&height=3840&width=2160&sharpen=1&metadata=none&image=https://allconcontracting.com:2096/files/getFile/Projects/police-station-email/police-station-05.jpg";
const nold =
  "https://allconcontracting.com/image-resizing?&quality=90&height=3840&width=2160&sharpen=1&metadata=none&image=https://allconcontracting.com:2096/files/getFile/Projects/nold/11-6-21-2.webp";
const apt724 =
  "https://allconcontracting.com/image-resizing?&quality=90&height=3840&width=2160&sharpen=1&metadata=none&image=https://allconcontracting.com:2096/files/getFile/Projects/724/3-8-20.7.jpg";
const greatneckRoofs =
  "https://allconcontracting.com/image-resizing?&quality=90&height=3840&width=2160&sharpen=1&metadata=none&image=https://allconcontracting.com:2096/files/getFile/Projects/greatneck-terrace-roofs/11-13-21-5.jpg";

//* Styled Components
const StyledImage = styled(Image)(({ theme }) => ({
  userDrag: "none",
  userSelect: "none",
  pointerEvents: "none",
  filter: "brightness(90%)",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: "0.2em",
  fontSize: "1em",
  textShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
  color: "#fff",
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1em",
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  margin: 0,
  width: "100%",
  wordWrap: "break-word",
  textAlign: "center",
  userSelect: "none",
  userDrag: "none",
  textTransform: "uppercase",
  letterSpacing: "0.04em",
  fontSize: "2.3em",
  textShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",

  [theme.breakpoints.down("lg")]: { fontSize: "2.0em" },

  [theme.breakpoints.down("md")]: {
    fontSize: "1.5em",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "1.4em",
  },
}));

//* Main
export default function Home() {
  //* Local State
  const [loading, setLoading] = React.useState(true);

  //* Hooks
  const height = useDetectHeight();

  React.useEffect(() => {
    cacheImages([lupton, elwood, policeStation, nold, apt724, greatneckRoofs])
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setLoading(true);
      });
  }, []);

  //* Lotties
  const aboutUSLottie = {
    loop: true,
    autoplay: true,
    animationData: animationAboutUs,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  if (loading) {
    return (
      <Box sx={{ position: "relative" }}>
        <Swiper
          spaceBetween={10}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, EffectFade, Pagination]}
          pagination={{
            dynamicBullets: true,
          }}
          effect={"fade"}
          allowTouchMove={false}
          style={{
            height: `calc(${height}px - 65px)`,

            "--swiper-navigation-color": "#008B8B",
            "--swiper-pagination-color": "#008B8B",
          }}
        >
          <SwiperSlide draggable="false" style={{}}>
            <StyledImage
              fit="cover"
              width="100%"
              height={`calc(${height}px - 65px)`}
              draggable="false"
              duration={350}
              src={lupton}
            />
          </SwiperSlide>
          <SwiperSlide>
            <StyledImage
              fit="cover"
              width="100%"
              height={`calc(${height}px - 65px)`}
              draggable="false"
              duration={150}
              src={elwood}
            />
          </SwiperSlide>
          <SwiperSlide>
            <StyledImage
              fit="cover"
              width="100%"
              height={`calc(${height}px - 65px)`}
              draggable="false"
              duration={150}
              src={policeStation}
            />
          </SwiperSlide>
          <SwiperSlide>
            <StyledImage
              fit="cover"
              width="100%"
              height={`calc(${height}px - 65px)`}
              draggable="false"
              duration={150}
              src={nold}
            />
          </SwiperSlide>
          <SwiperSlide>
            <StyledImage
              fit="cover"
              width="100%"
              height={`calc(${height}px - 65px)`}
              draggable="false"
              duration={150}
              src={apt724}
            />
          </SwiperSlide>
          <SwiperSlide>
            <StyledImage
              fit="cover"
              width="100%"
              height={`calc(${height}px - 65px)`}
              draggable="false"
              duration={150}
              src={greatneckRoofs}
            />
          </SwiperSlide>
        </Swiper>

        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            zIndex: "600",
          }}
        >
          <Fade
            in={true}
            style={{
              transitionDelay: `1000ms`,
            }}
            timeout={{ appear: 0, enter: 400 }}
          >
            <StyledTypography sx={{ userSelect: "none" }}>
              Infinite Possibilities through Integrated Solutions
            </StyledTypography>
          </Fade>
          <Fade
            in={true}
            style={{
              transitionDelay: `2000ms`,
            }}
            timeout={{ appear: 0, enter: 400 }}
          >
            <StyledButton
              color="secondary"
              variant="outlined"
              startIcon={<Apartment />}
              // onClick={() => navigate("/Projects")}
            >
              Explore our Projects
            </StyledButton>
          </Fade>
        </Box>
      </Box>
    );
  } else {
    return <LoadingSpinnerText />;
  }
}
