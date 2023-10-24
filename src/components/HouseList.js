import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HouseContext } from "../components/HouseContext.js";
import { ImSpinner2 } from "react-icons/im";
import House from "./House";
const HouseList = () => {
  const { houses, loading } = useContext(HouseContext);
  if (loading) {
    return (
      <ImSpinner2
        className="mx-auto animate-spin text-violet-700 text-4xl
       mt-[200px]"
      />
    );
  }
  if (houses.length < 1) {
    return (
      <div className="mx-auto text-center mt-[250px]">Sorry Nothing Found</div>
    );
  }
  return (
    <div className="mb-20">
      <div className="container mx-auto ">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
          {houses.map((house, index) => {
            return (
              <Link key={index} to={`/property/${house.id}`}>
                <House house={house} />;
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HouseList;
