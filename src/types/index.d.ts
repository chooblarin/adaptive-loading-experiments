// Referenced from https://github.com/GoogleChromeLabs/react-adaptive-hooks/pull/21

declare module "react-adaptive-hooks/network" {
  export type EffectiveConnectionType = "slow-2g" | "2g" | "3g" | "4g";
  export function useNetworkStatus(
    initialEffectiveConnectionType?: EffectiveConnectionType | null
  ): {
    unsupported: boolean;
    effectiveConnectionType: EffectiveConnectionType | null;
  };
}

declare module "react-adaptive-hooks/save-data" {
  export function useSaveData(
    initialSaveDataStatus?: boolean | null
  ): { unsupported: boolean; saveData: boolean | null };
}

declare module "react-adaptive-hooks/hardware-concurrency" {
  export function useHardwareConcurrency():
    | { unsupported: true }
    | { unsupported: false; numberOfLogicalProcessors: number };
}

declare module "react-adaptive-hooks/memory" {
  export interface MemoryStatus {
    deviceMemory: number;
    totalJSHeapSize: number | null;
    usedJSHeapSize: number | null;
    jsHeapSizeLimit: number | null;
  }
  export function useMemoryStatus(
    initialMemoryStatus?: MemoryStatus
  ):
    | ({ unsupported: true } & Partial<MemoryStatus>)
    | ({
        unsupported: false;
      } & MemoryStatus);
}
