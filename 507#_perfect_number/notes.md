Okay, so long time no see! Obviously I'm kidding, because no one apparently cares, but i wish for whom reading this to enjoy anyway.

So let's get started. The **Perfect Number** problem seems easy, right? It really is. Basically, what you want to do is to add **ALL** the divisors for a given number.

### The Optimization

The trick is in optimization:

- You don't have to go through all the numbers up to the number itself.
- Hell, you don't even have to go to the middle!
- What you just need to do is to keep checking until you hit the **square root**.

### The Trick

There is a trick though: you have to make sure to not include the square if it exists. For example, if the number is $36$, then you have to make sure not to add $6$ twice to your results. That's pretty much it.

---

### Fun Fact: Why exactly do we only care for the square root regarding divisors?

Well, a guy named **Eratosthenes of Cyrene** (c. 276–194 BCE) noticed that if we have some number $n$, then it's basically impossible for some numbers $a$ and $b$ to be:

$$
a > \sqrt{n} \quad \text{OR} \quad b > \sqrt{n}
$$

Because if even one of them were larger than $\sqrt{n}$, then we would have:

$$
a\cdot b > (\sqrt{n})^2 = n
$$
