import {
  AccountBox,
  Article,
  Group,
  Home,
  ModeNight,
  Person,
  Settings,
  Storefront,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import React from "react";

function Sidebar({ mode, setMode, barOpen }) {
  return (
    <Box
      p={2}
      // flex={1}
      sx={{
        display: {
          xs: barOpen ? "block" : "none",
          sm: "block",
        },
        flex:{
          xs:'0',
          sm:'1'
        }
      }}
    >
      <Box sx={{ position: "fixed" }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText
                primary="Homepage"
                sx={{
                  display: {
                    xs: "none",
                    sm: "block",
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Article />
              </ListItemIcon>
              <ListItemText
                primary="Pages"
                sx={{
                  display: {
                    xs: "none",
                    sm: "block",
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText
                primary="Groups"
                sx={{
                  display: {
                    xs: "none",
                    sm: "block",
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Storefront />
              </ListItemIcon>
              <ListItemText
                primary="Marketplace"
                sx={{
                  display: {
                    xs: "none",
                    sm: "block",
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText
                primary="Friends"
                sx={{
                  display: {
                    xs: "none",
                    sm: "block",
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText
                primary="Settings"
                sx={{
                  display: {
                    xs: "none",
                    sm: "block",
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText
                primary="Profile"
                sx={{
                  display: {
                    xs: "none",
                    sm: "block",
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
          {/* switch line */}

          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <ModeNight
                  sx={{
                    display: {
                      xs: "none",
                      sm: "block",
                    },
                  }}
                />
              </ListItemIcon>
              <Switch
                onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
                sx={{
                  position: {
                    xs: "absolute",
                  },
                  left: {
                    xs: "5px",
                  },
                  top: {
                    xs: "5px",
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
          {/* switch part is end */}
        </List>
      </Box>
    </Box>
  );
}

export default Sidebar;
