---
id: "166"
title: "Fraction to Recurring Decimal"
slug: "fraction-to-recurring-decimal"
difficulty: "Medium"
tags: ["Hash Table", "Math", "String"]
language: "cpp"
date_solved: "2025-09-24"
status: "solved"
submission_id: "1781229527"
---

## Problem

Given two integers representing the `numerator` and `denominator` of a fraction, return _the fraction in string format_.

If the fractional part is repeating, enclose the repeating part in parentheses

If multiple answers are possible, return **any of them**.

It is **guaranteed** that the length of the answer string is less than `104` for all the given inputs.

**Note** that if the fraction can be represented as a _finite length string_ , you **must** return it.

 

**Example 1:**
    
    
    **Input:** numerator = 1, denominator = 2
    **Output:** "0.5"
    

**Example 2:**
    
    
    **Input:** numerator = 2, denominator = 1
    **Output:** "2"
    

**Example 3:**
    
    
    **Input:** numerator = 4, denominator = 333
    **Output:** "0.(012)"
    

 

**Constraints:**

  * `-231 <= numerator, denominator <= 231 - 1`
  * `denominator != 0`

## Solution

```cpp
class Solution {
public:
    std::string fractionToDecimal(int numerator, int denominator) {
        if (numerator == 0)
            return "0";        

        std::string fraction;
        if ((numerator < 0) ^ (denominator < 0))
            fraction += "-";        

        long long dividend = std::llabs((long long)numerator);
        long long divisor = std::llabs((long long)denominator);
        fraction += std::to_string(dividend / divisor);
        long long remainder = dividend % divisor;
        if (remainder == 0) {
            return fraction;
        }

        fraction += ".";
        std::unordered_map<long long, int> map;
        while (remainder != 0) {
            if (map.count(remainder)) {
                fraction.insert(map[remainder], "(");
                fraction += ")";
                break;
            }
            map[remainder] = fraction.size();
            remainder *= 10;
            fraction += std::to_string(remainder / divisor);
            remainder %= divisor;
        }

        return fraction;
    }
};
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
