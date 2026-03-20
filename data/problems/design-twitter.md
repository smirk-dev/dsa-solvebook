---
id: "355"
title: "Design Twitter"
slug: "design-twitter"
difficulty: "Medium"
tags: ["Hash Table", "Linked List", "Design", "Heap (Priority Queue)"]
language: "python3"
date_solved: "2025-11-15"
status: "solved"
submission_id: "1830292890"
---

## Problem

Design a simplified version of Twitter where users can post tweets, follow/unfollow another user, and is able to see the `10` most recent tweets in the user's news feed.

Implement the `Twitter` class:

  * `Twitter()` Initializes your twitter object.
  * `void postTweet(int userId, int tweetId)` Composes a new tweet with ID `tweetId` by the user `userId`. Each call to this function will be made with a unique `tweetId`.
  * `List<Integer> getNewsFeed(int userId)` Retrieves the `10` most recent tweet IDs in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user themself. Tweets must be **ordered from most recent to least recent**.
  * `void follow(int followerId, int followeeId)` The user with ID `followerId` started following the user with ID `followeeId`.
  * `void unfollow(int followerId, int followeeId)` The user with ID `followerId` started unfollowing the user with ID `followeeId`.



 

**Example 1:**
    
    
    **Input**
    ["Twitter", "postTweet", "getNewsFeed", "follow", "postTweet", "getNewsFeed", "unfollow", "getNewsFeed"]
    [[], [1, 5], [1], [1, 2], [2, 6], [1], [1, 2], [1]]
    **Output**
    [null, null, [5], null, null, [6, 5], null, [5]]
    
    **Explanation**
    Twitter twitter = new Twitter();
    twitter.postTweet(1, 5); // User 1 posts a new tweet (id = 5).
    twitter.getNewsFeed(1);  // User 1's news feed should return a list with 1 tweet id -> [5]. return [5]
    twitter.follow(1, 2);    // User 1 follows user 2.
    twitter.postTweet(2, 6); // User 2 posts a new tweet (id = 6).
    twitter.getNewsFeed(1);  // User 1's news feed should return a list with 2 tweet ids -> [6, 5]. Tweet id 6 should precede tweet id 5 because it is posted after tweet id 5.
    twitter.unfollow(1, 2);  // User 1 unfollows user 2.
    twitter.getNewsFeed(1);  // User 1's news feed should return a list with 1 tweet id -> [5], since user 1 is no longer following user 2.
    

 

**Constraints:**

  * `1 <= userId, followerId, followeeId <= 500`
  * `0 <= tweetId <= 104`
  * All the tweets have **unique** IDs.
  * At most `3 * 104` calls will be made to `postTweet`, `getNewsFeed`, `follow`, and `unfollow`.
  * A user cannot follow himself.

## Solution

```python
from collections import defaultdict, deque
import heapq

class Twitter:
    def __init__(self):
        self.time = 0  # Each tweet gets a timestamp for sorting
        self.tweets = defaultdict(deque)  # userId -> deque of (time, tweetId)
        self.following = defaultdict(set)  # userId -> set of followeeIds

    def postTweet(self, userId: int, tweetId: int) -> None:
        self.tweets[userId].appendleft((self.time, tweetId))
        self.time += 1

    def getNewsFeed(self, userId: int) -> list:
        # Collect tweets from self + everyone followed
        result = []
        users = self.following[userId] | {userId}
        minheap = []

        for uid in users:
            for tweet in list(self.tweets[uid])[:10]:
                heapq.heappush(minheap, tweet)
                if len(minheap) > 10:
                    heapq.heappop(minheap)
        # Sort by time descending and extract tweet IDs
        return [tweetId for _, tweetId in sorted(minheap, reverse=True)]

    def follow(self, followerId: int, followeeId: int) -> None:
        if followerId != followeeId:
            self.following[followerId].add(followeeId)

    def unfollow(self, followerId: int, followeeId: int) -> None:
        self.following[followerId].discard(followeeId)
```

## Editorial

_Add your notes here — why did you choose this approach? What's the time/space complexity?_
