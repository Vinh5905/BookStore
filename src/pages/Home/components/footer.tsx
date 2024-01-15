import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export function Footer() {
  return (
    <div style={{ marginTop: "20px" }}>
      <Typography variant="h4" align="center">
        New Release Books
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src="https://i.ibb.co/zVvkQZp/abc.png"></img>
          <h3>$ 40.00</h3>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src="https://i.ibb.co/QjTmgG4/abc.png"></img>
          <h3>$ 40.00</h3>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src="https://i.ibb.co/nc3vh4z/abc.png"></img>
          <h3>$ 40.00</h3>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src="https://i.ibb.co/ccGK7Y1/abc.png"></img>
          <h3> $40.00</h3>
        </Box>
      </Box>
    </div>
  );
}
