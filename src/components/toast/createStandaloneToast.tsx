import { createStandaloneToast } from "@chakra-ui/react"
import { resourceTheme } from "../../theme"

export const standaloneToast = createStandaloneToast({
  theme: resourceTheme,
  defaultOptions: {
    variant: "solid",
    isClosable: true,
    duration: 5000,
    position: "bottom-right",
  },
})
