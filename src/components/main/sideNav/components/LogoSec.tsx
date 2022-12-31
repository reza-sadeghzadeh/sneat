import { Box, Image, Text } from "@mantine/core"

const LogoSec = () => {
  return (
    // bg-gradient-to-b from-red-200 to-transparent
    <Box pl={"lg"} className="flex items-center justify-start mt-2 py-3.5 ">
      <Image
        height={36}
        width={22}
        withPlaceholder
        alt="logo"
        src={"/logo.svg"}
        className="mx-2"
      />
      <Text fw={"bold"} sx={{}} size={28}>
        sneat
      </Text>
    </Box>
  )
}

export default LogoSec
