import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

function Deals({ items }) {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        {items?.map}
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              {`Намалени артикули`}
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          {items?.map((item) => {
            return (
              <Grid item xs={12} lg={6} key={item.title}>
                <MKBox mb={1}>
                  <HorizontalTeamCard
                    img={item.img}
                    title={item.title}
                    link={item.link}
                    priceOld={item.priceOld}
                    priceNew={item.priceNew.split(".")[0]}
                    percentage={item.percentage}
                  />
                </MKBox>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Deals;
