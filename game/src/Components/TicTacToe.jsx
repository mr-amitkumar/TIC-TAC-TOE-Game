import styled from "styled-components";
import Cross_icons from "../assets/cross.png";
import Circle_icons from "../assets/circle.png";
import { useRef, useState } from "react";

let data = ["", "", "", "", "", "", "", "", ""];

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
}
`;
const Title = styled.h1`
    font-size: 40px;
  text-align: center;
  color: #fff;
  margin-top: 20px;
  margin-bottom: 12px;

  @media (max-width: 480px) {
    font-size: 30px;
  }
`;
const Spami = styled.span`
   color: #26ffcb;
  padding-left: 8px;
`;
const Board = styled.div`
   display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 90%;
  max-width: 300px;
  margin-top: 20px;
    margin-right:71px;
  @media (max-width: 480px) {
    margin-right:71px;
`;
const Reset = styled.button`
 width: 200px;
  height: 50px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 25px;
  background: #1f3540;
  font-size: 20px;
  color: #26ffcb;
  margin-top: 20px;
  margin-bottom: 30px;
`;
const Row1 = styled.div``;
const Row2 = styled.div``;
const Row3 = styled.div``;
const Boxes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 130px;
  width: 130px;
  background: #1f3540;
  border: 3px solid #0f1b21;
  border-radius: 12px;
  cursor: pointer;

  @media (max-width: 480px) {
    height: 110px;
    width: 110px;
  }
`;


const Game = () => {
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  let titleRef = useRef(null);
  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);
  let box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9];
  const toggle = (e, num) => {
    if (lock) {
      return 0;
    }
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src = '${Cross_icons}' />`;
      data[num] = "x";
      setCount(++count);
    } else {
      e.target.innerHTML = `<img src = '${Circle_icons}' />`;
      data[num] = "o";
      setCount(++count);
    }
    checkWin();
  };

  const checkWin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[5]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data[6]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[7]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[2]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data[6]);
    }
  };

  const won = (winner) => {
    setLock(true);
    if (winner === "x") {
      titleRef.current.innerHTML = `Congrtulations x won the match`;
    } else {
      titleRef.current.innerHTML = `Congrtulations O won the match`;
    }
  };

  const reset = () => {
    setLock(false);
    data = ["", "", "", "", "", "", "", "", ""];
    titleRef.current.innerHTML = "Tic Tac Toe <Spami>Game</Spami>";
    box_array.map((e) => {
      e.current.innerHTML = "";
    });
  };
  return (
      <Container>
        <Title ref={titleRef}>
          Tic Tac Toe <Spami>Game</Spami>
        </Title>
        <Board>
          <Row1>
            <Boxes
              ref={box1}
              onClick={(e) => {
                toggle(e, 0);
              }}
            ></Boxes>
            <Boxes
              ref={box2}
              onClick={(e) => {
                toggle(e, 1);
              }}
            ></Boxes>
            <Boxes
              ref={box3}
              onClick={(e) => {
                toggle(e, 2);
              }}
            ></Boxes>
          </Row1>
          <Row2>
            <Boxes
              ref={box4}
              onClick={(e) => {
                toggle(e, 3);
              }}
            ></Boxes>
            <Boxes
              ref={box5}
              onClick={(e) => {
                toggle(e, 4);
              }}
            ></Boxes>
            <Boxes
              ref={box6}
              onClick={(e) => {
                toggle(e, 5);
              }}
            ></Boxes>
          </Row2>
          <Row3>
            <Boxes
              ref={box7}
              onClick={(e) => {
                toggle(e, 6);
              }}
            ></Boxes>
            <Boxes
              ref={box8}
              onClick={(e) => {
                toggle(e, 7);
              }}
            ></Boxes>
            <Boxes
              ref={box9}
              onClick={(e) => {
                toggle(e, 8);
              }}
            ></Boxes>
          </Row3>
        </Board>
        <Reset
          onClick={() => {
            reset();
          }}
        >
          Reset
        </Reset>
      </Container>
     );
};
export default Game;
