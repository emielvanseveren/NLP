import { FC } from 'react';
import styled from 'styled-components';
import { SummaryHandler } from 'view';

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Home: FC = () => {
  return (
    <Container>
      <SummaryHandler />
    </Container>
  )
}