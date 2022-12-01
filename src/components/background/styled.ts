import styled, { css } from "styled-components";
import { PlayLists } from "./index";

interface BackgroundContainerDivProps {
  type: PlayLists;
}

function getImageSrc(type: PlayLists) {
  return `http://localhost:3000/images/${type}.jpg`;
}

export const BackgroundContainerDiv = styled.div<BackgroundContainerDivProps>`
  height: 100vh;
  width: 100vw;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  transition: background-image 3s ease-in-out;
  ${({ type }) =>
    type &&
    css`
      background-image: url(${getImageSrc(type)});
    `};
`;