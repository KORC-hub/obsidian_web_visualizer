# Resumen detallado – Probabilidad y Variables Aleatorias

---

# 1. Teoría de la Probabilidad

## 1.1 Conceptos fundamentales

### Experimento aleatorio
Proceso cuyo resultado no puede determinarse con certeza antes de realizarse.

### Espacio muestral ($S$)
Conjunto de todos los resultados posibles de un experimento aleatorio.

- Puede ser finito.
- Puede ser infinito.

### Evento
Subconjunto del espacio muestral.

---

## 1.2 Operaciones con conjuntos

Sean $A$ y $B$ eventos:

- Unión: $A \cup B$
- Intersección: $A \cap B$
- Complemento: $A^c$
- Eventos mutuamente excluyentes: $A \cap B = \varnothing$

---

## 1.3 Definición clásica de probabilidad

$$
P(E) = \frac{\text{Casos favorables}}{\text{Casos posibles}}
$$

### Axiomas

1. $$0 \le P(E) \le 1$$
2. $$P(S) = 1$$
3. Si $A$ y $B$ son excluyentes:

$$
P(A \cup B) = P(A) + P(B)
$$

---

## 1.4 Probabilidad condicional

$$
P(B \mid A) = \frac{P(A \cap B)}{P(A)}, \quad P(A) > 0
$$

---

## 1.5 Teoremas fundamentales

### Regla de multiplicación

$$
P(A \cap B) = P(A \mid B)P(B) = P(B \mid A)P(A)
$$

### Teorema de probabilidad total

$$
P(B) = \sum_i P(B \mid A_i)P(A_i)
$$

### Teorema de Bayes

$$
P(A \mid B) = \frac{P(B \mid A)P(A)}{P(B)}
$$

Si $\{A_i\}$ es una partición:

$$
P(A_i \mid B) = \frac{P(B \mid A_i)P(A_i)}{\sum_j P(B \mid A_j)P(A_j)}
$$

---

## 1.6 Independencia

Dos eventos $A$ y $B$ son independientes si:

$$
P(A \cap B) = P(A)P(B)
$$

Equivalente a:

$$
P(A \mid B) = P(A)
$$

$$
P(B \mid A) = P(B)
$$

---

# 2. Variables Aleatorias

## 2.1 Definición

Una variable aleatoria es una función:

$$
X: S \to \mathbb{R}
$$

Asigna un número real a cada resultado del espacio muestral.

---

## 2.2 Tipos

### Discretas
- Rango finito o numerable.
- Asociadas a conteos.

### Continuas
- Rango en intervalos reales.
- Asociadas a mediciones.

---

# 3. Funciones de Probabilidad

## 3.1 Caso discreto

### Función de masa

$$
f(x) = P(X = x)
$$

### Función acumulada

$$
F(x) = P(X \le x) = \sum_{x_i \le x} f(x_i)
$$

Propiedad:

$$
P(a \le X \le b) = F(b) - F(a)
$$

---

## 3.2 Caso continuo

### Función de densidad

$$
f(x) > 0
$$

$$
\int_{-\infty}^{\infty} f(x)\,dx = 1
$$

### Función acumulada

$$
F(x) = \int_{-\infty}^{x} f(t)\,dt
$$

Probabilidad en intervalo:

$$
P(a \le X \le b) = \int_a^b f(x)\,dx
$$

---

# 4. Variables Aleatorias Discretas

## 4.1 Momentos

Media:

$$
\mu = E(X) = \sum x f(x)
$$

Varianza:

$$
\sigma^2 = V(X) = \sum (x - \mu)^2 f(x)
$$

---

## 4.2 Distribuciones Discretas

### 4.2.1 Uniforme discreta

$$
f(x) = \frac{1}{n}
$$

$$
\mu = \frac{a + b}{2}
$$

$$
\sigma^2 = \frac{(b - a + 1)^2 - 1}{12}
$$

---

### 4.2.2 Binomial $X \sim Bin(n,p)$

$$
P(X = x) = \binom{n}{x} p^x (1-p)^{n-x}
$$

$$
\mu = np
$$

$$
\sigma^2 = np(1-p)
$$

---

### 4.2.3 Geométrica $X \sim Geom(p)$

$$
P(X = x) = p(1-p)^{x-1}
$$

$$
\mu = \frac{1}{p}
$$

$$
\sigma^2 = \frac{1-p}{p^2}
$$

Propiedad de pérdida de memoria:

$$
P(X > t_1 + t_2 \mid X > t_1) = P(X > t_2)
$$

---

### 4.2.4 Binomial Negativa $X \sim BN(r,p)$

$$
P(X = x) = \binom{x-1}{r-1} p^r (1-p)^{x-r}
$$

$$
\mu = \frac{r}{p}
$$

$$
\sigma^2 = \frac{r(1-p)}{p^2}
$$

---

### 4.2.5 Hipergeométrica $X \sim H(N,k,n)$

$$
P(X = x) = \frac{\binom{k}{x}\binom{N-k}{n-x}}{\binom{N}{n}}
$$

$$
\mu = \frac{nk}{N}
$$

$$
\sigma^2 = n\frac{k}{N}\frac{N-k}{N}\frac{N-n}{N-1}
$$

---

### 4.2.6 Poisson $X \sim Poisson(\lambda)$

$$
P(X = x) = \frac{e^{-\lambda}\lambda^x}{x!}
$$

$$
\mu = \lambda
$$

$$
\sigma^2 = \lambda
$$

---

# 5. Variables Aleatorias Continuas

## 5.1 Momentos

$$
\mu = \int_{-\infty}^{\infty} x f(x)\,dx
$$

$$
\sigma^2 = \int_{-\infty}^{\infty} (x - \mu)^2 f(x)\,dx
$$

---

## 5.2 Distribuciones Continuas

### 5.2.1 Normal $X \sim N(\mu,\sigma^2)$

$$
f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}
$$

Estandarización:

$$
Z = \frac{x - \mu}{\sigma}
$$

---

### 5.2.2 Exponencial $X \sim Exp(\lambda)$

$$
f(x) = \lambda e^{-\lambda x}
$$

$$
F(x) = 1 - e^{-\lambda x}
$$

$$
\mu = \frac{1}{\lambda}
$$

$$
\sigma^2 = \frac{1}{\lambda^2}
$$

Propiedad de pérdida de memoria:

$$
P(X > t_1 + t_2 \mid X > t_1) = P(X > t_2)
$$

---

### 5.2.3 Weibull $X \sim Weibull(\eta,\beta)$

$$
f(x) = \frac{\beta}{\eta}\left(\frac{x}{\eta}\right)^{\beta-1}
e^{-\left(\frac{x}{\eta}\right)^\beta}
$$

- $\beta < 1$: tasa de falla decreciente  
- $\beta = 1$: equivalente a exponencial  
- $\beta > 1$: tasa de falla creciente  

El parámetro $\eta$ controla la escala de la distribución.