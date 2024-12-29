import { Nunito_Sans } from "next/font/google";
import { Lora } from "next/font/google";

export const lora = Lora({
  subsets: ["latin"], // Add subsets if needed
  weight: ["400", "500", "600", "700"], // Specify weights
});

export const nunitoSans = Nunito_Sans({
  subsets: ["latin"], // Add subsets as needed
  weight: ["300", "400", "600", "700"], // Specify weights you want to use
});
