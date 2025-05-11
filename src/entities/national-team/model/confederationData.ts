import { afcIcon, cafIcon, concacafIcon, conmebolIcon, fifaIcon, ofcIcon, uefaIcon } from "@/shared/assets/iconConfederation";
import { ConfederationsData } from "./types/types";
import backgroundUefa from './../assets/background-confederation/uefa.png'
import backgroundAfc from './../assets/background-confederation/afc.png'
import backgroundCaf from './../assets/background-confederation/caf.png'
import backgroundConcacaf from './../assets/background-confederation/concacaf.png'
import backgroundConmebol from './../assets/background-confederation/conmebol.png'
import backgroundFifa from './../assets/background-confederation/fifa.png'
import backgroundOfc from './../assets/background-confederation/ofc.png'

export const confederationData: ConfederationsData = {
  UEFA: {
    name: "UEFA",
    iconPath: uefaIcon,
    backgroundConfederationPath: backgroundUefa,
  },
  CAF: {
    name: "CAF",
    iconPath: cafIcon,
    backgroundConfederationPath: backgroundCaf,
  },
  AFC: {
    name: "AFC",
    iconPath: afcIcon,
    backgroundConfederationPath: backgroundAfc,
  },
  CONMEBOL: {
    name: "CONMEBOL",
    iconPath: conmebolIcon,
    backgroundConfederationPath: backgroundConmebol,
  },
  CONCACAF: {
    name: "CONCACAF",
    iconPath: concacafIcon,
    backgroundConfederationPath: backgroundConcacaf,
  },
  OFC: {
    name: "OFC",
    iconPath: ofcIcon,
    backgroundConfederationPath: backgroundOfc,
  },
  FIFA: {
    name: "FIFA",
    iconPath: fifaIcon,
    backgroundConfederationPath: backgroundFifa,
  }
} as const;