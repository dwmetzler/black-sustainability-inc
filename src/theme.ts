import {extendTheme, Heading, HStack} from "@chakra-ui/react";
import React from "react";

const theme = extendTheme({
    colors: {
        brand: {
            green: "#009845",
            red: "#CE0E2D",
            yellow: "#FFC629",
            black: "#000000"
        }
    },
    components: {
        Button: {
            variants: {
                solid: {
                    color: "brand.black",
                    bgColor: "brand.yellow"
                }
            }
        },
        Heading: {
            baseStyle: {
                textAlign: "center",
            },
            variants: {
                sectionTitle: {
                    color: "white",
                    marginBottom: "1rem"
                }
            }
        },
        Text: {
            baseStyle: {
                fontSize: "1rem"
            },
            variants: {
                footer: {
                    color: "#ccc",
                    fontSize: ""
                }
            }
        }
    },
    fonts: {
        heading: "Oswald",
        body: "Noto Sans HK"
    },
    textStyles: {
        pageTitle: {
            color: "brand.green",
            textTransform: "uppercase",
            fontWeight: "700",
            fontSize: "2rem"
        },
        footerBody: {
            color: "#ccc",
            fontSize: "0.9rem"
        }
    },
    space: {
        sectionMargin: "3rem"
    }
});

export default theme;