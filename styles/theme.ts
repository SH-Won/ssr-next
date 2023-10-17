import { DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
  color: {
    main: '#6440dd',
    main_sub: '#5934D8',
    notice: '#F5222D',
    grey_111: '#111111',
    grey_666: '#666666',
    grey_333: '#333333',
    grey_999: '#999999',
    grey_bbb: '#bbbbbb',
    grey_ccc: '#cccccc',
    grey_f4: '#f4f4f4',

    bg_main: '#f5f6f8',
    bg_noti: '#f2f4f7',
    bg_disable: '#dbd6eb',
    bg_sub: '#eeebff',
    bg_trans: '#b6b7b9',
    bg_black: '#020a13',

    bg_grey: '#696869',
    bg_indigo: '#13283e',

    line_01: '#e7e9ef',
    line_02: '#cfd4dd',

    plus: '#d42a21',
    minus: '#1968e5',
    code: '#27c4b8',

    white: '#fff', // default bg
    option_hover: '#f4f0ff', // option hover
    m_gnb_normal: '#ABAEBF', // mobile footer

    green: '#03c75a',
    orange: '#e1a016',
    red: '#da1c26',
  },
}
const customMediaQuery = (maxWidth: number): string =>
  `@media only screen and (max-width: ${maxWidth}px)`

export const mixins = {
  FlexListScroll: () => `
  display: flex;
  padding: 16px;
  overflow-x: scroll;
  position: relative;`,
  rightFade: (width = 60, height = 100, isTop = true, gradientPercent = 100) => `
  position : relative;
  &::after {
    content: '';
    width: ${width}px;
    height: ${height}%;
    position: absolute;
    z-index: 100;
    ${
      isTop
        ? 'top: 0;'
        : `bottom: 0;
    z-index:0;
    `
    }
    right: 0;
    background-image: linear-gradient(to right, rgb(255, 255, 255, 0) 0%, #f5f6f8 ${100}%);
    will-change: opacity;
    pointer-events: none;
  }
  `,
  responsiveFlexList: (
    mobileWidth: number,
    tabletWidth: number,
    desktopWidth: number,
    hoverEffect = false
  ) => `
  display: flex;
  padding: 16px;
  overflow-x: scroll;
  position: relative;
  gap:20px;
  ${
    hoverEffect &&
    `
  & > .item {
    &:hover {
      transform : scale(1.05)
    }
  }
  `
  }
  
  ${media.desktop}{
    & > div { 
      flex : 0 0 ${desktopWidth}px
    }
  }
  ${media.tablet}{
    & > div {
      flex : 0 0 ${tabletWidth}px
    }
  }
  ${media.mobile}{
    & > div {
    flex: 0 0 ${mobileWidth}px
    }
  }
  `,
}
export const media = {
  custom: customMediaQuery,
  desktop: customMediaQuery(1024),
  tablet: customMediaQuery(768),
  mobile: customMediaQuery(576),
}
