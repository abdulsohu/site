---
path: "/blog/leetcode/septemberchallenge/2"
date: "Sep 02, 2020"
title: "Leetcode September Challenge, Day 02"
tags: ["programming"]
excerpt: "When fame was acquired briefly."
---

# Day 2

> When fame was acquired briefly.

## `The Question`

<div><p>Given an array of integers, find out whether there are two distinct indices <i>i</i> and <i>j</i> in the array such that the <b>absolute</b> difference between <b>nums[i]</b> and <b>nums[j]</b> is at most <i>t</i> and the <b>absolute</b> difference between <i>i</i> and <i>j</i> is at most <i>k</i>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [1,2,3,1], k = 3, t = 0
<strong>Output:</strong> true
</pre><p><strong>Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [1,0,1,1], k = 1, t = 2
<strong>Output:</strong> true
</pre><p><strong>Example 3:</strong></p>
<pre><strong>Input:</strong> nums = [1,5,9,1,5,9], k = 2, t = 3
<strong>Output:</strong> false
</pre>
<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= nums.length &lt;= 2 * 10<sup>4</sup></code></li>
	<li><code>-2<sup>31</sup> &lt;= nums[i]&nbsp;&lt;= 2<sup>31</sup> - 1</code></li>
	<li><code>0 &lt;= k &lt;= 10<sup>4</sup></code></li>
	<li><code>0 &lt;= t &lt;= 2<sup>31</sup> - 1</code></li>
</ul>
</div>

<br/>

## `The Process`

Note a few ideas that will help you understand this problem and make the optimal time complexity approach easier for you:

- Consider the edge cases. What are the edge cases? What happens when the array is empty, singleton etc. And what about when `k` is 0? Consider edge cases that you know are unlikely to be included in a general solution, and take care of those cases right away.
- Then, you understand that for any element `x` in `nums`, you're actually looking for its partner. This partner element is at most `k` hops away from `x`, and doesn't differ from `x` by more than `t`.
- So, if you happen to have `k` elements in your hand, and look at a `(k + 1)th` element, you ask "does this `(k + 1)th` guy find a partner in the `k` I'm already holding on to?"
  If not, well guess what? The oldest element in the `k` ones you have can no more find its partner so you can get rid of it and let `(k + 1)th` guy get in.
- For an example, let's consider the first one given i.e. `nums = [1,2,3,1] | k = 3 | t = 0`.
- Now, you're holding on to the first `k` elements i.e. `[1,2,3]`. Your supposed loop considers the next element i.e. `[..., 1]`. Now if this `1` has a partner in `[1,2,3]`, great, we're done. But if not, then there's no problem in throwing the first `[1...]`, because well, all the elements you see now are going to be more than `k` hops away from him. So you end up with `[2,3,1]`.
- That was the basic processing idea.
- Finally, you understand that upon processing each element `x`, if the largest number smaller than `x` or the smallest number greater than `x`, in the `k` elements you already have, produce something bounded by `t`, you have an answer.
- Now it's your turn to research what data structure can hold onto elements such that it can yeild a ceiling/floor relative to some number efficiently (clearly it will have to keep its elements in a sorted manner...)
- (P.S. think a bit about why ceiling/floor and not just max/min)

<br/>

## `The Code`

```java
    public boolean containsNearbyAlmostDuplicate(int[] nums, int k, int t) {
        int len = nums.length;

        // return false when given parameters makes two distinct indices impossible
        if (len <= 1 || k <= 0) {
            return false;
        }

        /**
        * Important, question definition:
        *   Absolute diff between nums[i] and nums[j] <= t
        *   Absolute diff between indices i and j <= k
        **/

        TreeSet<Long> set = new TreeSet();
        for (int i = 0; i < nums.length; i++) {
            Long number = new Long(nums[i]);
            Long ceil = set.ceiling(number);
            Long floor = set.floor(number);

            if (ceil != null && ceil - number <= t) {
                return true;
            }

            if (floor != null && number - floor <= t) {
                return true;
            }

            set.add(number);
            if (set.size() > k) {
                Long oldest = new Long(nums[i - k]);
                set.remove(oldest);
            }
        }

        return false;
    }
```

## `The Fame`

For some reason, my explanation for this question reached a lot of people (~1.7K), and got me my first earned _Reputation_ stars. Check out my [proof](https://leetcode.com/discuss/explore/september-leetcoding-challenge/825726/contains-duplicate-iii-best-theoretical-time-complexity-java) of brief fame on Leetcode!
