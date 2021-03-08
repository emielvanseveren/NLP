import { FC } from 'react';
import styled from 'styled-components';

const Container = styled.ul`
  overflow-wrap: break-word;
  list-style-type: disc;
`;

interface IProps {
  text: string[];
}

export const Summary: FC<IProps> = ({ text }) => {
  return (
    <Container>
      { text.map((t, i) => {
        if (i < 5) {
          return <li key={i}>{t}</li>;
        }
        return '';
      })}
    </Container>
  );
}