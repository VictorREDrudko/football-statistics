export const createHeightContainerFlowchart = (stages: string[]) => {
  if (stages.length === 2) return "350px";
  if (stages.length === 4) return "680px"
  if (stages.length === 5) return "750px"
  return '350px'
};
