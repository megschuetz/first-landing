export interface Mouse {
  x: number;
  y: number;
}

export class Dot {
  x: number;
  y: number;
  node: HTMLDivElement;
  
  constructor() {
    this.x = 0;
    this.y = 0;
    this.node = (() => {
      const n = document.createElement("div");
      n.className = "trail";
      document.body.appendChild(n);
      return n;
    })();
  }

  draw() {
    this.node.style.left = this.x + "px";
    this.node.style.top = this.y + "px";
    this.node.style.position = "absolute";
    this.node.style.height = "10px";
    this.node.style.width = "10px";
    this.node.style.background = '#CBCBFFff';
    this.node.style.borderRadius = '5px';
  }
}