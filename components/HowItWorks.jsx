// components/HowItWorks.jsx
"use client";

import { Container, Grid, Box, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Upload or Link RFP",
    desc: "Upload RFPs or link a folder. Procura auto-detects attachments and question sections.",
  },
  {
    title: "Analyze & Map",
    desc: "Procura analyzes questions, finds answers in your Drive/OneDrive, and suggests best-fit replies.",
  },
  {
    title: "Built for The Construction Industry",
    desc: "Sync with the most popular estimation software and CRM tools to ensure accurate, up-to-date responses.",
  },
  {
    title: "Export & Submit",
    desc: "Export structured responses to any format or submit directly through your submission workflow.",
  },
];

export default function HowItWorks() {
  return (
    <Container className="container" sx={{ pb: 6 }}>
      <Typography variant="h3" sx={{ textAlign: "center", mb: 4, fontWeight: 700 }}>
        How Procura Works
      </Typography>

      <Grid container spacing={3}>
        {steps.map((s, i) => (
          <Grid item xs={12} md={6} key={i}>
            <motion.div
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Paper sx={{ p: 3, borderRadius: 2, border: "1px solid rgba(255,255,255,0.04)" }}>
                <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
                  <Box sx={{
                    width: 44, height: 44, borderRadius: 2,
                    bgcolor: "rgba(255,255,255,0.04)",
                    display: "grid", placeItems: "center", fontWeight: 700, color: "primary.main"
                  }}>{i + 1}</Box>

                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>{s.title}</Typography>
                    <Typography sx={{ color: "text.secondary", mt: 1 }}>
                      {s.desc}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
