# String Ending Validator 🎯

A JavaScript utility function that determines if a string ends with a specific target substring. This algorithm achieves this without using the native `.endsWith()` method, relying instead on dynamic negative string slicing.

---

## 🧭 How It Works

The function evaluates the ending of a string by measuring the target and slicing backwards from the end of the input string:

1. **Dynamic Measurement:** It calculates the exact character length of the target string using `endstring.length`.
2. **Negative Slicing:** By applying a negative sign (`-`) to that length inside `.slice()`, JavaScript is forced to count backward from the very end of `bgnstring`.
3. **Evaluation:** It extracts that exact trailing chunk and compares it directly to the `endstring`.

---
