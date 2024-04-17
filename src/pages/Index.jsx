import { Box, Button, Container, Flex, Heading, Image, Link, Stack, Text, VStack, Icon } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaEnvelope, FaPhone } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      {/* Hero Section */}
      <Flex align="center" justify="center" height="100vh" bg="gray.200" bgImage="https://images.unsplash.com/photo-1488998427799-e3362cec87c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhlcm98ZW58MHx8fHwxNzEzMzQyNTgzfDA&ixlib=rb-4.0.3&q=80&w=1080" bgSize="cover" bgPosition="center" bgRepeat="no-repeat">
        <VStack spacing={4}>
          <Heading as="h1" size="2xl" color="white">
            Welcome to Our Business
          </Heading>
          <Text fontSize="xl" color="white">
            Delivering excellence in all we do.
          </Text>
          <Button colorScheme="blue" size="lg">
            Learn More
          </Button>
        </VStack>
      </Flex>

      {/* About Us Section */}
      <Stack spacing={8} py={10}>
        <Heading as="h2" size="xl">
          About Us
        </Heading>
        <Text fontSize="lg">Our company has been providing top-notch services since 1995. We specialize in offering personalized solutions that meet the unique needs of our clients.</Text>
        <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwd29ya2luZ3xlbnwwfHx8fDE3MTMzNDI1ODN8MA&ixlib=rb-4.0.3&q=80&w=1080" />
      </Stack>

      {/* Services Section */}
      <Stack spacing={8} py={10}>
        <Heading as="h2" size="xl">
          Services
        </Heading>
        <Flex direction={{ base: "column", md: "row" }} justify="space-around">
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading as="h3" size="lg">
              Service 1
            </Heading>
            <Text mt={4}>Description of Service 1.</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading as="h3" size="lg">
              Service 2
            </Heading>
            <Text mt={4}>Description of Service 2.</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading as="h3" size="lg">
              Service 3
            </Heading>
            <Text mt={4}>Description of Service 3.</Text>
          </Box>
        </Flex>
      </Stack>

      {/* Contact Information */}
      <Stack spacing={3} py={10}>
        <Heading as="h2" size="xl">
          Contact Us
        </Heading>
        <Flex align="center">
          <Icon as={FaPhone} w={5} h={5} mr={2} />
          <Text>+123 456 7890</Text>
        </Flex>
        <Flex align="center">
          <Icon as={FaEnvelope} w={5} h={5} mr={2} />
          <Text>info@ourbusiness.com</Text>
        </Flex>
      </Stack>

      {/* Footer */}
      <Box py={5} bg="gray.100">
        <Flex justify="center" gap={6}>
          <Link href="#" isExternal>
            <Icon as={FaFacebook} w={6} h={6} />
          </Link>
          <Link href="#" isExternal>
            <Icon as={FaInstagram} w={6} h={6} />
          </Link>
          <Link href="#" isExternal>
            <Icon as={FaLinkedin} w={6} h={6} />
          </Link>
          <Link href="#" isExternal>
            <Icon as={FaTwitter} w={6} h={6} />
          </Link>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;
