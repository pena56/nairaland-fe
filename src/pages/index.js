import Head from 'next/head';
import { Container } from '@nextui-org/react';

import NavBar from '@/components/common/Navbar';

export default function Home() {
  return (
    <Container
      fluid
      // as="main"
      // display="flex"
      direction="column"
      // justify="center"
      // alignItems="center"
      style={{ minHeight: '100vh', backgroundColor: '#EAEAEA' }}
    >
      <Head>
        <title>Nairaland | Let's Talk</title>
        <meta
          name="description"
          content="Platform where discussions that matter take place."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
    </Container>
  );
}
