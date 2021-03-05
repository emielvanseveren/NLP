import { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  overflow-wrap: break-word;
`;

interface IProps {
  text: string;
}

export const Summary: FC<IProps> = ({ text }) => {
  return (
    <Container>{text}</Container>
  );
}