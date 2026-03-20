---
id: "1350"
title: "Remove Sub-Folders from the Filesystem"
slug: "remove-sub-folders-from-the-filesystem"
difficulty: "Medium"
tags: ["Array", "String", "Depth-First Search", "Trie"]
language: "c"
date_solved: "2025-07-19"
status: "solved"
submission_id: "1703058526"
---

## Problem

Given a list of folders `folder`, return _the folders after removing all**sub-folders** in those folders_. You may return the answer in **any order**.

If a `folder[i]` is located within another `folder[j]`, it is called a **sub-folder** of it. A sub-folder of `folder[j]` must start with `folder[j]`, followed by a `"/"`. For example, `"/a/b"` is a sub-folder of `"/a"`, but `"/b"` is not a sub-folder of `"/a/b/c"`.

The format of a path is one or more concatenated strings of the form: `'/'` followed by one or more lowercase English letters.

  * For example, `"/leetcode"` and `"/leetcode/problems"` are valid paths while an empty string and `"/"` are not.



 

**Example 1:**
    
    
    **Input:** folder = ["/a","/a/b","/c/d","/c/d/e","/c/f"]
    **Output:** ["/a","/c/d","/c/f"]
    **Explanation:** Folders "/a/b" is a subfolder of "/a" and "/c/d/e" is inside of folder "/c/d" in our filesystem.
    

**Example 2:**
    
    
    **Input:** folder = ["/a","/a/b/c","/a/b/d"]
    **Output:** ["/a"]
    **Explanation:** Folders "/a/b/c" and "/a/b/d" will be removed because they are subfolders of "/a".
    

**Example 3:**
    
    
    **Input:** folder = ["/a/b/c","/a/b/ca","/a/b/d"]
    **Output:** ["/a/b/c","/a/b/ca","/a/b/d"]
    

 

**Constraints:**

  * `1 <= folder.length <= 4 * 104`
  * `2 <= folder[i].length <= 100`
  * `folder[i]` contains only lowercase letters and `'/'`.
  * `folder[i]` always starts with the character `'/'`.
  * Each folder name is **unique**.

## Solution

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int compare(const void *a, const void *b) {
    return strcmp(*(const char **)a, *(const char **)b);
}

char **removeSubfolders(char **folder, int folderSize, int *returnSize) {
    qsort(folder, folderSize, sizeof(char *), compare);
    char **res = (char **)malloc(folderSize * sizeof(char *));
    *returnSize = 0;
    for (int i = 0; i < folderSize; i++) {
        if (*returnSize == 0) {
            res[(*returnSize)++] = folder[i];
        } else {
            char *prev = res[(*returnSize) - 1];
            if (strstr(folder[i], prev) == folder[i] && folder[i][strlen(prev)] == '/') {
                continue;
            } else {
                res[(*returnSize)++] = folder[i];
            }
        }
    }
    return res;
}
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
