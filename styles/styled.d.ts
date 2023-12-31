import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      main: '#6440dd'
      main_sub: '#5934D8'
      notice: '#F5222D'
      grey_111: '#111111'
      grey_666: '#666666'
      grey_333: '#333333'
      grey_999: '#999999'
      grey_bbb: '#bbbbbb'
      grey_ccc: '#cccccc'
      grey_f4: '#f4f4f4'

      bg_main: '#f5f6f8'
      bg_noti: '#f2f4f7'
      bg_disable: '#dbd6eb'
      bg_sub: '#eeebff'
      bg_trans: '#b6b7b9'
      bg_black: '#020a13'

      bg_grey: '#696869'
      bg_indigo: '#13283e'

      line_01: '#e7e9ef'
      line_02: '#cfd4dd'

      plus: '#d42a21'
      minus: '#1968e5'
      code: '#27c4b8'

      white: '#fff' // default bg
      option_hover: '#f4f0ff' // option hover
      m_gnb_normal: '#ABAEBF' // mobile footer

      green: '#03c75a'
      orange: '#e1a016'
      red: '#da1c26'
    }
  }
}
