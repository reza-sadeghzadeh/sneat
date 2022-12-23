import {
  Avatar,
  Burger,
  Indicator,
  MediaQuery,
  Menu,
  Text,
  TextInput,
} from "@mantine/core";
import React, { useState } from "react";
import {
  BiSearch,
  BiPowerOff,
  BiUser,
  BiCog,
  BiCreditCard,
} from "react-icons/bi";
import { Link } from "react-router-dom";

interface SearchHeaderProps {
  menuToggle: {
    opened: boolean;
    setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  };
}

const SearchHeader: React.FC<SearchHeaderProps> = ({ menuToggle }) => {
  const [value, setValue] = useState("");
  return (
    <header>
      {/* search bar */}
      <div className="bg-white py-2 flex justify-start items-center rounded-lg main-shadow px-8">
        <MediaQuery largerThan={"lg"} styles={{ display: "none" }}>
          <Burger
            size={20}
            opacity={0.4}
            className="mr-4"
            opened={menuToggle.opened}
            onClick={() => menuToggle.setOpened((o) => !o)}
          />
        </MediaQuery>
        <BiSearch size={"22"} className="text-brand-mainTextColor" />
        <div className="search-box relative grow mr-6">
          <input
            name="searchbar"
            id="searchbar"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="py-3 w-full outline-none rounded-xl mx-2 px-2 text-brand-mainTextColor/80 grow font-normal text-md peer"
          />
          {!value && (
            <label
              className="absolute peer-focus:translate-x-1 transition-all left-4 top-3 pointer-events-none text-brand-mainTextColor/50"
              htmlFor="searchbar"
            >
              Search...
            </label>
          )}
        </div>

        <Menu
          styles={{
            item: {
              padding: "0.8rem 0.6rem",
              fontSize: "0.9rem",
            },
          }}
          transition="pop-top-right"
          position="bottom-end"
          shadow="md"
          width={200}
          classNames={{ itemLabel: "text-brand-mainTextColor" }}
        >
          <Menu.Target>
            <Indicator
              dot
              inline
              size={12}
              offset={3}
              position="bottom-end"
              color="green"
              withBorder
              className="cursor-pointer"
            >
              <Avatar
                className="rounded-full"
                src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1044&q=80"
              />
            </Indicator>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item>
              <div className="flex justify-start items-center ">
                <Indicator
                  dot
                  inline
                  size={12}
                  offset={6}
                  position="bottom-end"
                  color="green"
                  withBorder
                  className="cursor-pointer"
                >
                  <Avatar
                    className="rounded-full"
                    src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1044&q=80"
                  />
                </Indicator>
                <div className="h-full ml-5">
                  <h3 className="text-md font-semibold">John Doe</h3>
                  <h4 className="text-xs opacity-70 ">Admin</h4>
                </div>
              </div>
            </Menu.Item>
            <Menu.Divider />

            <Menu.Item
              icon={<BiUser size={20} className="text-brand-mainTextColor" />}
            >
              My Profile
            </Menu.Item>
            <Menu.Item
              icon={<BiCog size={20} className="text-brand-mainTextColor" />}
            >
              Settings
            </Menu.Item>
            <Menu.Item
              icon={
                <BiCreditCard size={20} className="text-brand-mainTextColor" />
              }
              rightSection={
                <div
                  className="rounded-full bg-red-400 text-white h-6 w-6 flex justify-center items-center"
                  color="red"
                >
                  4
                </div>
              }
            >
              Billing
            </Menu.Item>
            <Menu.Divider />

            <Link to={"/login"}>
              <Menu.Item
                icon={
                  <BiPowerOff size={20} className="text-brand-mainTextColor" />
                }
              >
                Log Out
              </Menu.Item>
            </Link>
          </Menu.Dropdown>
        </Menu>
      </div>
    </header>
  );
};

export default SearchHeader;
