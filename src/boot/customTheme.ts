import { ThemeContext } from "@emotion/react"
import { CSSObject, MantineTheme, MantineThemeOverride } from "@mantine/core"

const defaultTheme: MantineThemeOverride = {
  fontFamily: "Inter",
  fontSizes: {
    md: 15,
  },
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
