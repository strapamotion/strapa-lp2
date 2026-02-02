import { CLIENTS, PERKS_TEXTS } from "@/utils/constants";
import { Client } from "@/utils/types";
import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  IconButton,
  SimpleGrid,
  Stack,
  Text,
  Tooltip,
  useMediaQuery,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import logo from "../assets/logo-white.svg";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { goTo } from "@/utils";
import Perks from "@/components/Perks";
import dynamic from "next/dynamic";
import animation from "../assets/strapa-loading.json";

const LottieAnimationWithNoSSR = dynamic(
  () => import("@/components/LottieAnimation"),
  {
    ssr: false,
  }
);

export default function Home() {
  const MotionFlex = motion(Flex);
  const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");
  const [selectedClient, setSelectedClient] = useState<Client>(CLIENTS[0]);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoad, setVideoLoad] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [selectedClient]);

  const clientVideo = useMemo(() => {
    if (selectedClient) {
      return (
        <Flex
          width={"100%"}
          position={"absolute"}
          height={"95vh"}
          alignItems={"center"}
          top={16}
          justify={"center"}
          zIndex={3}
        >
          <Box
            width={["95%", "95%", "85%", "60%"]}
            shadow={"2xl"}
            overflow={"hidden"}
            height={["20rem", "25rem", "25rem", "30rem"]}
            bgColor={"gray.500"}
            maxW={"55rem"}
            borderRadius={12}
            position={"relative"}
          >
            <Flex
              pos={"absolute"}
              top={0}
              left={0}
              height={"4rem"}
              bgGradient="linear(to-b, #00000075, transparent)"
              width={"100%"}
              padding={4}
            >
              <Text fontWeight={"bold"} color={"white"} fontSize={"2xl"}>
                {selectedClient.name}
              </Text>
            </Flex>

            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            >
              <source src={`${selectedClient.url}`} type="video/mp4" />
            </video>
          </Box>
        </Flex>
      );
    }
    return <></>;
  }, [selectedClient, videoRef]);

  return (
    <>
      <Head>
        <title>Strapa | Motion Branding</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Movimento que marca" />
        <meta name="author" content="Strapa Motion Branding" />
        <meta
          name="keywords"
          content="branding, motion, after, effects, vfx, fx, logo, marketing"
        />
        <meta httpEquiv="cache-control" content="public" />
        <meta name="copyright" content="© Strapa | 2024" />
        <meta name="generator" content="NextJS" />
        <meta name="rating" content="general" />
        <meta name="theme-color" content="#50e902" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack bgColor={"black.500"} width={"100%"} position={"relative"}>
        <Flex
          width={"100%"}
          justify={["center", "center", "end"]}
          paddingX={12}
          position={"fixed"}
          bottom={12}
          zIndex={1200}
        >
          <Button
            _hover={{
              color: "#50e902",
              bgColor: "#fffefe",
            }}
            leftIcon={<FaWhatsapp />}
            borderRadius={"full"}
            bgColor={"#50e902"}
            shadow={"lg"}
            size={"lg"}
            color="#fffefe"
            onClick={() => goTo("https://contate.me/strapa")}
          >
            Solicitar orçamento
          </Button>
        </Flex>
        <Flex
          height={["30rem", "30rem", "100vh", "100vh", "100vh"]}
          width={"100%"}
          position={"relative"}
        >
          <HStack
            top={0}
            position={"fixed"}
            width={"100%"}
            justify={"center"}
            paddingY={4}
            zIndex={1200}
            bgColor={"black.500"}
            shadow={"lg"}
          >
            <Flex>
              <Image alt="logo" src={logo} />
            </Flex>
          </HStack>
          {videoLoad && (
            <Flex
              bgColor={"black.500"}
              position={"absolute"}
              zIndex={3}
              align={"center"}
              justify={"center"}
              width={"100%"}
              height="100%"
            >
              <Stack align={"center"}>
                <LottieAnimationWithNoSSR
                  animationData={animation}
                  width={200}
                  height={200}
                />
                <Text fontWeight={"bold"} color="white">
                  Carregando vídeo...
                </Text>
              </Stack>
            </Flex>
          )}
          <Box
            height={"100%"}
            width="100vw"
            zIndex={2}
            marginTop={20}
            overflow="hidden"
            position="relative"
          >
            <video
              autoPlay
              loop
              muted
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                objectFit: "cover",
              }}
              onPlay={() => setVideoLoad(false)}
            >
              <source src={"/assets/manifesto.mp4"} type="video/mp4" />
            </video>
          </Box>
        </Flex>
        <Stack
          marginTop={[24, 24, 24, 32]}
          spacing={12}
          padding={4}
          width={"100%"}
          justify={"center"}
          direction={[
            "column-reverse",
            "column-reverse",
            "column-reverse",
            "row",
            "row",
          ]}
        >
          <Box
            width={["100%", "100%", "100%", "30%", "40%"]}
            overflow={"hidden"}
            height={"25rem"}
            bgColor={"gray.500"}
            borderRadius={12}
          >
            <video
              autoPlay
              loop
              muted
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            >
              <source src={"/assets/video-bg.mp4"} type="video/mp4" />
            </video>
          </Box>
          <Stack spacing={6} width={["95%", "95%", "95%", "50%", "40%"]}>
            <Heading fontSize={"5xl"} color={"green.500"}>
              O que é <br /> Motion Branding?
            </Heading>
            <Text fontSize={"xl"} color={"white.500"}>
              <Text as="span" color={"green.500"}>
                Motion Branding
              </Text>{" "}
              é uma ferramenta que destaca a sua marca em um ambiente cada vez
              mais competitivo e saturado com informação.
            </Text>
            <Text fontSize={"xl"} color={"white.500"}>
              É{" "}
              <Text as="span" color={"green.500"}>
                design com movimento que aumenta a visibilidade do seu logo
              </Text>
              , identidade, artes, mídias sociais e audiovisuais, além de ajudar
              a unificar as suas mídias com a mesma mensagem.
            </Text>
          </Stack>
        </Stack>
        <Stack
          marginTop={[12, 12, 24, 32]}
          height={"fit-content"}
          width={"100%"}
          padding={12}
          overflow={"hidden"}
          alignItems={"center"}
        >
          <MotionFlex
            bgColor={"black.500"}
            initial={{
              opacity: 0,
            }}
            whileInView={
              isLargerThan1000 && {
                opacity: 1,

                x: [2000, 100, -20, 0],
                transition: {
                  delay: 1,
                  opacity: {
                    duration: 0.1,
                  },
                  x: {
                    type: "spring",
                    duration: 1,
                    ease: "easeInOut",
                  },
                },
              }
            }
            animate={
              !isLargerThan1000 && {
                opacity: 1,

                x: [2000, 100, -20, 0],
                transition: {
                  delay: 1,
                  opacity: {
                    duration: 0.1,
                  },
                  x: {
                    type: "spring",
                    duration: 1,
                    ease: "easeInOut",
                  },
                },
              }
            }
            width={"fit-content"}
            alignItems={"center"}
            height={"5rem"}
          >
            <Text
              overflow={"visible"}
              fontSize={150}
              noOfLines={1}
              width={"fit-content"}
              color={"white.500"}
              whiteSpace={"nowrap"}
            >
              <Text as="span" fontStyle={"italic"}>
                movimento{" "}
              </Text>
              <Text as="span" fontWeight={"bold"} color={"green.500"}>
                que marca
              </Text>
              <Text as="span" fontStyle={"italic"}>
                {" "}
                movimento{" "}
              </Text>
              <Text as="span" fontWeight={"bold"} color={"green.500"}>
                que marca
              </Text>
            </Text>
          </MotionFlex>
          <MotionFlex
            bgColor={"black.500"}
            marginTop={24}
            alignItems={"center"}
            height={"5rem"}
            initial={{
              opacity: 0,
            }}
            whileInView={
              isLargerThan1000 && {
                opacity: 1,

                x: [-2000, -100, 20, 500],
                transition: {
                  delay: 1,
                  opacity: {
                    duration: 0.1,
                  },
                  x: {
                    type: "spring",
                    duration: 1.2,
                    ease: "easeInOut",
                  },
                },
              }
            }
            animate={
              !isLargerThan1000 && {
                opacity: 1,

                x: [-2000, -100, 20, 500],
                transition: {
                  delay: 1,
                  opacity: {
                    duration: 0.1,
                  },
                  x: {
                    type: "spring",
                    duration: 1.2,
                    ease: "easeInOut",
                  },
                },
              }
            }
            width={"fit-content"}
          >
            <Text
              overflow={"visible"}
              fontSize={150}
              noOfLines={1}
              width={"fit-content"}
              color={"white.500"}
              whiteSpace={"nowrap"}
            >
              <Text as="span" fontStyle={"italic"}>
                movimento{" "}
              </Text>
              <Text as="span" fontWeight={"bold"} color={"green.500"}>
                que marca
              </Text>
              <Text as="span" fontStyle={"italic"}>
                {" "}
                movimento{" "}
              </Text>
              <Text as="span" fontWeight={"bold"} color={"green.500"}>
                que marca
              </Text>
            </Text>
          </MotionFlex>
          <Flex
            marginTop={[24, 32, 48]}
            textAlign={"center"}
            width={["100%", "85%", "100%"]}
            maxW={"60rem"}
            bg="black.500"
          >
            <Text fontSize={["md", "xl", "2xl", "4xl"]} color="white.500">
              Na Strapa somos apaixonados por dar vida à sua visão,
              desenvolvendo designs dinâmicos, que não apenas contam sua
              história, mas refletem a{" "}
              <Text as="span" color="green.500">
                essência da sua marca
              </Text>
              .
            </Text>
          </Flex>
          <MotionFlex
            bgColor={"black.500"}
            marginTop={[24, 32, 48]}
            initial={{
              opacity: 0,
            }}
            whileInView={
              isLargerThan1000 && {
                opacity: 1,

                x: [2000, 100, -20, 0],
                transition: {
                  delay: 1,
                  opacity: {
                    duration: 0.1,
                  },
                  x: {
                    type: "spring",
                    duration: 1,
                    ease: "easeInOut",
                  },
                },
              }
            }
            animate={
              !isLargerThan1000 && {
                opacity: 1,

                x: [2000, 100, -20, 0],
                transition: {
                  delay: 1,
                  opacity: {
                    duration: 0.1,
                  },
                  x: {
                    type: "spring",
                    duration: 1,
                    ease: "easeInOut",
                  },
                },
              }
            }
            width={"fit-content"}
            alignItems={"center"}
            height={"5rem"}
          >
            <Text
              overflow={"visible"}
              fontSize={150}
              noOfLines={1}
              width={"fit-content"}
              color={"white.500"}
              whiteSpace={"nowrap"}
            >
              <Text as="span" fontStyle={"italic"}>
                movimento{" "}
              </Text>
              <Text as="span" fontWeight={"bold"} color={"green.500"}>
                que marca
              </Text>
              <Text as="span" fontStyle={"italic"}>
                {" "}
                movimento{" "}
              </Text>
              <Text as="span" fontWeight={"bold"} color={"green.500"}>
                que marca
              </Text>
            </Text>
          </MotionFlex>
          <MotionFlex
            bgColor={"black.500"}
            marginTop={24}
            alignItems={"center"}
            height={"5rem"}
            initial={{
              opacity: 0,
            }}
            whileInView={
              isLargerThan1000 && {
                opacity: 1,

                x: [-2000, -100, 20, 500],
                transition: {
                  delay: 1,
                  opacity: {
                    duration: 0.1,
                  },
                  x: {
                    type: "spring",
                    duration: 1.2,
                    ease: "easeInOut",
                  },
                },
              }
            }
            animate={
              !isLargerThan1000 && {
                opacity: 1,

                x: [-2000, -100, 20, 500],
                transition: {
                  delay: 1,
                  opacity: {
                    duration: 0.1,
                  },
                  x: {
                    type: "spring",
                    duration: 1.2,
                    ease: "easeInOut",
                  },
                },
              }
            }
            width={"fit-content"}
          >
            <Text
              overflow={"visible"}
              fontSize={150}
              noOfLines={1}
              width={"fit-content"}
              color={"white.500"}
              whiteSpace={"nowrap"}
            >
              <Text as="span" fontStyle={"italic"}>
                movimento{" "}
              </Text>
              <Text as="span" fontWeight={"bold"} color={"green.500"}>
                que marca
              </Text>
              <Text as="span" fontStyle={"italic"}>
                {" "}
                movimento{" "}
              </Text>
              <Text as="span" fontWeight={"bold"} color={"green.500"}>
                que marca
              </Text>
            </Text>
          </MotionFlex>
        </Stack>
        <Perks />
        <Stack
          position={"relative"}
          marginTop={[12, 12, 24, 32]}
          bgColor={"green.500"}
          width={"100%"}
          height={"95vh"}
          overflow={"hidden"}
          alignItems={"center"}
        >
          {clientVideo}
          <SimpleGrid
            zIndex={4}
            marginTop={12}
            columns={[3, 3, 3, 3, 6]}
            width={"100%"}
            spacing={4}
          >
            {CLIENTS.slice(1).map((cli) => (
              <Tooltip
                label={cli.name}
                hasArrow
                placement="bottom"
                borderRadius={4}
                color="#fff"
                backgroundColor={"black.500"}
              >
                <Flex
                  width={"100%"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <MotionFlex
                    whileTap={{
                      y: 10,
                    }}
                    whileHover={{
                      scale: 0.9,
                      rotate: "45deg",
                    }}
                    width={[20, 20, 24, 24, 32]}
                    cursor={"pointer"}
                    src={cli.img}
                    borderRadius={"full"}
                    onClick={() => setSelectedClient(cli)}
                    overflow={"hidden"}
                    opacity={selectedClient?.name === cli.name ? 0.5 : 1}
                  >
                    <Image src={cli.img} alt={cli.name} />
                  </MotionFlex>
                </Flex>
              </Tooltip>
            ))}
          </SimpleGrid>
          <Heading
            fontWeight={"bold"}
            color="white.500"
            fontSize={[125, 250, 250, 350]}
            lineHeight={0.8}
            position={"absolute"}
            bottom={0}
            zIndex={2}
            left={0}
            opacity={0.5}
          >
            Nossos <br />
            Clientes
          </Heading>
        </Stack>
        <Stack
          paddingBottom={32}
          align={"center"}
          marginTop={[12, 12, 24, 32]}
          width={"100%"}
          spacing={6}
        >
          <Flex>
            <Image alt="logo" src={logo} />
          </Flex>
          <HStack spacing={4}>
            <IconButton
              size={"lg"}
              _hover={{
                bgColor: "#fffefe50",
                color: "#fffefe",
              }}
              variant={"ghost"}
              borderRadius={12}
              aria-label="wpp"
              color="white"
              icon={<FaWhatsapp />}
              onClick={() => goTo("https://contate.me/strapa")}
            />
            <IconButton
              size={"lg"}
              _hover={{
                bgColor: "#fffefe50",
                color: "#fffefe",
              }}
              variant={"ghost"}
              borderRadius={12}
              aria-label="wpp"
              color="white"
              icon={<FaInstagram />}
              onClick={() => goTo("https://www.instagram.com/strapa.motion")}
            />
            <IconButton
              size={"lg"}
              _hover={{
                bgColor: "#fffefe50",
                color: "#fffefe",
              }}
              variant={"ghost"}
              borderRadius={12}
              aria-label="wpp"
              color="white"
              icon={<FaTiktok />}
              onClick={() => goTo("https://www.tiktok.com/@strapa.motion")}
            />
          </HStack>
        </Stack>
      </Stack>
    </>
  );
}
