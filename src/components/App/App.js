import React from 'react';
//import logo from './logo.svg';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';

/*const business = {
  imageSrc: 'https://res.cloudinary.com/cldean11/image/upload/v1574718356/Yelp-App/background-steak_ldr3np.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}

const businesses = [business, business, business, business, business, business]*/


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      businesses:[]
    };
    this.searchYelp = this.searchYelp.bind(this);
  }
  searchYelp(term, location, sortBy) {
   Yelp.search(term,location,sortBy).then(businesses=>{
     this.setState({
       businesses:businesses
     })
   })
  }
  render() {
    return (
    <div className="App">

      <h1>Yelp Clone</h1>
      <SearchBar searchYelp={this.searchYelp} />
      <BusinessList businesses={this.state.businesses} />
    </div>
    );
  }
}
export default App;
