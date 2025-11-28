"use client";

import { Box, Typography, Button, Grid, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";

const MotionCard = motion(Card);

export default function PricingSection() {
  const pricing = [
    {
      title: "Pay-As-You-Go",
      price: "$150",
      period: "per RFP",
      description: "Flexible usage. Perfect for firms with light or irregular RFP workloads.",
      highlighted: false,
    },
    {
      title: "Professional",
      price: "$200",
      period: "per month • up to 15 RFPs",
      description: "Ideal for growing teams that want predictable spend and automation.",
      highlighted: true, // Highlighted middle tier
    },
    {
      title: "Enterprise",
      price: "$600",
      period: "per month • unlimited RFPs",
      description: "Unlimited scale, maximum efficiency, and complete workflow automation.",
      highlighted: false,
    },
  ];

  return (
    <Box
      sx={{
        py: 12,
        px: 4,
        background: "radial-gradient(circle at top, #1c1c1c, #0d0d0d)",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          mb: 2,
          fontWeight: 700,
          color: "white",
        }}
      >
        Pricing
      </Typography>

      <Typography
        variant="subtitle1"
        sx={{
          textAlign: "center",
          mb: 8,
          color: "rgba(255,255,255,0.7)",
        }}
      >
        Simple, transparent pricing built for professional service teams.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {pricing.map((tier, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <MotionCard
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              sx={{
                background:
                  tier.highlighted
                    ? "linear-gradient(145deg, #ffffff12, #ffffff08)"
                    : "linear-gradient(145deg, #1a1a1a, #111)",
                borderRadius: 4,
                border: tier.highlighted
                  ? "1px solid rgba(255,255,255,0.3)"
                  : "1px solid rgba(255,255,255,0.1)",
                boxShadow: tier.highlighted
                  ? "0px 0px 20px rgba(255,255,255,0.15)"
                  : "0px 0px 10px rgba(0,0,0,0.5)",
                height: "100%",
                p: 1,
              }}
            >
              <CardContent sx={{ textAlign: "center", color: "white" }}>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 700, mb: 2 }}
                >
                  {tier.title}
                </Typography>

                <Typography variant="h3" sx={{ fontWeight: 800 }}>
                  {tier.price}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ mb: 3, color: "rgba(255,255,255,0.6)" }}
                >
                  {tier.period}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{ mb: 4, color: "rgba(255,255,255,0.7)" }}
                >
                  {tier.description}
                </Typography>

                <Button
                  variant={tier.highlighted ? "contained" : "outlined"}
                  sx={{
                    width: "100%",
                    borderRadius: 2,
                    py: 1.2,
                    fontWeight: 600,
                    background: tier.highlighted ? "white" : "transparent",
                    color: tier.highlighted ? "black" : "white",
                    borderColor: "rgba(255,255,255,0.3)",
                    "&:hover": {
                      background: tier.highlighted
                        ? "#e5e5e5"
                        : "rgba(255,255,255,0.1)",
                    },
                  }}
                >
                  Get Started
                </Button>
              </CardContent>
            </MotionCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
