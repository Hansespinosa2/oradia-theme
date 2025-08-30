# VS Code Theme Showcase - Ruby Syntax

# ------------------------------
# Constants, Variables & Data Types
# ------------------------------
PI = 3.14159
greeting = "Hello, World!"
age = 25
is_active = true
nothing_here = nil
shopping_list = [:apples, :bananas, :carrots]

# String interpolation
puts "#{greeting} You are #{age} years old."

# ------------------------------
# Control Flow
# ------------------------------
if age > 18
  puts "You are an adult."
elsif age == 18
  puts "Just turned adult!"
else
  puts "You are a minor."
end

# Inline condition
puts "VIP Access" if is_active

# Unless example
puts "Not active!" unless is_active

# ------------------------------
# Loops & Iterators
# ------------------------------
5.times do |i|
  puts "Iteration #{i}"
end

shopping_list.each do |item|
  puts "Item: #{item.capitalize}"
end

for num in (1..3)
  puts "For loop number: #{num}"
end

# While loop
counter = 0
while counter < 3
  puts "Counter: #{counter}"
  counter += 1
end

# ------------------------------
# Methods
# ------------------------------
def square(x)
  return x * x
end

def greet(name = "Guest")
  "Hello, #{name.capitalize}!"
end

puts square(4)
puts greet
puts greet("andres")

# ------------------------------
# Classes & Modules
# ------------------------------
module MathHelpers
  def self.factorial(n)
    return 1 if n <= 1
    n * factorial(n - 1)
  end
end

class Animal
  attr_accessor :name, :age

  def initialize(name, age)
    @name = name
    @age = age
  end

  def speak
    puts "#{@name} makes a sound."
  end
end

class Dog < Animal
  def speak
    puts "#{@name} barks!"
  end
end

dog = Dog.new("Buddy", 5)
dog.speak
puts "Factorial of 5: #{MathHelpers.factorial(5)}"

# ------------------------------
# Error Handling
# ------------------------------
begin
  result = 10 / 0
rescue ZeroDivisionError => e
  puts "Caught an error: #{e.message}"
ensure
  puts "This always runs."
end

# ------------------------------
# Case / When
# ------------------------------
case age
when 0..12
  puts "Child"
when 13..19
  puts "Teen"
when 20..64
  puts "Adult"
else
  puts "Senior"
end

# ------------------------------
# Lambda / Proc
# ------------------------------
adder = ->(a, b) { a + b }
puts "Lambda result: #{adder.call(3, 4)}"

my_proc = Proc.new { |x| puts "Proc called with #{x}" }
my_proc.call("data")

# ------------------------------
# Regular Expressions
# ------------------------------
text = "Email me at test@example.com"
if text =~ /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i
  puts "Found an email!"
end
