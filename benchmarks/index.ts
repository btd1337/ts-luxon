// @ts-ignore
import {ALL_SUITES as dateTimeSuites} from "./datetime.ts";

// @ts-ignore
import {ALL_SUITES as infoSuites} from "./info.ts";

const allSuites = [...dateTimeSuites, ...infoSuites];

async function runAllSuites() {
    for (const runSuite of allSuites) {
        await runSuite();
    }
}

runAllSuites();