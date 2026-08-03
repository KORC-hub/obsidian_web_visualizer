# Factories

Status: Functions

Como podemos crear objetos con `{}` sin necesidad de tener clases,  podemos hacer una funciones que cree objetos

```jsx
const createPerson = ({name, lastname, age} = {}) => ({
	name: name ?? 'kevin'
	lastname: lastname ?? ''
	age: age ?? 0
});
```