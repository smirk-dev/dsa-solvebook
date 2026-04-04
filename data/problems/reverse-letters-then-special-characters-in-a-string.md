---
id: "4200"
title: "Reverse Letters Then Special Characters in a String"
slug: "reverse-letters-then-special-characters-in-a-string"
difficulty: "Easy"
tags: ["Two Pointers", "String", "Simulation"]
language: "java"
date_solved: "2026-04-01"
status: "solved"
submission_id: "1965516528"
---

## Problem

You are given a string `s` consisting of lowercase English letters and special characters.

Your task is to perform these **in order** :

  * **Reverse** the **lowercase letters** and place them back into the positions originally occupied by letters.
  * **Reverse** the **special characters** and place them back into the positions originally occupied by special characters.



Return the resulting string after performing the reversals.

 

**Example 1:**

**Input:** s = ")ebc#da@f("

**Output:** "(fad@cb#e)"

**Explanation:**

  * The letters in the string are `['e', 'b', 'c', 'd', 'a', 'f']`: 
    * Reversing them gives `['f', 'a', 'd', 'c', 'b', 'e']`
    * `s` becomes `")fad#cb@e("`
  * ​​​​​​​The special characters in the string are `[')', '#', '@', '(']`: 
    * Reversing them gives `['(', '@', '#', ')']`
    * `s` becomes `"(fad@cb#e)"`



**Example 2:**

**Input:** s = "z"

**Output:** "z"

**Explanation:**

The string contains only one letter, and reversing it does not change the string. There are no special characters.

**Example 3:**

**Input:** s = "!@#$%^&*()"

**Output:** ")(*&^%$#@!"

**Explanation:**

The string contains no letters. The string contains all special characters, so reversing the special characters reverses the whole string.

 

**Constraints:**

  * `1 <= s.length <= 100`
  * `s` consists only of lowercase English letters and the special characters in `"!@#$%^&*()"`.

## Solution

```java
class Solution {
    public String reverseByType(String s) {

        Stack<Character> l = new Stack<>();
        Stack<Character> c = new Stack<>();

        // Step 1: store characters
        for(char ch : s.toCharArray()){
            if(Character.isLetter(ch)){
                l.push(ch);
            }else{
                c.push(ch);
            }
        }   

        StringBuilder sb = new StringBuilder();

        // Step 2: rebuild string
        for(char ch : s.toCharArray()){
            if(Character.isLetter(ch)){
                sb.append(l.pop());
            }else{
                sb.append(c.pop());
            }
        }

        return sb.toString();
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
