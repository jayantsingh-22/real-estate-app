// import { createContext, useState, useEffect } from 'react';
// import { housesData } from '../data';

// export const HouseContext = createContext('');

// const HouseProvider = ({children}) =>{

//     const [houses, setHouses] = useState(housesData);
//     const [country, setCountry] = useState('Select Country');
//     const [countries, setCountries] = useState([]);
//     const [price, setPrice] = useState('Select Price');
//     const [property, setProperty] = useState('Select type');
//     const [properties, setProperties] = useState([]);
//     const [moveInDate, setMoveInDate] = useState(new Date());
//     const [isLoading, setIsLoading] = useState(false);

//     useEffect(() => {
//         const allCountries = houses.map(house=>{
//             return house.country;
//         })
//         const uniqueCountries = [...new Set(allCountries)];
//         setCountries(uniqueCountries);
//     }, []);

//     useEffect(() => {
//         const allPropertyTypes = houses.map(house=>{
//             return house.type;
//         })
//         const uniquePropertyTypes = [...new Set(allPropertyTypes)];
//         setProperties(uniquePropertyTypes);
//     }, []);

//     const searchHandler=()=>{
//         setIsLoading(true);

//         // checking selection
//         const isDefault = (str)=> {
//             return str.split(' ').includes('Select');
//         }
//         const minPrice = parseInt(price.split(' ')[0]);
//         const maxPrice = parseInt(price.split('- ')[1]);

//         const filteredHouses = housesData.filter(house=> {
//             const housePrice = parseInt(house.price);
//             // no selection
//             if(isDefault(country) && isDefault(price) && isDefault(property) ){
//                 return house;
//             }

//             // country is selected
//             if(!isDefault(country) && isDefault(price) && isDefault(property)){
//                 return house.country === country;
//             }

//             // price is selected
//             if(isDefault(country) && !isDefault(price) && isDefault(property)){
//                 return (housePrice >= minPrice) && (housePrice <= maxPrice);
//             }

//             // property is selected
//             if(isDefault(country) && isDefault(price) && !isDefault(property)){
//                 return house.type === property;
//             }

//             // country & price is selected
//             if(!isDefault(country) && !isDefault(price) && isDefault(property)){
//                 return house.country === country && (housePrice >= minPrice) && (housePrice <= maxPrice);
//             }

//             // country & property is selected
//             if(!isDefault(country) && isDefault(price) && !isDefault(property)){
//                 return house.country === country && house.type === property;
//             }

//             // price & property is selected
//             if(isDefault(country) && !isDefault(price) && !isDefault(property)){
//                 return (housePrice >= minPrice) && (housePrice <= maxPrice) && house.type === property;
//             }

//             // all are selected
//             if(house.country === country && housePrice >= minPrice && housePrice <= maxPrice && house.type === property){
//                 return house;
//             }
//         })

//         // setHouses(filteredHouses)
//         setTimeout(() => {
//             filteredHouses.length>0 ? setHouses(filteredHouses) : setHouses([]);
//             setIsLoading(false);
//         }, 1000);
//     }

//     return(
//         <HouseContext.Provider value={{
//             houses,
//             country,
//             setCountry,
//             countries,
//             price,
//             setPrice,
//             property,
//             setProperty,
//             properties,
//             searchHandler,
//             moveInDate,
//             isLoading
//         }}>
//             {children}
//         </HouseContext.Provider>
//     )
// }

// export default HouseProvider;

import { createContext, useState, useEffect } from "react";
import { housesData } from "../data";

export const HouseContext = createContext("");

const HouseProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState("Select Country");
  const [countries, setCountries] = useState([]);
  const [price, setPrice] = useState("Select Price");
  const [property, setProperty] = useState("Select type");
  const [properties, setProperties] = useState([]);
  const [moveInDate, setMoveInDate] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    });
    const uniqueCountries = [...new Set(allCountries)];
    setCountries(uniqueCountries);
  }, []);

  useEffect(() => {
    const allPropertyTypes = houses.map((house) => {
      return house.type;
    });
    const uniquePropertyTypes = [...new Set(allPropertyTypes)];
    setProperties(uniquePropertyTypes);
  }, []);

  const searchHandler = () => {
    setIsLoading(true);

    // checking selection
    const isDefault = (str) => {
      return str.split(" ").includes("Select");
    };
    const minPrice = parseInt(price.split(" ")[0]);
    const maxPrice = parseInt(price.split("- ")[1]);

    const filteredHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);
      const houseMoveInDate = new Date(house.moveInDate);

      const isCountrySelected = !isDefault(country);
      const isPriceSelected = !isDefault(price);
      const isPropertySelected = !isDefault(property);
      const isMoveInDateSelected = houseMoveInDate >= moveInDate;

      if (
        !isCountrySelected &&
        !isPriceSelected &&
        !isPropertySelected &&
        !isMoveInDateSelected
      ) {
        return true;
      }

      const matchCountry = !isCountrySelected || house.country === country;
      const matchPrice =
        !isPriceSelected || (housePrice >= minPrice && housePrice <= maxPrice);
      const matchProperty = !isPropertySelected || house.type === property;

      return (
        matchCountry && matchPrice && matchProperty && isMoveInDateSelected
      );
    });

    setTimeout(() => {
      setHouses(filteredHouses);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <HouseContext.Provider
      value={{
        houses,
        country,
        setCountry,
        countries,
        price,
        setPrice,
        property,
        setProperty,
        properties,
        searchHandler,
        moveInDate,
        setMoveInDate,
        isLoading,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseProvider;
