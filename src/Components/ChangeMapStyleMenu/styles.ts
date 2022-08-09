import styled from "styled-components";

import { Menu } from '@headlessui/react'

export const MenuButton = styled(Menu.Button)`
  background-color: #38ed77;

  border: 2px solid black;
  border-radius: 3px;

  color: black;
  font-size: 1.25rem;
  font-weight: 600;

  padding: 5px 10px;

  cursor: pointer;
`

export const MenuItems = styled(Menu.Items)`
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

export const MenuItem = styled(Menu.Item)`
  border: 1.5px solid #3d3e3f;
  border-radius: 2px;

  padding: 1.5px 3px;

  cursor: pointer;

  backdrop-filter: brightness(0.9);
`