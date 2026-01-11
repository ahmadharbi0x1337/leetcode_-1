# 507. Perfect Number

**Difficulty:** Easy | **Topics:** Math, Enumeration

---

### **Problem Description**

A **perfect number** is a positive integer that is equal to the sum of its positive divisors, excluding the number itself. A **divisor** of an integer $x$ is an integer that can divide $x$ evenly.

Given an integer `num`, return `true` if `num` is a perfect number, otherwise return `false`.

---

### **Examples**

**Example 1:**

- **Input**: `num = 28`
- **Output**: `true`
- **Explanation**: $28 = 1 + 2 + 4 + 7 + 14$ (where 1, 2, 4, 7, and 14 are all divisors of 28).

**Example 2:**

- **Input**: `num = 7`
- **Output**: `false`
- **Explanation**: The only divisor of 7 (excluding itself) is 1. Since $1 \neq 7$, it is false.

---

### **Constraints**

- $1 \le \text{num} \le 10^8$

---

### **Approach**

To solve this efficiently:

1. **Initial Check**: If `num <= 1`, return `false`.
2. **Sum Divisors**: Start `sum = 1` (since 1 is always a divisor).
3. **Square Root Optimization**: Iterate from $i = 2$ up to $\sqrt{\text{num}}$.
4. **Find Pairs**: If `num % i == 0`, add both $i$ and $num/i$ to the sum.
5. **Final Comparison**: Return `sum == num`.
