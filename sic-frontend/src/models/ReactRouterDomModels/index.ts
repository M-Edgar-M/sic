export interface NavigateFunction {
    (
      to: string,
      options?: {
        replace?: boolean;
        state?: any;
        relative?: any;
      }
    ): void;
    (delta: number): void;
  }