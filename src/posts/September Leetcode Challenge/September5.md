---
path: "/blog/leetcode/septemberchallenge/5"
date: "Sep 05, 2020"
title: "Leetcode September Challenge, Day 05"
tags: ["programming"]
excerpt: "A tree question that I knew."
---

# Day 5

> A tree question that I knew.

## `The Question`

<div><p>Given two binary search trees <code>root1</code> and <code>root2</code>.</p>

<p>Return a list containing <em>all the integers</em> from <em>both trees</em> sorted in <strong>ascending</strong> order.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2019/12/18/q2-e1.png" style="width: 457px; height: 207px;">
<pre><strong>Input:</strong> root1 = [2,1,4], root2 = [1,0,3]
<strong>Output:</strong> [0,1,1,2,3,4]
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> root1 = [0,-10,10], root2 = [5,1,7,0,2]
<strong>Output:</strong> [-10,0,0,1,2,5,7,10]
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> root1 = [], root2 = [5,1,7,0,2]
<strong>Output:</strong> [0,1,2,5,7]
</pre>

<p><strong>Example 4:</strong></p>

<pre><strong>Input:</strong> root1 = [0,-10,10], root2 = []
<strong>Output:</strong> [-10,0,10]
</pre>

<p><strong>Example 5:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2019/12/18/q2-e5-.png" style="width: 352px; height: 197px;">
<pre><strong>Input:</strong> root1 = [1,null,8], root2 = [8,1]
<strong>Output:</strong> [1,1,8,8]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>Each tree has at most <code>5000</code> nodes.</li>
	<li>Each node's value is between <code>[-10^5, 10^5]</code>.</li>
</ul>
</div>

<br/>

## `The Process`

Note:
My calculation of time complexity on this, is in no way, rigorous. A rigorous time complexity analysis is welcome, and so are more efficient solutions/improvements, although `O(n1 + n2)` lower-bounds all solutions' runtime ( `n1, n2` being the number of elements in in `root1, root2`), respectively. This is simply because you can't do better, and at the very least, will have to visit each element.

**Algorithm**

- The ideas here are pretty simple. However, before reading on, I recommend that you look up [inorder traversal](https://www.google.com/search?q=inorder+traversal&rlz=1C5CHFA_enUS764US764&oq=inorder+tra&aqs=chrome.0.0l2j69i57j0l5.2063j1j9&sourceid=chrome&ie=UTF-8) and also solve the problem of [merging two sorted lists](https://www.google.com/search?rlz=1C5CHFA_enUS764US764&sxsrf=ALeKk01B7hssUh8W9Br5FG2QkwW0n47fMg%3A1599363953911&ei=cVtUX4yeN4qlytMPgcCBuAs&q=merge+two+sorted+lists&oq=merge&gs_lcp=CgZwc3ktYWIQAxgAMgQIIxAnMgQIIxAnMgcIABCxAxBDMgQIABBDMgQIABBDMgIIADIECAAQQzIECAAQQzIFCAAQsQMyBQguELEDOgQIABBHOggILhCxAxCDAToLCC4QsQMQxwEQowI6CAguEMcBEKMCUOC2Dljiug5gusMOaABwAXgAgAFUiAGBA5IBATWYAQCgAQGqAQdnd3Mtd2l6wAEB&sclient=psy-ab). Read on only after you still have no idea on how to go about approaching this question.
- Note that you know the trees provided to us satisfy binary tree constraints, i.e. an inorder traversal/walk would yield elements in a sorted order. If you have a list in your hand, you can actually create a sorted list during your inorder walk/traversal.
- You also understand that eventually, you want a sorted _list_.
- Hence, would it be easy for us to first kind of flatten both the trees into sorted lists, and then merge these two sorted lists? Yes! \* This is a rather straightforward question. Besides what the explanation covers, does anything else confuse you? Feel free to post that as a comment!

**Time Complexity**
Time complexity here is very straightforward. You have two root nodes i.e. two trees. Call them `T1` and `T2`. Let `n1, n2` be the number of TreeNodes in `T1` and `T2`, respectively. First, you do an [inorder traversal](https://www.google.com/search?q=inorder+traversal&rlz=1C5CHFA_enUS764US764&oq=inorder+tra&aqs=chrome.0.0l2j69i57j0l5.2063j1j9&sourceid=chrome&ie=UTF-8) of each of both `T1` and `T2`, and get two sorted lists. This takes `O(n1 + n2)` since you visit each element in both trees exactly once. After this, you merge the two sorted lists i.e. another computation that costs `O(n1 + n2)` (since that's the total number of elements in both the lists combined. Therefore, overall time complexity => `O(n1 + n2)`.

<br/>

## `The Code`

```java
public List<Integer> getAllElements(TreeNode root1, TreeNode root2) {
        List<Integer> list1 = inorder(root1, new ArrayList<>());
        List<Integer> list2 = inorder(root2, new ArrayList<>());
        return merge(list1, list2);
    }
    /**
    * Provided a root node, this function returns a sorted list of the tree's elements using
    * inorder traversal.
    **/
    public List<Integer> inorder(TreeNode root, List<Integer> list) {
        if (root == null) {
            return list;
        }

        if (root.left == null && root.right == null) {
            list.add(root.val);
            return list;
        }

        inorder(root.left, list);
        list.add(root.val);
        inorder(root.right, list);

        return list;
    }


    /**
    * Given two sorted lists, list1 and list2, we create a sorted output list that is a union
    * of all the elements in list1 and list2.
    **/
    public List<Integer> merge(List<Integer> list1, List<Integer> list2) {
        List<Integer> res = new ArrayList<Integer>(list1.size() + list2.size());

        int i = 0;
        int j = 0;

        while (i < list1.size() && j < list2.size()) {
            if (list1.get(i) <= list2.get(j)) {
                res.add(list1.get(i));
                i++;
                continue;
            }

            if (list1.get(i) > list2.get(j)) {
                res.add(list2.get(j));
                j++;
            }
        }

        if (i < list1.size()) {
            for (int remaining = i; remaining < list1.size(); remaining++) {
                res.add(list1.get(i));
                i++;
            }
        }

        if (j < list2.size()) {
            for (int remaining = j; remaining < list2.size(); remaining++) {
                res.add(list2.get(j));
                j++;
            }
        }

        return res;
    }
```
