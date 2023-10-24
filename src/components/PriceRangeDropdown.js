import React, { useContext, useState } from "react";
// icons
import {
  RiMapPinLine,
  RiArrowDownSLine,
  RiArrowUpSLine,
  RiHome5Line,
  RiWallet3Line,
} from "react-icons/ri";
// import headless ui
import { Menu } from "@headlessui/react";
// import house  context
import { HouseContext } from "./HouseContext";
const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);
  const prices = [
    {
      value: "price range (any)",
    },
    {
      value: "100000 - 130000",
    },
    {
      value: "130000 - 160000",
    },
    {
      value: "190000 - 220000",
    },
    {
      value: "10000 - 40000",
    },
  ];
  return (
    <>
      <Menu as="div" className="relative">
        <Menu.Button
          onClick={() => setIsOpen(!isOpen)}
          className="dropdown-btn w-full text-left items-center"
        >
          <RiWallet3Line className="dropdown-icon-primary" />
          <div>
            <div className="text-[15px] font-medium leading-tight">{price}</div>
            <div className="text-[13px]">Choose Price Range</div>
          </div>
          {isOpen ? (
            <RiArrowUpSLine className="ml-5 dropdown-icon-secondary" />
          ) : (
            <RiArrowDownSLine className="ml-5 dropdown-icon-secondary" />
          )}
        </Menu.Button>
        <Menu.Items className="dropdown-menu">
          {prices.map((price, index) => {
            return (
              <Menu.Item
                onClick={() => setPrice(price.value)}
                className="cursor-pointer hover:text-violet-700 transition"
                as="li"
                key={index}
              >
                {price.value}
              </Menu.Item>
            );
          })}
        </Menu.Items>
      </Menu>
    </>
  );
};

export default PriceRangeDropdown;
