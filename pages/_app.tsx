import '../styles/globals.css'
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../src/theme";
import Layout from "../src/components/layout";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        {/* <CmdPalette /> */}
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}
export default App