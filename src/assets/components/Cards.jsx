import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { Divider, Typography } from "@mui/material";

const BankAccounts = [
  {
    id: 1,
    Acctype: "Loan Accounts",
    AccNo: 130,
  },
  {
    id: 2,
    Acctype: "Saving Accounts",
    AccNo: 160,
  },
  {
    id: 3,
    Acctype: "Current Accounts",
    AccNo: 59,
  },
  {
    id: 4,
    Acctype: "Deposit Accounts",
    AccNo: 30,
  },
];

export default function Cards() {
  return (
    <Box sx={{ flexGrow: 1, marginTop: "70px" }}>
      <Grid container spacing={3}>
        {BankAccounts.map((acc) => (
          <Grid xs={12} md={3} key={acc.id}>
            <Box
              sx={{ marginTop: "12px" }}
              borderRadius={5}
              height={150}
              width
              boxShadow={3}
              padding={2}
            >
              <Typography  variant="body1" component="h3" gutterBottom>
                {acc.Acctype}
              </Typography>
              <Divider color="white" />

              <Typography
                variant="h3"
                align="center"
                p={2}
                component="h1"
                width
              >
                {acc.AccNo}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
