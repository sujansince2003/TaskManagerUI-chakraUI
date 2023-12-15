import {
  Heading,
  Text,
  Flex,
  Spacer,
  Container,
  Button,
  HStack,
  Box,
  SimpleGrid,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@chakra-ui/react";
import { ViewIcon, EditIcon } from "@chakra-ui/icons";
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
  // console.log(data.tasks);
  const tasks = data.tasks;

  return (
    <>
      <SimpleGrid spacing={10} minChildWidth={"300px"}>
        {tasks &&
          tasks.map((task) => (
            <Card
              key={task.id}
              borderTop="8px"
              borderColor="purple.400"
              bg="white"
            >
              <CardHeader>
                <Flex gap={5} alignItems="center">
                  <Box w="40px" h="40px">
                    <Text>AV</Text>
                  </Box>

                  <Box>
                    <Heading as="h3" size="sm">
                      {task.title}
                    </Heading>
                    <Text>By {task.author}</Text>
                  </Box>
                </Flex>
              </CardHeader>
              <CardBody color={"gray.500"}>
                <Text>{task.description}</Text>
              </CardBody>
              <Divider borderColor="gray.300" />
              <CardFooter>
                <HStack>
                  <Button variant="ghost" leftIcon={<ViewIcon />}>
                    Watch
                  </Button>
                  <Button variant="ghost" leftIcon={<EditIcon />}>
                    Comment
                  </Button>
                </HStack>
              </CardFooter>
            </Card>
          ))}
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
