// components/Integrations.jsx
"use client";

import { Container, Box, Typography, Grid, Paper } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import MicrosoftIcon from "@mui/icons-material/Cloud"; // symbolic
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";

const integrations = [
  { name: "Google Drive", icon: <GoogleIcon />, desc: "Deep file linking and selective folder access." },
  { name: "OneDrive", icon: <MicrosoftIcon />, desc: "Enterprise OneDrive integration & permissions sync." },
  { name: "Cohere", icon: <IntegrationInstructionsIcon />, desc: "Enterprise LLM for controlled, explainable generation." },
];

export default function Integrations() {
  return (
    <Container className="container" sx={{ pb: 6 }}>
      <Typography variant="h4" sx={{ textAlign: "center", mb: 4, fontWeight: 700 }}>
        Integrations
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {integrations.map((it, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Paper sx={{ p: 3, textAlign: "center", borderRadius: 2, border: "1px solid rgba(255,255,255,0.04)" }}>
              <Box sx={{ fontSize: 34, color: "primary.main", mb: 1 }}>{it.icon}</Box>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>{it.name}</Typography>
              <Typography sx={{ color: "text.secondary", mt: 1 }}>{it.desc}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
