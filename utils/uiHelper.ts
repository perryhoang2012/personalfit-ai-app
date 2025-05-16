import { Dimensions, Platform, StatusBar } from "react-native";

// Constants
const WIDTH_NEED_CHANGE = 600;
const { height: D_HEIGHT, width: D_WIDTH } = Dimensions.get("window");

export const WIDTH = D_WIDTH;
export const HEIGHT = D_HEIGHT;

// Status bar heights for different devices
const STATUSBAR_DEFAULT_HEIGHT = 20;
const STATUSBAR_X_HEIGHT = 44;
const STATUSBAR_IP12_HEIGHT = 47;
const STATUSBAR_IP12MAX_HEIGHT = 47;
const STATUSBAR_IP14PRO_HEIGHT = 49;

// Device dimensions
const X_WIDTH = 375;
const X_HEIGHT = 812;

const XR_WIDTH = 414;
const XR_HEIGHT = 896;

const IP12_WIDTH = 390;
const IP12_HEIGHT = 844;

const IP12MAX_WIDTH = 428;
const IP12MAX_HEIGHT = 926;

const IP14PRO_WIDTH = 393;
const IP14PRO_HEIGHT = 852;

const IP14PRO_MAX_WIDTH = 430;
const IP14PRO_MAX_HEIGHT = 932;

// Guideline sizes for responsive scaling
const GUIDE_LINE_BASE_WIDTH = 350;
const GUIDE_LINE_BASE_HEIGHT = 680;

// Determine status bar height based on device
let statusBarHeight = STATUSBAR_DEFAULT_HEIGHT;

if (Platform.OS === "ios" && !Platform.isPad) {
  if (D_WIDTH === X_WIDTH && D_HEIGHT === X_HEIGHT) {
    statusBarHeight = STATUSBAR_X_HEIGHT;
  } else if (D_WIDTH === XR_WIDTH && D_HEIGHT === XR_HEIGHT) {
    statusBarHeight = STATUSBAR_X_HEIGHT;
  } else if (D_WIDTH === IP12_WIDTH && D_HEIGHT === IP12_HEIGHT) {
    statusBarHeight = STATUSBAR_IP12_HEIGHT;
  } else if (D_WIDTH === IP12MAX_WIDTH && D_HEIGHT === IP12MAX_HEIGHT) {
    statusBarHeight = STATUSBAR_IP12MAX_HEIGHT;
  } else if (D_WIDTH === IP14PRO_MAX_WIDTH && D_HEIGHT === IP14PRO_MAX_HEIGHT) {
    statusBarHeight = STATUSBAR_IP14PRO_HEIGHT;
  } else if (D_WIDTH === IP14PRO_WIDTH && D_HEIGHT === IP14PRO_HEIGHT) {
    statusBarHeight = STATUSBAR_IP14PRO_HEIGHT;
  }
}

/**
 * Checks if the device is an iPhone X or newer model with a notch
 */
export const isIphoneX = (): boolean => {
  const isIos = Platform.OS === "ios";

  const isMatchingWidthAndHeight = (width: number, height: number) => {
    return (
      (D_HEIGHT === width && D_WIDTH === height) ||
      (D_HEIGHT === height && D_WIDTH === width)
    );
  };

  return (
    isIos &&
    (isMatchingWidthAndHeight(X_HEIGHT, X_WIDTH) ||
      isMatchingWidthAndHeight(XR_HEIGHT, XR_WIDTH))
  );
};

/**
 * Returns the status bar height for the current device
 */
export const getStatusBarHeight = Platform.select({
  ios: statusBarHeight,
  android: StatusBar.currentHeight,
  default: 0,
});

/**
 * Checks if the device is an iPad based on screen width
 */
export const isIpad = (): boolean => D_WIDTH > WIDTH_NEED_CHANGE;

/**
 * Checks if the current platform matches the specified platform
 */
export const checkPlatform = (platform: string): boolean =>
  Platform.OS === platform;

/**
 * Scales a size horizontally based on the device width
 */
export const scale = (size: number): number =>
  (size * D_WIDTH) / GUIDE_LINE_BASE_WIDTH;

/**
 * Scales a size vertically based on the device height
 */
export function verticalScale(size: number): number {
  return (D_HEIGHT / GUIDE_LINE_BASE_HEIGHT) * size;
}

/**
 * Scales a size with a factor to moderate the scaling effect
 */
export function moderateScale({
  size,
  factor = 0.5,
}: {
  size: number;
  factor?: number;
}): number {
  const scaledSize = scale(size);
  const scaleFactor = scaledSize - size;
  return size + scaleFactor * factor;
}
