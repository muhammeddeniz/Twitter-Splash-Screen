import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";

export default function SvgComponent(props) {
  return (
    <Svg width="24" height="20" viewBox="0 0 24 20" fill="none">
      <Path
        d="M11.2812 5.50749L11.3316 6.33795L10.4922 6.23626C7.43686 5.84646 4.76765 4.52451 2.50134 2.30431L1.39336 1.20269L1.10798 2.0162C0.503625 3.82964 0.889738 5.74477 2.1488 7.03282C2.8203 7.74464 2.66921 7.84632 1.51088 7.42262C1.10798 7.28704 0.755438 7.18535 0.721863 7.2362C0.60435 7.35483 1.00725 8.8971 1.32621 9.50723C1.76269 10.3546 2.65243 11.1851 3.6261 11.6766L4.44869 12.0664L3.47501 12.0833C2.53491 12.0833 2.50134 12.1003 2.60206 12.4562C2.93781 13.5578 4.26403 14.7272 5.74133 15.2357L6.78215 15.5916L5.87563 16.1339C4.53263 16.9135 2.9546 17.3542 1.37658 17.3881C0.621138 17.405 0 17.4728 0 17.5237C0 17.6931 2.04808 18.6422 3.23999 19.0151C6.81573 20.1167 11.063 19.6422 14.2526 17.7609C16.5189 16.422 18.7852 13.7612 19.8428 11.1851C20.4136 9.8123 20.9844 7.30399 20.9844 6.10068C20.9844 5.32107 21.0347 5.21938 21.9748 4.28724C22.5288 3.7449 23.0492 3.15172 23.15 2.98224C23.3178 2.66022 23.3011 2.66022 22.4449 2.94834C21.018 3.45678 20.8165 3.38899 21.5216 2.62633C22.042 2.08399 22.6631 1.101 22.6631 0.812886C22.6631 0.762042 22.4113 0.846783 22.1259 0.999315C21.8238 1.1688 21.1523 1.42302 20.6486 1.57555L19.7421 1.86367L18.9195 1.30438C18.4663 0.999315 17.8283 0.660354 17.4926 0.558666C16.6364 0.321393 15.327 0.355289 14.5548 0.626458C12.4563 1.38912 11.1301 3.35509 11.2812 5.50749Z"
        fill="white"
      />
    </Svg>
  );
}