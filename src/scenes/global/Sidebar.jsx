import React from "react";
import { useState } from "react";
import { Sidebar as ProSidebar, MenuItem, Menu } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { grey } from "@mui/material/colors";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box style = {{backgroundColor: colors.greenAccent['700']}}>
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[700],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h4" color={colors.grey[700]}>
                  ADMINS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {/* USER */}
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/profile.jpg`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h4"
                  color={colors.grey[700]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Dpak P
                </Typography>
                <Typography variant="h5" color={colors.primary[500]}>
                  VP Fancy Admin
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <MenuItem
              title="Dashboard"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              component={<Link to="/" />}
              style={{
                color: colors.grey[700]
              }}
            >
              {" "}
              Dashboard
            </MenuItem>

            <Typography
              variant="h6"
              color={colors.grey[700]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>

            <MenuItem
              title="Manage Team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              component={<Link to="/team" />}
              style={{
                color: colors.grey[700]
              }}
            >
              {" "}
              Manage Team
            </MenuItem>

            <MenuItem
              title="Contacts Information"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              component={<Link to="/contacts" />}
              style={{
                color: colors.grey[700]
              }}
            >
              {" "}
              Contacts
            </MenuItem>

            <MenuItem
              title="Invoices Balances"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              component={<Link to="/invoices" />}
              style={{
                color: colors.grey[700]
              }}
            >
              {" "}
              Invoices Balances
            </MenuItem>

            <Typography
              variant="h6"
              color={colors.grey[700]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>

            <MenuItem
              title="Profile Form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              component={<Link to="/form" />}
              style={{
                color: colors.grey[700]
              }}
            >
              {" "}
              Profile Form
            </MenuItem>

            <MenuItem
              title="Calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              component={<Link to="/calendar" />}
              style={{
                color: colors.grey[700]
              }}
            >
              {" "}
              Calendar
            </MenuItem>

            <MenuItem
              title="FAQ Page"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              component={<Link to="/faq" />}
              style={{
                color: colors.grey[700]
              }}
            >
              {" "}
              FAQ Page
            </MenuItem>

            <Typography
              variant="h6"
              color={colors.grey[700]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>

            <MenuItem
              title="Bar Chart"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              component={<Link to="/bar" />}
              style={{
                color: colors.grey[700]
              }}
            >
              {" "}
              Bar Chart
            </MenuItem>

            <MenuItem
              title="Pie Chart"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              component={<Link to="/pie" />}
              style={{
                color: colors.grey[700]
              }}
            >
              {" "}
              Pie Chart
            </MenuItem>

            <MenuItem
              title="Line Chart"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              component={<Link to="/line" />}
              style={{
                color: colors.grey[700]
              }}
            >
              {" "}
              Line Chart
            </MenuItem>

            <MenuItem
              title="Geography Chart"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              component={<Link to="/geography" />}
              style={{
                color: colors.grey[700]
              }}
            >
              {" "}
              Geography Chart
            </MenuItem>
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
