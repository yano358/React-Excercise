import React from "react";
import { Container, Typography, Box } from "@mui/material";
import BackgroundImage from "../components/BackgroundImage";
import RecipeReviewCard from "../components/ComplexInteraction";

const Tashkent = () => {
  return (
    <BackgroundImage>
      <Container
        sx={{ bgcolor: "grey", height: "100vh", border: 1 }}
        maxWidth="md"
      >
        <Box>
          <Box alignContent="center">
            <Typography variant="h6" style={{ width: "100%" }}>
              Description: Ever been in a credit crunch? This guy is. Without
              being able to spend credits, he has adapted the build to best
              enhance his ship on a budget. Gun skills, torp skills and
              investing his remaining monthly pay into concealment modification.
              Usage: The build suffices in the random battle meta of sitting at
              max range and never push in, playing as tashkent he will have
              enough range to farm bbs at 13,8 km.
            </Typography>
            <img
              src="https://cdn.discordapp.com/attachments/1110167247412002837/1168302556527722616/tashkenteconomybuild.png?ex=6551458b&is=653ed08b&hm=a99c1a0a61df0fe041d0e2a9ae0ca87857d7f0945af282a6cd59037b8e632bb7&"
              alt="Sample Image"
              style={{
                marginTop: "1rem",
                maxWidth: "100%",
                alignContent: "center",
              }}
            />
          </Box>
        </Box>
        <RecipeReviewCard />
      </Container>
    </BackgroundImage>
  );
};

export default Tashkent;
