import { Box, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";

type Props = {
  name: string;
  url: string;
  color: string;
};

const AvatarProfile = ({ name, url, color }: Props) => {
  return (
    <Box sx={{ display: "flex", gap: 2, marginBottom: 1 }}>
      <Avatar
        alt="Daniel"
        src={url}
        sx={{ border: "2px solid hsl(0, 0%, 81%)" }}
      />
      <Box>
        <Typography fontWeight={600} color={color}>
          {name}
        </Typography>
        <Typography
          fontWeight={500}
          fontSize={13}
          color={color}
          sx={{
            opacity: 0.4,
          }}
        >
          Verified Graduate
        </Typography>
      </Box>
    </Box>
  );
};

export default AvatarProfile;
