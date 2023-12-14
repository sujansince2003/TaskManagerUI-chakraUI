import { Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Nav from "../../Components/Nav";

export default function RootLayout() {
  return (
    <Grid templateColumns={"repeat(6,1fr)"} bg="gray.50">
      <GridItem as={"aside"} colSpan={1} bg="purple.400" minHeight={"100vh"}>
        <span>sidebar</span>
      </GridItem>
      <GridItem as={"main"} colSpan={5} p={"40px"}>
        <Nav />
        <Outlet />
      </GridItem>
    </Grid>
  );
}
