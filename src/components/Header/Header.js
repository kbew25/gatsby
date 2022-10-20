import * as React from "react"
import PropTypes from "prop-types"
import { Link as GatsbyLink } from "gatsby"
import { Box, Link, Button, useColorMode, Flex, Image } from "theme-ui";
import logo from "../../images/logo.svg";


const menuLinks = [
  { text: "Recipes", url: "/recipes" },
  { text: "Recipes", url: "/recipes" },
  { text: "Recipes", url: "/recipes" },
  { text: "Recipes", url: "/recipes" },
];

const Header = ({ siteTitle }) => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <Box as='header'
      sx={{
        display: `flex`,
        alignItems: `center`,
        flexDirection: `column`,
        p: 4,
      }}
    >
      <Button
          onClick={(e) => {
            e.preventDefault();
            setColorMode(colorMode === 'default' ? 'dark' : 'default')
          }}
          sx={{
            lineHeight: 1,
            position: "absolute",
            top: 2,
            right: 2,
          }}
        >
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512" fill="currentColor">
          <path d="M256 128c-70.692 0-128 57.308-128 128s57.308 128 128 128 128-57.308 128-128-57.308-128-128-128zM256 336v-160c44.112 0 80 35.888 80 80s-35.888 80-80 80zM256 416c17.673 0 32 14.327 32 32v32c0 17.673-14.327 32-32 32s-32-14.327-32-32v-32c0-17.673 14.327-32 32-32zM256 96c-17.673 0-32-14.327-32-32v-32c0-17.673 14.327-32 32-32s32 14.327 32 32v32c0 17.673-14.327 32-32 32zM480 224c17.673 0 32 14.327 32 32s-14.327 32-32 32h-32c-17.673 0-32-14.327-32-32s14.327-32 32-32h32zM96 256c0 17.673-14.327 32-32 32h-32c-17.673 0-32-14.327-32-32s14.327-32 32-32h32c17.673 0 32 14.327 32 32zM414.392 369.137l22.628 22.628c12.496 12.496 12.496 32.758 0 45.255-12.497 12.496-32.759 12.496-45.255 0l-22.628-22.628c-12.496-12.496-12.496-32.758 0-45.255 12.497-12.496 32.759-12.496 45.255 0zM97.608 142.863l-22.628-22.628c-12.497-12.497-12.497-32.758 0-45.255s32.758-12.497 45.255 0l22.628 22.628c12.497 12.497 12.497 32.758 0 45.255s-32.758 12.497-45.255 0zM414.392 142.863c-12.496 12.496-32.758 12.496-45.255 0-12.496-12.497-12.496-32.758 0-45.255l22.628-22.627c12.496-12.497 32.758-12.497 45.255 0 12.496 12.497 12.496 32.758 0 45.255l-22.628 22.627zM97.608 369.137c12.496-12.496 32.758-12.496 45.254 0 12.497 12.497 12.497 32.759 0 45.255l-22.627 22.628c-12.497 12.496-32.758 12.496-45.255 0-12.497-12.497-12.497-32.759 0-45.255l22.628-22.628z"></path>
          </svg>
        </Button>

      <Link to="/" as={GatsbyLink}>
        <Image
          alt={siteTitle}
          height={53}
          src={logo}
        />
        {/* <Logo /> */}
      </Link>
      <Box as="nav" py={3}>
        <Flex as="ul" sx={{
          padding: '0',
          margin: '0',
          listStyle: 'none',
        }}>
        {menuLinks.map((link, i) => (
          <li key={i}><Link to={link.url} as={GatsbyLink} p={2}>{link.text}</Link></li>
        ))}
        </Flex>
      </Box>
    </Box>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
