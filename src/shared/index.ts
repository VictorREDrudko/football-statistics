import { getCurrentCountryName } from "./lib/getCurrentCountryName";
import { getCurrentYear } from "./lib/getCurrentYear";
import { getTournamentNumber } from "./lib/getTournamentNumber";
import { getTournamentTitle } from "./lib/getTournamentTitle";
import { getTournamentYear } from "./lib/getTournamentYear";
import { TournamentData, TournamentInfo } from "./model/national-tournament/types";
import { worldCupData } from "./model/national-tournament/worldCupData";
import { BackgroundImage } from "./ui/background-image/BackgroundImage";
import { ButtonClose } from "./ui/button-close/ButtonClose";
import { Button } from "./ui/button/Button";
import { Container } from "./ui/container/Container";
import { Flag } from "./ui/flag/Flag";
import { IconNationalCup } from "./ui/icon-national-cup/IconNationalCup";
import { IconConfederation } from "./ui/iconConfederation/IconConfederation";
import { Link } from "./ui/link/Link";
import { ModalWindow } from "./ui/modalWindow/ModalWindow";
import { Badge } from "./ui/number/Badge";
import { NumberInCircle } from "./ui/numberInCircle/NumberInCircle";
import { Score } from "./ui/score/Score";
import { Title } from "./ui/title/Title";

export {
  Button,
  Link,
  Container,
  Badge,
  Title,
  Score,
  BackgroundImage,
  Flag, 
  IconConfederation,
  NumberInCircle,
  ButtonClose,
  ModalWindow,
  getCurrentYear,
  getCurrentCountryName,
  IconNationalCup,

  getTournamentYear,
  getTournamentTitle,
  getTournamentNumber,

  worldCupData,
}

export type {
  TournamentInfo,
  TournamentData
}