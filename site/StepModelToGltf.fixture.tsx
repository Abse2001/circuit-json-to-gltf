import CircuitToGltfDemo from "./page"

const stepModelCircuitJson = [
  {
    type: "pcb_board",
    pcb_board_id: "board_step_demo",
    center: { x: 0, y: 0 },
    width: 24,
    height: 24,
    thickness: 1.6,
  },
  {
    type: "source_component",
    source_component_id: "source_u1",
    name: "U1",
    display_value: "SOIC-8 STEP",
  },
  {
    type: "pcb_component",
    pcb_component_id: "pcb_u1",
    source_component_id: "source_u1",
    center: { x: 0, y: 0 },
    width: 6,
    height: 5,
    layer: "top",
  },
  {
    type: "cad_component",
    cad_component_id: "cad_u1",
    pcb_component_id: "pcb_u1",
    source_component_id: "source_u1",
    model_step_url: "https://modelcdn.tscircuit.com/jscad_models/soic8.step",
    size: { x: 5, y: 2, z: 6 },
    position: { x: 0, y: 0, z: 0.8 },
    rotation: { x: 0, y: 0, z: 180 },
  },
]

export default {
  "STEP Model to GLTF": (
    <CircuitToGltfDemo
      initialCircuitJson={stepModelCircuitJson}
      initialFormat="gltf"
    />
  ),
}
