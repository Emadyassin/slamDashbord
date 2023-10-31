import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { Divider, Typography } from "@mui/material";

const BankAccounts = [
  {
    id: 5,
    Acctype: "Broken Deposit",
    AccNo: 23,
  },
  {
    id: 6,
    Acctype: "Frozen Savings",
    AccNo: 15,
  },
  {
    id: 7,
    Acctype: "Current Accounts",
    AccNo: 185,
  },
];

export default function Card2() {
  return (
    <Box >
        {/* <Grid container spacing={3} item={true} xs={12} md={3}>
            <Grid item={true} xs={12} md={12}></Grid> */}
      <Grid xs={12} container   >
        {BankAccounts.map((acc) => (
          <Grid xs={12} key={acc.id} item={true} spacing={3}>
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
