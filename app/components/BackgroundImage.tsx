import React from "react";
import { Box } from "@mui/material";

interface BackgroundProps {
  children: React.ReactNode;
}

const BackgroundImage: React.FC<BackgroundProps> = ({ children }) => {
  const imageurl =
    "https://cdn.discordapp.com/attachments/1110167247412002837/1168214332404928625/iowa_wallpaper_1920x1080.jpg?ex=6550f361&is=653e7e61&hm=56d5132231ebb481fb4e12fd9c0720fc844754e8c02797b93bf595f099ca700b&";

  const styles: React.CSSProperties = {
    backgroundImage: `url(${imageurl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    minHeight: "120vh",
    width: "100%",
    display: "flex",
  };
  return <Box sx={styles}>{children}</Box>;
};

export default BackgroundImage;
