import { Zone } from "../zone.ts";

export interface ZoneOffsetOptions {
  format?: "short" | "long";
  locale?: string;
}

export type ZoneOffsetFormat = "narrow" | "short" | "techie";

export type ZoneLike = Zone | number | string | null | undefined;
