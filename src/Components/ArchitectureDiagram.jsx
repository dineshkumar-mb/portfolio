import React, { useCallback, useState, useEffect } from 'react';
import {
  ReactFlow,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Handle,
  Position,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

// Custom Node Component
const CustomNode = ({ data }) => {
  return (
    <div className="px-4 py-3 shadow-lg rounded-xl bg-white dark:bg-gray-800 border-2 border-blue-500 dark:border-blue-400 min-w-[150px]">
      <Handle type="target" position={Position.Top} className="w-3 h-3 bg-blue-500" />
      <div className="flex flex-col items-center">
        {data.icon && (
          <div className="text-3xl mb-2 text-blue-600 dark:text-blue-400">
            {data.icon}
          </div>
        )}
        <div className="font-bold text-slate-800 dark:text-white text-sm text-center">
          {data.label}
        </div>
        {data.subtext && (
          <div className="text-xs text-slate-500 dark:text-gray-400 text-center mt-1 font-medium">
            {data.subtext}
          </div>
        )}
      </div>
      <Handle type="source" position={Position.Bottom} className="w-3 h-3 bg-blue-500" />
    </div>
  );
};

const nodeTypes = {
  custom: CustomNode,
};

export default function ArchitectureDiagram({ initialNodes, initialEdges }) {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check if dark mode is active
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    checkDarkMode();

    // Create an observer to watch for theme changes on the html element
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          checkDarkMode();
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  return (
    <div className="w-full h-[500px] rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-lg bg-slate-50 dark:bg-[#0a0a0a]">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        attributionPosition="bottom-left"
        colorMode={isDark ? 'dark' : 'light'}
      >
        <Controls className="bg-white dark:bg-gray-800 border-slate-200 dark:border-gray-700 fill-slate-800 dark:fill-white" />
        <Background color={isDark ? '#4b5563' : '#cbd5e1'} gap={16} />
      </ReactFlow>
    </div>
  );
}
