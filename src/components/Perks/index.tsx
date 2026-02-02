import { PERKS_TEXTS } from "@/utils/constants";
import { Box, Flex, HStack, Heading, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { FiCircle } from "react-icons/fi";

export default function Perks() {
  const MotionStack = motion(Stack);
  const [index, setIndex] = useState(0);

  const currentText = useMemo(
    () => PERKS_TEXTS[index] || { title: "", text: "" },
    [index]
  );

  const updateIndex = () => {
    setIndex((prevIndex) => (prevIndex + 1) % PERKS_TEXTS.length);
  };

  useEffect(() => {
    const timeoutId = setTimeout(updateIndex, 5000); // Alterar para 15000 para 15 segundos
    return () => clearTimeout(timeoutId);
  }, [index]);

  return (
    <Flex
      marginTop={[12, 12, 24, 32]}
      width={"100%"}
      alignItems={"center"}
      paddingY={24}
      bgColor="black.500"
      justify={"space-between"}
      paddingX={[4, 8, 12, 24]}
    >
      <Box
        width={["100%", "100%", "40%", "40%", "40%"]}
        display={["none", "none", "none", "block", "block"]}
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
          <source src={"/assets/animation.mp4"} type="video/mp4" />
        </video>
      </Box>
      <Stack
        direction={"column"}
        width={["100%", "100%", "85%", "50%"]}
        zIndex={2}
        spacing={6}
      >
        <MotionStack
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Heading color={"green.500"} fontSize={["2xl", "2xl", "3xl", "5xl"]}>
            {currentText.title}
          </Heading>
          <Text fontSize={["sm", "md", "lg", "xl"]} color={"white.500"}>
            {currentText.text}
          </Text>
        </MotionStack>
        <Stack
          spacing={6}
          width={["15rem", "15rem", "20rem", "30rem"]}
          align={"center"}
          direction={"row"}
        >
          {PERKS_TEXTS.map((_, idx) => {
            return (
              <HStack
                key={idx}
                cursor={"pointer"}
                onClick={() => setIndex(idx)}
              >
                <FiCircle
                  fill={idx === index ? "#50e902" : "transparent"}
                  color={"#50e902"}
                />
                <Text
                  fontWeight={"bold"}
                  fontSize={["xs", "sm", "sm", "md"]}
                  color="green.500"
                >
                  0{idx + 1}
                </Text>
              </HStack>
            );
          })}
        </Stack>
      </Stack>
    </Flex>
  );
}
