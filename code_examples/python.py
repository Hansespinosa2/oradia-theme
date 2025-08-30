# VS Code Theme Showcase - Python Syntax (Wide Lines)

import math, re, sys, random, itertools, functools
from typing import List, Dict, Tuple, Optional, Callable

# ------------------------------
# Variables & Data Types
# ------------------------------
PI, E, GOLDEN_RATIO = 3.14159, 2.71828, 1.61803
greeting, age, is_active, nothing_here, shopping_list = "Hello, World! This is a very long greeting string for testing how the editor theme handles wide text", 25, True, None, ["apples", "bananas", "carrots", "dragonfruit", "elderberries", "figs", "grapefruit"]

print(f"{greeting} -- You are currently {age} years old, active status is {is_active}, favorite fruits are {', '.join(shopping_list)}, and math constants include PI={PI}, E={E}, φ={GOLDEN_RATIO}")
# ------------------------------
# Control Flow
# ------------------------------
if age > 18 and is_active and greeting.startswith("Hello"):
    print(f"You are an adult with age={age}, greeting starts correctly, and shopping_list length={len(shopping_list)} so everything checks out ✅")
elif age == 18 or (not is_active and age < 18):
    print(f"Edge case detected: age={age}, is_active={is_active}, greeting={greeting[:20]}...")
else:
    print(f"You are a minor, age={age}, greeting length={len(greeting)}, shopping_list contains={shopping_list}")

print("VIP Access Granted 🎉" if is_active else "VIP Access Denied ❌")

# ------------------------------
# Loops & Comprehensions
# ------------------------------
for i in range(5): print(f"Iteration {i} => i^2={i**2}, i^3={i**3}, binary={bin(i)}, hex={hex(i)}, factorial={math.factorial(i)}")

[print(f"Item from shopping_list: {item.upper()} with length={len(item)}, reversed={item[::-1]}, vowel_count={sum(1 for c in item if c in 'aeiou')}") for item in shopping_list]

counter = 0
while counter < 3: print(f"While loop run: counter={counter}, double={counter*2}, triple={counter*3}, powers={[counter**n for n in range(1,6)]}"); counter += 1

squares: Dict[int, int] = {x: x**2 for x in range(15)}; print(f"Dictionary comprehension created with {len(squares)} entries, max key={max(squares)}, max value={max(squares.values())}")

# ------------------------------
# Functions
# ------------------------------
def square(x: int) -> int: return x * x + (x - 1) * (x + 1)  # intentional long return

def greet(name: str = "guest") -> str: return f"Hello, {name.title()}! Here is a long interpolated string to test highlighting: PI={PI}, E={E}, φ={GOLDEN_RATIO}, random={random.randint(1,100)}"

print(square(14), greet(), greet("andres"))

# ------------------------------
# Decorators
# ------------------------------
def debug(func: Callable) -> Callable:
    def wrapper(*args, **kwargs): print(f"[DEBUG] Function={func.__name__}, args={args}, kwargs={kwargs}, module={func.__module__}, doc={func.__doc__}"); return func(*args, **kwargs)
    return wrapper

@debug
def add(a: int, b: int) -> int: return a + b + (a * b) - (a // (b if b != 0 else 1))

print(add(12345, 67890))

# ------------------------------
# Classes & Inheritance
# ------------------------------
class Animal:
    def __init__(self, name: str, age: int): self.name, self.age = name, age
    def speak(self): print(f"{self.name} (age={self.age}) makes a sound with hex_age={hex(self.age)}, binary_age={bin(self.age)}, reversed_name={self.name[::-1]}")

class Dog(Animal):
    def speak(self): print(f"{self.name} barks loudly! (uppercase={self.name.upper()}, repeat3={self.name*3})")

dog = Dog("Buddy", 5); dog.speak()

# ------------------------------
# Error Handling
# ------------------------------
try: result = 10 / 0; print(result)
except ZeroDivisionError as e: print(f"Caught ZeroDivisionError! details: {e}, type={type(e)}, args={e.args}, repr={repr(e)}")
finally: print("Finally block executed regardless of exception handling; ensures cleanup and prints long explanatory text to fill line width")

# ------------------------------
# Match / Case (Python 3.10+)
# ------------------------------
match age:
    case x if 0 <= x <= 12: print(f"Case Child: age={x}, squared={x**2}, doubled={x*2}, description={'young'}")
    case x if 13 <= x <= 19: print(f"Case Teen: age={x}, cube={x**3}, modulo5={x%5}, hex={hex(x)}")
    case x if 20 <= x <= 64: print(f"Case Adult: age={x}, factorial={math.factorial(5)}, bin={bin(x)}, octal={oct(x)}")
    case _: print(f"Case Senior: default branch triggered, original age={age}, str_age={str(age)}")

# ------------------------------
# Lambdas, Map, Filter
# ------------------------------
adder = lambda a, b: a + b + (a * 10) - (b // 2); print(f"Lambda result: {adder(123, 456)}, with chained math => {adder(10,20)+adder(30,40)}")
nums = list(range(1,11)); doubled = list(map(lambda x: x * 2 + 1, nums)); evens = list(filter(lambda x: x % 2 == 0, nums))
print(f"nums={nums}, doubled={doubled}, evens={evens}, zipped={list(zip(nums, doubled, evens))}")

# ------------------------------
# Context Managers
# ------------------------------
with open("example.txt", "w") as f: f.write("This is a very long line of text written to the file to demonstrate syntax highlighting for with/open context manager blocks in Python themes.\n")

# ------------------------------
# Regular Expressions
# ------------------------------
text = "Here is a string with an email test@example.com and another one fake_email123@domain.org for regex testing."
if re.search(r"\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b", text, re.I): print(f"Regex found email(s) in text='{text}', matches={re.findall(r'[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}', text)}")
