// import React from "react";
// import {
//   IconButton,
//   Typography,
//   List,
//   ListItem,
//   ListItemPrefix,
//   ListItemSuffix,
//   Chip,
//   Accordion,
//   AccordionHeader,
//   AccordionBody,
//   Alert,
//   Input,
//   Drawer,
//   Card,
// } from "@material-tailwind/react";

// export function SidebarWithBurgerMenu() {
//   const [open, setOpen] = React.useState(0);
//   const [openAlert, setOpenAlert] = React.useState(true);
//   const [isDrawerOpen, setIsDrawerOpen] = React.useState(true);

//   const handleOpen = (value) => {
//     setOpen(open === value ? 0 : value);
//   };

//   const openDrawer = () => setIsDrawerOpen(true);
//   const closeDrawer = () => setIsDrawerOpen(false);

//   return (
//     <>
//       <button onClick={openDrawer}>btn</button>
//       <Drawer open={isDrawerOpen} onClose={closeDrawer}></Drawer>
//     </>
//   );
// }
