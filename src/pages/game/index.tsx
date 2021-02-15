import "./Game.css";
import {Card,C,CPlusPlus,CSS,CSharp,GIT,HTML,JS,NetCore,React,Redux,SQL,Typescript} from '../../images'
import { RouteComponentProps } from 'react-router-dom';
import {print} from "../../helper"
// enum Difficulty{
//     Easy = "Easy",
//     Normal = "Normal",
//     Hard = "Hard"
// }

interface ImagesProps{
    id:number,
    value: string,
    realValue:string
}

const images:ImagesProps[] = [
    {id:1, value: Card, realValue:C},
    {id:2, value: Card, realValue:CPlusPlus},
    {id:3, value: Card, realValue:CSharp},
    {id:4, value: Card, realValue:GIT},
    {id:5, value: Card, realValue:CSS},
    {id:6, value: Card, realValue:HTML},
    {id:7, value: Card, realValue:JS},
    {id:8, value: Card, realValue:NetCore},
    {id:9, value: Card, realValue:Redux},
    {id:10, value: Card, realValue:SQL},
    {id:11, value: Card, realValue:Typescript},
    {id:12, value: Card, realValue:React}
]

function shuffleArray(array:ImagesProps[]){
    const secondArray = array;
    let i = array.length -1;
    for(; i > 0; i--){
        const j = Math.floor(Math.random() *(i+1));
        const temp = array[i]
        array[i] = array[j];
        array[j] = temp;
    }
    for(; i > 0; i--){
        const j = Math.floor(Math.random() *(i+1));
        const temp = secondArray[i]
        secondArray[i] = secondArray[j];
        secondArray[j] = temp;
    }

    return array.concat(secondArray);

}

const Game = ({location}:RouteComponentProps ) => {
    const imagesArray = shuffleArray(images);
    print(imagesArray)
    const difficulty = location.state;
    print(difficulty)
    return (
        <div className={"Game"}>
            <header className={"Game-header"}>
                <p style={{marginBottom:0}}>Esto es un game!</p>
                {/* <img src={Card} alt={"card"} width={80} height={100}/> */}
                <div style={{display:"flex",flexGrow:1,flexWrap:"wrap"}}>
                {imagesArray.map((x:ImagesProps,index) => {
                    return(
                        <li key={index} style={{listStyle:"none",padding:10,margin:10}}>
                            <img src={x.value} alt={"foto de programacion"} width={70} height={70}/>
                        </li>
                    )
                })}
                </div>
            </header>
        </div>
    )
}

export default Game;