import React from "react";
import Cardlist from "./Cardlist";
import Searchbox from "./Searchbox.js"
import {robots} from './robots'
import { Component } from "react";



class Application extends React.Component {
    constructor(){
        super()
     this.state= {
        robots:robots,
        searchfield:''
    }
}
onSearchChange=(event)=>{
    this.setState({searchfield:event.target.value})
    console.log(event.target.value)
}



render(){
    const filtered =this.state.robots.filter(robots=>{
        return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    return( 
        <div className='tc'>
        <h1>RoboFriends</h1>
        <Searchbox searchChange={this.onSearchChange}/>
        <Cardlist robots={filtered}/>
        </div>
    )
}
}
export default Application