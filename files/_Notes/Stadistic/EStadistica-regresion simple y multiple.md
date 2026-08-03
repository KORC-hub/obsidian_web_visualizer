## Regresión lineal simple — resumen de clase

### Conceptos fundamentales

La regresión lineal busca modelar la relación entre una variable dependiente (Y) y una o varias variables independientes (X), expresada como una ecuación matemática. El término "regresión" viene del fenómeno estadístico donde los valores extremos tienden a regresar al promedio poblacional. El término "lineal" se refiere a que los coeficientes (betas) siempre se mantienen elevados a la potencia uno, aunque las variables X e Y sí pueden transformarse (por ejemplo, con logaritmo natural).

La ecuación general es: **Y = β₀ + β₁X₁ + β₂X₂ + ... + ε**

Componentes clave:

- **β₀ (intercepto)**: valor de Y cuando X vale cero (no siempre tiene interpretación práctica).
- **β₁ (pendiente)**: ante un aumento unitario en X, el cambio esperado en Y.
- **ε (error/residual)**: distancia de cada observación a la recta; captura variables no incluidas explícitamente en el modelo.

---

### Tipos de relaciones

- **Asociación**: variables vinculadas al mismo fenómeno.
- **Causalidad**: X causa cambios en Y.
- **Dependencia**: Y depende del valor de X.

---

### Cuándo usar qué modelo

|Naturaleza de Y|Tipo de modelo|
|---|---|
|Continua — una X|Regresión simple|
|Continua — varias X|Regresión múltiple|
|Binaria (0/1)|Regresión logística|
|Conteos|Regresión de Poisson|
|Categórica (>2 categorías)|Análisis discriminante|

---

### Estimación: mínimos cuadrados ordinarios (OLS)

Los betas se estiman minimizando la suma de los errores al cuadrado (se elevan al cuadrado para evitar que errores positivos y negativos se anulen). La fórmula matricial es: **β = (XᵀX)⁻¹ XᵀY**

---

### Evaluación del modelo

- **R²**: porcentaje de varianza de Y explicado por X. Valores ≥ 70% se consideran buenos.
- **R² ajustado**: solo sube si la variable agregada realmente aporta al modelo. Siempre revisarlo junto al R².
- **Valor P del ANOVA del modelo**: si es < 0.05, existe evidencia de un modelo lineal válido.
- **Valor P individual de cada X**: si es < 0.05, esa variable sí explica a Y.

---

### Validación de supuestos (obligatoria)

Ninguna conclusión del modelo es válida si no se cumplen los supuestos:

1. **Correcta especificación del modelo**: el modelo lineal es adecuado, no sobran ni faltan variables, no hay multicolinealidad.
2. **Homoscedasticidad**: los residuales tienen varianza constante.
3. **Independencia**: los residuales no están correlacionados entre sí.
4. **Normalidad de los residuales**.

---

### Interpretación de la ecuación (ejemplo de clase)

Con ambas variables en logaritmo natural: _"Por cada 1% que aumenten las emisiones por energía, las emisiones por transporte aumentan en 0.89%."_

Sin transformación logarítmica: _"Por cada unidad que aumente X, Y aumenta en β₁ [unidades de Y]."_

---

### Entrenamiento y testeo (enfoque ML)

Los datos se dividen: **80% entrenamiento** (la máquina aprende la ecuación) y **20% testeo** (se evalúa qué tan bien predice con datos nuevos). Un error porcentaje < 10% se considera bueno.

---

> **Nota — ejemplo de aplicación industrial**: La profesora describió un caso en una planta de embutidos donde se usó regresión con diseño experimental para identificar por qué las salchichas perdían peso excesivo en el proceso de cocción. El objetivo era control, no predicción. El resultado fue descubrir que un horno específico tenía una fuga imperceptible, lo que generó ahorros equivalentes al salario anual del analista.