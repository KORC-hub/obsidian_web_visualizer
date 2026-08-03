**Definición y características**

- Una serie de tiempo es una secuencia de observaciones registradas a intervalos regulares a lo largo del tiempo, cuyo objetivo principal es pronosticar valores futuros a partir de datos históricos1
    
- Los componentes principales de una serie temporal son:
    
    - Tendencia: Cambios a largo plazo, como aumento o disminución sostenida.
        
    - Estacionalidad: Patrones que se repiten en intervalos regulares (diario, semanal, anual).
        
    - Cíclico: Fluctuaciones no regulares, asociadas a factores como ciclos económicos.
        
    - Ruido: Variaciones aleatorias e impredecibles.
        

**Tipos de series de tiempo**

- Univariante: Observaciones de una sola variable.
    
- Multivariante: Observaciones de varias variables simultáneamente.
    

**Series estacionarias**

- Una serie es estrictamente estacionaria si sus propiedades estadísticas (media, varianza y covarianza) no cambian a lo largo del tiempo.
    
    - Media constante.
        
    - Varianza constante.
        
    - Covarianza constante respecto al tiempo.
        

**Autocorrelación**

- Mide la relación entre los valores de la serie en diferentes momentos (lags).
    
    - Lag 0: Siempre es 1 (correlación consigo misma).
        
    - Lag 1: Correlación entre una observación y la anterior; positiva indica persistencia, negativa alternancia.
        

**Modelos y métodos de análisis**

- ARIMA: Modelo estadístico compuesto por componentes autoregresivos (AR), de diferenciación (I) y de media móvil (MA).
    
- SARIMA: Extiende ARIMA para manejar estacionalidad.
    
- Suavizado exponencial (ETS): Promedios ponderados de observaciones pasadas.
    
- Prophet: Modelo desarrollado por Facebook para pronósticos empresariales.
    
- Modelos de aprendizaje automático (como LSTM): Capaces de capturar patrones complejos.
    

**Pasos para el análisis con ARIMA**

1. Importar librerías y preparar los datos.
    
2. Generar o cargar la serie temporal.
    
3. Identificar los parámetros p (autoregresivo), d (diferenciación) y q (media móvil) mediante gráficos de autocorrelación (ACF) y autocorrelación parcial (PACF).

