/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

import * as React from "react";
import { createUseScreenVariants } from "@plasmicapp/react-web";

export type ExperimentValue = "override";
export const ExperimentContext = React.createContext<
  ExperimentValue | undefined
>("PLEASE_RENDER_INSIDE_PROVIDER" as any);
export function ExperimentContextProvider(
  props: React.PropsWithChildren<{ value: ExperimentValue | undefined }>
) {
  return (
    <ExperimentContext.Provider value={props.value}>
      {props.children}
    </ExperimentContext.Provider>
  );
}

export function useExperiment() {
  return React.useContext(ExperimentContext);
}

export default ExperimentContext;
/* prettier-ignore-end */
