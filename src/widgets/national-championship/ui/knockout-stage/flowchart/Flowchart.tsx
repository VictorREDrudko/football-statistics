import s from './Flowchart.module.scss'
import { ReactFlow, ReactFlowProvider } from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import { CustomNodeComponent } from './customNodeComponent/CustomNodeComponent'
import { MatchInfo } from '@/shared'
import { ConfederationCode } from '@/entities'
import { createNodes, createEdges } from '@/logics/worldCup/flowchartRenderer'
import { createHeightContainerFlowchart } from '@/widgets/national-championship/lib/flowchart/createHeightContainerFlowchart'

// Настройка карты типов узлов
const nodeTypes = {
  customNode: CustomNodeComponent, // Ассоциация с компонентом
}

type Props = {
  matches: MatchInfo[]
  stages: string[]
  organizationCode: ConfederationCode
}

export const Flowchart = ({ matches, stages, organizationCode }: Props) => {
  const nodes = createNodes(stages, matches, organizationCode)
  const height = createHeightContainerFlowchart(stages)
  const edges = createEdges(stages)

  return (
    <div className={s.container} style={{ height }}>
      <ReactFlowProvider>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodesDraggable={false}
          nodeTypes={nodeTypes}
          fitView
          fitViewOptions={{
            padding: 0.1, // Отступы (в процентах от общего размера)
            minZoom: 0.5, // Минимальный уровень масштабирования
            maxZoom: 1, // Максимальный уровень масштабирования
          }}
          panOnDrag={false} // Отключение перемещения
          zoomOnScroll={false} // Отключение масштабирования колесиком мыши
          zoomOnPinch={false} // Отключение масштабирования на сенсорных устройствах
          zoomOnDoubleClick={false} // Отключение зума по двойному клику
          style={{ overflow: 'hidden', height: '100%' }}></ReactFlow>
      </ReactFlowProvider>
    </div>
  )
}
