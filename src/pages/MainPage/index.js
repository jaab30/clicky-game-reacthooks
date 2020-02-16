import React,  { useState, useEffect } from "react";
// import React from "react";
import Container from "../../components/Container";
import Jumbotron from "../../components/Jumbotron";
import Search from "../../components/Search";
import { Table, Thead, Th, Tbody, Tr, Td } from "../../components/Table";
import API from "../../utils/API";
import friends from "./../../characters.json"
import Test from "../../components/Test"


function MainPage() {

    const [people, setPeople] = useState(friends);
    const [filtered, setFiltered] = useState(friends);
    const [sortAsc, setSortAsc] = useState([]);
    const [search, setSearch ] = useState("")

    const shuffle = (a) => {
        for (let i = a.length - 1; i > 0; i--) {
    
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
      }
    const handleClick = () => {
        console.log("yes");
        
       shuffle(people)
        // console.log(people);
        setFiltered(people)
        // setPeople(people)
    }

    useEffect(() => {
        console.log("effect");
        shuffle(people)
        setPeople(people)
    }, [people], )
    // const getRandomPeople = () => {
    //     API.getPeople()
    //         .then(data => {
    //             setPeople(data.data.results)
    //             setFiltered(data.data.results)
    //         })
    //         .catch(err => { console.log(err);
    //         })
    // }

    // useEffect(() => {
    //     getRandomPeople()
    // }, [])
    
    // const sortByFirstName = () => {
        
    //     if (sortAsc){
    //         filtered.sort((a, b) => (b.name.first > a.name.firts) ? 1 : -1)
    //         shuffle(filtered)
    //         setSortAsc(false)
          
    //     } else {
    //         // filtered.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1)
    //         shuffle(filtered)
    //         setSortAsc(true)
    //     }
    //     setFiltered(filtered)
    // }
    // const sortByLastName = () => {
        
    //     if (sortAsc){
    //         filtered.sort((a, b) => (b.name.last > a.name.last) ? 1 : -1)
    //         setSortAsc(false)
    //     } else {
    //         filtered.sort((a, b) => (a.name.last > b.name.last) ? 1 : -1)
    //         setSortAsc(true)
    //     }
    //     setFiltered(filtered)
    // }

    // const sortByAge = () => {
        
    //     if (sortAsc){
    //         filtered.sort((a, b) => (b.name.last > a.name.last) ? 1 : -1)
    //         setSortAsc(false)
    //     } else {
    //         filtered.sort((a, b) => (a.name.last > b.name.last) ? 1 : -1)
    //         setSortAsc(true)
    //     }
    //     setFiltered(filtered)
    // }

    // const onChangeHandler = e => {
        
    //     setSearch(e.target.value)
    //     let peopleSearch = people.filter(item => {
    //         let values = item.name.last.toLowerCase();
    //         return ( values.indexOf(e.target.value) !== -1 ) 
    //     })
    //     setFiltered(peopleSearch)
    // }


    return (
        <Container>
          {filtered.map(item => (
              <Test 
              name={item.name}
              image={item.image}
              handleClick={handleClick}
              />
          ))}
        </Container>
    )
}


export default MainPage;
