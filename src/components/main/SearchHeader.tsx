import {
  Avatar,
  Box,
  Burger,
  Indicator,
  MediaQuery,
  Menu,
  Text,
} from "@mantine/core"
import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import {
  BiCog,
  BiCreditCard,
  BiPowerOff,
  BiSearch,
  BiUser,
  BiWorld,
} from "react-icons/bi"
import { Link } from "react-router-dom"

import useI18n from "../../hooks/useI18n"
import { languageProfiles, Lngs } from "../../utils/language"

interface SearchHeaderProps {
  menuToggle: {
    opened: boolean
    setOpened: React.Dispatch<React.SetStateAction<boolean>>
  }
}

const SearchHeader: React.FC<SearchHeaderProps> = ({ menuToggle }) => {
  const [value, setValue] = useState("")
  const { lng, setLng } = useI18n()
  const { t } = useTranslation()

  return (
    <header>
      {/* search bar */}
      <div className="bg-white py-2 flex justify-start items-center rounded-md main-shadow px-6">
        <MediaQuery largerThan={"lg"} styles={{ display: "none" }}>
          <Burger
            size={20}
            opacity={0.4}
            mr={16}
            // sx={{ marginRight: 16 }}
            opened={menuToggle.opened}
            onClick={() => menuToggle.setOpened((o) => !o)}
          />
        </MediaQuery>
        <BiSearch size={"22"} className="text-brand-mainTextColor" />
        <div className="search-box relative grow rtl:mr-0 mr-6 rtl:ml-6">
          <input
            name="searchbar"
            id="searchbar"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="py-2.5 w-full outline-none rounded-xl mx-2 px-2 text-brand-mainTextColor/80 grow font-normal text-md peer"
          />
          {!value && (
            <label
              className="absolute text-md peer-focus:translate-x-1 rtl:peer-focus:-translate-x-1 transition-all left-4 rtl:left-0 rtl:right-4 top-3 pointer-events-none text-brand-mainTextColor/50"
              htmlFor="searchbar"
            >
              {t("search_header.search")}
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
          width={150}
          classNames={{ itemLabel: "text-brand-mainTextColor" }}
        >
          <Menu.Target>
            <Box
              w={80}
              sx={{ marginRight: 24 }}
              className="flex justify-start items-center cursor-pointer"
            >
              <h5 className="text-sm mx-2">
                {languageProfiles.find((p) => p.locale === lng)?.native}
              </h5>

              <BiWorld size={20} />
            </Box>
          </Menu.Target>

          <Menu.Dropdown>
            {languageProfiles.map((p) => (
              <Menu.Item
                key={p.native}
                disabled={lng === p.locale}
                className="disabled:cursor-not-allowed"
                style={{
                  padding: "0.7rem 1rem",
                }}
                icon={<BiUser size={20} className="text-brand-mainTextColor" />}
                onClick={() => {
                  switch (p.locale) {
                    case Lngs.FA:
                      setLng(Lngs.FA)
                      break

                    case Lngs.EN:
                      setLng(Lngs.EN)
                      break

                    default:
                      break
                  }
                }}
              >
                {p.native}
              </Menu.Item>
            ))}
          </Menu.Dropdown>
        </Menu>

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
              position="bottom-start"
              color="green"
              withBorder
              className="cursor-pointer"
            >
              <Avatar
                sx={{ borderRadius: "100%" }}
                src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1044&q=80"
              />
            </Indicator>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item>
              <div className="flex justify-start items-center">
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
                    sx={{ borderRadius: "100%" }}
                    src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1044&q=80"
                  />
                </Indicator>
                <Box sx={{ marginLeft: 20 }} className="h-full">
                  <h3 className="text-md font-semibold">John Doe</h3>
                  <h4 className="text-xs opacity-70 ">Admin</h4>
                </Box>
              </div>
            </Menu.Item>
            <Menu.Divider />

            <Menu.Item
              icon={<BiUser size={20} className="text-brand-mainTextColor" />}
            >
              {t("search_header.profile.my_profile")}
            </Menu.Item>
            <Menu.Item
              icon={<BiCog size={20} className="text-brand-mainTextColor" />}
            >
              {t("search_header.profile.settings")}
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
                  <Text>4</Text>
                </div>
              }
            >
              {t("search_header.profile.billing")}
            </Menu.Item>
            <Menu.Divider />

            <Link to={"/login"}>
              <Menu.Item
                icon={
                  <BiPowerOff size={20} className="text-brand-mainTextColor" />
                }
              >
                {t("search_header.profile.log_out")}
              </Menu.Item>
            </Link>
          </Menu.Dropdown>
        </Menu>
      </div>
    </header>
  )
}

export default SearchHeader
