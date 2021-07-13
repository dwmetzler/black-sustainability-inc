import React from "react";
import {Avatar, Box, Grid, Heading, HStack, Image, Link, Spacer, Text, VStack} from "@chakra-ui/react";
import DonateHeader from "../navigation/DonateHeader";
import ProjectTabs from "./ProjectTabs";
import Project from "../api/models/Project";
import {RootState} from "../RootReducer";
import {connect} from "react-redux";
import networkGraphic from "../img/focusAreas.svg";
import CallToActionButton, {CallsToAction} from "../buttons/CallToActionButton";
import BooGrid from "./BooGrid";

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
            <Heading fontSize={"1.5rem"} fontWeight={400} paddingX={"3rem"}>
                {props.name}
            </Heading>
            <Heading fontSize={"1.1rem"} fontWeight={600}>
                {props.title}
            </Heading>
            <Text paddingX={"2rem"} whiteSpace={"pre-line"}>
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
                    justify={"flex-start"}
                    width={"100%"}
                    height={"30rem"}
                    backgroundImage={"https://giveme-5.org/wp-content/uploads/2019/03/sustainable_agriculture_fyouture.jpg"}
                    backgroundPosition={"left"}
                    backgroundSize={"cover"}>
                    <Text width={"50%"}
                          fontSize={"1.75rem"}
                          fontWeight={"200"}
                          color={"white"}
                          marginLeft={"10rem"}
                          marginTop={"-5rem"}
                          bgColor={"rgba(0,0,0,0.2)"}
                          boxShadow={"lg"}
                          backdropFilter={"blur(10px)"}
                          padding={"1rem"}
                          paddingX={"2rem"}
                          borderRadius={"1rem"}>
                        Promoting sustainable development and providing interdisciplinary educational resources for people of Afrikan descent
                    </Text>
                </HStack>
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <HStack boxShadow={"lg"} bgColor={"white"} justify={"center"} alignItems={"center"}>
                    <Image height={"40rem"} boxSize={"40rem"} src={networkGraphic} margin={"5rem 8rem"}/>
                    <VStack  maxWidth={"30%"} spacing={"1rem"} alignItems={"flex-start"}>
                        <Heading fontSize={"2rem"} color={"brand.green"} textAlign={"left"}>
                            We are building the largest Black & Green network of sustainability professionals, entrepreneurs, & enthusiasts.
                        </Heading>
                        <Text>
                            We invite you to join us on our mission to connect and equip people of Afrikan descent with resources and development opportunities in sustainability fields.
                        </Text>
                        <Spacer/>
                        <CallToActionButton type={CallsToAction.JOIN} label={"Join our network now"}/>
                    </VStack>
                </HStack>
                <VStack marginTop={"sectionMargin"} spacing={6}>
                    <Heading variant={"sectionTitle"}>
                        Current Projects
                    </Heading>
                    <ProjectTabs projects={currentProjects}/>
                </VStack>
                <VStack marginTop={"sectionMargin"} zIndex={2} marginBottom={"4rem"}>
                    <Heading variant={"sectionTitle"}>
                        Our Leadership Team
                    </Heading>
                    <Grid templateColumns={"repeat(3, 1fr)"} gap={12} paddingX={"4rem"}>
                        <TeamAvatar imageUrl={"https://static.wixstatic.com/media/af8b67_265cf0f10be040b3a6697b6823648da5~mv2.jpg/v1/crop/x_0,y_600,w_2400,h_2400/fill/w_320,h_320,al_c,q_80,usm_0.66_1.00_0.01/Raina(17of20).webp"}
                                    name={"Afia Raina Turner-Greenlea"}
                                    title={"Co-Founder & Chair"}
                                    bio={"Raina's roots are as solid as Georgia's red clay. She is a wife & mother with a passion for creating & supporting healthy, sustainable communities by applying indigenous wisdom & exchanging best practices to (re)develop/support sustainable communities without causing irreversible damage to the planet.\n" +
                                    "\n" +
                                    "She has 9 years of experience with culturally-relevant education & project management, 5 years organizing & hosting Black Sustainability Network and Summit and is the former Director of Entrepreneurship and Community Engagement for the Center for Civic Innovation."}/>
                        <TeamAvatar imageUrl={"https://static.wixstatic.com/media/af8b67_f6b8997556d34b6e81ccba8c1afea216~mv2.jpg/v1/crop/x_0,y_53,w_427,h_427/fill/w_320,h_320,al_c,q_80,usm_0.66_1.00_0.01/IMG_1129_edited.webp"}
                                    name={"Yeamah Brewer"}
                                    title={"Co-Founder & Vice Chair"}
                                    bio={"Based in the Twin Cities, Yeamah joined our team as a volunteer after learning of our annual summit. She leads strategic planning and organizational development.\n" +
                                    "\n" +
                                    "Often behind the scenes, Yeamah also serves as Vice-Chair of our annual global Summit (2018-Present) and leads our social media engagement & member recruitment on Clubhouse."}/>
                        <TeamAvatar imageUrl={"https://static.wixstatic.com/media/af8b67_8618963a95bd4c3893d846e3b3472b01~mv2.jpeg/v1/fill/w_320,h_320,al_c,q_80,usm_0.66_1.00_0.01/charles.webp"}
                                    name={"Charles Greenlea"}
                                    title={"Agriculture Chair"}
                                    bio={"Charles is a multigenerational resident of Atlanta and the descendant of a long line of growers, educators, entrepreneurs, and organizers. In 2019, he founded ECO-PARADIGM, LLC to help balance ecology and economics for Atlanta's communities of color.\n" +
                                    "\n" +
                                    "Brother Charles joined Black Sustainability, Inc. in 2016 as an attendee of our inaugural summit. He works to identify potential speakers and presenters within the field of sustainable agriculture. He has moderated sessions, led outreach and continues to be active in our Sustainable Agriculture efforts."}/>
                    </Grid>
                </VStack>
                <HStack bgColor={"white"} color={"black"} paddingY={"sectionMargin"} boxShadow={"lg"}>
                    <VStack width={"80%"} marginX={"3rem"} spacing={"3rem"}>
                        <VStack>
                            <Heading color={"brand.green"} fontSize={"4rem"}>
                                <span style={{color: "black"}}>Our wonderful</span> B.O.O.S.
                            </Heading>
                            <Text fontWeight={400} fontSize={"1.3rem"}>
                                (Black owned and operated supporters)
                            </Text>
                        </VStack>
                        <CallToActionButton type={CallsToAction.DONATE} label={"Become a supporter"}/>
                    </VStack>
                    <BooGrid/>
                </HStack>
                <HStack paddingY={"2rem"}
                        paddingBottom={"2rem"}
                        justify={"center"}
                        spacing={"10rem"}
                        alignItems={"center"}
                        bgColor={"brand.black"}
                        textStyle={"footerBody"}>
                    <Text>
                        &copy; 2021 Black Sustainability, Inc.
                    </Text>
                    <Link href={"mailto:blacksustainabilitysummit@gmail.com"}>
                        blacksustainabilitysummit@gmail.com
                    </Link>
                </HStack>
            </Box>
        </Box>
    )
}

export const HomePageBaseComponent = HomePage;

const mapStateToProps = ({ home }: RootState): StoreProps => {
    return {currentProjects: home.currentProjects};
};

export default connect(mapStateToProps, null)(HomePage);