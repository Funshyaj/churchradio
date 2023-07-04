import styled from "styled-components";

export const MediaControllerContainer = styled.div`
  height: 100px;
  position: absolute;
  bottom: 20px;
  right: 50%;
  transform: translateX(50%);
  display: flex;
  width:100%;
  justify-content: space-between;
  align-items: center;

  & button {
    font-size: 40px;
  }

  & button:nth-of-type(2) {
    font-size: 45px;
  }

  @media(min-width:768px){
    width:70%;
  }

  @media(min-width:1024px){
    width:50%;
  }

 
`;

export const CurrentlyPlayingContainer = styled.div`
  color: #fff;
  position: absolute;
  bottom: 20%;
  height: 100px;
  left: 10%;
  font-size: 24px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  & p {
    transform: translateY(-25%);
    margin: 0;
    border-bottom: 1px solid #fff;
  }

  @media(min-width:768px){
    left:30px;
  }

  @media(min-width:1024px){
    left:20px;
    bottom:20px
  }
`;
