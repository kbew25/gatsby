const theme = {
  config: {
    initialColorModeName: 'light',
    useColorSchemeMediaQuery: false,
  },
  colors: {
    text: "#404040",
    background: "#fff",
    primary: "#a55151",
    secondary: "#696969",
    muted: "#f7f7f7",
    gray: '#696969',
    lightGray: "#ccc",
    tertiary: "#0B7A75",
    highlight: "rgba(120, 120, 120, 0.25)",
    modes: {
      dark: {
        text: '#f4f4f4',
        background: '#264653',
        muted: "#2E5564",
        lightGray: "#333",
        primary: '#97D8C4',
        secondary: "#306",
        tertiary: "#FFC857",
        highlight: "rgba(0, 0, 0, 0.1)",
      }
    }
  },
  sizes: {
    container: 1140,
  },
  space: [
    0,
    5,
    10,
    15,
    30,
    60,
    90,
    120
  ],
  fonts: {
    "body": "Montserrat, sans-serif",
    "heading": "Montserrat, sans-serif",
    "monospace": "Menlo, monospace"
  },
  fontSizes: [
    12,
    14,
    16,
    20,
    24,
    32,
    48,
    64,
    96
  ],
  buttons: {
    primary: {
      color: 'background',
      bg: 'primary',
      cursor: "pointer",
      '&:hover': {
        bg: 'text',
      }
    },
    secondary: {
      color: 'text',
      bg: 'muted',
      cursor: "pointer",
      '&:hover': {
        bg: 'secondary',
        color: 'background',
      },
      borderRadius: 0,
    },
    tertiary: {
      color: 'background',
      bg: 'tertiary',
      cursor: "pointer",
      '&:hover': {
        bg: 'text',
      }
    }
  },
  cards: {
    primary: {
      bg: 'background',
      padding: 4,
      borderRadius: 6,
      boxShadow: t => `0 0 5px ${t.colors.highlight}`,
    },
    article: {
      bg: 'background',
      p: {
        color: 'secondary',
      }
    },
  },
  links: {
    nav: {
      px: 2,
      py: 1,
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
    },
    plain: {
      color: 'text',
      textDecoration: 'none',
      '&:hover': {
        color: 'primary',
      }
    }
  },
  forms: {
    label: {
      fontSize: 1,
      color: 'primary',
      fontWeight: 'bold'
    },
    input: {
      backgroundColor: 'background',
      mb: 4,
      borderColor: 'gray',
      '&:focus': {
        borderColor: 'primary',
        boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
        outline: 'none',
      },
    },
    select: {
      borderColor: 'gray',
    }
  },
  fontWeights: {
    body: 300,
    heading: 400,
    bold: 400
  },
  lineHeights: {
    body: 1.625,
    heading: 1.25
  },
  text: {
    heading: {
      mb: "1.5rem",
      fontFamily: "heading",
      lineHeight: "heading",
      color: "text",
      a: {
        color: "inherit",
        textDecoration: "none",
        '&:hover': {
          textDecoration: "underline",
        }
      }
    },
    large: {
      fontSize: 5
    },
    pageTitle: {
      textAlign: 'center'
    }
  },
  alerts: {
    info: {
      color: '#fff',
      bg: 'primary',
    },
    success: {
      color: '#325E1C',
      bg: '#CFECC0',
    },
    warning: {
      color: '#734C00',
      bg: '#FFE1A6',
    },
    error: {
      color: '#a51b00',
      bg: '#FFDED8',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      p: {
        color: 'secondary',
      },
      img: {
        "maxWidth": "100%",
        display: 'block',
      },
    },
    a: {
      color: "primary"
    },
    pre: {
      "fontFamily": "monospace",
      "overflowX": "auto",
      "code": {
        "color": "inherit"
      }
    },
    code: {
      "fontFamily": "monospace",
      "fontSize": "inherit"
    },
    table: {
      "width": "100%",
      "borderCollapse": "separate",
      "borderSpacing": 0
    },
    th: {
      "textAlign": "left",
      "borderBottomStyle": "solid"
    },
    td: {
      "textAlign": "left",
      "borderBottomStyle": "solid"
    },
    hr: {
      borderColor: 'lightGray'
    }
  }
}

export default theme
