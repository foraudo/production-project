import { addDecorator } from "@storybook/react"
import { Theme } from '../../src/app/providers/ThemeProvider'
import { StyleDecorator } from '../../src/shared/config/Storybook/StyleDecorator/StyleDecorator'
import { ThemeDecorator } from '../../src/shared/config/Storybook/ThemeDecorator/ThemeDecorator'
import { RouterDecorator } from '../../src/shared/config/Storybook/RouterDecorator/RouterDecorator';



export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator(StyleDecorator)
addDecorator(ThemeDecorator(Theme.LIGHT))
addDecorator(RouterDecorator)





