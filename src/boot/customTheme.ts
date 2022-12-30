import { MantineThemeOverride } from "@mantine/core"

const defaultTheme: MantineThemeOverride = {
  fontFamily: "Inter",
  fontSizes: {
    md: 15,
  },
  colors: {
    brand: [
      /* 0     mainTextColor*/ "#697a8d",
      /* 1         bodyColor*/ "#f5f5f9",
      /* 2  primaryTextColor*/ "#696cff",
    ],
    dark: [
      "#8c8fa3",
      "#7e8193",
      "#707282",
      "#626472",
      "#545662",
      "#464852",
      "#383941",
      "#2a2b31",
      "#1c1d21",
      "#0e0e10",
    ],
  },
  primaryColor: "brand",
  breakpoints: { lg: 1200 },
}

// const theme:MantineTheme={
//     dir: "ltr",
//     primaryShade: 0,
//     focusRing: "auto",
//     defaultRadius: 0,
//     loader: "bars",
//     dateFormat: "",
//     colorScheme: "dark",
//     white: "",
//     black: "",
//     colors: undefined,
//     fontFamily: undefined,
//     lineHeight: undefined,
//     transitionTimingFunction: undefined,
//     fontFamilyMonospace: undefined,
//     primaryColor: undefined,
//     respectReducedMotion: false,
//     cursorType: "default",
//     defaultGradient: undefined,
//     fontSizes: undefined,
//     radius: undefined,
//     spacing: undefined,
//     breakpoints: undefined,
//     shadows: undefined,
//     headings: {
//         fontFamily: undefined,
//         fontWeight: undefined,
//         sizes: {
//             h1: undefined,
//             h2: undefined,
//             h3: undefined,
//             h4: undefined,
//             h5: undefined,
//             h6: undefined
//         }
//     },
//     fn: undefined,
//     other: undefined,
//     activeStyles: undefined,
//     datesLocale: "",
//     components: undefined,
//     globalStyles: function (theme: MantineTheme): CSSObject {
//         throw new Error("Function not implemented.");
//     },
//     focusRingStyles: undefined
// }

export default defaultTheme
