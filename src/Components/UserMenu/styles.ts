import { Popover } from "@headlessui/react";
import styled from "styled-components";

export const PopoverContainer = styled(Popover)`
    position: fixed;
    left: 30px;
    bottom: 30px;
    z-index: 1000;
`

export const PopoverButton = styled(Popover.Button)`
    border: none;
    border-radius: 10px;

    padding: 5px 10px;

    width: fit-content;

    background-color: #F4F4F4;

    border: 1.8px solid #e02a2a;

    color: #e02a2a;
    font-weight: 700;
    font-size: 2rem;

    cursor: pointer;
`

export const PopoverPanel = styled(Popover.Panel)`
    position: absolute;
    left: 0;
    top: -16px;

    border: 1.5px solid black;
    border-radius: 2px;

    padding: 10px;

    transform: translateY(-100%);

    display: flex;
    column-gap: 1rem;

    width: max-content;

    max-width: 500px;

    background-color: bisque;

    img {
        border: 2px solid black;
        border-radius: 5px;

        height: 100%;

        aspect-ratio: 1/1;
    }
`

export const UserDataContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    div {
        display: flex;
        flex-wrap: wrap;
        column-gap: 0.5rem;
        justify-content: space-around;
    }
`