//Base
import * as React from "react";
import { isMobile } from "react-device-detect";

//MUI
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

//Icons
import {
  Menu,
  Home,
  MapsHomeWork,
  LibraryBooks,
  Contacts,
  Feed,
  ChevronRight,
} from "@mui/icons-material";

//Images
const companyLogo =
  "https://allconcontracting.com/image-resizing?&quality=100&height=1920&width=1080&metadata=none&image=https://allconcontracting.com:2096/files/getFile/Logos/logo-new.png";

//Styled Components
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

//Scroll
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

export default function Navbar() {
  const [activeTab, setActiveTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const [drawerOpen, setDrawerOpen] = React.useState(false);

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
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{
            backgroundColor: "#fff",
            minHeight: "64px",
            height: "64px",
            userSelect: "none",
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
                showLoading
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

                  display: { xs: "none", md: "flex" },
                }}
              >
                Contracting
              </Typography>
            </Box>
            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  lg: "flex",
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
                  variant="fullWidth"
                  centered
                  value={activeTab}
                  onChange={handleTabChange}
                >
                  <StyledTabVertical
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
      </Box>
    </HideOnScroll>
  );
}
