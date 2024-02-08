import { Paper, Typography } from "@mui/material";
import AvatarProfile from "./AvatarProfile";
import { FC } from "react";

type CardProps = {
  title: string;
  name: string;
  paragraph: string;
  url: string;
  color: string;
  style: object;
};

const Card: FC<CardProps> = ({ title, name, paragraph, url, color, style }) => {
  return (
    <Paper elevation={3} sx={style}>
      <AvatarProfile name={name} url={url} color={color} />
      <Typography
        fontSize={18}
        color={color}
        fontWeight={600}
        zIndex={1}
        marginBottom={2}
        textAlign="left"
      >
        {title}
      </Typography>
      <Typography
        fontWeight={500}
        fontSize={13}
        color={color}
        sx={{
          opacity: 0.6,
        }}
      >
        {paragraph}
      </Typography>
    </Paper>
  );
};

export default Card;
