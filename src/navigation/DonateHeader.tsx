import {Flex, Heading, HStack, Image, Spacer} from "@chakra-ui/react";
import React from "react";
import logoPlaceholder from "../img/Logo Placeholder.png";
import CallToActionButton, {CallsToAction} from "../buttons/CallToActionButton";

const DonateHeader = () => {
    return (
        <Flex boxShadow={"lg"} height={"4rem"} alignItems={"center"} width={"100%"} position={"fixed"} top={0} left={0} zIndex={9999} justify={"space-between"} bgColor={"white"} paddingX={"2rem"} paddingY={"0.125rem"}>
            <HStack alignItems={"center"}>
                <Image boxSize={"3rem"} src={logoPlaceholder}/>
                <Spacer/>
                <Heading textStyle={"pageTitle"} paddingBottom={".3rem"}>
                    <span style={{color: "black"}}>Black</span>Sustainability<span style={{color: "black", fontSize: "1rem"}}> Inc.</span>
                </Heading>
            </HStack>
            <HStack>
                <CallToActionButton type={CallsToAction.JOIN} label={"Join"}/>
                <CallToActionButton type={CallsToAction.DONATE} label={"Donate"}/>
            </HStack>
        </Flex>
    )
}

export default DonateHeader;