import { afcIcon, cafIcon, concacafIcon, conmebolIcon, fifaIcon, ofcIcon, uefaIcon } from "@/shared/assets/iconConfederation";
import { ConfederationsData } from "./types/types";
import backgroundUefa from './../assets/background-confederation/uefa.png'
import backgroundAfc from './../assets/background-confederation/afc.png'
import backgroundCaf from './../assets/background-confederation/caf.png'
import backgroundConcacaf from './../assets/background-confederation/concacaf.png'
import backgroundConmebol from './../assets/background-confederation/conmebol.png'
import backgroundFifa from './../assets/background-confederation/fifa.png'
import backgroundOfc from './../assets/background-confederation/ofc.png'

import iconCupUefa from './../assets/icon-cup/uefa.png'
import iconCupCaf from './../assets/icon-cup/caf.png'
import iconCupAfc from './../assets/icon-cup/afc.png'
import iconCupConmebol from './../assets/icon-cup/conmebol.png'
import iconCupConcacaf from './../assets/icon-cup/concacaf.png'
import iconCupOfc from './../assets/icon-cup/ofc.png'
import iconCupFifa from './../assets/icon-cup/world.png'

export const confederationData: ConfederationsData = {
  UEFA: {
    id: 'confederation-5',
    name: "UEFA",
    nameTournament: 'European Championship',
    iconPathConfederation: uefaIcon,
    iconPathCup: iconCupUefa,
    backgroundConfederationPath: backgroundUefa,
    path: "european-championship"
  },
  CAF: {
    id: 'confederation-2',
    name: "CAF",
    nameTournament: 'Africa Cup of Nations',
    iconPathConfederation: cafIcon,
    iconPathCup: iconCupCaf,
    backgroundConfederationPath: backgroundCaf,
    path: "africa-cup",
  },
  AFC: {
    id: 'confederation-6',
    name: "AFC",
    nameTournament: 'AFC Asian Cup',
    iconPathConfederation: afcIcon,
    iconPathCup: iconCupAfc,
    backgroundConfederationPath: backgroundAfc,
    path: "asian-cup",
  },
  CONMEBOL: {
    id: 'confederation-3',
    name: "CONMEBOL",
    nameTournament: 'CONMEBOL Copa América',
    iconPathConfederation: conmebolIcon,
    iconPathCup: iconCupConmebol,
    backgroundConfederationPath: backgroundConmebol,
    path: "copa-america"
  },
  CONCACAF: {
    id: 'confederation-1',
    name: "CONCACAF",
    nameTournament: 'CONCACAF Gold Cup',
    iconPathConfederation: concacafIcon,
    iconPathCup: iconCupConcacaf,
    backgroundConfederationPath: backgroundConcacaf,
    path: "concacaf-gold-cup",
  },
  OFC: {
    id: 'confederation-7',
    name: "OFC",
    nameTournament: 'OFC Nations Cup',
    iconPathConfederation: ofcIcon,
    iconPathCup: iconCupOfc,
    backgroundConfederationPath: backgroundOfc,
    path: "ofc-cup",
  },
  FIFA: {
    id: 'organization-4',
    name: "FIFA",
    nameTournament: 'FIFA World Cup',
    iconPathConfederation: fifaIcon,
    iconPathCup: iconCupFifa,
    backgroundConfederationPath: backgroundFifa,
    path: "world-cup",
  }
} as const;