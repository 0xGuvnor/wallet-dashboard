import {
  Box,
  Button,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import { useMoralis } from "react-moralis";
import Balance from "../components/Balance";
import Header from "../components/Header";
import Nft from "../components/Nft";
import Profile from "../components/Profile";
import Send from "../components/Send";
import Transactions from "../components/Transaction";

export default function Home() {
  const { isAuthenticated, authenticate, user, logout, isLoggingOut } =
    useMoralis();

  const handleLogin = async () => {
    await authenticate({
      signingMessage: "Your signature is required to authenticate this wallet",
    });
  };

  if (!isAuthenticated) {
    return (
      <>
        <Head>
          <title>Login | Brokeman Sachs</title>
        </Head>
        <Flex
          direction="column"
          justify="center"
          align="center"
          w="100vw"
          h="100vh"
          bgGradient="linear(to-br, teal.400, purple.300)"
        >
          <Text fontSize="5xl" fontWeight="bold" color="white" align="center">
            Brokeman Sachs
          </Text>
          <Button colorScheme="pink" size="lg" mt="6" onClick={handleLogin}>
            Login with Metamask
          </Button>
        </Flex>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Brokeman Sachs</title>
      </Head>
      <Flex direction="column" w="100vw" h="100vh">
        <Header user={user} logout={logout} isLoggingOut={isLoggingOut} />
        <Box flex="1" bg="blue.200" px="20" py="10">
          <Tabs size="lg" colorScheme="blue" align="center" variant="enclosed">
            <TabList>
              <Tab fontWeight="bold">Profile</Tab>
              <Tab fontWeight="bold">Balance</Tab>
              <Tab fontWeight="bold">Transactions</Tab>
              <Tab fontWeight="bold">NFTs</Tab>
              <Tab fontWeight="bold">Send ETH</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Profile user={user} />
              </TabPanel>
              <TabPanel>
                <Balance user={user} />
              </TabPanel>
              <TabPanel>
                <Transactions user={user} />
              </TabPanel>
              <TabPanel>
                <Nft user={user} />
              </TabPanel>
              <TabPanel>
                <Send />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </>
  );
}
