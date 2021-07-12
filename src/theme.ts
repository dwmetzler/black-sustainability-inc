import { extendTheme } from "@chakra-ui/react";

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
                textAlign: "center"
            }
        }
    },
    textStyles: {
        h1: {
            color: "brand.green",
            textTransform: "uppercase",
            fontWeight: "700",
            fontSize: "2rem"
        },
    }
});

export default theme;