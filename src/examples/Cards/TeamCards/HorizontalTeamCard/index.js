// /**
// =========================================================
// * Material Kit 2 React - v2.1.0
// =========================================================

// * Product Page: https://www.creative-tim.com/product/material-kit-react
// * Copyright 2023 Creative Tim (https://www.creative-tim.com)

// Coded by www.creative-tim.com

//  =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// */

// // prop-types is a library for typechecking of props
// import PropTypes from "prop-types";

// // @mui material components
// import Card from "@mui/material/Card";
// import Grid from "@mui/material/Grid";

// // Material Kit 2 React components
// import MKBox from "components/MKBox";
// import MKTypography from "components/MKTypography";

// function HorizontalTeamCard({ image, name, position, description }) {
//   return (
//     <Card sx={{ mt: 3 }}>
//       <Grid container>
//         <Grid item xs={12} md={6} lg={4} sx={{ mt: -6 }}>
//           <MKBox width="100%" pt={2} pb={1} px={2}>
//             <MKBox
//               component="img"
//               src={image}
//               alt={name}
//               width="100%"
//               borderRadius="md"
//               shadow="lg"
//             />
//           </MKBox>
//         </Grid>
//         <Grid item xs={12} md={6} lg={8} sx={{ my: "auto" }}>
//           <MKBox pt={{ xs: 1, lg: 2.5 }} pb={2.5} pr={4} pl={{ xs: 4, lg: 1 }} lineHeight={1}>
//             <MKTypography variant="h5">{name}</MKTypography>
//             <MKTypography variant="h6" color={position.color} mb={1}>
//               {position.label}
//             </MKTypography>
//             <MKTypography variant="body2" color="text">
//               {description}
//             </MKTypography>
//           </MKBox>
//         </Grid>
//       </Grid>
//     </Card>
//   );
// }

// // Typechecking props for the HorizontalTeamCard
// HorizontalTeamCard.propTypes = {
//   image: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   position: PropTypes.shape({
//     color: PropTypes.oneOf([
//       "primary",
//       "secondary",
//       "info",
//       "success",
//       "warning",
//       "error",
//       "dark",
//       "light",
//     ]),
//     label: PropTypes.string.isRequired,
//   }).isRequired,
//   description: PropTypes.string.isRequired,
// };

// export default HorizontalTeamCard;
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { Box } from "@mui/material";

function ItemCard({ img, link, percentage, priceNew, priceOld, title }) {
  const handleClick = (link) => {
    console.log("link", link);
    window.open(link, "_blank");
  };

  return (
    <Card sx={{ mt: 3, cursor: "pointer" }} onClick={() => handleClick(link)}>
      <Grid container>
        {/* Discount Badge */}
        <Box
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            backgroundColor: "#ff9800",
            color: "#fff",
            px: 2,
            py: 0.5,
            borderRadius: "12px",
            fontSize: "0.9rem",
            fontWeight: "bold",
            zIndex: 2,
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          }}
        >
          {percentage}
        </Box>
        <Grid item xs={12} md={6} lg={4} sx={{ mt: -6 }}>
          <MKBox width="100%" pt={2} pb={1} px={2}>
            <MKBox
              component="img"
              src={img}
              alt={title}
              width="100%"
              borderRadius="md"
              shadow="lg"
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} md={6} lg={8} sx={{ my: "auto" }}>
          <MKBox pt={{ xs: 1, lg: 2.5 }} pb={2.5} pr={4} pl={{ xs: 4, lg: 1 }} lineHeight={1}>
            <MKTypography variant="h5">{title}</MKTypography>
            <MKTypography variant="body2" color="text" mb={0.5}>
              <s>{priceOld}</s>
            </MKTypography>
            <MKTypography variant="body1" color="success">
              {priceNew}
            </MKTypography>
          </MKBox>
        </Grid>
      </Grid>
    </Card>
  );
}

// Typechecking props for the ItemCard
ItemCard.propTypes = {
  img: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  percentage: PropTypes.string.isRequired,
  priceNew: PropTypes.string.isRequired,
  priceOld: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ItemCard;
