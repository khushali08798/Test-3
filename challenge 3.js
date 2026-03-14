// Challenge 3: Normalize Locator Error Messages

/**
 * Normalizes a raw Playwright error message and prints a category.
 *
 * @param {string} rawMessage
 */
function normalizeLocatorError(rawMessage) {
  const normalized = rawMessage
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");

  const category = normalized.includes("timeout")
    ? "TIMEOUT"
    : normalized.includes("locator")
    ? "LOCATOR"
    : "GENERAL";

  console.log(`Normalized: ${normalized}`);
  console.log(`Category: ${category}`);
}

// Example input:
const rawMessage = " Locator not found after TIMEOUT ";
normalizeLocatorError(rawMessage);
