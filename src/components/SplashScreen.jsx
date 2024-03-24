import React from "react";
import { Center, Spinner } from "@chakra-ui/react";

const SplashScreen = () => {
  return (
    <Center h={window.innerHeight} w={"full"} flex={1}>
      <Spinner
        thickness="4px"
        speed="0.60s"
        emptyColor="gray.200"
        color="red.700"
        size="xl"
      />
    </Center>
  );
};

export default SplashScreen;
