import { Mail, Notifications, Pets } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

const StyleToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));
const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",

  [theme.breakpoints.up("sm")]: {
    display: "flex",
    gap: "20px",
  },
}));
const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",

  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
function Navbar() {
  return (
    <Box>
      <AppBar position="sticky">
        <StyleToolBar>
          <Typography
            variant="h6"
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            PicPost
          </Typography>
          <Pets
            sx={{
              display: {
                xs: "block",
                sm: "none",
              },
            }}
          />
          <Search>
            <InputBase placeholder="search..." />
          </Search>
          <Icons>
            <Badge badgeContent={4} color="error">
              <Mail />
            </Badge>
            <Badge badgeContent={2} color="error">
              <Notifications />
            </Badge>
            <Avatar
              sx={{ width: "30px", height: "30px" }}
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </Icons>
          <UserBox>
            <Avatar
              sx={{ width: "30px", height: "30px" }}
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <Typography variant="span">John</Typography>
          </UserBox>
        </StyleToolBar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
