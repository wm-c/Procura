// components/Footer.jsx
"use client";

import { Box, Container, Typography, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ borderTop: "1px solid rgba(255,255,255,0.04)", py: 6, mt: 10 }}>
      <Container className="container" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 2, flexWrap: "wrap" }}>
        <Typography sx={{ fontWeight: 700 }}>Procura</Typography>
        <Typography sx={{ color: "text.secondary" }}>© {new Date().getFullYear()} Procura — All rights reserved</Typography>
        <Box sx={{ display: "flex", gap: 3 }}>
          <Link href="#" sx={{ color: "text.secondary" }}>Privacy</Link>
          <Link href="#" sx={{ color: "text.secondary" }}>Terms</Link>
          <Link href="#" sx={{ color: "text.secondary" }}>Contact</Link>
        </Box>
      </Container>
    </Box>
  );
}
