import { MatchFifaWorldCup } from 'data/type-data';
import s from './KnockoutStage.module.css'
import { createHeight, createNodes, edges } from 'data/worldCupFinalStage';
import { Handle, Position, ReactFlow, ReactFlowProvider } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { MatchOfKnockoutStage } from './matchOfKnockoutStage/MatchOfKnockoutStage';

type CustomNodeData = {
  label: string
  match: MatchFifaWorldCup
}

// Ваш кастомный компонент
const CustomNodeComponent = ({ data } : {data: CustomNodeData}) => {
  return (
    <div className={s.containerNode}>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
      <MatchOfKnockoutStage match={data.match}/>
    </div>
  );
};


// Настройка карты типов узлов
const nodeTypes = {
  customNode: CustomNodeComponent, // Ассоциация с вашим компонентом
};


type KnockoutStage = {
  matches: MatchFifaWorldCup[] | undefined
}

export const KnockoutStage = ({matches}: KnockoutStage) => {
  const nodes = createNodes(matches)
  const height = createHeight(matches)

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