// components/Security.jsx
"use client";

import { Container, Grid, Box, Typography, Paper, List, ListItem, ListItemText } from "@mui/material";
import ShieldIcon from "@mui/icons-material/Security";

export default function Security() {
  return (
    <Container className="container" sx={{ pb: 6 }}>
      <Paper sx={{ p: 4, borderRadius: 2, border: "1px solid rgba(255,255,255,0.04)" }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <ShieldIcon sx={{ fontSize: 40, color: "primary.main" }} />
              <div>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>Security & Compliance</Typography>
                <Typography sx={{ color: "text.secondary" }}>Enterprise-grade controls and auditability.</Typography>
              </div>
            </Box>
          </Grid>

          <Grid item xs={12} md={8}>
            <List>
              <ListItem>
                <ListItemText primary="Data residency options" secondary="Choose region-specific storage (EU / US / CA)." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Access controls & SSO" secondary="SAML / OAuth / SCIM provisioning support." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Audit logs & versioning" secondary="Full change history for compliance and reviewers." />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
