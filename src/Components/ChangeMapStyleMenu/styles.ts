import { Popover } from '@headlessui/react';

import styled from "styled-components";

export const PopoverContainer = styled(Popover)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 1000;
`

export const PopoverButton = styled(Popover.Button)`
  background-color: #F4F4F4;

  border: 2px solid rgba(0,0,0,0.2);
  border-radius: 3px;

  color: black;
  font-size: 1.25rem;
  font-weight: 600;

  padding: 5px 10px;

  cursor: pointer;
`

export const PopoverPanel = styled(Popover.Panel)`
  position: absolute;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 4px;

  position: absolute;

  border: 2px solid rgba(0,0,0,0.2);

  width: fit-content;

  padding: 5px 10px;

  background-color: #F4F4F4;
`

export const Option = styled.span`
  border: 1.5px solid #3d3e3f;
  border-radius: 2px;

  padding: 1.5px 3px;

  cursor: pointer;

  backdrop-filter: brightness(0.9);
`