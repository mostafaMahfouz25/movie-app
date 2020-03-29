import React, { Component } from 'react'
import axios from 'axios';
import './App.css';
import Search from './components/Search';
import Results from './components/Results';
import ViewMovie from './components/ViewMovie';
import NotFound from './components/NotFound';
const API_URL = "http://www.omdbapi.com/?apikey=621d41cd";
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value:'',
      result:[],
      selected:{},
      openMovie:false,
      notFound:false
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

          const res = await axios.get(API_URL+"&s="+this.state.value).catch(error=>{console.log(error)});
          
          if(res.data.Response == "True")
          {
            this.setState({
              result:res.data.Search,
              notFound:false,
              value:''
            })
          }
          else
          {
            this.setState({notFound:true,selected:{},result:[],value:''})
          }
          

        }
        resultData();

    
    }
  }


  selectData = (id) =>
  {
        axios.get(API_URL+"&i="+id).then(({data})=>{
        
        this.setState({selected:data,openMovie:true})
        // console.log(this.state.selected);
    });
  }

  closeView = ()=>{
    this.setState({openMovie:false})
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
            <div className="row">
            { this.state.notFound ? <NotFound message="This Movie Not Found" /> : ''}
            { this.state.openMovie ? <ViewMovie data={this.state.selected} closeView={this.closeView} /> : ''}
            </div>
            <div className="row">
              <Results results={this.state.result} selectData={this.selectData} />
            </div>
          </div>
        </div>
    )
  }
}

