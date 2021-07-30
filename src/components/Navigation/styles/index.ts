import { NavType } from "../types";
import * as globalStyles from "./global";
import * as horizontalStyles from "./primary-horizontal";
import * as verticalStyles from "./primary-vertical";

export const getStylesForVariant = (navType: NavType) => {
  switch (navType) {
    case NavType.GLOBAL:
      return globalStyles;
    case NavType.HORIZONTAL:
      return horizontalStyles;
    case NavType.VERTICAL:
      return verticalStyles;
    default:
      return globalStyles;
  }
};
