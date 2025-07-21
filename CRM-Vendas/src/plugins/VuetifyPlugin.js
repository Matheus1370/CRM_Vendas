import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

const vuetify = createVuetify({
  components,
  directives,
  ssr: true, 
  theme: {
    defaultTheme: 'system', // 'light' | 'dark' | 'system'
    themes: {
      light: {
        colors: {
          primaryText: '#ffffff',
        },
      },
      dark: {
        colors: {
          primaryText: '#ffffff',
        },
      },
    },
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})

export default vuetify
