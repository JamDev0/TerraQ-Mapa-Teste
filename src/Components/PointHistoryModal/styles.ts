import { Dialog } from "@headlessui/react";

import styled from "styled-components";

export const DialogContentContainer = styled(Dialog.Panel)`
  position: relative;

  width: 80%;
  height: 90%;

  background-color: aliceblue;

  padding: 16px 12px;
`

export const XBtn = styled.span`
  position: absolute;

  top: 25px;
  right: 25px;

  cursor: pointer;

  font-size: 1.5rem;
  font-weight: 600;
`

export const TableWrapper = styled.div`
  overflow-y: scroll;

  margin-inline: auto;

  width: fit-content;
  max-height: 500px;
`

export const Title = styled.h2`
  font-size: 3rem;
  font-weight: 600;

  text-align: center;

  margin-bottom: 35px;
`

export const DataTable = styled.table`
  width: fit-content;

  border-collapse: collapse;

  td, th {
    padding: 4px 12px;

    border: 1.8px solid black;

    text-align: center;
  }
`

export const DialogContentBackdrop = styled.div`
  position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    
    width: 100%;
    height: 100%;

    background-color: black;
    opacity: 0.5;
`