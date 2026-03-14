// Challenge 1: Playwright step summary report

/**
 * Prints a summary report for an array of Playwright step results.
 *
 * @param {{name: string, status: "passed" | "failed" | "skipped", durationMs: number}[]} steps
 */
function printPlaywrightSummary(steps) {
  const totalSteps = steps.length;
  const passed = steps.filter(s => s.status === "passed").length;
  const failed = steps.filter(s => s.status === "failed").length;
  const skipped = steps.filter(s => s.status === "skipped").length;
  const totalDuration = steps.reduce((sum, s) => sum + (s.durationMs || 0), 0);
  const failedNames = steps
    .filter(s => s.status === "failed")
    .map(s => s.name)
    .join(", ");

  console.log("--- Playwright Step Summary ---");
  console.log(`Total steps: ${totalSteps}`);
  console.log(`Passed: ${passed}`);
  console.log(`Failed: ${failed}`);
  console.log(`Skipped: ${skipped}`);
  console.log(`Total duration: ${totalDuration} ms`);
  console.log(`Failed steps: ${failedNames || "(none)"}`);
}

// Example usage:
const exampleSteps = [
  { name: "open login", status: "passed", durationMs: 400 },
  { name: "fill form", status: "failed", durationMs: 700 },
  { name: "submit", status: "skipped", durationMs: 0 },
];

printPlaywrightSummary(exampleSteps);
