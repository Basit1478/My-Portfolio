import {loadFont as loadManrope} from "@remotion/google-fonts/Manrope";
import {loadFont as loadPrata} from "@remotion/google-fonts/Prata";

export const {fontFamily: manrope} = loadManrope("normal", {
  weights: ["500", "600", "700", "800"],
  subsets: ["latin"],
});

export const {fontFamily: prata} = loadPrata("normal", {
  weights: ["400"],
  subsets: ["latin"],
});
