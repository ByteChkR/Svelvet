import type { Node, Anchor } from '$lib/types';

export interface SvelvetConnectionEvent {
	sourceNode: Node;
	sourceAnchor: Anchor;
	targetNode: Node;
	targetAnchor: Anchor;
}

export interface AnchorConnectionEvent {
	node: Node;
	anchor: Anchor;
	connectedNode: Node;
	connectedAnchor: Anchor;
}

export interface GraphTranslateEvent {
	x: number;
	y: number;
}

export interface GraphZoomEvent {
	scale: number;
}