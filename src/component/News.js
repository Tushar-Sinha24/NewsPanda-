import React, { Component } from 'react'
import NewsItem from './NewsItem'


export class News extends Component {
    constructor(){
      super();
      this.state={
        articles:[],
        
      }
    }
    async componentDidMount(){
      let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=0f422d94684048759b3ae0f2ed13f3fb&page=2";
     let data =await fetch(url);
     let parsedData= await data.json()
    //  console.log(parsedData);
     this.setState({articles:parsedData.articles})
    }

    prev= ()=>{
      console.log("ASDsa")
    }
     next= async()=>{
      let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=0f422d94684048759b3ae0f2ed13f3fb&page=${this.state.page + 1}`;
      let data =await fetch(url);
      let parsedData= await data.json()
      
      this.setState({
        page:this.state.page + 1,
        articles:parsedData.articles
      })
    }
  render() {
    return (
      <div className='container-fluid'>
        <div className="container my-3">
            <h1>NewsPanda-Top Headlines</h1>
            <div className="row">
              {this.state.articles.map((element)=>{
                 return <div className="col-md-4" key={element.urlToImage}>
                 <NewsItem  title={element.title} description={element.description}  imgUrl={element.urlToImage} newsUrl={element.url}/>
                 </div>
              })}     
            </div>
            <div className="d-flex justify-content-between">
            <button type="button" disabled={this.state.page<=1?false:true} onClick={this.prev} className="btn btn-dark"> &larr; prev</button>
            <button type="button" onClick={this.next} className="btn btn-dark">Next &rarr;</button>
            </div>
            
        </div>

      </div>
    )
  }
}

export default News

