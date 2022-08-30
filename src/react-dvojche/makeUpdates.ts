import Two from "two.js";

const propsToSkip: any = {
  children: true,
  ref: true,
  key: true,
  style: true,
  forwardedRef: true,
  unstable_applyCache: true,
  unstable_applyDrawHitFromCache: true,
};

export const EVENTS_NAMESPACE = ".react-dvojche-event";

let useStrictMode = false;

export function toggleStrictMode(value: boolean) {
  useStrictMode = value;
}

const EMPTY_PROPS: any = {};

export function applyNodeProps(
  instance: any,
  props: any,
  oldProps = EMPTY_PROPS
) {
  //here
  if (props === oldProps) {
    console.error("same props");
  }

  for (var key in props) {
    if (propsToSkip[key]) {
      continue;
    }

    instance[key] = props[key];
  }
}

export function updatePicture(instance: any) {
  Two.Instances.forEach((two) => two.update());
  //instance?.update?.();
}
