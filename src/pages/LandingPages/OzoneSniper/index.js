import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import Deals from "pages/LandingPages/OzoneSniper/sections/Deals";
import routes from "routes";
import footerRoutes from "footer.routes";
import bgImage from "assets/images/bg-about-us.jpg";
import { useEffect, useState } from "react";

function OzoneSniper(category) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems([]);
    console.log("fetching");
    const url = `${process.env.PUBLIC_URL}/items.json`; // 👈
    fetch(url)
      .then((res) => res.json())
      .then((i) => setItems(i))
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  console.log("items", items);
  console.log("category", category);
  return (
    <>
      <DefaultNavbar
        routes={routes}
        // action={{
        //   type: "external",
        //   route: "https://lorem.ipsum",
        //   label: "free downloads",
        //   color: "default",
        // }}
        transparent
        light
      />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba } }) =>
            `${linearGradient(
              rgba("#000000", 0.7), // black with 50% opacity
              rgba("#000000", 0.7) // black with 50% opacity
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <div style={{ background: "black", padding: "20px", borderRadius: "15px" }}>
              <MKTypography
                variant="h1"
                color="white"
                sx={({ breakpoints, typography: { size } }) => ({
                  [breakpoints.down("md")]: {
                    fontSize: size["3xl"],
                  },
                })}
              >
                {`"${category?.category?.title}"`}
              </MKTypography>
              {items?.updatedAt && (
                <MKTypography variant="g6" color="white">
                  {`Последно обновен: ${new Date(items.updatedAt).toLocaleString()}`}
                </MKTypography>
              )}
            </div>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Deals items={items[category?.category?.itemKey]} />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default OzoneSniper;
