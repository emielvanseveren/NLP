import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 25px;
  position: relative;
`;

export const LabelContainer = styled.div`
  width: 100%;
  margin-bottom: 5px;
`;

export const Label = styled.label<{ showError: boolean }>`
  color: ${({ theme, showError }): string => showError ? theme.error : theme.t};
  width: 100%;
  user-select: none;
  text-transform: capitalize;
`;
export const InputContainer = styled.div`
  width: 100%;
  position: relative;
  &.placeholder {
    color: black;
    height: 44px;
  }
  .icon {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    left: 20px;
    scale: 1.5;
  }
  &:focus{
    .icon path {
      transition: fill .2s ease-in-out;
      fill: ${({ theme }): string => theme.p};
    }
  }
`;

export const Input = styled.textarea<{ hasIcon: boolean; hasError: boolean; }>`
  height: 500px;
  width: 100%;
  padding-left: ${({ hasIcon }): string => hasIcon ? '60px' : '15px' /* 15 is the standard */};
  background-color: transparent;
  font-size: 1rem;
  border-bottom: 2px solid white;
  font-weight: 600;
  border: none;
  color: ${({ theme }) => theme.s}Af;
  resize: none;
  outline: 0;

  &:focus {
    border-bottom-color: ${({ theme, hasError }): string => hasError ? theme.error : 'white'};
  }
  &::placeholder{
    text-transform: capitalize;
    font-weight: 400;
  }
  &[readOnly]{
    opacity: .5;
  }
`;

export const ErrorContainer = styled.div<{ showError: boolean }>`
  position: absolute;
  min-height: 40px;
  display: flex;
  align-items: center;
  bottom: -45px;
  height: auto;
  width: ${({ showError }): string => showError ? '100%' : '0'};
  background-color: ${({ theme }): string => theme.error};
  color: white;
  transition: width 0.2s ease-in-out, transform 0.3s ease-in-out;
  overflow: hidden;
  border-radius: 5px;
  transform: ${({ showError }): string => `translate(${showError ? '0' : '5px'})`};
  z-index: 5;
`;

export const Error = styled.span`
  display: flex;
  align-items: center;
  min-width: 100%;
  width: 100%;
  padding: 5px 5px 5px 15px;
  height: 40px;
  font-weight: 500;
  white-space: nowrap;
  color: white;
`;
