import { default as styled } from "styled-components";

const root = styled.div`
  position: relative;
  height: 28px;

  :focus {
    outline: none;
  }

  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 4px;
    background-color: rgb(96, 94, 92);
    top: 50%;
    transform: translateY(-50%);
  }
`;

const track = styled.div`
  position: absolute;
  left: 8px;
  right: 8px;
  height: 100%;
`;

const selectedTrack = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 4px;
  background-color: blue;
  transition: width 0.1s cubic-bezier(0.1, 0.9, 0.2, 1) 0s;
`;

const thumb = styled.div`
  position: absolute;
  box-sizing: border-box;
  height: 16px;
  width: 16px;
  border-radius: 16px;
  transition: left 0.1s cubic-bezier(0.1, 0.9, 0.2, 1) 0s;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border: 2px solid rgb(96, 94, 92);
`;

export const SliderTheme = {
  Slider: {
    slots: { root, track, selectedTrack, thumb }
  }
};
