---
path: "/blog/leetcode/septemberchallenge/3"
date: "Sep 03, 2020"
title: "Leetcode September Challenge, Day 03"
tags: ["programming"]
excerpt: "Logic beats thoughts when thoughts aren't logical."
---

# Day 3

> Logic beats thoughts when thoughts aren't logical.

## `The Question`

<div><p>Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.</p>

<p>&nbsp;</p>

<p><b>Example 1:</b></p>

<pre><b>Input:</b> "abab"
<b>Output:</b> True
<b>Explanation:</b> It's the substring "ab" twice.
</pre>

<p><b>Example 2:</b></p>

<pre><b>Input:</b> "aba"
<b>Output:</b> False
</pre>

<p><b>Example 3:</b></p>

<pre><b>Input:</b> "abcabcabcabc"
<b>Output:</b> True
<b>Explanation:</b> It's the substring "abc" four times. (And the substring "abcabc" twice.)
</pre>
</div>

<br/>

## `The Process`

**Note:**
My calculation of time complexity on this, is in no way, rigorous. For what it matters, this solution isn't brute forced, and doesn't compromise understandability and brevity. Since the solution beat 96% of the rest, I judge that it is sound. A rigorous time complexity analysis is welcome, and so are more efficient solutions/improvements.

**Algorithm:**

- Note that it is very important to not misunderstand what the questions asks of us. When it comes to questions dealing with strings and substrings, we can often confuse ourselves with the notion that the string is a substring of itself. So, let's first remove any causes for confusion by making an important clarification.
- _Clarification_: as long as you're not appending the original string to the empty string, and only choosing a substring within `s`, you're on the right track. To further explain, if the original string `s` is a set of characters, you're only picking a proper contiguous subset in it (i.e. fully contained within `s`).
- Something that almost jumps out at us is the need for verification. Say you have a suspect substring `trial` in hand. You want to verify whether this substring `trial` can indeed be repeated a certain number of times to result into `s` (the original string). How would you verify this? Before reading further, imagine there exists a function '`public boolean check(String trial, String original)`' whose job is this exact verification. Think about how you can make this function efficient, and accurate. This function is your best friend.
- You may raise the point that verification might not be necessary, and you would be correct... for input strings of certain lengths.
- Now that we've moved on to discussing input strings of certain lengths, the first step, as always, is coming up with crucial test cases. And thinking of test cases is a job undone if you don't account for edge cases. What should the verdict be if an empty string is passed? What about a string containing just one character?
- You're done thinking of edge cases, and test cases. You have some ideas, and you want to write code. As you write code, you're stuck in places, and you need an out. But before you read the answer, consider a few ideas:
  _ If you can find the substring you're looking for, you return true. Otherwise, the loop that is running in your function ends, and you return false. That makes sense, simple enough.
  _ But what would this loop do? How would it spot the substring that you're _potentially_ looking for?
  _ Note that the substring you want, if it really is the answer, would end at the last letter of the original string. So, for example, if `s = "abcabc"`, the substring would be `'abc'`. Notice how the first and last characters of the substring match the first and last characters of the original string. If this wasn't the case, we know that the function oughta return `false`.
  _ So now you know what characters does the substring end and start at. So, easy right? You just go ahead and find all substrings that match this description, and try them all out!
  _ Woah woah woah, hold on. That doesn't make sense. I mean, it does, but consider a string like `"accacaccacaccac"`. There's way too many substrings here that start with 'a' and end at 'c', and I'm sure there are way more similar devious examples that'll destroy the notion of efficiency.
  _ So, you start thinking a bit more and you notice that if there is such a substring in `s`, there's no reason to go deep into the woods. In other words, going left to right and holding the first character constant, you can just stop every time you see the last character and check if the substring so far works.
  _ So it looks something like this:
  _ You're given `"accacaccacaccac"`. You start at `a` and stop `c` because 'c' is the stopping point. Is `ac` the answer? You verify and it's not. You move on to the next character, and it's also a `c`. Is `acc` the answer? You verify and it's not. You move on, until you find the next `c`... Is `accac` the answer? Yup!
  _ Wait here. Before you read on, can you think of an idea that allows us to verify selectively?
  _ You realize that not every `c` you find has to be verified because if the substring length doesn't perfectly divide the length of original string, then you can just move on! Nothing to consider there! [Minor improvement] \* You then think what about a string `"bb"`. You want your program to consider strings like this as well. Well easy! Every string length is divisible by 1 so you start by considering the first character as a substring as well (and hence start at 0)!
- You're done.

**Time Complexity**
Note that the program terminates as soon as it verifies a substring that matches the requirement. Again, it is observable that any matching substring cannote be greater than `n/2` in length, where `n` is the number of characters in `s`, the original string. Then, because of our minor improvement, we only verify a substring if it's length is a potential candidate for repetition, and roughly, there are `log(n)` such substrings within the `<=n/2` bracket we've specified. Hence, this algorithm, call it `A`, is bounded as follows: `O(n) <= A <= O(n*lg(n))`.

<br/>

## `The Code`

```java
    public boolean repeatedSubstringPattern(String s) {
        //Tackle the edge cases first
        if (s.isEmpty() || s.length() == 1) {
            return false;
        }

        char last = s.charAt(s.length() - 1);
        for (int i = 0; i < s.length() - 1; i++) {
            if (s.charAt(i) == last && (s.length() % (i + 1) == 0)) {
                String trial = s.substring(0, i + 1);
                if (check(trial, s)) {
                    return true;
                }
            }
        }

        return false;
    }


    /**
    * Function validates whether a provided substring 'trial'
    * can be repeated x amount of times to form the string 'original'.
    **/
    public boolean check(String trial, String original) {
        int repetitions = original.length() / trial.length();
        StringBuffer sb = new StringBuffer();
        for (int i = 0; i < repetitions; i++) {
            sb.append(trial);
        }
        return sb.toString().equals(original);
    }
```
