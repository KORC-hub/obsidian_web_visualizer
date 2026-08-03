# Teoria
## 1. FUNDAMENTOS CONCEPTUALES

### ¿Por qué existen los intervalos de confianza?

**El dilema central:** Cuando tomas una muestra de una población, obtienes un estimador puntual (una sola cifra). Pero ese número varía según qué muestra específica captures.

**Ejemplo real:**

- Estimas la edad promedio de Colombia en 35 años basándote en muestras de Bogotá, Cali y Medellín.
- Otro investigador hace lo mismo y obtiene 37 años (porque su muestra incluyó zonas rurales).
- ¿Quién tiene razón? **Ambos y ninguno.** El problema es que un punto no captura la variabilidad inherente del muestreo.

**La solución:** En lugar de decir "la edad es 35", dices: "tengo 95% de confianza de que la edad está entre 33 y 37 años". Esto **desplaza la incertidumbre del punto al rango**.

---

## 2. INTERPRETACIÓN CORRECTA (CRÍTICA)

### La confusión más común

❌ **INCORRECTO:** "Hay 95% de probabilidad de que μ esté en [33, 37]"

✅ **CORRECTO:** "Si repito el experimento infinitas veces, el 95% de los intervalos que construya contendrá a μ"

**¿Por qué la diferencia?**

- Una vez que calculas el intervalo [33, 37], **μ ya está dentro o fuera**. No hay probabilidad; es un hecho.
- La probabilidad del 95% se refiere al **proceso de construcción del intervalo**, no al resultado específico.

**Analogía:** Es como un juego donde tienes 95% de precisión al lanzar dardos. Después de lanzar, el dardo está adentro o afuera del blanco, no hay "probabilidad" de que esté adentro. Lo que significa 95% es: "si lanzo 100 veces, ~95 darán en el blanco".

---

## 3. ESTRUCTURA GENERAL DE UN INTERVALO

Todo intervalo de confianza sigue esta estructura:

```
IC = Estimador ± (Valor crítico) × (Error estándar)
IC = θ̂ ± z(α/2) × SE(θ̂)
```

**Desglose:**

- **θ̂:** estimador puntual (media muestral, proporción, etc.)
- **z(α/2):** valor de la tabla (Z, t, χ², F) que define cuánto te alejas del centro
- **SE(θ̂):** error estándar, que mide la variabilidad del estimador
  - Siempre disminuye con √n → **mayor muestra = intervalo más estrecho**

---

## 4. EL NIVEL DE CONFIANZA Y ALFA

### Relación crítica

```
Nivel de confianza = 1 - α
α = probabilidad de error
```

| Confianza | α    | Interpretación                                        |
| --------- | ---- | ----------------------------------------------------- |
| 90%       | 0.10 | Aceptas equivocarte 1 de cada 10 veces                |
| 95%       | 0.05 | Aceptas equivocarte 1 de cada 20 veces ← **ESTÁNDAR** |
| 99%       | 0.01 | Aceptas equivocarte 1 de cada 100 veces               |

### ¿Cuándo usar cada uno?

- **90%:** Datos de baja calidad, exploración inicial, contextos de bajo riesgo
- **95%:** **Default en investigación.** Equilibrio entre precisión y practicidad
- **99%:** Decisiones críticas (medicina, ingeniería de seguridad, regulaciones)

**Trade-off importante:** Mayor confianza → intervalo más ancho → menos precisión.

---

## 5. TIPOS DE INTERVALOS Y CUÁNDO USARLOS

### A. Intervalo para la Media (μ)

#### Caso 1: Varianza poblacional (σ²) CONOCIDA

```
IC = X̄ ± Z(α/2) × (σ / √n)
```

**Cuándo ocurre:**

- Raro en práctica. Típicamente solo en simulaciones o cuando σ viene especificada.
- Ejemplo: Proceso de manufactura que ha estabilizado su variabilidad históricamente.

**Distribución:** Normal (Z), que es simétrica.

---

#### Caso 2: Varianza poblacional DESCONOCIDA (MÁS COMÚN)

```
IC = X̄ ± t(α/2, n-1) × (s / √n)
```

**Diferencias con Caso 1:**

- Usas **s** (desv. estándar muestral) en lugar de σ
- Usas **t-Student** (tabla t) en lugar de Z
- **Grados de libertad = n - 1** (clave para buscar en tabla)
- Intervalo es **más ancho** que con Z (porque hay más incertidumbre)

**¿Por qué t en lugar de Z?**

- Al desconocer σ, tienes dos fuentes de variabilidad: la población Y la estimación de σ
- t-Student corrige por esto; a mayor n, t converge a Z

**Ejemplo práctico:** Descargas datos de un repositorio. No sabes si σ=10 o σ=50. Usas t-Student.

---

### B. Intervalo para una Proporción (p)

```
IC = p̂ ± Z(α/2) × √[p̂(1-p̂) / n]
```

**Puntos críticos:**

- **p̂ = x/n** (número de "éxitos" / tamaño muestral)
- Siempre usa **Z**, no t (la distribución binomial normalizada converge a normal)
- **Requiere n grande:** regla práctica: np̂ ≥ 5 y n(1-p̂) ≥ 5

**Ejemplo:** 18 de 300 artículos son defectuosos → p̂ = 0.06

---

### C. Intervalo para Diferencia de Medias (μ₁ - μ₂)

```
IC = (X̄₁ - X̄₂) ± t(α/2) × SE(X̄₁ - X̄₂)
```

**Condiciones que cambian la fórmula:**

1. **Varianzas iguales:** `SE = s_p × √(1/n₁ + 1/n₂)` (s_p es varianza pooled)
2. **Varianzas desiguales:** `SE = √(s₁²/n₁ + s₂²/n₂)` (fórmula de Welch)

**Cuándo usarla:**

- Comparar dos grupos: tratamiento vs control, máquina A vs máquina B
- Si el intervalo contiene **cero** → las medias no difieren significativamente

---

### D. Intervalo para Diferencia de Proporciones (p₁ - p₂)

```
IC = (p̂₁ - p̂₂) ± Z(α/2) × √[p̂₁(1-p̂₁)/n₁ + p̂₂(1-p̂₂)/n₂]
```

**Interpretación crítica:**

- Si intervalo contiene **0** → **no hay diferencia significativa** entre proporciones
- Si intervalo está completamente > 0 → p₁ > p₂ significativamente
- Si intervalo está completamente < 0 → p₁ < p₂ significativamente

**Ejemplo clase:** Máquina 1: 15 defectos de 300. Máquina 2: 8 defectos de 300. ¿Diferencia real?

- p̂₁ = 0.05, p̂₂ = 0.027
- IC resultante = [-0.007, 0.051] → **contiene cero** → no hay diferencia significativa

---

## 6. VALORES CRÍTICOS (CÓMO BUSCARLOS)

### Tabla Z (Normal)

Para **α/2 = 0.025** (nivel 95%):

- Busca 0.025 **dentro** de la tabla Z
- Encontrarás 0.0250 entre 1.95 y 1.96 → uses **Z = 1.96**
- Memoriza: Z₀.₀₂₅ = **1.96**

**Otros comunes:**

- Z₀.₀₅ (90%) = 1.645
- Z₀.₀₀₅ (99%) = 2.576

### Tabla t (t-Student)

- Fila = grados de libertad (n - 1)
- Columna = α/2
- Ejemplo: n=20, α=0.05 → df=19 → t₀.₀₂₅ ≈ **2.093**

**Propiedad importante:** Conforme n crece, t → Z. Para n > 30, t ≈ Z.

### Tabla χ² (Chi-cuadrada, para varianza)

```
IC = [(n-1)s² / χ²(α/2), (n-1)s² / χ²(1-α/2)]
```

- Asimétrica (no como Z o t)
- Busca con df = n - 1

---

## 7. CÁLCULO PASO A PASO: PLANTILLA

### **PLANTILLA UNIVERSAL**

```
PASO 1: Identifica qué parámetro buscas
├─ ¿Media? ¿Proporción? ¿Diferencia?
└─ ¿Varianza conocida o desconocida?

PASO 2: Identifica tu α
├─ Nivel de confianza dados → α = 1 - confianza
└─ Calcula α/2

PASO 3: Calcula el estimador puntual
├─ Media: X̄ = Σx / n
├─ Proporción: p̂ = x / n
└─ Diferencia: X̄₁ - X̄₂

PASO 4: Calcula el error estándar SE
├─ Para media con σ conocida: σ / √n
├─ Para media con σ desconocida: s / √n
└─ Para proporción: √[p̂(1-p̂) / n]

PASO 5: Busca el valor crítico en tabla

PASO 6: Construye intervalo
├─ IC_inferior = estimador - (crítico × SE)
└─ IC_superior = estimador + (crítico × SE)

PASO 7: Interpreta
├─ ¿Contiene el cero o valor hipotético?
└─ ¿Qué tan preciso es el intervalo?
```

---

## 8. ERRORES COMUNES Y CÓMO EVITARLOS

| Error                                                              | Síntoma                                                           | Solución                                           |
| ------------------------------------------------------------------ | ----------------------------------------------------------------- | -------------------------------------------------- |
| Usar Z cuando deberías usar t                                      | Intervalo demasiado estrecho, n < 30                              | Verifica si conoces σ poblacional                  |
| Olvidar α/2                                                        | Usas α en lugar de α/2                                            | Siempre divide α entre 2                           |
| Interpretar como "probabilidad del parámetro"                      | Crees que μ tiene 95% de estar adentro del intervalo ya calculado | Recuerda: es sobre el **proceso**, no el resultado |
| Confundir s con σ                                                  | Calculas SE con desv. estándar de población en lugar de muestra   | Usa s cuando desconoces σ                          |
| No verificar tamaño muestral para proporciones                     | Usas Z para p con n pequeño                                       | Verifica: np̂ ≥ 5 y n(1-p̂) ≥ 5                      |
| Ignorar que el intervalo debe ser simétrico alrededor de estimador | IC asimétrico                                                     | Solo χ² es asimétrica; otras sí son simétricas     |

---

## 9. RELACIÓN CON TAMAÑO MUESTRAL

**Fórmula clave:** `Ancho del intervalo = 2 × Z(α/2) × (σ / √n)`

**Implicaciones:**

- **Duplicas n** → ancho se reduce en √2 ≈ 1.41
- **Cuadriplicas n** → ancho se reduce a la mitad
- **Quieres mitad del ancho** → necesitas 4 veces más observaciones

**Decisión práctica:** Si tu intervalo es demasiado ancho, antes de cambiar α, **aumenta n** (es más honesto estadísticamente).

---

## 10. CONEXIÓN CON PRUEBAS DE HIPÓTESIS

**Relación bidireccional:**

```
Si IC para (μ₁ - μ₂) contiene 0
    ↓
Entonces NO rechazas H₀: μ₁ = μ₂ al mismo nivel α

Si IC para p está completamente > 0.04
    ↓
Entonces puedes dudar de afirmación "p ≤ 0.04"
```

Los intervalos de confianza y pruebas de hipótesis están conectados. Un intervalo que no incluye el valor hipotético es equivalente a un test que rechaza esa hipótesis.

---

## 11. CHECKLIST PARA RESOLVER PROBLEMAS

Antes de empezar, responde:

- [ ] ¿Qué parámetro busco? (μ, p, σ², μ₁-μ₂, p₁-p₂)
- [ ] ¿Nivel de confianza es 90%, 95% o 99%?
- [ ] ¿Es una muestra o dos muestras?
- [ ] Si es media: ¿conozco σ o solo s?
- [ ] ¿El tamaño muestral es grande (n > 30) o pequeño?
- [ ] ¿La población es aproximadamente normal? (o n es grande)
- [ ] ¿Necesito tabla Z, t, χ² o F?

**Si tu respuesta a cualquiera es "no sé", regresa al enunciado y lee con cuidado.**

---

## 12. EJERCICIOS MENTALES PARA AFIANZAN COMPRENSIÓN

1. **¿Por qué t > Z para el mismo α?** → Porque desconoces σ, hay más incertidumbre, necesitas un múltiplo mayor del error estándar.

2. **Si duplicas n, ¿qué pasa con el intervalo?** → Se estrecha en un factor de √2. Mayor precisión.

3. **¿Puede un intervalo de 95% confianza ser más estrecho que uno de 90%?** → Sí, si la primera tiene n mucho mayor.

4. **¿Qué significa "5% de significancia" en relación con intervalos?** → Que el nivel de confianza es 95% (α = 0.05), equivalente a usar Z₀.₀₂₅ = 1.96.

5. **Si el intervalo para p₁ - p₂ es [-0.01, 0.05], ¿qué concluyes?** → No hay diferencia significativa (contiene 0). Podrían ser iguales.

---

Este resumen ampliado te da la estructura conceptual para abordar **cualquier problema de intervalos de confianza** que encuentres. El patrón es siempre el mismo: identifica parámetro → busca tabla → aplica fórmula → interpreta en contexto.
