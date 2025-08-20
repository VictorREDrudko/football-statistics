export const createEdges = (stages: string[]) => {
  const numberStages = stages.length 

  if(numberStages === 2) {
    return (
      [
        {
          id: "1->3",
          type: "step",
          source: "1",
          target: "3",
          animated: true,
          style: { stroke: "white", strokeWidth: 1 },
        },
        {
          id: "e2-3",
          type: "step",
          source: "2",
          target: "3",
          animated: true,
          style: { stroke: "white", strokeWidth: 1 },
        },
      ]
    )
  }

  if(numberStages === 3) {
    return (
      [
        {
          id: "1->4",
          type: "step",
          source: "1",
          target: "4",
          animated: true,
          style: { stroke: "white", strokeWidth: 1 },
        },
        {
          id: "2->4",
          type: "step",
          source: "2",
          target: "4",
          animated: true,
          style: { stroke: "white", strokeWidth: 1 },
        },
      ]
    )
  }

  if(numberStages === 4) {
    return (
      [
        {
          id: "0->4",
          type: "step",
          source: "0",
          target: "4",
          animated: true,
          style: { stroke: "white", strokeWidth: 1 },
        },
        {
          id: "1->4",
          type: "step",
          source: "1",
          target: "4",
          animated: true,
          style: { stroke: "white", strokeWidth: 1 },
        },
        {
          id: "2->5",
          type: "step",
          source: "2",
          target: "5",
          animated: true,
          style: { stroke: "white", strokeWidth: 1 },
        },
        {
          id: "3->5",
          type: "step",
          source: "3",
          target: "5",
          animated: true,
          style: { stroke: "white", strokeWidth: 1 },
        },
        {
          id: "4->7",
          type: "step",
          source: "4",
          target: "7",
          animated: true,
          style: { stroke: "white", strokeWidth: 1 },
        },
        {
          id: "5->7",
          type: "step",
          source: "5",
          target: "7",
          animated: true,
          style: { stroke: "white", strokeWidth: 1 },
        },
      ]
    )
  }

  if(numberStages === 5) {
    return (
      [
        {
          id: "0->8",
          type: "step",
          source: "0",
          target: "8",
          animated: true,
          style: { stroke: "white", strokeWidth: 1 },
        },
        {
          id: "1->8",
          type: "step",
          source: "1",
          target: "8",
          animated: true,
          style: { stroke: "white", strokeWidth: 1 },
        },
        {
          id: "2->9",
          type: "step",
          source: "2",
          target: "9",
          animated: true,
          style: { stroke: "white", strokeWidth: 1 },
        },
        {
          id: "3->9",
          type: "step",
          source: "3",
          target: "9",
          animated: true,
          style: { stroke: "white", strokeWidth: 1 },
        },
        {
          id: "4->10",
          type: "step",
          source: "4",
          target: "10",
          animated: true,
          style: { stroke: "white", strokeWidth: 1 },
        },
        {
          id: "5->10",
          type: "step",
          source: "5",
          target: "10",
          animated: true,
          style: { stroke: "white", strokeWidth: 1 },
        },
        {
          id: "6->11",
          type: "step",
          source: "6",
          target: "11",
          animated: true,
          style: { stroke: "white", strokeWidth: 1 },
        },
        {
          id: "7->11",
          type: "step",
          source: "7",
          target: "11",
          animated: true,
          style: { stroke: "white", strokeWidth: 1 },
        },
        {
          id: "8->12",
          type: "step",
          source: "8",
          target: "12",
          animated: true,
          style: { stroke: "white", strokeWidth: 1 },
        },
        {
          id: "9->12",
          type: "step",
          source: "9",
          target: "12",
          animated: true,
          style: { stroke: "white", strokeWidth: 1 },
        },
        {
          id: "10->13",
          type: "step",
          source: "10",
          target: "13",
          animated: true,
          style: { stroke: "white", strokeWidth: 1 },
        },
        {
          id: "11->13",
          type: "step",
          source: "11",
          target: "13",
          animated: true,
          style: { stroke: "white", strokeWidth: 1 },
        },
        {
          id: "12->15",
          type: "step",
          source: "12",
          target: "15",
          animated: true,
          style: { stroke: "white", strokeWidth: 1 },
        },
        {
          id: "13->15",
          type: "step",
          source: "13",
          target: "15",
          animated: true,
          style: { stroke: "white", strokeWidth: 1 },
        },
      ]
    )
  }
} 