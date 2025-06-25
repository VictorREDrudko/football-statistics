import { Position } from '@xyflow/react'
import s from '../../ui/knockout-stage/flowchart/Flowchart.module.scss'
import { MatchInfo } from '@/shared'
import { generateMatchesByStage } from './generateMatchesByStage'
import { generateChampionshipGrid } from './generateChampionshipGrid'
import { NodeType } from '../../model/types'
import { ConfederationCode } from '@/entities'
import { tournamentStages } from '@/shared/model/tournament-config/tournament-stages/tournamentStages'

export const createNodes = (stages: string[], matches: MatchInfo[], organizationCode: ConfederationCode) => {
  const matchesByStage = generateMatchesByStage(stages, matches)
  const numberStages = matchesByStage.length
  const grid = generateChampionshipGrid(matchesByStage, stages).reverse()

  let nodes: NodeType[] = []
  const classNameForLastNode = s[`lastNode--${organizationCode}`]

  // вариант 0: создание nodes когда play-off включает финал и матч за 3 место (2 стадии)
  if (numberStages === 2 && matchesByStage[0][0].stage === tournamentStages.place3) {
    nodes = matches.map((match, index) => {
      return {
        id: String(index + 1),
        type: 'customNode',
        data: { label: match.stage, match: match },
        position: {
          x: 0,
          y: index === 0 ? 110 : 0,
        },
        sourcePosition: index + 1 === 3 ? Position.Left : Position.Right,
        className: index === matches.length - 1 ? classNameForLastNode : s.node,
      }
    })
  }

  // вариант 1: создание nodes когда play-off включает финал и полуфинал (2 стадии)
  if (matchesByStage.length === 2 && matchesByStage[0][0].stage !== tournamentStages.place3) {
    nodes = matches.map((match, index) => {
      return {
        id: String(index + 1),
        type: 'customNode',
        data: { label: match.stage, match: match },
        position: {
          x: index + 1 === 3 ? 340 : 0,
          y: index + 1 === 1 ? 0 : index + 1 === 2 ? 180 : 90,
        },
        sourcePosition: index + 1 === 3 ? Position.Left : Position.Right,
        className: index === matches.length - 1 ? classNameForLastNode : s.node,
      }
    })
  }

  // вариант 2: создание nodes когда play-off включает финал, матч за 3 место и полуфинал (3 стадии)
  if (matchesByStage.length === 3) {
    nodes = matches.map((match, index) => {
      return {
        id: String(index + 1),
        type: 'customNode',
        data: { label: match.stage, match: match },
        position: {
          x: index === 0 || index === 1 ? 0 : 320,
          y: index === 0 ? 0 : index === 1 ? 180 : index === 2 ? 180 : 90,
        },
        sourcePosition: index + 1 === 3 ? Position.Left : Position.Right,
        className: index === matches.length - 1 ? classNameForLastNode : s.node,
      }
    })
  }

  // вариант 3: создание nodes когда play-off включает: финал, матч за 3 место, 1/2, 1/4, 1,8 (5 стадий)
  // вариант 4: создание nodes когда play-off включает: финал, матч за 3 место, 1/2, 1/4 (4 стадии)
  if (matchesByStage.length === 5 || matchesByStage.length === 4) {
    // создание id node
    let countId = 0

    grid.forEach((stageMatches, key) => {
      let posY = 0

      // стадия 1/8 финала
      if (key === 0) {
        // шаг смещения по вертикали каждого узла (node)
        let stepY = 90

        stageMatches.forEach((match, index) => {
          let node = {
            id: String(countId++),
            type: 'customNode',
            data: { label: match.stage, match: match },
            position: {
              x: 0,
              y: index === 0 ? posY : (posY += stepY),
            },
            sourcePosition: Position.Right,
            className: s.node,
          }

          nodes.push(node)
        })
      }

      // стадия 1/4 финала
      if (key === 1) {
        posY = 45
        let stepY = 180

        stageMatches.forEach((match, index) => {
          let node = {
            id: String(countId++),
            type: 'customNode',
            data: { label: match.stage, match: match },
            position: {
              x: 330,
              y: index === 0 ? posY : (posY += stepY),
            },
            sourcePosition: Position.Right,
            className: s.node,
          }

          nodes.push(node)
        })
      }

      // стадия полуфинала
      if (key === 2) {
        posY = 135
        let stepY = 360

        stageMatches.forEach((match, index) => {
          let node = {
            id: String(countId++),
            type: 'customNode',
            data: { label: match.stage, match: match },
            position: {
              x: 660,
              y: index === 0 ? posY : (posY += stepY),
            },
            sourcePosition: Position.Right,
            className: s.node,
          }

          nodes.push(node)
        })
      }

      // стадия матч за 3-е место
      if (key === 3) {
        stageMatches.forEach((match, index) => {
          let node = {
            id: String(countId++),
            type: 'customNode',
            data: { label: match.stage, match: match },
            position: {
              x: 990,
              y: 405,
            },
            sourcePosition: Position.Right,
            className: s.node,
          }

          nodes.push(node)
        })
      }

      // финал
      if (key === 4) {
        stageMatches.forEach((match, index) => {
          let node = {
            id: String(countId++),
            type: 'customNode',
            data: { label: match.stage, match: match },
            position: {
              x: 990,
              y: 315,
            },
            sourcePosition: Position.Right,
            className: classNameForLastNode,
          }

          nodes.push(node)
        })
      }
    })
  }

  return nodes
}
