import { CalendarSystem, NumberingSystem } from "./locale.ts";
import { Locale } from "../impl/locale.ts";

export interface InfoOptions {
    locale?: string;
}

export interface InfoUnitOptions extends InfoOptions {
    locObj?: Locale;
    numberingSystem?: NumberingSystem;
}

export interface InfoCalendarOptions extends InfoUnitOptions {
    locObj?: Locale;
    outputCalendar?: CalendarSystem;
}

export interface Features {
    localeWeek: boolean;
    relative: boolean;
}
