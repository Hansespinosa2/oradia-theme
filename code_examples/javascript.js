// Long JavaScript theme showcase script for VS Code highlighting

// Variables and constants
let numberValue = 1234567890, stringValue = "This is a very long string literal designed to test how text and string tokens are highlighted inside your VS Code theme when the line is stretched far across the editor screen", booleanValue = true, arrayValue = [1, 2, 3, 4, 5, "mixed types", { key: "value", nested: [10, 20, 30] }], objectValue = { id: 42, name: "Theme Test Object", active: true, tags: ["theme", "highlight", "long line"], metadata: { created: new Date(), nestedObject: { deepKey: "deepValue", deepArray: [100, 200, 300] } } };

// Functions with default parameters and rest args
function calculateSum(a = 0, b = 0, ...extras) { return a + b + extras.reduce((sum, val) => sum + val, 0); }

// Arrow functions inline and multi-line
const multiplyAndFormat = (a, b) => `The product of ${a} and ${b} is ${a * b}, and this is meant to test string interpolation with template literals in a very long single line of JavaScript code that really stretches.`;

// Conditions with inline ternary operators
let conditionResult = numberValue > 100 ? "Number is large enough to be highlighted" : "Number is too small and should also be highlighted differently";

// Standard if/else with blocks
if (arrayValue.length > 5 && booleanValue === true && typeof objectValue === "object") {
    console.log("Array is long, boolean is true, and object is indeed an object — long descriptive logging line for theme showcase purposes that will stretch across your editor window for maximum highlighting variety");
} else {
    console.log("This branch should rarely be taken, but it ensures that else blocks are tested with a long log message that goes across the screen to show how text wrapping and colorization interact in your VS Code theme");
}

// Loops
for (let i = 0; i < arrayValue.length; i++) { console.log(`Loop iteration ${i} with value ${arrayValue[i]} — this long line is to test numeric highlighting, string interpolation, and loop keywords in the same place`); }

// While loop
let counter = 0; while (counter < 3) { console.log(`Counter is at ${counter}, still looping with a very verbose message for highlighting test`); counter++; }

// Try/catch/finally
try { throw new Error("This is a deliberately long error message being thrown to test how exception keywords and error strings look in your theme, including the Error object"); } catch (err) { console.error("Caught an error:", err.message, "with a long catch block string for styling tests"); } finally { console.log("Finally block executed — another long string to test highlighting"); }

// Async/await and Promises
async function fetchData(url) { return new Promise((resolve, reject) => { setTimeout(() => { resolve(`Fetched data from ${url} with a very long descriptive result string to test theme highlighting for async functions, promises, and string interpolation`); }, 1000); }); }
(async () => { let data = await fetchData("https://example.com/some/really/long/api/endpoint"); console.log("Async/Await result:", data); })();

// Class with methods and inheritance
class ThemeTester {
    constructor(name, options = {}) { this.name = name; this.options = options; this.createdAt = new Date(); }
    describe() { return `ThemeTester instance named ${this.name} created at ${this.createdAt.toISOString()} with options: ${JSON.stringify(this.options)} — and this string is intentionally extremely long for line stretching`; }
    static compare(a, b) { return a.name.localeCompare(b.name); }
}
class ExtendedThemeTester extends ThemeTester {
    extraDescribe() { return `${super.describe()} — ExtendedThemeTester adds extra description with another long string to maximize visual highlight coverage in VS Code`; }
}
let tester1 = new ThemeTester("Alpha", { color: "blue", font: "monospace", features: ["contrast", "syntax", "readability"] });
let tester2 = new ExtendedThemeTester("Beta", { color: "green", font: "serif", features: ["spacing", "comments", "long-lines"] });
console.log(tester1.describe());
console.log(tester2.extraDescribe());

// JSON.stringify showcase
let jsonOutput = JSON.stringify(objectValue, null, 4);
console.log("JSON Output:\n", jsonOutput);

// Regex
let regexTest = /^(long|verbose|highlight)[-_]?(line|string|token)+$/gi;
console.log("Regex test result for 'long-line-string-token':", regexTest.test("long-line-string-token"));
