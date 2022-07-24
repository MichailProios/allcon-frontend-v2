//* Base
import * as React from "react";
import { isMobile } from "react-device-detect";
import { Link, useLocation } from "react-router-dom";

//* MUI
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Tabs,
  Tab,
  useScrollTrigger,
  Slide,
  Drawer,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "mui-image";

//* Icons
import {
  Menu,
  Home,
  MapsHomeWork,
  LibraryBooks,
  Contacts,
  Feed,
  ChevronRight,
} from "@mui/icons-material";

//* Images
const companyLogo =
  "https://allconcontracting.com/image-resizing?&quality=100&height=1920&width=1080&metadata=none&image=https://allconcontracting.com:2096/files/getFile/Logos/logo-new.png";

//* Styled Components
const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    left: 0,
  },
});

const StyledTabHorizontal = styled(Tab)(({ theme }) => ({
  width: "10em",
  margin: "0em 0.2em 0 0.2em",
}));

const StyledTabVertical = styled(Tab)(({ theme }) => ({
  width: "100%",
  margin: "0.2em 0 0.2em 0",
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  minHeight: "64px",
  height: "64px",
  justifyContent: "flex-start",
}));

//* Utility Functions
const HideOnScroll = ({ children }) => {
  const trigger = useScrollTrigger({
    // target: document.getElementById("contentContainer"),
  });
  if (isMobile) {
    return (
      <Slide direction={"down"} in={true}>
        {children}
      </Slide>
    );
  } else {
    return (
      <Slide direction={"down"} in={!trigger}>
        {children}
      </Slide>
    );
  }
};

//* Main
export default function Navbar() {
  //* Local State
  const [activeTab, setActiveTab] = React.useState(0);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const location = useLocation();

  //* Set tabs on load
  React.useEffect(() => {
    const pathnames = location.pathname.toLowerCase();

    switch (true) {
      case pathnames === "/":
        setActiveTab(0);

        break;
      case pathnames.startsWith("/home"):
        setActiveTab(0);

        break;
      case pathnames.startsWith("/about"):
        setActiveTab(1);

        break;
      case pathnames.startsWith("/projects"):
        setActiveTab(2);

        break;
      case pathnames.startsWith("/testimonies"):
        setActiveTab(3);

        break;
      case pathnames.startsWith("/contacts"):
        setActiveTab(4);

        break;
      default:
        break;
    }
  }, [location]);

  //* Handlers
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const toggleDrawer = () => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerOpen(!drawerOpen);
  };

  return (
    <HideOnScroll>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "#fff",
          minHeight: "64px",
          height: "64px",
          userSelect: "none",
          userDrag: "none",
          textDecoration: "none",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            minHeight: "64px",
            height: "64px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.1em",
              paddingLeft: {
                md: 0,
                lg: "5em",
              },
            }}
          >
            <Image
              src={companyLogo}
              draggable="false"
              shift="top"
              distance="2rem"
              duration={2000}
              shiftDuration={300}
              height="auto"
              width="3.2em"
              sx={{ userSelect: "none" }}
            />
            <Typography
              sx={{
                textDecoration: "none",
                userSelect: "none",
                userDrag: "none",
                color: "black",
                letterSpacing: ".1rem",
                fontSize: "1.1em",
                fontSmooth: "5em",
                fontFamily: "EB Garamond , serif !important",
              }}
            >
              ALL•CON
            </Typography>
            &nbsp;
            <Typography
              sx={{
                textDecoration: "none",
                userSelect: "none",
                userDrag: "none",
                color: "black",
                letterSpacing: ".1rem",
                fontSmooth: "5em",
                fontSize: "1.1em",
                fontFamily: "EB Garamond , serif !important",

                display: { xs: "none", md: "flex" },
              }}
            >
              Contracting
            </Typography>
          </Box>
          <Box
            sx={{
              visibility: {
                xs: "hidden",
                sm: "hidden",
                lg: "visible",
              },
              width: {
                xs: 0,
                sm: 0,
                lg: "auto",
              },
              height: {
                xs: 0,
                sm: 0,
                lg: "auto",
              },
              paddingRight: {
                md: 0,
                lg: "5em",
              },
              alignItems: "center",
            }}
          >
            <Tabs value={activeTab} onChange={handleTabChange}>
              <StyledTabHorizontal
                component={Link}
                draggable="false"
                to="/Home"
                label={
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5em",
                    }}
                  >
                    <Home />
                    Home
                  </Box>
                }
              />
              <StyledTabHorizontal
                component={Link}
                draggable="false"
                to="/About"
                label={
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5em",
                    }}
                  >
                    <Feed />
                    About
                  </Box>
                }
              />

              <StyledTabHorizontal
                component={Link}
                draggable="false"
                to="/Projects"
                label={
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5em",
                    }}
                  >
                    <MapsHomeWork />
                    Projects
                  </Box>
                }
              />
              <StyledTabHorizontal
                component={Link}
                draggable="false"
                to="/Resources"
                label={
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5em",
                    }}
                  >
                    <LibraryBooks />
                    Resources
                  </Box>
                }
              />

              <StyledTabHorizontal
                component={Link}
                draggable="false"
                to="/Contacts"
                label={
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5em",
                    }}
                  >
                    <Contacts />
                    Contacts
                  </Box>
                }
              />
            </Tabs>
          </Box>

          <IconButton
            size="large"
            edge="start"
            onClick={toggleDrawer()}
            sx={{ display: { lg: "none" } }}
          >
            <Menu />
          </IconButton>

          <Drawer anchor={"right"} open={drawerOpen} onClose={toggleDrawer()}>
            <Box
              sx={{ width: "250px" }}
              onClick={toggleDrawer()}
              onKeyDown={toggleDrawer()}
            >
              <DrawerHeader>
                <IconButton onClick={toggleDrawer()}>
                  <ChevronRight />
                </IconButton>
              </DrawerHeader>
              <Divider />
              <StyledTabs
                orientation="vertical"
                value={activeTab}
                onChange={handleTabChange}
              >
                <StyledTabVertical
                  component={Link}
                  draggable="false"
                  to="/Home"
                  label={
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.5em",
                      }}
                    >
                      <Home />
                      Home
                    </Box>
                  }
                />
                <StyledTabVertical
                  component={Link}
                  draggable="false"
                  to="/About"
                  label={
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.5em",
                      }}
                    >
                      <Feed />
                      About
                    </Box>
                  }
                />

                <StyledTabVertical
                  component={Link}
                  draggable="false"
                  to="/Projects"
                  label={
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.5em",
                      }}
                    >
                      <MapsHomeWork />
                      Projects
                    </Box>
                  }
                />
                <StyledTabVertical
                  component={Link}
                  draggable="false"
                  to="/Resources"
                  label={
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.5em",
                      }}
                    >
                      <LibraryBooks />
                      Resources
                    </Box>
                  }
                />
                <StyledTabVertical
                  component={Link}
                  draggable="false"
                  to="/Contacts"
                  label={
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.5em",
                      }}
                    >
                      <Contacts />
                      Contacts
                    </Box>
                  }
                />
              </StyledTabs>
            </Box>
          </Drawer>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}
