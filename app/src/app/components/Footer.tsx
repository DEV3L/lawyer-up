"use client";

import { Box } from "@mui/material";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bottom: 0, // Stick to the bottom
        zIndex: 1000, // Ensure it appears on top
        textAlign: "center",
        py: 2,
        mt: "auto",
        borderTop: "1px solid rgba(255,255,255,0.1)", // Adjusted for dark theme
        backgroundColor: "#161b22", // Matches site dark theme
        color: "#c9d1d9", // Light gray text
      }}
    >
      <div>
        &copy; {currentYear} <span class="italic">L@wyer Up</span> | Built by
        Justin Beall from Dev3loper AI |{" "}
        <a
          href="https://dev3loper.ai"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#8B4513", // Brown color matching the theme
            textDecoration: "none",
          }}
          onMouseEnter={(e) => (e.target.style.color = "#5a2e0b")} // Hover effect
          onMouseLeave={(e) => (e.target.style.color = "#8B4513")}
        >
          dev3loper.ai
        </a>
      </div>
    </Box>
  );
};

export default Footer;
