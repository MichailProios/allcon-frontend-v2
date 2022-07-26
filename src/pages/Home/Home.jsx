//* Base
import * as React from "react";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";

//* Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectFade,
  Autoplay,
  EffectCreative,
  Pagination,
  Navigation,
} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/effect-creative";

//* MUI
import {
  Box,
  Fade,
  Button,
  Grid,
  Paper,
  Stack,
  Divider,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Apartment } from "@mui/icons-material";
import { styled, useTheme } from "@mui/material/styles";
import Image from "mui-image";

//* Hooks
import useDetectHeight from "utilities/Hooks/useDetectHeight.jsx";

//* Utility Functions
import cacheImages from "utilities/Functions/cacheImages.jsx";

//* Icons
import { Menu } from "@mui/icons-material";

//* Components
import LoadingSpinnerText from "components/LoadingSpinnerText/LoadingSpinnerText.jsx";
import Footer from "components/Footer/Footer.jsx";

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
const StyledCoverImage = styled(Image)(({ theme }) => ({
  userDrag: "none",
  userSelect: "none",
  pointerEvents: "none",
  filter: "brightness(90%)",
}));

const StyledCarouselImage = styled(Image)(({ theme }) => ({
  userDrag: "none",
  userSelect: "none",
  pointerEvents: "none",
  filter: "brightness(90%)",
  borderRadius: theme.shape.borderRadius,
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

const StyledQuoteTypography = styled(Typography)(({ theme }) => ({
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
}));

const StyledHeaderTypography = styled(Typography)(({ theme }) => ({
  userSelect: "none",
  userDrag: "none",
}));

const StyledTestimonyTypography = styled(Typography)(({ theme }) => ({
  userSelect: "none",
  userDrag: "none",
}));

const StyledSection = styled(Box)(({ theme }) => ({
  maxWidth: "1500px",
  padding: "10em 1em 10em 1em",
  width: "100%",
  margin: "0 auto ",
}));

const StyleSectionContainer = styled(Box)(({ theme }) => ({
  width: "100%",
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

  //* Media Queries
  const theme = useTheme();

  const matchesMDDown = useMediaQuery(theme.breakpoints.down("md"));

  if (!loading) {
    return (
      <Box>
        <Box sx={{ position: "relative" }}>
          <Swiper
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, EffectFade]}
            effect={"fade"}
            allowTouchMove={false}
            style={{
              height: `calc(${height}px - 35px)`,

              "--swiper-navigation-color": "#008B8B",
              "--swiper-pagination-color": "#008B8B",
            }}
          >
            <SwiperSlide>
              <StyledCoverImage
                fit="cover"
                width="100%"
                draggable="false"
                duration={150}
                src={lupton}
              />
            </SwiperSlide>
            <SwiperSlide>
              <StyledCoverImage
                fit="cover"
                width="100%"
                draggable="false"
                duration={150}
                src={elwood}
              />
            </SwiperSlide>
            <SwiperSlide>
              <StyledCoverImage
                fit="cover"
                width="100%"
                draggable="false"
                duration={150}
                src={policeStation}
              />
            </SwiperSlide>
            <SwiperSlide>
              <StyledCoverImage
                fit="cover"
                width="100%"
                draggable="false"
                duration={150}
                src={nold}
              />
            </SwiperSlide>
            <SwiperSlide>
              <StyledCoverImage
                fit="cover"
                width="100%"
                draggable="false"
                duration={150}
                src={apt724}
              />
            </SwiperSlide>
            <SwiperSlide>
              <StyledCoverImage
                fit="cover"
                width="100%"
                draggable="false"
                duration={150}
                src={greatneckRoofs}
              />
            </SwiperSlide>
          </Swiper>
          <div className="custom-shape-divider-bottom-1658723164">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>

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
              <StyledQuoteTypography sx={{ userSelect: "none" }}>
                Infinite Possibilities through Integrated Solutions
              </StyledQuoteTypography>
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
        <Stack
          direction="column"
          alignItems="center"
          justifyItems="center"
          divider={<Divider flexItem />}
          // sx={{ padding: "10em 1em 10em 1em" }}
        >
          <StyleSectionContainer>
            <StyledSection>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                  <StyledHeaderTypography
                    variant="h4"
                    sx={{ paddingBottom: "0.4em" }}
                  >
                    Latest Developments
                  </StyledHeaderTypography>
                  <StyledHeaderTypography
                    variant="h5"
                    sx={{ paddingBottom: "0.5em" }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam et ultricies turpis, nec vehicula risus. Suspendisse
                    vehicula sem vel elit vestibulum porttitor. Nam in magna sed
                    diam dignissim porta at a augue. Suspendisse vehicula sem
                    vel elit vestibulum porttitor. Nam in magna sed diam
                    dignissim porta at a augue.
                  </StyledHeaderTypography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
                  <Swiper
                    spaceBetween={10}
                    autoplay={{
                      delay: 6000,
                      disableOnInteraction: true,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    navigation={true}
                    effect={"slide"}
                    loop
                    slidesPerView={isMobile || matchesMDDown ? 1 : 2}
                    style={{
                      height: "22em",

                      "--swiper-navigation-color": "#008B8B",
                      "--swiper-pagination-color": "#008B8B",
                    }}
                  >
                    <SwiperSlide>
                      <StyledCarouselImage
                        fit="cover"
                        draggable="false"
                        duration={350}
                        src={lupton}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <StyledCarouselImage
                        fit="cover"
                        draggable="false"
                        duration={150}
                        src={elwood}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <StyledCarouselImage
                        fit="cover"
                        draggable="false"
                        duration={150}
                        src={policeStation}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <StyledCarouselImage
                        fit="cover"
                        draggable="false"
                        duration={350}
                        src={lupton}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <StyledCarouselImage
                        fit="cover"
                        draggable="false"
                        duration={150}
                        src={elwood}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <StyledCarouselImage
                        fit="cover"
                        draggable="false"
                        duration={150}
                        src={policeStation}
                      />
                    </SwiperSlide>
                  </Swiper>
                </Grid>
              </Grid>
            </StyledSection>
          </StyleSectionContainer>

          <StyleSectionContainer
            sx={{
              backgroundColor: "#f3f3f3",
            }}
          >
            <StyledSection>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <StyledHeaderTypography
                    variant="h4"
                    sx={{ paddingBottom: "0.2em" }}
                  >
                    Testinomials
                  </StyledHeaderTypography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Swiper
                    autoplay={{
                      delay: 8000,
                      disableOnInteraction: false,
                    }}
                    allowTouchMove={false}
                    loop
                    modules={[Autoplay, Pagination, Navigation, EffectFade]}
                    effect={"fade"}
                  >
                    <SwiperSlide>
                      <Paper
                        sx={{ backgroundColor: "#f3f3f3", height: "10em" }}
                      >
                        <StyledTestimonyTypography variant="h5">
                          “Your gift of supplies for the renovation of AHRC’s
                          Astoria’s Blue Feather Head Start program helped
                          improve the educational experience for many small
                          children who face big challenges every day.”
                          <br /> <br />
                          Pamela Richard, Director of Development – AHRC New
                          York
                        </StyledTestimonyTypography>
                      </Paper>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Paper
                        sx={{ backgroundColor: "#f3f3f3", height: "10em" }}
                      >
                        <StyledTestimonyTypography variant="h5">
                          “We appreciate your contribution of the utility and
                          storage building for the students at Mepham High
                          School.”
                          <br /> <br />
                          Nancy Kaplan, Ed.D., President, Board of Education –
                          Bellmore Merrick Central Highschool District
                        </StyledTestimonyTypography>
                      </Paper>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Paper
                        sx={{ backgroundColor: "#f3f3f3", height: "10em" }}
                      >
                        <StyledTestimonyTypography variant="h5">
                          “Most contractors I’ve worked with are usually focused
                          on the next job as they are working on the current
                          one. This is definitely not the case with ALL
                          CON….anyone who chooses to work with them will be very
                          happy and extremely satisfied with the experience and
                          results.”
                          <br /> <br />
                          Barry H. Greene, Cooperative President – 20 East 9th
                          St.
                        </StyledTestimonyTypography>
                      </Paper>
                    </SwiperSlide>
                  </Swiper>
                </Grid>
              </Grid>
            </StyledSection>
          </StyleSectionContainer>

          <StyleSectionContainer>
            <StyledSection></StyledSection>
          </StyleSectionContainer>
        </Stack>

        <Footer />
      </Box>
    );
  } else {
    return <LoadingSpinnerText />;
  }
}
