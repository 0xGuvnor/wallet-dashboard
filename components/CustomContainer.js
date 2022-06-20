import { Box } from "@chakra-ui/react";

export default function CustomContainer({ children }) {
  return (
    <Box
      bg="white"
      w="full"
      h="full"
      px="20"
      py="10"
      rounded="lg"
      shadow="lg"
      textAlign="left"
    >
      {children}
    </Box>
  );
}
