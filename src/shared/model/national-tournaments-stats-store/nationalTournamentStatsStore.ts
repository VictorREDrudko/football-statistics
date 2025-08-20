import { NationalTournamentsStats } from "./types";
import { worldCupStatsStore } from "./world-cup-stats/worldCupStatsStore";

export const nationalTournamentStatsStore: NationalTournamentsStats = {
  'world-cup': worldCupStatsStore,
}
