import BOOS from "../img/boos";
import {Box, Flex, Grid, Image, Link} from "@chakra-ui/react";
import React from "react";

const BooGrid = () => {
    return (
        <Grid width={"100%"} bgColor={"white"} templateColumns={"repeat(4, 1fr)"} gap={1} paddingRight={"4rem"}>
            {BOOS.IMAGES.map((booImage, index) => (
                <Link href={BOOS.LINKS[index]}>
                    <Image boxSize={"8rem"} objectFit={"contain"} src={booImage}/>
                </Link>
            ))}
        </Grid>
    )
}

export default BooGrid;