// components/PricingCTA.jsx
"use client";

import { Container, Paper, Typography, Button, Box } from "@mui/material";

export default function PricingCTA() {
  return (
    <Container className="container" sx={{ pb: 6 }}>
      <Paper sx={{
        p: { xs: 3, md: 6 },
        textAlign: "center",
        borderRadius: 2,
        background: "linear-gradient(90deg, rgba(96,165,250,0.06), rgba(124,58,237,0.02))",
        border: "1px solid rgba(255,255,255,0.04)"
      }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
          Pricing that scales with your firm
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 4 }}>
          Request a demo for a tailored enterprise quote — pricing is based on usage, users, and data residency.
        </Typography>

        <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
          <Button variant="contained" size="large" sx={{ px: 4 }}>
            Request a Demo
          </Button>
          <Button variant="outlined" size="large" sx={{ px: 4, borderColor: "rgba(255,255,255,0.12)" }}>
            Join Waitlist
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
