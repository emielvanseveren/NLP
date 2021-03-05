import { FC } from 'react';
import styled from 'styled-components';
import { SummaryHandler } from 'view';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Home: FC = () => {
  return (
    <Container>
      <SummaryHandler />
    </Container>
  )
}