import React from 'react';
import Header from '../../components/utils/Header';
import Main from '../../components/Home/Main';
import Footer from '../../components/Home/Footer';
import Container from './styles';

function Home() {
  return (
    <Container>
      <Header />
      <Main />
      <Footer />
    </Container>
  );
}

export default Home;
