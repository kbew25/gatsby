import React from "react";
import { Box } from "theme-ui";

const Rating = ({rating, ...props}) => {
  return (
    <Box sx={{
      position: 'relative',
      height: '80px',
      textAlign: 'right',
      width: '80px',
      ...props.sx,
    }}>
      <Box as="span" sx={{
        color: 'primary',
        position: 'absolute',
        right: '40px',
        top: '40px',
        transform: 'translate(50%, -50%)',
        zIndex: '2',
        fontSize: 4,
      }}>{ rating }</Box>
      <svg height="80" width="80">
        <circle stroke="#fff" strokeWidth="2" fill="#fff" r="38" cx="40" cy="40" />
        <circle stroke="#f26a6e" strokeWidth="3" fill="transparent" r="38" cx="40" cy="40" strokeDasharray={ (80 * 3.14) } strokeDashoffset={ ((80 * 3.14) - (rating * 10) / 100 * (80 * 3.14)) || '260px' } style={{
          transform: 'rotate(-90deg)',
          transformOrigin: '50% 50%',
          transition: '1s stroke-dashoffset',
        }} />
      </svg>
    </Box>
  )
}

export default Rating;
