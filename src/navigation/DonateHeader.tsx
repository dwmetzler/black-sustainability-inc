import {Box, Button, Flex, HStack, Text} from "@chakra-ui/react";
import React from "react";

const DonateHeader = () => {
    return (
        <Flex boxShadow={"lg"} height={"4rem"} alignItems={"center"} width={"100%"} position={"fixed"} top={0} left={0} zIndex={9999} justify={"space-between"} bgColor={"white"} paddingX={"2rem"} paddingY={"0.125rem"}>
            <Box textStyle={"h1"}>
                <span style={{color: "black"}}>Black</span>Sustainability Inc
            </Box>
            <HStack>
                <Button _hover={{opacity: 0.5}}>
                    Join
                </Button>
                <Button _hover={{opacity: 0.5}}>
                    Donate
                </Button>
            </HStack>
        </Flex>
    )
}

export default DonateHeader;