import s from './FlowchartPlayOffStage.module.css'
import { ReactFlow, ReactFlowProvider } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { WorldCupMatch } from 'data/worldCupData/type-worldCupData';
import { createEdges, createHeight, createNodes } from 'logics/worldCup/WorldCupFinalStageLogic';
import { CustomNodeComponent } from './customNodeComponent/CustomNodeComponent';

// Настройка карты типов узлов
const nodeTypes = {
  customNode: CustomNodeComponent, // Ассоциация с компонентом
};

type Props = {
  matches: WorldCupMatch[]
  playOffStages: string[]
}

export const FlowchartPlayOffStage = ({matches, playOffStages}: Props) => {
  const nodes = createNodes(playOffStages, matches)
  const height = createHeight(playOffStages, matches)
  const edges = createEdges(playOffStages)

  return (
  <div className={s.container} style={{height}}>
    <ReactFlowProvider>
      <ReactFlow  nodes={nodes} 
                  edges={edges} 
                  nodesDraggable={false}
                  nodeTypes={nodeTypes}
                  fitView
                  fitViewOptions={{
                    padding: 0.1, // Отступы (в процентах от общего размера)
                    minZoom: 0.5, // Минимальный уровень масштабирования
                    maxZoom: 1    // Максимальный уровень масштабирования
                  }}
                  panOnDrag={false} // Отключение перемещения
                  zoomOnScroll={false} // Отключение масштабирования колесиком мыши
                  zoomOnPinch={false} // Отключение масштабирования на сенсорных устройствах
                  zoomOnDoubleClick={false} // Отключение зума по двойному клику
                  style={{ overflow: 'hidden', height: '100%' }}
      > 
      </ReactFlow>
    </ReactFlowProvider>
  </div>
  )
}