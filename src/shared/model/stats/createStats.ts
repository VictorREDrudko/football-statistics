import { ConfederationCode, confederationData } from '@/entities'
import { Stats } from './types';
import { createTournamentFinalStageStats } from './createTournamentFinalStageStats';

export const createStats = (): Stats => {
  const stats: Partial<Stats> = {};

  (Object.keys(confederationData) as ConfederationCode[]).forEach((confederationCode) => {
    stats[confederationCode] = {
      qualificationStats: "", 
      finalStageStats: createTournamentFinalStageStats(confederationCode)
    };
  });

  return stats as Stats; 
};