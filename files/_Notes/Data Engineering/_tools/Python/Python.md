
# Python

https://learnxinyminutes.com/python/


[[Entornos virtuales]]

![[Pandas#pandas]]




# Notes

Python permite representar números grandes en formato decimal usando guiones bajos como delimitador en lugar de comas para facilitar la lectura.

```python
num = 16_000
print(num)
# Prints 16000

num = 16_000_000
print(num)
# Prints 16000000
```


```python
negative_infinity = float("-inf")
positive_infinity = float("inf")
```


```python title="Slicing Lists"
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
numbers[:3]  # Gives [0, 1, 2]
numbers[3:]  # Gives [3, 4, 5, 6, 7, 8, 9]
numbers[::2]  # Gives [0, 2, 4, 6, 8]
numbers[-3:]  # Gives [7, 8, 9]
```