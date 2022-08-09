import { Popover } from '@headlessui/react';
import styled from "styled-components";

import { Menu } from '@headlessui/react'

export const PopoverContainer = styled(Popover)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 1000;
`

export const PopoverButton = styled(Popover.Button)`
  background-color: #38ed77;

  border: 2px solid black;
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

  width: fit-content;

  padding: 5px 10px;

  background-color: #b8d1f2;
`

export const Option = styled.span`
  border: 1.5px solid #3d3e3f;
  border-radius: 2px;

  padding: 1.5px 3px;

  cursor: pointer;

  backdrop-filter: brightness(0.9);
`