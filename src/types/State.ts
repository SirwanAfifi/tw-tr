export type State = {
  position?: {
    x: number;
    y: number;
  };
  show?: boolean;
  setShow?: (s: boolean) => void;
  setPosition?: ({ x, y }: { x: any; y: any }) => void;
};
