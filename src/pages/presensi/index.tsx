import { toDataURL } from "qrcode";
import {
  VStack,
  HStack,
  Button,
  Input,
  Center,
  Image,
  Spacer,
} from "@chakra-ui/react";
import NextImage from "next/image";
import { useState } from "react";
import Head from "next/head";

const Presensi = () => {
  const [id, setId] = useState<string>("");
  const [QRData, setQRData] = useState<string | undefined>();

  return (
    <>
      <Head>
        <title>User QR Page</title>
      </Head>
      <Center>
        <VStack>
          <HStack my={32}>
            {/* MAAP SAYA MALAS HEHEHE */}
            <Input
              placeholder="NAMA#NIM"
              onChange={(event) => setId(event.target.value)}
            />
            <Button
              onClick={() => {
                toDataURL(
                  id,
                  {
                    width: 400,
                    margin: 2,
                  },
                  (err, url) => {
                    if (err) {
                      console.error(err);
                      return;
                    }
                    setQRData(url);
                  }
                );
              }}
            >
              Generate
            </Button>
          </HStack>
          {QRData && <Image alt="qrcode" src={QRData} />}
        </VStack>
      </Center>
    </>
  );
};

export default Presensi;
