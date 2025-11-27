// components/Hero.jsx
"use client";

import { Box, Container, Typography, Button, Stack } from "@mui/material";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <Box sx={{ bgcolor: "transparent", py: { xs: 10, md: 18 } }}>
      <Container className="container" sx={{ textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: "2.1rem", md: "3.2rem" },
              lineHeight: 1.02,
              mb: 2,
            }}
          >
            Procura — RFP Response Automation for the Construction Industry.
          </Typography>

          <Typography
            variant="h6"
            sx={{ color: "text.secondary", mb: 4, maxWidth: 760, mx: "auto" }}
          >
            Speed up responses, reduce risk, and centralize knowledge. Procura
            analyzes RFPs, pulls answers from your Google Drive and OneDrive, and
            generates structured, compliant responses using a secure enterprise
            LLM.
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
            sx={{ mt: 2 }}
          >
            <Button
              variant="contained"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                bgcolor: "white",
                color: "black",
                boxShadow: "0 6px 24px rgba(96,165,250,0.08)",
                "&:hover": { bgcolor: "#f4f6fb" },
              }}
            >
              Request a Demo
            </Button>

            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: "rgba(255,255,255,0.12)",
                color: "white",
                px: 4,
                py: 1.5,
              }}
            >
              Join Waitlist
            </Button>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
}
