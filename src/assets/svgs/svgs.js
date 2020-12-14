export const PlaySVG = (props) => {
  return (
    <svg
      width={props.buttonStyle.width}
      height={props.buttonStyle.height}
      viewBox='0 0 184 184'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle
        cx='92'
        cy='92'
        r='90.5'
        stroke={props.buttonStyle.color}
        stroke-width={props.buttonStyle.strokeWidth}
      />
      <path
        d='M67.9137 49.395L141.006 91.5946C141.339 91.7871 141.339 92.2682 141.006 92.4606L67.9137 134.66C67.5804 134.853 67.1637 134.612 67.1637 134.227L67.1637 49.8281C67.1637 49.4431 67.5804 49.2026 67.9137 49.395Z'
        stroke={props.buttonStyle.color}
        stroke-width={props.buttonStyle.strokeWidth}
      />
    </svg>
  );
};

export const PauseSVG = (props) => {
  return (
    <svg
      width={props.buttonStyle.width}
      height={props.buttonStyle.height}
      viewBox='0 0 184 184'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle
        cx='92'
        cy='92'
        r='90.5'
        stroke={props.buttonStyle.color}
        stroke-width={props.buttonStyle.strokeWidth}
      />
      <line
        x1='63.5'
        y1='47'
        x2='63.5'
        y2='137'
        stroke={props.buttonStyle.color}
        stroke-width={props.buttonStyle.strokeWidth}
      />
      <line
        x1='117.5'
        y1='47'
        x2='117.5'
        y2='137'
        stroke={props.buttonStyle.color}
        stroke-width={props.buttonStyle.strokeWidth}
      />
    </svg>
  );
};

export const RestartSVG = (props) => {
  return (
    <svg
      width={props.buttonStyle.width}
      height={props.buttonStyle.height}
      viewBox='0 0 184 184'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M80.4471 112.545L80.4471 71.8466L115.693 92.1956L80.4471 112.545Z'
        stroke={props.buttonStyle.color}
        stroke-width={props.buttonStyle.strokeWidth}
        fill={props.buttonStyle.color}
      />
      <circle
        cx='92'
        cy='92'
        r='90.5'
        stroke={props.buttonStyle.color}
        stroke-width={props.buttonStyle.strokeWidth}
      />
      <path
        d='M138.7 92.0667C138.7 101.29 135.965 110.305 130.84 117.974C125.716 125.643 118.433 131.62 109.912 135.15C101.391 138.68 92.0149 139.604 82.9693 137.805C73.9238 136.006 65.615 131.565 59.0937 125.043C52.5724 118.522 48.1315 110.213 46.3325 101.168C44.5335 92.1222 45.4573 82.746 48.9871 74.225C52.5169 65.7041 58.4941 58.4209 66.1628 53.2967C73.8316 48.1724 82.8475 45.4372 92.0704 45.4368'
        stroke={props.buttonStyle.color}
        stroke-width={props.buttonStyle.strokeWidth}
      />
      <path
        d='M90.6603 38L105.66 46.6603L90.6603 55.3205L90.6603 38Z'
        fill={props.buttonStyle.color}
      />
    </svg>
  );
};
