import React, { useState } from 'react';
import CharactersComp from "../../components/CharactersComp";
import DisplayComp from "../../components/DisplayComp";
import HeaderComp from "../../components/HeaderComp";
import NavComp from "../../components/NavComp";
import charactersMain from "../../characters.json";

function MainPage(){

    const [characters, setcharacters] = useState(charactersMain);
    const [currentScore, setCurrentScore] = useState(0);
    const [topScore, setTopScore] = useState(0);
    const [chosenGroup, setChosenGroup] = useState(charactersMain);
    const [message, setMessage] = useState("Click on an image to earn points. But don't click on any more than once!");
    const [classShake, setClassShake] = useState("shakeOff")
  
    const handleClick = (id) => {
      chosenFriend(id)
      shuffle(characters);
      setcharacters([...characters])
    }
   
    const shuffle = (a) => {
      for (let i = a.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]];
      }
    return a;
    }
  
    const chosenFriend = id => {
        setClassShake("shakeOff")
        let chosenArray = chosenGroup.map(item => (item.id));
      if(chosenArray.indexOf(id) === -1){
        setClassShake("shakeOn")
        setChosenGroup(characters);
        setCurrentScore(0);
        setTopScore(topScore);
        setMessage("You guessed incorrectly..!")
      } else {
        chosenArray = chosenGroup.filter(character => character.id !== id)
        setChosenGroup(chosenArray);
        setCurrentScore(currentScore + 1);
        setMessage("You guessed correctly..! Try Again.")
  
        if(topScore > currentScore){
          setTopScore(topScore);
        } else {
          setTopScore(currentScore + 1);
        }
      }
    }
    
    return (
      <div>
        <NavComp
        counter={currentScore}
        topScore={topScore}
        />
         <DisplayComp>
            <HeaderComp header1={message} />
            {characters.map(character => {
             return(
              <CharactersComp
                handleClick={handleClick}
                id={character.id}
                key={character.id}
                name={character.name}
                image={character.image}
                classShake={classShake}
              />
            )})}
          </DisplayComp>
      </div>
    );

}

export default MainPage;