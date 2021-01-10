import React from 'react';

const CountryList = ({countryList=[]}) => {
  return (
    <div>
    { countryList.map((data,index) => {
        if (data) {
          return (
            <div key={data.name}>
              <h1>{data.name}</h1>
	        </div>	
    	   )	
    	 }
    	 return null
    }) }
    </div>
  );
}
export default CountryList;