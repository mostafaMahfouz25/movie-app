import React, { Component } from 'react'
import axios from 'axios';
import './App.css';
import Search from './components/Search';
const API_URL = "http://www.omdbapi.com/?apikey=621d41cd";
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value:'',
      result:[],
      selected:{}
    }
  }


  

  handleInput = (e) => 
  {
    let value = e.target.value;
    this.setState({
      value:value
    });
  }

  search = (e) => 
  {
    if(e.key === "Enter")
    {
      // console.log(this.state.value);
        const resultData = async ()=>
        {

          const res = await axios.get(API_URL+"&s="+this.state.value);
          
          this.setState({
            result:res.data.Search,
            value:"new"
          })

        }
        resultData();
    
    }
  }

    



  render() {
    return (
        <div className="App">
          <header>
            <h1 className="text-center display-4 text-white">Movie App</h1>
          </header>
          <div className="container">
            <div className="row">
              <Search handleInput={this.handleInput} search={this.search} />
            </div>
          </div>
        </div>
    )
  }
}

