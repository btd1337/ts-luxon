import * as tsLuxon from "../dist/ts-luxon.umd.js";
import pkg from "../package.json" assert { type: "json" };

if (pkg.version !== tsLuxon.VERSION) {
    console.error(`Version mismatch! Expected ${pkg.version}, got ${tsLuxon.VERSION}. Rebuild the package to solve!`);
    throw new Error(`PGK-LIB VERSION MISMATCH!`);
}