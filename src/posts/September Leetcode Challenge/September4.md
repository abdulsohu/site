---
path: "/blog/leetcode/septemberchallenge/4"
date: "Sep 04, 2020"
title: "Leetcode September Challenge, Day 04"
tags: ["programming"]
excerpt: "Keeping track is an art, and I'm no artist."
---

# Day 4

> Keeping track is an art, and I'm no artist.

## `The Question`

<div><p>A string <code>S</code> of lowercase English letters is given. We want to partition this string into as many parts as possible so that each letter appears in at most one part, and return a list of integers representing the size of these parts.</p>

<p>&nbsp;</p>

<p><b>Example 1:</b></p>

<pre><b>Input:</b> S = "ababcbacadefegdehijhklij"
<b>Output:</b> [9,7,8]
<b>Explanation:</b>
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.
</pre>

<p>&nbsp;</p>

<p><b>Note:</b></p>

<ul>
	<li><code>S</code> will have length in range <code>[1, 500]</code>.</li>
	<li><code>S</code> will consist of lowercase English&nbsp;letters (<code>'a'</code> to <code>'z'</code>) only.</li>
</ul>

<p>&nbsp;</p>
</div>

<br/>

## `The Process`

Note:
My calculation of time complexity on this, is in no way, rigorous. A rigorous time complexity analysis is welcome, and so are more efficient solutions/improvements, although `O(n)` lower-bounds all solutions' runtime ( `n` being the number of characters in `S`), simply because you have to see all the characters at least once .

**Algorithm**

- We first realize that it is going to be super essential to find the last index of any character. In essence, because once we see any character, we need to make sure that its last occurence is seen and captured, since any character has to be contained in one partition and can't exist in multiple partitions.
- Since we know getting the last index of a character is crucial to an algorithm, we start looking into ways of doing so. Obviously, one straightforward way of doing so is to start at the string's end and go backward. The first time we find the character has to be the last occurence of it, since we started from backward. However, there is slight problem with using this approach.
- The problem of course lies with the fact that between a character's first and last occurence, exist multiple other characters. So, we need to make sure that we include all of those characters' last occurences in the running segment/partition as well, otherwise we don't satisfy the question's constraints. So if we were to find the last occurences of those 'additional' characters using the looping-from-the-back approach, it'd cost us a lot of precious time.
- But then, the question lets us know that the string only contains lower case english alphabets, and this hints towards creating an array to store the last index of all the 26 characters, for `O(1)` access. What would be an efficient way to do this? Do we just call the .lastIndexOf() for each character? Think again. If I were to run a loop through the string, and everytime I see a character, store that index as its last index, would that end up saving the last indices' information for all of `S`'s characters? Why or why not? The answer is it would, and proof of correctness here is left to the reader.
- Great! You've solved oe part of the problem. But how do we actually use the lastIndex array to get segment information etc..? While it would be easy indeed to state the exact process, a few hints should help you reach the answer yourself.
  _ Hint 1: you should start at a character, and using the last index array, want to go up until the stopping point i.e. last index of this character.
  _ Hint 2: for every character you find on your way to the stopping point, you ask them if their last occurence is further beyond your current stopping point? No? Okay great, I continue to move. Yes? Well, I gotta go up until this new stopping point because the new character is a part of the current partition! \* Hint 3: Phew! Done with one partition. Do you know where to start next?

**Time Complexity**
Assume `n` to be the number of characters in input string `S`.

The only bit of visibly expensive calculations exist in the creation of last index array, and the main algorithm. Note that the former simply loops over every character in the string to do a realtively O(1) calculation, so that is `O(n)`. And for the main algorithm, it is easy to see that the main loop does run for `n` times, but only if all the letters are distinct (otherwise it skips over to start of the next parition). Therefore, the real cost comes from the while loop, which only ends after a partition has been covered. Since all the partitions sum up to `n`, we know that this loop never runs for `> O(n)` for all its runs combined. Hence overall, the solution is `O(n)`.

<br/>

## `The Code`

```java
public static List<Integer> partitionLabels(String S) {
      List<Integer> res = new ArrayList<>();

      // If first + last character are same, more than 1 partition isn't possible.
      if (S.charAt(S.length() - 1) == S.charAt(0)) {
         res.add(S.length());
         return res;
      }

      char[] arr = S.toCharArray();
      int[] lastIndex = new int[26];

      // Calculate last index of every letter in S:
      for (int i = 0; i < S.length(); i++) {
         lastIndex[arr[i] - 'a'] = i;
      }

      // The main algorithm:
      for (int i = 0; i < S.length(); i++) {
         int partitionSize = 0;

         char curr = S.charAt(i);
         int stoppingPoint = lastIndex[curr - 'a'];
         int pointer = i;

         while (pointer  <= stoppingPoint) {
            partitionSize++;
            char currCharacter = S.charAt(pointer);
            if (lastIndex[currCharacter - 'a'] > stoppingPoint) {
               stoppingPoint = lastIndex[currCharacter - 'a'];
            }
            pointer++;
         }

         res.add(partitionSize);
         i += partitionSize - 1;
      }

      return res;
   }
```
