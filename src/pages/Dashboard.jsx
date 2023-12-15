import { Heading, Text, Container, Box, SimpleGrid } from "@chakra-ui/react";
export default function Dashboard({ data }) {
  // const styleBox = {
  //   p: "20px",
  //   bg: "yellow.500",
  //   color: "white",
  //   m: "30px",
  //   fontWeight: "bold",
  //   // for hovering or pseudo styling
  //   ":hover": {
  //     color: "black",
  //     backgroundColor: "pink.300",
  //   },
  // };
  // console.log(data.tasks.at(0));
  return (
    <>
      <SimpleGrid spacing={10} p={"10px"} minChildWidth={"250px"}>
        <Box bg="white" h="200px" border={"1px solid black"}></Box>
        <Box bg="white" h="200px" border={"1px solid black"}></Box>
        <Box bg="white" h="200px" border={"1px solid black"}></Box>
        <Box bg="white" h="200px" border={"1px solid black"}></Box>

        <Box bg="white" h="200px" border={"1px solid black"}></Box>
        <Box bg="white" h="200px" border={"1px solid black"}></Box>
        <Box bg="white" h="200px" border={"1px solid black"}></Box>
        <Box bg="white" h="200px" border={"1px solid black"}></Box>

        <Box bg="white" h="200px" border={"1px solid black"}></Box>
        <Box bg="white" h="200px" border={"1px solid black"}></Box>
        <Box bg="white" h="200px" border={"1px solid black"}></Box>
        <Box bg="white" h="200px" border={"1px solid black"}></Box>
      </SimpleGrid>
      {/* 
      ****** this is not related to this project just for learning ****
      <Container as="section">
        <Heading m="20px">chakara Ui is fun</Heading> applies H2
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
          reiciendis adipisci pariatur praesentium voluptatum placeat nulla
          accusantium numquam vero soluta.
        </Text>{" "}
        p tag
      </Container>
      contents wrapped inside container is centered
      <Box m="20px" as="p">
        hello world
      </Box>
      <Box sx={styleBox}>this is styled with objects</Box>
      <Box sx={{ backgroundColor: "blue", color: "white", padding: "20px" }}>
        This box has custom styles applied using sx prop.
      </Box> */}
    </>
  );
}
