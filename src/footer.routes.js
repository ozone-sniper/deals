import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo-ct-dark.png";

export default {
  brand: {
    name: "Ozone.bg Sniper by Smisul.daa",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/smisulda",
    },
    {
      icon: <InstagramIcon />,
      link: "https://www.instagram.com/smisul.da/",
    },
  ],
  menus: [
    // {
    //   name: "company",
    //   items: [{ name: "lorem", href: "https://lorem.ipsum" }],
    // },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      © 2025 Ozone.bg Sniper от Smisul.daaa. Всички права запазени
    </MKTypography>
  ),
};
