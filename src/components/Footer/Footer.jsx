//* Base
import React from "react";

//* MUI
import { Box, Paper, Typography, Container } from "@mui/material";
import Image from "mui-image";

//* Images
const companyLogo =
  "https://allconcontracting.com/image-resizing?&quality=100&height=1920&width=1080&metadata=none&image=https://allconcontracting.com:2096/files/getFile/Logos/logo-new.png";

//* Main
export default function Footer() {
  return (
    <Paper square variant="outlined">
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my: 1,
          }}
        >
          <div>
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
          </div>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
          }}
        >
          <Typography variant="caption" color="initial">
            ALL•CON Contracting {new Date().getFullYear()}
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
}
