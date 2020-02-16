// import React,  { useState, useEffect } from "react";
import React from "react";
import Container from "../../../components/Container";
import Jumbotron from "../../../components/Jumbotron";
import Search from "../../../components/Search";
import { Table, Thead, Th, Tbody, Tr, Td } from "../../../components/Table";
import API from "../../../utils/API";


class MainPage extends React.Component {

    state = {
        people: [],
        filtered: [],
        sortAsc: false,
        search: ""
    }   

    getRandomPeople = () => {
        API.getPeople()
            .then(data => {
                // console.log(data.data.results);
                this.setState({
                    people: data.data.results,
                    filtered: data.data.results
                })
                console.log(this.state.people);
            })
            .catch(err => { console.log(err);
            })
    }
    componentDidMount() {
        this.getRandomPeople()
    }
    sortByFirstName = () => {
        
        if (this.state.sortAsc){
            this.state.filtered.sort((a, b) => (b.name.first > a.name.firts) ? 1 : -1)
            this.setState({
                sortAsc: false
            })
        } else {
            this.state.filtered.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1)
            this.setState({
                sortAsc: true
            })
        }
        this.setState({
            filtered: this.state.filtered
        })
    }
    sortByLastName = () => {
        
        if (this.state.sortAsc){
            this.state.filtered.sort((a, b) => (b.name.last > a.name.last) ? 1 : -1)
            this.setState({
                sortAsc: false
            })
        } else {
            this.state.filtered.sort((a, b) => (a.name.last > b.name.last) ? 1 : -1)
            this.setState({
                sortAsc: true
            })
        }
        this.setState({
            filtered: this.state.filtered
        })
    }
    sortByAge = () => {
        
        if (this.state.sortAsc){
            this.state.filtered.sort((a, b) => (b.dob.age > a.dob.age) ? 1 : -1)
            this.setState({
                sortAsc: false
            })
        } else {
            this.state.filtered.sort((a, b) => (a.dob.age > b.dob.age) ? 1 : -1)
            this.setState({
                sortAsc: true
            })
        }
        this.setState({
            filtered: this.state.filtered
        })
    }
    onChangeHandler = e => {
        
        this.setState({
            search: e.target.value
        })
        let peopleSearch = this.state.people.filter(item => {
            let values = item.name.last.toLowerCase();
            return ( values.indexOf(e.target.value) !== -1 ) 
        })
        this.setState({
            filtered: peopleSearch
        })
    }

render(){
    return (
        <Container>
            <Jumbotron>
                <Search 
                    searchVal = {this.state.search}
                    onChangeHandler = {this.onChangeHandler}
                />
            </Jumbotron>
            <Table>
                <Thead>
                    <Tr>
                        <Th></Th>
                        <Th>First Name <i className="fas fa-sort" onClick={this.sortByFirstName}></i></Th>
                        <Th>Last Name <i className="fas fa-sort" onClick={this.sortByLastName}></i></Th>
                        <Th>Email</Th>
                        <Th>Phone</Th>
                        <Th>Age <i className="fas fa-sort" onClick={this.sortByAge}></i></Th>
                    </Tr>
                </Thead>
                <Tbody>
                {this.state.filtered.map((item, i) => (
                    <Tr key={i}>
                        <Td><img src={item.picture.medium} alt={item.firstName}/></Td>
                        <Td>{item.name.first}</Td>
                        <Td>{item.name.last}</Td>
                        <Td><a href={"mailto:"+item.email}>{item.email}</a></Td>
                        <Td>{item.phone}</Td>
                        <Td>{item.dob.age}</Td>
                    </Tr>
                ))}
                </Tbody>
            </Table>
        </Container>
    )
}

}

export default MainPage;
