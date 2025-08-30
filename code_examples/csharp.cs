using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ThemeTest
{
    public class Program
    {
        public static async Task Main(string[] args)
        {
            Console.WriteLine("Theme Test Start: Demonstrating C# syntax variety including async calls, LINQ, generics, exception handling, string interpolation, and ternary operators all on long lines to stretch across the screen width.");

            var numbers = new List<int> { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
            var evenSquares = numbers.Where(n => n % 2 == 0).Select(n => n * n).ToList();
            Console.WriteLine($"Even Squares: {string.Join(", ", evenSquares)} --- This demonstrates LINQ queries with lambda expressions and string interpolation in one long single line of code for visual highlighting in themes.");

            try
            {
                var riskyDivision = numbers.Select(n => 100 / (n - 5)).ToList();
                Console.WriteLine($"Risky Division: {string.Join(", ", riskyDivision)} --- Watch how division by zero is caught in exception handling syntax and highlighted by the theme properly.");
            }
            catch (DivideByZeroException ex)
            {
                Console.WriteLine($"Caught Exception: {ex.Message} --- This demonstrates try/catch blocks, exception object properties, and inline string interpolation all on one extended line of code.");
            }

            var inlineCondition = numbers.Sum() > 30 ? "Sum is greater than 30" : "Sum is 30 or less";
            Console.WriteLine($"Inline Condition Result: {inlineCondition} --- Demonstrates ternary operator with a long string output to test highlighting.");

            var dict = new Dictionary<string, int> { ["Apples"] = 10, ["Bananas"] = 20, ["Cherries"] = 30 };
            foreach (var kvp in dict)
            {
                Console.WriteLine($"Key: {kvp.Key}, Value: {kvp.Value}, Double Value: {kvp.Value * 2}, Value Description: {(kvp.Value > 15 ? "High" : "Low")} --- Demonstrates foreach loop with dictionary iteration, inline ternary operator, arithmetic, and long formatted strings.");
            }

            await PerformAsyncOperation("AsyncExample", 5);

            Console.WriteLine($"Theme Test Complete: The code above has demonstrated classes, methods, loops, conditions, inline conditions, exception handling, async/await, LINQ, dictionary iteration, and more --- everything in long lines to ensure maximum screen filling for theme testing in VS Code.");
        }

        public static async Task PerformAsyncOperation(string name, int count)
        {
            Console.WriteLine($"Starting async operation with name={name} and count={count} --- Shows async/await syntax, method parameters, string interpolation, and long code lines.");
            await Task.Delay(500);
            Console.WriteLine($"Completed async operation with name={name} and count={count}, where count squared is {count * count}, and count cubed is {count * count * count}, and double count is {count * 2} --- Extended output to fully test theme styling with async methods.");
        }
    }
}
