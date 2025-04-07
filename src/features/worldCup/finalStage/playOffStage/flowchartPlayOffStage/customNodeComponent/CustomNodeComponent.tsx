import { WorldCupMatch } from "data/worldCupData/type-worldCupData"
import { Handle, Position } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import s from './CustomNodeComponent.module.css'
import { MatchFlowchart } from "../matchFlowchart/MatchFlowchart";

type CustomNodeData = {
  label: string
  match: WorldCupMatch
}

export const CustomNodeComponent = ({ data } : {data: CustomNodeData}) => {
  return (
    <div className={s.containerNode}>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
      <MatchFlowchart match={data.match}/>
    </div>
  );
};