// components/Features.jsx
"use client";

import { Grid, Box, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";
import ArticleIcon from "@mui/icons-material/Article";
import CloudSyncIcon from "@mui/icons-material/CloudSync";
import ConstructionIcon from "@mui/icons-material/Construction";

const features = [
  {
    icon: <ArticleIcon fontSize="large" />,
    title: "AI Document Analysis",
    desc: "Automatically parse RFPs, extract questions, and map answers to your knowledge base with high accuracy.",
  },
  {
    icon: <CloudSyncIcon fontSize="large" />,
    title: "Cloud Integrations",
    desc: "Seamlessly connect Google Drive and OneDrive to surface authoritative content when generating responses.",
  },
  {
    icon: <ConstructionIcon fontSize="large" />,
    title: "Integrations with Popular Construction Software",
    desc: "Access even more of your information to help make your RFP responses even smarter.",
  },
];

export default function Features() {
  return (
    <Grid container spacing={4}>
      {features.map((f, i) => (
        <Grid item xs={12} md={4} key={i}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            viewport={{ once: true }}
          >
            <Paper
              elevation={0}
              sx={{
                p: 4,
                background: "linear-gradient(180deg, rgba(255,255,255,0.02), transparent)",
                border: "1px solid rgba(255,255,255,0.04)",
                borderRadius: 2,
                minHeight: 180,
              }}
            >
              <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
                <Box sx={{ fontSize: 36, color: "primary.main" }}>{f.icon}</Box>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    {f.title}
                  </Typography>
                  <Typography sx={{ color: "text.secondary", mt: 1 }}>
                    {f.desc}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );
}
