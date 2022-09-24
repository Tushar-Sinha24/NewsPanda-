import React, { Component } from 'react'
import NewsItem from './NewsItem'
export class News extends Component {

  static defaultProps={
    country:"in",
    pageSize:18,

  }


   capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

    constructor(props){
      super(props);
      this.state={
        articles:[],
        loading:false,
        page:1

      }

      document.title=`${this.capitalizeFirstLetter(this.props.category)} - NewsPanda`;
    }
    
    async updateNews(){
      const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      let data =await fetch(url);
      let parsedData= await data.json()
      // parsedData=(Object.values(parsedData.articles));
      // console.log(parsedData.articles);
      this.setState({articles:parsedData.articles, totalResults:parsedData.totalResults})
      
    }

    async componentDidMount(){
      this.updateNews();
    }

    componentDidUpdate(prevProps){
      if(this.props.category !== prevProps.category){
        this.updateNews();
      }
    }
    
    prev= async()=>{
    this.setState({page:this.state.page-1})
   this.updateNews();
    }

     next= async()=>{
    this.setState({page:this.state.page+1})
    this.updateNews();
    }

  render() {
    return (
      
      <div className='container-fluid'>
        <div className="container my-3" >
            <h2 className='text-center' style={{margin:'35px,0px', marginTop:'90px'}}>NewsPanda-Top Headlines on {this.capitalizeFirstLetter(this.props.category)}</h2>
            
            <div className="row">
              {this.state.articles.map((element)=>{
                 return <div className="col-md-4" key={element.url}>
                 <NewsItem  title={element.title} description={element.description}  imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                 </div>
              })}     
            </div>
            <div className="d-flex justify-content-between">
            <button type="button" disabled={this.state.page<=1} onClick={this.prev} className="btn btn-dark"> &larr; prev  </button>
            <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} onClick={this.next} className="btn btn-dark">Next &rarr;</button>
            </div>
            
        </div>

      </div>
    )
  }
}

export default News

