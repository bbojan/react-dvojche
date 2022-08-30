import { DefaultEventPriority } from "react-reconciler/constants";
import Two from "two.js";
import { applyNodeProps, updatePicture } from "./makeUpdates";

//here

export {
  unstable_IdlePriority as idlePriority,
  unstable_now as now,
  unstable_runWithPriority as run,
} from "scheduler";

const NO_CONTEXT = {};
const UPDATE_SIGNAL = {};

export function appendInitialChild(parentInstance: any, child: any) {
  if (typeof child === "string") {
    // Noop for string children of Text (eg <Text>foo</Text>)
    console.error(
      `Do not use plain text as child of Two.Node. You are using text: ${child}`
    );
    return;
  }

  parentInstance.add(child);

  updatePicture(parentInstance);
}

export function createInstance(
  type: any,
  props: any,
  internalInstanceHandle: any
) {
  let NodeClass = (Two as any)[type];
  if (!NodeClass) {
    console.error(
      `Two has no node with the type ${type}. Group will be used instead.`
    );
    NodeClass = Two.Group;
  }

  const instance = new NodeClass();

  applyNodeProps(instance, props);

  return instance;
}

export function createTextInstance(
  text: any,
  rootContainerInstance: any,
  internalInstanceHandle: any
) {
  console.error(
    `Text components are not supported for now in ReactDvojche. Your text is: "${text}"`
  );
}

export function finalizeInitialChildren(
  domElement: any,
  type: any,
  props: any
) {
  return false;
}

export function getPublicInstance(instance: any) {
  return instance;
}

export function prepareForCommit() {
  return null;
}

export function preparePortalMount() {
  return null;
}

export function prepareUpdate(
  domElement: any,
  type: any,
  oldProps: any,
  newProps: any
) {
  return UPDATE_SIGNAL;
}

export function resetAfterCommit() {
  // Noop
}

export function resetTextContent(domElement: any) {
  // Noop
}

export function shouldDeprioritizeSubtree(type: any, props: any) {
  return false;
}

export function getRootHostContext() {
  return NO_CONTEXT;
}

export function getChildHostContext() {
  return NO_CONTEXT;
}

export const scheduleTimeout = setTimeout;
export const cancelTimeout = clearTimeout;
export const noTimeout = -1;
// export const schedulePassiveEffects = scheduleDeferredCallback;
// export const cancelPassiveEffects = cancelDeferredCallback;

export function shouldSetTextContent(type: any, props: any) {
  return false;
}

// The Two renderer is secondary to the React DOM renderer.
export const isPrimaryRenderer = false;
export const warnsIfNotActing = true;
export const supportsMutation = true;

export function appendChild(parentInstance: any, child: any) {
  parentInstance.add(child);

  updatePicture(parentInstance);
}

export function appendChildToContainer(parentInstance: any, child: any) {
  parentInstance.add(child);

  updatePicture(parentInstance);
}

export function insertBefore(
  parentInstance: any,
  child: any,
  beforeChild: any
) {
  //child._remove();
  parentInstance.add(child);

  updatePicture(parentInstance);
}

export function insertInContainerBefore(
  parentInstance: any,
  child: any,
  beforeChild: any
) {
  insertBefore(parentInstance, child, beforeChild);
}

export function removeChild(parentInstance: any, child: any) {
  parentInstance.remove(child);

  updatePicture(parentInstance);
}

export function removeChildFromContainer(parentInstance: any, child: any) {
  parentInstance.remove(child);

  updatePicture(parentInstance);
}

export function commitTextUpdate(
  textInstance: any,
  oldText: any,
  newText: any
) {
  console.error(
    `Text components are not yet supported in ReactDvojche. You text is: "${newText}"`
  );
}

export function commitMount(instance: any, type: any, newProps: any) {
  // Noop
}

export function commitUpdate(
  instance: any,
  updatePayload: any,
  type: any,
  oldProps: any,
  newProps: any
) {
  applyNodeProps(instance, newProps, oldProps);
}

export function hideInstance(instance: any) {
  instance.visible = false;

  updatePicture(instance);
}

export function hideTextInstance(textInstance: any) {
  // Noop
}

export function unhideInstance(instance: any, props: any) {
  if (props.visible == null || props.visible) {
    instance.visible = true;
  }
}

export function unhideTextInstance(textInstance: any, text: any) {
  // Noop
}

export function clearContainer(container: any) {
  // container.clear();
  // Noop
}

export function detachDeletedInstance() {}

export const getCurrentEventPriority = () => DefaultEventPriority;
