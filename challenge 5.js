// Challenge 5: Reusable Step Runner with Callback

/**
 * Runs a step with logging and error handling.
 *
 * @param {string} stepName
 * @param {() => any} actionFn
 * @returns {{stepName: string, passed: boolean, message: string}}
 */
function runStep(stepName, actionFn) {
  console.log(`Starting step: ${stepName}`);

  try {
    const result = actionFn();
    return { stepName, passed: true, message: result };
  } catch (error) {
    return { stepName, passed: false, message: error.message };
  }
}

// Example input:
const result = runStep("open dashboard", () => "Page loaded");
console.log(result);