import { NodesItem, WorldCupMatch } from "data/worldCupData/type-worldCupData";
import { generateMatchesByStage, generatePlayoffGrid } from "./playoffGridLogic";
import { Position } from "@xyflow/react";
import s from "./../../features/worldCup/finalStage/playOffStage/flowchartPlayOffStage/FlowchartPlayOffStage.module.css";

export const createNodes = (playOffStages: string[], matches: WorldCupMatch[]) => {
  const matchesByStage = generateMatchesByStage(playOffStages, matches)
  const playoffGrid = generatePlayoffGrid(matchesByStage).reverse()
  
  let nodes: NodesItem[] = [];

  // вариант 1: создание nodes когда play-off включает финал и полуфинал (2 стадии)
  if (matchesByStage.length === 2) {
    nodes = matches.map((match, index) => {
      return {
        id: String(index + 1),
        type: "customNode",
        data: { label: match.stage, match: match },
        position: {
          x: index + 1 === 3 ? 320 : 0,
          y: index + 1 === 1 ? 0 : index + 1 === 2 ? 180 : 90,
        },
        sourcePosition: index + 1 === 3 ? Position.Left : Position.Right,
        className: index === matches.length - 1 ? s.lastNode : s.node,
      };
    });
  }

  // вариант 2: создание nodes когда play-off включает: финал, матч за 3 место, 1/2, 1/4, 1,8 (5 стадий)
  if (matchesByStage.length === 5) {
    // создание id node
    let countId = 0

    playoffGrid.forEach((stageMatches, key) => {
      let posY = 0;

      // стадия 1/8 финала
      if(key === 0) {
        // шаг смещения по вертикали каждого узла (node)
        let stepY = 90

        stageMatches.forEach((match, index) => {
          let node = {
            id: String(countId++),
            type: "customNode",
            data: { label: match.stage, match: match },
            position: {
              x: 0,
              y: index === 0 ? posY : posY += stepY,
            },
            sourcePosition: Position.Right,
            className: s.node,
          };

          nodes.push(node)
        })
      }

      // стадия 1/4 финала
      if(key === 1) {
        posY = 45
        let stepY = 180

        stageMatches.forEach((match, index) => {
          let node = {
            id: String(countId++),
            type: "customNode",
            data: { label: match.stage, match: match },
            position: {
              x: 320,
              y: index === 0 ? posY : posY += stepY,
            },
            sourcePosition: Position.Right,
            className: s.node,
          };

          nodes.push(node)
        })
      }

      // стадия полуфинала
      if(key === 2) {
        posY = 135
        let stepY = 360

        stageMatches.forEach((match, index) => {
          let node = {
            id: String(countId++),
            type: "customNode",
            data: { label: match.stage, match: match },
            position: {
              x: 640,
              y: index === 0 ? posY : posY += stepY,
            },
            sourcePosition: Position.Right,
            className: s.node,
          };

          nodes.push(node)
        })
      }

      // стадия матч за 3-е место
      if(key === 3) {
        stageMatches.forEach((match, index) => {
          let node = {
            id: String(countId++),
            type: "customNode",
            data: { label: match.stage, match: match },
            position: {
              x: 960,
              y: 405,
            },
            sourcePosition: Position.Right,
            className: s.node,
          };

          nodes.push(node)
        })
      }

      // финал
      if(key === 4) {
        stageMatches.forEach((match, index) => {
          let node = {
            id: String(countId++),
            type: "customNode",
            data: { label: match.stage, match: match },
            position: {
              x: 960,
              y: 315,
            },
            sourcePosition: Position.Right,
            className: s.lastNode,
          };

          nodes.push(node)
        })
      }
    })
  }
  return nodes;
}

// высота контейнера
export const createHeight = (playOffStages: string[], matches: WorldCupMatch[]) => {
  if (playOffStages.length === 2) return "350px";
  if (playOffStages.length === 5) return "750px"
  return '350px'
};

// связи между узлами (node)
export const createEdges = (playOffStages: string[]) => {
  if(playOffStages.length === 2) {
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

  if(playOffStages.length === 5) {
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