
import { Stats } from './types';
import { createTournamentFinalStageStats } from './createTournamentFinalStageStats';
import { ConfederationCode } from '@/entities/team/model/types';

export const createStats = (): Stats => {
  const stats: Partial<Stats> = {};

  // (Object.keys(confederationData) as ConfederationCode[]).forEach((confederationCode) => {
  //   stats[confederationCode] = {
  //     [confederationData[confederationCode].nameTournament]: {
  //       qualificationStats: "", 
  //       finalStageStats: createTournamentFinalStageStats(confederationCode)
  //     }
  //   };
  // });

  return stats as Stats; 
};