import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const Chart = (props: SvgProps) => (
  <Svg width={25} height={24} fill="none" {...props}>
    <Path
      fill="#fff"
      d="M12.667 22.75c-5.93 0-10.75-4.82-10.75-10.75 0-2.36.75-4.6 2.17-6.48.25-.33.72-.39 1.05-.14.33.25.4.72.15 1.05A9.16 9.16 0 0 0 3.417 12c0 5.1 4.15 9.25 9.25 9.25s9.25-4.15 9.25-9.25-4.15-9.25-9.25-9.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c5.93 0 10.75 4.82 10.75 10.75s-4.82 10.75-10.75 10.75Z"
    />
    <Path
      fill="#fff"
      d="M12.667 19.75c-4.27 0-7.75-3.48-7.75-7.75 0-.41.34-.75.75-.75s.75.34.75.75c0 3.45 2.8 6.25 6.25 6.25s6.25-2.8 6.25-6.25-2.8-6.25-6.25-6.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c4.27 0 7.75 3.48 7.75 7.75s-3.48 7.75-7.75 7.75Z"
    />
    <Path
      fill="#fff"
      d="M12.667 16.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c1.79 0 3.25-1.46 3.25-3.25s-1.46-3.25-3.25-3.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c2.62 0 4.75 2.13 4.75 4.75s-2.13 4.75-4.75 4.75Z"
    />
  </Svg>
);
export default Chart;
