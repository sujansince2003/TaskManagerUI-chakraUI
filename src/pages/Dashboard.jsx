import { Heading, Text, Container, Box } from "@chakra-ui/react";
export default function Dashboard() {
  const styleBox = {
    p: "20px",
    bg: "yellow.500",
    color: "white",
    m: "30px",
    fontWeight: "bold",
    // for hovering or pseudo styling
    ":hover": {
      color: "black",
      backgroundColor: "pink.300",
    },
  };
  return (
    <>
      <Container as="section">
        <Heading m="20px">chakara Ui is fun</Heading> {/*applies H2*/}
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
          reiciendis adipisci pariatur praesentium voluptatum placeat nulla
          accusantium numquam vero soluta.
        </Text>{" "}
        {/*p tag */}
      </Container>
      {/* contents wrapped inside container is centered */}
      <Box m="20px" as="p">
        hello world
      </Box>
      <Box sx={styleBox}>this is styled with objects</Box>
      <Box sx={{ backgroundColor: "blue", color: "white", padding: "20px" }}>
        This box has custom styles applied using sx prop.
      </Box>
    </>
  );
}
