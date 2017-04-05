This module provides a reference [memoization](https://en.wikipedia.org/wiki/Memoization) implementation in Javascript (ES6)


Without memoization, a recursion call tree for fibonacci(6) would look like

```
                            f(6)
                      /             \
                   f(5)      +       f(4)
                 /      \           /      \
              f(4)  +  f(3)      f(3)  +  f(2)
             /  \     /   \      /  \
          f(3)+f(2) f(2)+f(1) f(2)+f(1)
         /  \
      f(2)+f(1)
```

As seen, same values are being re-calculated multiple times.

When memoization is put in place, the recursion tree starts to look like

```
                        f(6)
                      /     \
                   f(5)  +  f'4
                 /      \
              f(4)  +  f'3
             /   \
          f(3) + f'2
         /   \
      f(2) + f(1)
```

which gives a significant complexity reduction
