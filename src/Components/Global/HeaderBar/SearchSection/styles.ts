import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 0 0 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const InputSearch = styled.input`
  width: 25rem;
  height: 3rem;
  background: ${({ theme }) => theme.colors.three};
  border-radius: 0.5rem 0 0 0.5rem;
  border: none;
  padding: 0 1rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const SearchButton = styled.button`
  height: 3rem;
  background: ${({ theme }) => theme.colors.two};
  width: 5rem;
  border: none;
  border-radius: 0 0.5rem 0.5rem 0;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.textWhite};
  display: flex;
  justify-content: center;
  align-items: center;
`;
