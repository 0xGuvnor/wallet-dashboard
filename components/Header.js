import { Button, Center, Flex, Text } from "@chakra-ui/react";

export default function Header({ user, logout, isLoggingOut }) {
  const truncateAddress = (account) => {
    return `${account.slice(0, 6)}...${account.slice(-4)}`;
  };

  return (
    <header>
      <Flex justify="space-between" bg="blue.500" color="white" px="10" py="6">
        <Center>
          <Text fontSize="xl" fontWeight="bold">
            Brokeman Sachs
          </Text>
        </Center>
        <Center>
          <div>
            <Text>{user.getUsername()}</Text>
            <Text as="em">{truncateAddress(user.get("ethAddress"))}</Text>
          </div>
          <Button
            ml="4"
            colorScheme="whiteAlpha"
            onClick={logout}
            disabled={isLoggingOut}
          >
            Logout
          </Button>
        </Center>
      </Flex>
    </header>
  );
}
