import { ThemeProvider } from "styled-components";
import { Card } from "./components/card/Card";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Container } from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/Global";
import content from "./content";

function App(): JSX.Element {

  const theme = {
    colors:{
      header: '#ebfbff',
      body:'fff',
      footer:'#003333'
    },
    mobile: '768px'
  }

  return (
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles/>
      <Header />
      <Container >
        {content.map((item)=>(
          <Card item={item} key={item.id}/>
        ))}
      </Container>
      <Footer/>
    </>
    </ThemeProvider>
  );
}

export default App;
