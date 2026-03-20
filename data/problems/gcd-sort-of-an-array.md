---
id: "2125"
title: "GCD Sort of an Array"
slug: "gcd-sort-of-an-array"
difficulty: "Hard"
tags: ["Array", "Math", "Union-Find", "Sorting", "Number Theory"]
language: "java"
date_solved: "2026-03-17"
status: "solved"
submission_id: "1951122729"
---

## Problem

You are given an integer array `nums`, and you can perform the following operation **any** number of times on `nums`:

  * Swap the positions of two elements `nums[i]` and `nums[j]` if `gcd(nums[i], nums[j]) > 1` where `gcd(nums[i], nums[j])` is the **greatest common divisor** of `nums[i]` and `nums[j]`.



Return `true` _if it is possible to sort_`nums` _in**non-decreasing** order using the above swap method, or _`false` _otherwise._

 

**Example 1:**
    
    
    **Input:** nums = [7,21,3]
    **Output:** true
    **Explanation:** We can sort [7,21,3] by performing the following operations:
    - Swap 7 and 21 because gcd(7,21) = 7. nums = [_**21**_ ,_**7**_ ,3]
    - Swap 21 and 3 because gcd(21,3) = 3. nums = [_**3**_ ,7,_**21**_]
    

**Example 2:**
    
    
    **Input:** nums = [5,2,6,2]
    **Output:** false
    **Explanation:** It is impossible to sort the array because 5 cannot be swapped with any other element.
    

**Example 3:**
    
    
    **Input:** nums = [10,5,9,3,15]
    **Output:** true
    We can sort [10,5,9,3,15] by performing the following operations:
    - Swap 10 and 15 because gcd(10,15) = 5. nums = [_**15**_ ,5,9,3,_**10**_]
    - Swap 15 and 3 because gcd(15,3) = 3. nums = [_**3**_ ,5,9,_**15**_ ,10]
    - Swap 10 and 15 because gcd(10,15) = 5. nums = [3,5,9,_**10**_ ,_**15**_]
    

 

**Constraints:**

  * `1 <= nums.length <= 3 * 104`
  * `2 <= nums[i] <= 105`

## Solution

```java
class Solution {
    public boolean gcdSort(int[] nums) {
        int n = nums.length;

        // Map prime factor -> list of indices
        Map<Integer, List<Integer>> primeToIndices = new HashMap<>();

        for (int i = 0; i < n; i++) {
            Set<Integer> primes = getPrimeFactors(nums[i]);
            for (int p : primes) {
                primeToIndices
                    .computeIfAbsent(p, k -> new ArrayList<>())
                    .add(i);
            }
        }

        // Build adjacency list
        List<Integer>[] adj = new ArrayList[n];
        for (int i = 0; i < n; i++) adj[i] = new ArrayList<>();

        for (List<Integer> list : primeToIndices.values()) {
            for (int i = 0; i < list.size() - 1; i++) {
                int u = list.get(i);
                int v = list.get(i + 1);
                adj[u].add(v);
                adj[v].add(u);
            }
        }

        boolean[] visited = new boolean[n];
        int[] sorted = nums.clone();
        Arrays.sort(sorted);

        for (int i = 0; i < n; i++) {
            if (!visited[i]) {
                List<Integer> component = new ArrayList<>();
                dfs(i, adj, visited, component);

                List<Integer> original = new ArrayList<>();
                List<Integer> target = new ArrayList<>();

                for (int idx : component) {
                    original.add(nums[idx]);
                    target.add(sorted[idx]);
                }

                Collections.sort(original);
                Collections.sort(target);

                if (!original.equals(target)) return false;
            }
        }

        return true;
    }

    private void dfs(int node, List<Integer>[] adj,
                     boolean[] visited, List<Integer> comp) {
        visited[node] = true;
        comp.add(node);

        for (int nei : adj[node]) {
            if (!visited[nei]) dfs(nei, adj, visited, comp);
        }
    }

    private Set<Integer> getPrimeFactors(int n) {
        Set<Integer> primes = new HashSet<>();

        for (int i = 2; i * i <= n; i++) {
            if (n % i == 0) {
                primes.add(i);
                while (n % i == 0) n /= i;
            }
        }

        if (n > 1) primes.add(n);

        return primes;
    }
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
