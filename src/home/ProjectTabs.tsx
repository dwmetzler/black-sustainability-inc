import Project from "../api/models/Project";
import {
    Box, Button,
    Flex,
    Grid,
    Heading, HStack,
    Image,
    Spacer,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
    VStack
} from "@chakra-ui/react";
import React from "react";

type StoreProps = {
    projects: Array<Project>;
}

type ProjectTabsProp = StoreProps;

const ProjectTabs = (props: ProjectTabsProp) => {
    let {projects} = props;

    if(projects.length == 0) {
        return (
            <Text>
                No current projects
            </Text>
        )
    }

    return (
        <Tabs align={"center"} variant={"enclosed"}>
            <TabList>
                {projects.map((project, index) => (<Tab zIndex={1} color={"#cceecc"} fontSize={"1.5rem"} fontWeight={"600"} _selected={{ position: "relative", boxShadow: "lg", bgColor: "white", color: "black"}}>{project.title}</Tab>))}
            </TabList>

            <TabPanels boxShadow={"lg"} zIndex={2} position={"relative"}>
                {projects.map((project, index) => (
                    <TabPanel bgColor={"white"}>
                        {/*<Heading>{project.title}</Heading>*/}
                        <Flex justify={"center"} marginTop={"2rem"}>
                            <Image objectPosition={"center"} objectFit={"cover"} boxSize={"20rem"} src={project.imageUrl}/>
                            <VStack alignItems={"flex-start"} justify={"center"} maxWidth={"50%"} marginLeft={"1rem"} spacing={"1rem"}>
                                <LabeledTextBox label={"Focus Area"} text={project.focusArea}/>
                                <LabeledTextBox label={"Location"} text={project.location}/>
                                <LabeledTextBox label={"About"} text={project.about}/>
                            </VStack>
                        </Flex>
                        <Heading color={"brand.black"} marginY={"2rem"}>Goals</Heading>
                        <Grid templateColumns={`repeat(${project.goals.length + 2}, 1fr)`} gap={10}>
                            <Spacer/>
                            {project.goals.map((goal, index) => (
                                <VStack spacing={"1rem"} bgColor={"white"} color={"brand.black"} padding={3} borderRadius={"1rem"} border={"solid 0.5px rgba(0,0,0,0.05)"} boxShadow={"lg"} paddingY={"2rem"}>
                                    <Flex justify={"center"} alignItems={"center"} borderRadius={"50%"} border={"2px solid #eee"} fontSize={"2rem"} width={"3.5rem"} height={"3.5rem"}>
                                        <Heading>{index + 1}</Heading>
                                    </Flex>
                                    <Heading fontSize={"1.5rem"}>{goal.summary}</Heading>
                                    <Text>{goal.description}</Text>
                                </VStack>
                            ))}
                        </Grid>
                        <HStack justify={"center"} marginTop={"2rem"} marginBottom={"1rem"}>
                            <Text>
                                We need your help to complete this project!
                            </Text>
                            <Button _hover={{opacity: 0.5}}>
                                Donate
                            </Button>
                        </HStack>
                    </TabPanel>))}
            </TabPanels>
        </Tabs>
    );
}

type OwnProps = {
    label: string;
    text: string;
}
type LabeledTextBoxProps = OwnProps;
const LabeledTextBox = (props: LabeledTextBoxProps) => {
    return (
        <Box textAlign={"left"}>
            <Heading textAlign={"left"} fontSize={"1.5rem"}>{props.label}</Heading>
            <Text>{props.text}</Text>
        </Box>
    )
}

export default ProjectTabs;
