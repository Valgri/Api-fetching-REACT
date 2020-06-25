import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';




class App extends React.Component{
  constructor(){
    super();
    this.state = {
      items: [],
      isFetching: false
    }
   
  }
 async componentDidMount(){
    const KEY = 'UhNWlBjURCOZfzDRTdFonvESj_ZtMDs1rhmkFybgR3k';
   const API = 'https://api.unsplash.com/photos?order_by=popular&per_page=50';
    this.setState({ isLoading: true });
   await fetch(API,{
      headers: {
        'Access-Control-Allow-Origin': '*',
       'Authorization': `Client-ID ${KEY}`
      }})
      .then(response => response.json())
      .then(result => this.setState({ items: result, isFetching: false }))
      .catch(e => console.log(e));
      
  }
  render() {
    const {items, isFetching} = this.state;
    console.log(items);
    const films = items.map(item => {
      return (
        <div className='list' key={item.id}>
          <p>{item.alt_description}</p>
          <img src={item.urls.regular} alt={item.alt_description}/>
        </div>
      )
    });

    if (isFetching) return <div>...Loading</div>;

    return (
      <div className="App">
        <div className="lists">
        {films}
        </div>

      </div>
    );
  }
 
}

export default App;
