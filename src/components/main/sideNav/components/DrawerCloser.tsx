import { Box, MediaQuery } from "@mantine/core"
import React from "react"
import { BiChevronLeft } from "react-icons/bi"
import { BgStyles } from "../../../../utils"

interface IDraerCloser {
  setOpened: React.Dispatch<React.SetStateAction<boolean>>
}
const DrawerCloser: React.FC<IDraerCloser> = ({ setOpened }) => {
  return (
    <MediaQuery largerThan={"lg"} styles={{ display: "none" }}>
      <Box
        sx={{ padding: 7, ...BgStyles() }}
        right={-20}
        className="absolute top-6 h-10 w-10 rounded-full"
      >
        <button
          className="bg-brand-primaryTextColor rounded-full w-full h-full flex justify-center items-center"
          onClick={() => setOpened(false)}
        >
          <BiChevronLeft size={28} className="rtl:rotate-180 text-white" />
        </button>
      </Box>
    </MediaQuery>
  )
}

export default DrawerCloser
