import React from "react";
import {Avatar, Box, Grid, Heading, HStack, Image, Spacer, Text, VStack} from "@chakra-ui/react";
import DonateHeader from "../navigation/DonateHeader";
import ProjectTabs from "./ProjectTabs";
import Project from "../api/models/Project";
import {RootState} from "../RootReducer";
import {connect} from "react-redux";
import networkGraphic from "../img/focusAreas.svg";

type StoreProps = {
    currentProjects: Array<Project>;
}

type HomePageProps = StoreProps;

type OwnProps = {
    imageUrl: string;
    name: string;
    title: string;
    bio: string;
}

type TeamAvatarProps = OwnProps;

const TeamAvatar = (props: TeamAvatarProps) => {
    return (
        <VStack bgColor={"white"} paddingY={"2rem"} borderRadius={"1rem"} boxShadow={"lg"}>
            <Avatar size={"2xl"} name={props.name} src={props.imageUrl}/>
            <Heading fontSize={"1.5rem"} fontWeight={400}>
                {props.name}
            </Heading>
            <Heading fontSize={"1rem"} fontWeight={600}>
                {props.title}
            </Heading>
            <Text>
                {props.bio}
            </Text>
        </VStack>
    );
}

const HomePage = (props: HomePageProps) => {
    const {currentProjects} = props;

    return (
        <Box bgColor={"brand.green"}>
            <DonateHeader/>
            <Box marginTop={"4rem"}>
                <HStack
                    justify={"flex-end"}
                    width={"100%"}
                    height={"30rem"}
                    backgroundImage={"https://giveme-5.org/wp-content/uploads/2019/03/sustainable_agriculture_fyouture.jpg"}
                    backgroundPosition={"bottom"}
                    backgroundSize={"cover"}
                bgAttachment={"fixed"}>
                    <Text width={"40%"}
                          fontSize={"2rem"}
                          fontWeight={"500"}
                          color={"#333"}
                          marginRight={"10rem"}
                          marginTop={"-5rem"}
                          bgColor={"rgba(255,255,255,0.6)"}
                          backdropFilter={"blur(10px)"}
                          padding={"1rem"}
                          paddingX={"2rem"}
                          borderRadius={"1rem"}>
                        Promoting sustainable development and providing interdisciplinary educational resources for people of Afrikan descent
                    </Text>
                </HStack>
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <HStack boxShadow={"lg"} bgColor={"white"} justify={"center"} alignItems={"center"}>

                    <Image height={"50rem"} boxSize={"50rem"} src={networkGraphic}/>
                    <VStack  maxWidth={"30%"}>
                        <Heading fontSize={"2rem"} color={"brand.green"} textAlign={"left"}>
                            We are building the largest Black & Green network of sustainability professionals, entrepreneurs, & enthusiasts.
                        </Heading>
                        <Spacer/>
                        <Text fontSize={"1.5rem"} textAlign={"left"}>
                            Join us on our mission to connect and equip people of Afrikan descent with resources and development opportunities in sustainability fields.
                        </Text>
                    </VStack>
                </HStack>
                <VStack marginTop={"2rem"} spacing={6}>
                    <Heading color={"#fcfffc"}>
                        Current Projects
                    </Heading>
                    <ProjectTabs projects={currentProjects}/>
                </VStack>
                <VStack marginTop={"2rem"} zIndex={2} boxShadow={"lg"}>
                    <Heading color={"white"}>
                        Team
                    </Heading>
                    <Grid templateColumns={"repeat(5, 1fr)"} gap={12}>
                        <Spacer/>
                        <TeamAvatar imageUrl={"https://static.wixstatic.com/media/af8b67_265cf0f10be040b3a6697b6823648da5~mv2.jpg/v1/crop/x_0,y_600,w_2400,h_2400/fill/w_320,h_320,al_c,q_80,usm_0.66_1.00_0.01/Raina(17of20).webp"}
                                    name={"Afia Raina Turner-Greenlea"}
                                    title={"Co-Founder & Chair"}
                                    bio={"biobiobio"}/>
                        <TeamAvatar imageUrl={"https://static.wixstatic.com/media/af8b67_f6b8997556d34b6e81ccba8c1afea216~mv2.jpg/v1/crop/x_0,y_53,w_427,h_427/fill/w_320,h_320,al_c,q_80,usm_0.66_1.00_0.01/IMG_1129_edited.webp"}
                                    name={"Yeamah Brewer"}
                                    title={"Co-Founder & Vice Chair"}
                                    bio={"biobiobio"}/>
                        <TeamAvatar imageUrl={"https://static.wixstatic.com/media/af8b67_8618963a95bd4c3893d846e3b3472b01~mv2.jpeg/v1/fill/w_320,h_320,al_c,q_80,usm_0.66_1.00_0.01/charles.webp"}
                                    name={"Charles Greenlea"}
                                    title={"Agriculture Chair"}
                                    bio={"biobiobio"}/>
                    </Grid>
                </VStack>
                <VStack bgColor={"brand.green"} color={"white"} paddingY={"3rem"}>
                    <Heading>
                        B.O.O.S.
                    </Heading>
                    <Text>
                        (Black owned and operated supporters)
                    </Text>
                    <Grid width={"100%"} bgColor={"white"} templateColumns={"repeat(5, 1fr)"} gap={6}>
                        <Box width={"5rem"} height={"5rem"} bgColor={"brand.black"}></Box>
                        <Box width={"5rem"} height={"5rem"} bgColor={"brand.black"}></Box>
                        <Box width={"5rem"} height={"5rem"} bgColor={"brand.black"}></Box>
                        <Box width={"5rem"} height={"5rem"} bgColor={"brand.black"}></Box>
                        <Box width={"5rem"} height={"5rem"} bgColor={"brand.black"}></Box>
                        <Box width={"5rem"} height={"5rem"} bgColor={"brand.black"}></Box>
                    </Grid>
                </VStack>
            </Box>
        </Box>
    )
}

export const HomePageBaseComponent = HomePage;

const mapStateToProps = ({ home }: RootState): StoreProps => {
    return {currentProjects: home.currentProjects};
}

export default connect(mapStateToProps, null)(HomePage);