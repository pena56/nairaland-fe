import { Container, Row } from '@nextui-org/react';
import Image from 'next/image';

export default function NavBar() {
  return (
    <Container fluid>
      <Row>
        <img src="/logo.png" />
        {/* <Image src="/logo.svg" alt="nairaland logo" layout="fill" /> */}
      </Row>
    </Container>
  );
}
