---
id: "1813"
title: "Maximum Erasure Value"
slug: "maximum-erasure-value"
difficulty: "Medium"
tags: ["Array", "Hash Table", "Sliding Window"]
language: "c"
date_solved: "2025-07-22"
status: "solved"
submission_id: "1706761121"
---

## Problem

You are given an array of positive integers `nums` and want to erase a subarray containing **unique elements**. The **score** you get by erasing the subarray is equal to the **sum** of its elements.

Return _the**maximum score** you can get by erasing **exactly one** subarray._

An array `b` is called to be a subarray of `a` if it forms a contiguous subsequence of `a`, that is, if it is equal to `a[l],a[l+1],...,a[r]` for some `(l,r)`.

 

**Example 1:**
    
    
    **Input:** nums = [4,2,4,5,6]
    **Output:** 17
    **Explanation:** The optimal subarray here is [2,4,5,6].
    

**Example 2:**
    
    
    **Input:** nums = [5,2,1,2,5,2,1,2,5]
    **Output:** 8
    **Explanation:** The optimal subarray here is [5,2,1] or [1,2,5].
    

 

**Constraints:**

  * `1 <= nums.length <= 105`
  * `1 <= nums[i] <= 104`

## Solution

```c
struct IndexHash {
  int value;
  int index;
  UT_hash_handle hh;
};

int maximumUniqueSubarray(int* nums, int numsSize) {
  struct IndexHash* table = NULL;
  int ret = 0;
  int start = 0;
  int sum = 0;
  struct IndexHash* entry;
  for (int i = 0; i < numsSize; ++i) {
    HASH_FIND_INT(table, &nums[i], entry);
    if (!entry) /* First time this number has been seen */ {
      entry = (struct IndexHash*) malloc(sizeof(struct IndexHash));
      entry->value = nums[i];
      HASH_ADD_INT(table, value, entry);
    } else /* Number has repeated */ {
      if (sum > ret) {
        ret = sum;
      }
      while (start <= entry->index) {
        sum -= nums[start++];
      }
    }
    entry->index = i;
    sum += nums[i];
  }
  
  /* Clean up hashtable */
  struct IndexHash* tmp;
  HASH_ITER(hh, table, entry, tmp) {
    HASH_DEL(table, entry);
    free(entry);
  }  
  
  return (sum > ret) ? sum : ret;
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
