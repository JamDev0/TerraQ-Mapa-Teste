import styled from "styled-components";

export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 8px;
`

export const Title = styled.h2`
  font-size: 1rem;
  font-weight: 600;

  margin-top: 16px;
  margin-bottom: 20px;
`

export const ApiPopupContentContainer = styled.h3`
  font-size: 0.9rem;

  margin-bottom: 8px;
`

export const ListOfData = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 4px;

  font-size: 0.875rem;

  margin-bottom: 16px;
`

export const OpenHistory = styled.a`
  font-size: 1rem;

  cursor: pointer;
`