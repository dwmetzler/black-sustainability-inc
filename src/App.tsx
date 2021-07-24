import * as React from "react"
import {
  ChakraProvider,
} from "@chakra-ui/react"
import Home from "./home"
import theme from "./theme"
import "@fontsource/noto-sans-hk"
import "@fontsource/oswald"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Home.Page/>
  </ChakraProvider>
)
// k8 was here