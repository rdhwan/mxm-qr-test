import { useState } from "react";
import { QrScanner } from "@yudiel/react-qr-scanner";
import {
  Button,
  Center,
  Container,
  Text,
  Code,
  VStack,
  Flex,
} from "@chakra-ui/react";

// modal
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import Head from "next/head";

type Account = {
  fullName: string;
  nim: string;
  isSuccess: boolean;
  errorMessage?: string;
};

const Scanner = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [account, setAccount] = useState<Account | undefined>();
  return (
    <>
      <Head>
        <title>Admin Scanner Page</title>
      </Head>
      <Container maxW={"xl"} h="100vh">
        <Flex justifyContent="center" alignItems="center" height="100%">
          <QrScanner
            containerStyle={{ height: "100", aspectRatio: 9 / 16 }}
            videoStyle={{
              objectFit: "cover",
            }}
            constraints={{
              //   frameRate: 15,
              facingMode: { ideal: "environment" },
            }}
            onDecode={(result) => {
              const data = result.split("#");
              setAccount({
                fullName: data[0],
                nim: data[1],
                isSuccess: true,
              });
              onOpen();
            }}
            onError={(error) => {
              setAccount({
                fullName: "",
                nim: "",
                isSuccess: false,
                errorMessage: error.message,
              });
            }}
          />
        </Flex>
      </Container>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Presensi</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text></Text>
          </ModalBody>
          {account?.isSuccess ? (
            <VStack align={"start"} p={8}>
              <Text>Name : {account.fullName}</Text>
              <Text>NIM : {account.nim}</Text>
              <Text>RAW : </Text>
              <Code>{JSON.stringify(account)}</Code>
            </VStack>
          ) : (
            <Text>Error</Text>
          )}
          <ModalFooter>
            <Button colorScheme="facebook" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Scanner;
