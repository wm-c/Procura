"use client";

import { Box, Container } from "@mui/material";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Security from "../components/Security";
import Integrations from "../components/Integrations";
import PricingCTA from "../components/PricingCTA";
import Footer from "../components/Footer";
import PricingSection from "../components/PricingSection";

export default function Page() {
  return (
    <Box sx={{ bgcolor: "transparent", minHeight: "100vh" }}>
      <Hero />
      <Container className="container" sx={{ pt: 10 }}>
        <Features />
      </Container>

      <Box sx={{ pt: 12 }}>
        <HowItWorks />
      </Box>


      <Box sx={{ pt: 10 }}>
        <Integrations />
      </Box>

      <Box sx={{ pt: 10 }}>
        <PricingSection/>
      </Box>

      <Box sx={{ pt: 10 }}>
        <PricingCTA />
      </Box>

      <Footer />
    </Box>
  );
}
