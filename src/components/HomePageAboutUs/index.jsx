import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import about_img_1 from "../../assets/About_img_1.png";
import about_img_2 from "../../assets/About_img_2.png";
import about_img_3 from "../../assets/About_img_3.png";
import about_img_1_phn from "../../assets/About_img_phn_1.png";
import about_img_3_phn from "../../assets/About_img_3_ph.png";

export default function HomePageAboutUs() {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate("/aboutus");
  };

  return (
    <Box
      sx={{
        background: "rgba(255, 162, 215, 1)",
        borderRadius: { md: "0px 0px 0px 351px", xs: "0 0 0 202px" },
        position: "relative",
        padding: "40px 0",
        overflow: "hidden",
        textAlign: "center",
        height: "90vh",
        pt: { md: 15, xs: 20 },
        pb: { md: 20, xs: 15 },
      }}
    >
      <Box
        sx={{
          maxWidth: { md: "50%", xs: "85%" },
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
          mt: 20,
        }}
      >
        <Typography
          sx={{
            fontFamily: "Sora",
            fontSize: { md: "48px", xs: "20px" },
            fontWeight: 700,
            color: "rgba(55, 55, 55, 1)",
            pb: 2,
            maxWidth: "90%",
            textAlign: "center",
            margin: "0 auto",
          }}
        >
          Founded to{" "}
          <span
            style={{
              fontFamily: "DM Serif Text",
              fontStyle: "italic",
              fontWeight: 400,
              color: "rgba(255, 255, 255, 1)",
            }}
          >
            uplift
          </span>{" "}
          underserved communities
        </Typography>
        <Typography
          sx={{
            fontFamily: "Sora",
            fontSize: { md: "20px", xs: "16px" },
            fontWeight: 400,
            color: "rgba(55, 55, 55, 1)",
            lineHeight: { md: "25.2px", xs: "20.16px" },
            mb: 3,
          }}
        >
          WarriorsWithoutCause is a PAN India{" "}
          <span style={{ fontWeight: 700 }}>youth-led NGO</span> driven by the
          belief that “We don’t need a cause to make a change.” We've
          transformed lives with an{" "}
          <span style={{ fontWeight: 700 }}>army of over 350 warriors</span>{" "}
          through impactful programs, health camps, educational workshops across
          India.
        </Typography>
        <Button
          sx={{
            borderRadius: "37px",
            p: "10px 20px",
            fontFamily: "Sora",
            fontSize: "16px",
            fontWeight: 400,
            backgroundColor: "rgba(41, 41, 41, 1)",
            color: "white",
            textTransform: "uppercase",
            display: { xs: "none", md: "block" },
            margin: "0 auto",
          }}
          onClick={handleLearnMoreClick}
        >
          Learn More
        </Button>
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: "60px",
          zIndex: 0,
          display: { xs: "none", md: "flex" },
        }}
      >
        <img src={about_img_1} alt="Warriors at Work" />
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: "30px",
          // left: "-150px",
          zIndex: 0,
          display: { xs: "flex", md: "none" },
        }}
      >
        <img src={about_img_1_phn} alt="Warriors at Work (Phone)" />
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: "-10px",
          left: "150px",
          zIndex: 0,
          display: { xs: "none", md: "flex" },
        }}
      >
        <img src={about_img_3} alt="Community Support" />
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: "555px",
          right: "-230px",
          zIndex: 0,
          display: { xs: "flex", md: "none" },
        }}
      >
        <img src={about_img_3_phn} alt="Meet the Team (Phone)" />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "450px",
          right: "0px",
          zIndex: 0,
          display: { xs: "none", md: "flex" },
        }}
      >
        <img src={about_img_2} alt="Meet the Team" />
      </Box>
    </Box>
  );
}
