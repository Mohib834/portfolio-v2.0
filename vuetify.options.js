import colors from 'vuetify/es5/util/colors'

export default {
  theme: {
    dark: true,
    options: { customProperties: true },
    themes: {
      dark: {
        primary: '#171616',
        accent: colors.grey.darken3,
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3
      }
    }
  }
}
