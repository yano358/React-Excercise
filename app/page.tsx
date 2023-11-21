import Link from "next/link";
import BackgroundImage from "./components/BackgroundImage";
import { Container, Typography } from "@mui/material";
import "@fontsource/roboto/300.css";
import ComplexButton from "./components/ComplexButton";

export default function Home() {
  return (
    <BackgroundImage>
      <Container
        sx={{ bgcolor: "white", height: "100vh", border: 1 }}
        maxWidth="md"
      >
        <Typography
          variant="h4"
          mt={2}
          textAlign={"center"}
          border={0}
          marginTop={"2rem"}
          sx={{ bgcolor: "white", color: "grey" }}
        >
          WoWs Gamer Build Blog
        </Typography>
        <ComplexButton />
      </Container>
    </BackgroundImage>
  );
}
