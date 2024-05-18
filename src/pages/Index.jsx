import { Container, VStack, Text, Heading, Button, IconButton, HStack, Box, Image } from "@chakra-ui/react";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Box boxSize="150px">
          <Image src="https://images.unsplash.com/photo-1600812227435-d194ea36937d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHBvcnRyYWl0fGVufDB8fHx8MTcxNjA1NzkyN3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Personal Portrait" borderRadius="full" />
        </Box>
        <Heading as="h1" size="2xl">
          John Doe
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Welcome to my personal website! Here you can find my latest applications and connect with me on social media.
        </Text>
        <HStack spacing={4}>
          <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" as="a" href="https://github.com/johndoe" target="_blank" />
          <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" as="a" href="https://linkedin.com/in/johndoe" target="_blank" />
        </HStack>
        <VStack spacing={4} align="stretch" width="100%">
          <Heading as="h2" size="lg">
            Applications
          </Heading>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading fontSize="xl">App 1</Heading>
            <Text mt={4}>Description of App 1. This is a great app that does amazing things.</Text>
            <Button leftIcon={<FaDownload />} colorScheme="teal" variant="solid" mt={4}>
              Download
            </Button>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading fontSize="xl">App 2</Heading>
            <Text mt={4}>Description of App 2. This app will change your life.</Text>
            <Button leftIcon={<FaDownload />} colorScheme="teal" variant="solid" mt={4}>
              Download
            </Button>
          </Box>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
