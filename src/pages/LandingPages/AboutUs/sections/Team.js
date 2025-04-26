/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

import { useEffect, useState } from "react";

function Team({ items }) {
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

export default Team;
