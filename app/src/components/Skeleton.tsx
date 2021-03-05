import { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;

  span {
    margin: 10px 0;
    display: block;
    height: 20px;
    background-color: rgba(231, 231, 231, 0.39);
  }

  .one {
    width: 80%;
  }

  .two {
    width: 60%;
  }

  .three {
    width: 45%;
  }
`;


export const Skeleton: FC = () => {
  return (
    <Container>
      <span className="one" />
      <span className="two" />
      <span className="three" />
    </Container>
  )
}