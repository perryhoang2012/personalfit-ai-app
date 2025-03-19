import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SearchInActive = (props: SvgProps) => (
  <Svg width={25} height={24} fill="none" {...props}>
    <Path
      stroke="#737373"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.833 21a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19ZM22.333 22l-2-2"
    />
  </Svg>
);
export default SearchInActive;
