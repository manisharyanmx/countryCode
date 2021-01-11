import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import SearchBarReg from './SearchBarReg';

import CountryList from './CountryList';

const SearchPage = (props) => {
  const [input, setInput] = useState('');
  const [inputReg, setInputReg] = useState('');
  const [countryListDefault, setCountryListDefault] = useState();
  const [countryList, setCountryList] = useState();

  const fetchData = async () => {
    return await fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(data => {
         setCountryList(data) 
         setCountryListDefault(data)
       });}

  const updateInput =  (input) => {
     const filtered =  countryListDefault.filter(country => {
      return country.alpha2Code.toLowerCase().includes(input.toLowerCase())
     })
     setInput(input);
     setCountryList(filtered);
  }

  const regionInput =  (input) => {
    const filtered =  countryListDefault.filter(country => {
     return country.region.toLowerCase().includes(input.toLowerCase())
    })
    setInputReg(input);
    setCountryList(filtered);
 }

  useEffect( () => {fetchData()},[]);
	
  return (
    <div>
      <h1>Country List</h1>
      <SearchBar 
       input={input} 
       onChange={updateInput}
      />

      <br/><br/><br/><br/>

      <SearchBarReg 
       input={inputReg} 
       onChange={regionInput}
      />
      <CountryList countryList={countryList}/>
    </div>
   );
}

export default SearchPage