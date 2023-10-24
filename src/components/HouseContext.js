import React, { useState, useEffect, createContext } from "react";
// import data
import { housesData } from "../data";
export const HouseContext = createContext();
const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState("location (any)");
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState("property type (any)");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("price range (any)");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const allCountires = houses.map((house) => {
      return house.country;
    });
    const uniqueCountires = ["location any ( ) ", ...new Set(allCountires)];
    setCountries(uniqueCountires);
  }, []);
  // ////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    });
    const uniqueProperties = ["location any ( ) ", ...new Set(allProperties)];
    setProperties(uniqueProperties);
  }, []);
  // ////////////////////////////////////////////////////////////////////////
  const handleClick = () => {
    setLoading(true);
    const isDefault = (str) => {
      return str.split(" ").includes("(any)");
    };
    // get first value of price and parse it to number
    const minPrice = parseInt(price.split(" ")[0]);
    const maxPrice = parseInt(price.split(" ")[2]);
    // console.log(minPrice, maxPrice);
    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);
      if (
        house.country === country &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        return house;
      }
      // if country are default
      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return house;
      }
      // if county is not default
      if (!isDefault(country) && isDefault(property) && isDefault(price)) {
        return house.country === country;
      }
      // if property is not default
      if (isDefault(property) && isDefault(country) && isDefault(price)) {
        return house.type === property;
      }
      // if price is not default
      if (isDefault(price) && isDefault(country) && isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house;
        }
      }
      // if country is property is not default
      if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.country === country && house.type === property;
      }
      // if country and price is not default
      if (!isDefault(country) && isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.country === country;
        }
      }
      // if property and price is not default
      if (!isDefault(country) && !isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property;
        }
      }
    });
    setTimeout(() => {
      return (
        newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
        setLoading(false)
      );
    }, 150);
    console.log(newHouses);
  };
  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        property,
        setProperty,
        price,
        setPrice,
        houses,
        loading,
        countries,
        properties,
        handleClick,
        loading,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
