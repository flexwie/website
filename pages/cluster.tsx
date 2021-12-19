import type { NextPage } from "next";
import { Nav } from "../components/nav";
import ReactFlow from 'react-flow-renderer';

const elements: any[] = [
  {
    id: 'dc1',
    type: 'input',
    data: { label: 'dc1' },
    position: { x: 80, y: 50 },
  },
  {
    id: 'traefik',
    type: 'input',
    data: { label: 'traefik' },
    position: { x: 225, y: 150 },
  },
  {
    id: 'consul',
    type: 'input',
    data: { label: 'Consul' },
    position: { x: 400, y: 70 },
    targetPosition: "top",
    sourcePosition: "bottom"
  },
  {
    id: 'web1',
    type: 'input',
    data: { label: 'Web Service' },
    position: { x: 70, y: 300 },
    sourcePosition: "top"
  },
  {
    id: 'prometheus',
    type: 'input',
    data: { label: 'Prometheus' },
    position: { x: 300, y: 300 },
    sourcePosition: "top"
  },
  {
    id: "dc1-traefik",
    source: "dc1",
    type: 'smoothstep',
    "target": "traefik",
  },
  {
    id: "consul-traefik",
    source: "consul",
    type: 'smoothstep',
    "target": "traefik",
  },
  {
    id: "traefik-web1",
    source: "traefik",
    label: "felixwie.com",
    arrowHeadType: 'arrow',
    animated: true,
    "target": "web1",
  },
  {
    id: "traefik-prometheus",
    source: "traefik",
    arrowHeadType: 'arrow',
    animated: true,
    label: "insights.felixwie.com",
    "target": "prometheus",
  },

]

const Cluster: NextPage = () => {

  return (
    <div>
      <Nav />
      <div className="font-sans font-extrabold text-3xl text-center mt-4 sm:mt-6 sm:text-left text-indigo-600 dark:text-indigo-400">Cluster</div>
      <div className="mt-4">My cluster is running on ARM machines with 2 Cores and 12GB memory each, hosted on Oracle cloud infrastructure (because its free!). The containers are orchestrated by Nomad, Consul provides services discovery and health checks.</div>
      <div className="h-96">
        <ReactFlow elements={elements} snapToGrid onNodeDrag={console.log} nodesDraggable={false} paneMoveable={true} />
      </div>
      <div className="mt-4">The hardware is automatically deployed with Terraform and GitHub Actions, and the machines are running a custom image build with Packer.</div>
      <div className="mt-2">You can build this cluster yourself! I will publish a mini series on getting started with OCI and GitOps tooling on my blog here. Stay tuned :)</div>
    </div>
  );
};

export default Cluster;
