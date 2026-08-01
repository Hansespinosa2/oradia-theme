// LOOK AT: intentional errors — squiggle + Problems panel + status bar should all use
// the SAME red = error / amber = warn vocabulary. (Install "Error Lens" to also see the
// message inline at end of line.)
const total: number = "not a number"; // error: string not assignable to number

function greet(name: string): string {
  return "hi " + nam;                  // error: `nam` is not defined (typo)
}

let unused = 42;                        // warning (if noUnusedLocals): declared but never read

greet(123);                             // error: number not assignable to string
