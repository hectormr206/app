import styled from 'styled-components';

export const Wrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  overflow: hidden;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
`;
