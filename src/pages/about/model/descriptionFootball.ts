import { mainLogo } from "@/shared/assets";
import { DescriptionFootball } from "./types";
import statisticsIcon from "./../assets/statistics-icon.png"
import viewIcon from "./../assets/view-icon.png"
import thinkIcon from "./../assets/think-icon.png"

export const descriptionFootball: DescriptionFootball = {
  title: "Football is Life",
  text: [
    "The app 'Football is Life' is your personal football analytics hub",
    "It features detailed statistics on matches, club performances, and national teams, along with a unique option to create your own rankings based on their results",
    "You can analyze data, compare teams, and shape your own perspective on the football world.",
    "It's the perfect tool for those who love not just watching the game but truly understanding its dynamics!"
  ],
  iconsPath: [
    mainLogo,
    statisticsIcon,
    viewIcon,
    thinkIcon
  ]
};