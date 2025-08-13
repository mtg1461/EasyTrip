// types/global.d.ts
export {};

declare global {
  interface DataLayerEvent {
    event: string;
    [key: string]: unknown;
  }

  interface Window {
    /**
     * Google Tag Manager dataLayer (or similar). Optional at runtime.
     */
    dataLayer?: {
      push: (event: DataLayerEvent) => void;
    };
  }
}
