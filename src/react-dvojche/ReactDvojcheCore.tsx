/**
 * Based on ReactKonva.js
 * Based on ReactArt.js
 * Copyright (c) 2022-present Bojan Bozhinovski.
 * All rights reserved.
 *
 * MIT
 */
"use strict";

import React, { useRef } from "react";
import ReactFiberReconciler from "react-reconciler";
import { ConcurrentRoot } from "react-reconciler/constants";
import Two from "two.js";
import { applyNodeProps, toggleStrictMode } from "./makeUpdates";
import * as HostConfig from "./ReactDvojcheHostConfig";

function useLazyRef<T>(fn: () => T) {
  const ref = useRef<T>();
  if (!ref.current) {
    ref.current = fn();
  }
  return ref.current;
}

function usePrevious(value: any) {
  const ref = React.useRef();
  React.useLayoutEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const SceneWrap = (props: any) => {
  const fiberRef = React.useRef();

  const oldProps = usePrevious(props);

  const two = useLazyRef(() => {
    return new Two(props.options || {});
  });

  const refDiv = React.useRef<HTMLDivElement>(null);

  React.useLayoutEffect(() => {
    if (refDiv.current) {
      two.appendTo(refDiv.current);

      fiberRef.current = (TwoRenderer as any).createContainer(
        two,
        ConcurrentRoot,
        false,
        null
      );
      TwoRenderer.updateContainer(props.children, fiberRef.current);
    }

    return () => {
      TwoRenderer.updateContainer(null, fiberRef.current, null);
      two.clear();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useLayoutEffect(() => {
    applyNodeProps(two, props, oldProps);
    TwoRenderer.updateContainer(props.children, fiberRef.current, null);
  });

  const { width, height } = props.options || {};

  return <div ref={refDiv} style={{ width, height }} />;
};

export const Line = "Line";
export const Arrow = "Arrow";

export const Rectangle = "Rectangle";

export const RoundedRectangle = "RoundedRectangle";
export const Circle = "Circle";
export const Ellipse = "Ellipse";
export const Star = "Star";
export const Curve = "Curve";
export const Polygon = "Polygon";
export const ArcSegment = "ArcSegment";
export const Points = "Points";
export const Path = "Path";
export const Text = "Text";
export const LinerGradient = "LinerGradient";
export const RadialGradient = "RadialGradient";
export const Sprite = "Sprite";
export const ImageSequence = "ImageSequence";
export const Texture = "Texture";

export const Group = "Group";

export const TwoRenderer = ReactFiberReconciler(HostConfig as any);

// TwoRenderer.injectIntoDevTools({
//   findHostInstanceByFiber: () => null,
//   bundleType: 1,
//   //bundleType: process.env.NODE_ENV !== "production" ? 1 : 0,
//   version: React.version,
//   rendererPackageName: "react-dvojche",
// });

export const Scene = SceneWrap;

export const useStrictMode = toggleStrictMode;
