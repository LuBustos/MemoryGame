import { useEffect, useRef, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import Title from "../../components/Title";
import {
  C,
  Card,
  CPlusPlus,
  CSharp,
  CSS,
  GIT,
  HTML,
  JS,
  NetCore,
  React,
  Redux,
  SQL,
  Typescript
} from "../../images";
import "./Game.css";
enum Difficulty {
  Easy = "Easy",
  Normal = "Normal",
  Hard = "Hard",
}

interface ImagesProps {
  id: number;
  value: string;
  realValue: string;
}

const images: ImagesProps[] = [
  { id: 1, value: Card, realValue: C },
  { id: 2, value: Card, realValue: CPlusPlus },
  { id: 3, value: Card, realValue: CSharp },
  { id: 4, value: Card, realValue: GIT },
  { id: 5, value: Card, realValue: CSS },
  { id: 6, value: Card, realValue: HTML },
  { id: 7, value: Card, realValue: JS },
  { id: 8, value: Card, realValue: NetCore },
  { id: 9, value: Card, realValue: Redux },
  { id: 10, value: Card, realValue: SQL },
  { id: 11, value: Card, realValue: Typescript },
  { id: 12, value: Card, realValue: React },
];

function shuffleArray(array: ImagesProps[], difficulty: unknown) {
  const firstArray = [];
  let i = array.length - 1;
  let min: number = 0;
  if (difficulty === Difficulty.Easy) {
    min = 8;
  } else if (difficulty === Difficulty.Normal) {
    min = 5;
  }
  for (; i > min; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    firstArray.push(array[i]);
  }
  if(difficulty === Difficulty.Hard){
    return array.concat(array);
  }
  return firstArray.concat(firstArray);
}

const Game = ({ location,history }: RouteComponentProps) => {
  const [selectedCard, setSelectedCar] = useState<{
    src: string | null;
    index: number;
  }>({ src: null, index: 0 });
  const [update, setUpdate] = useState<{
    update: boolean;
    value: string | null;
  }>({ update: false, value: "" });
  const difficulty = location.state;
  const imagesArrayRef = useRef(shuffleArray(images, difficulty)); // Podemos meterlo dentro de un customhook
  const [showCard, setShowCard] = useState({ show: false, index: 0 });
  // const [attempts,setAttempts] = useState<number>(0);
  const arrayEmpty = 0;
  let count = 0;
  

  useEffect(() => {
    if (update.update) {
      imagesArrayRef.current = imagesArrayRef.current.filter(
        (x) => x.realValue !== update.value
      );
      setUpdate({ update: false, value: "" });
    }
  }, [update]);

  const handleImage = (src: string, index: number) => {
    setShowCard({ show: true, index: index });
    if (selectedCard.src === null) {
      setSelectedCar({ src: src, index: index });
    } else {
      setTimeout(() => {
        setShowCard({ show: false, index: 0 });
        if (selectedCard.src === src && selectedCard.index !== index) {
          alert("PERFECTO!");
          setUpdate({ update: true, value: src });
        } else {
          count = count +1;
          console.log(count);
          // setAttempts(count);
          alert("Nope!");
        }
      }, 200);
      setSelectedCar({ src: null, index: 0 });
    }
  };

  if(imagesArrayRef.current.length === arrayEmpty){
      history.push("/End");
  }


  return (
    <div className={"Game"}>
      <header className={"Game-header"}>
        <div className={"Div-button"}>
        <button className={"Button"} onClick={() => history.goBack()}>Volver</button>
        </div>
        <Title title={"Memory game"} />
        <div className={"Game-images"}>
          {imagesArrayRef.current.map((x: ImagesProps, index) => {
            return (
              <div key={index} style={{ paddingLeft: "1%" }}>
                <li key={index} className={"Game-list"}>
                  <img
                    src={
                      showCard.show && showCard.index === index
                        ? x.realValue
                        : x.value
                    }
                    alt={"foto de programacion"}
                    height={70}
                    width={70}
                    onClick={() => handleImage(x.realValue, index)}
                  />
                </li>
              </div>
            );
          })}
        </div>
      </header>
    </div>
  );
};

export default Game;
