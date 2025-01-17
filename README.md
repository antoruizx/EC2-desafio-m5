## Despliegue Automatizado con GitHub Actions en EC2

Despliegue automatizado de una aplicación web sencilla en una instancia EC2 utilizando GitHub Actions.

## Pasos seguidos
1. **Crear el repositorio en GitHub**
Utilicé un repositorio público/privado que contiene una aplicación web sencilla.

2. **Lanzar una Instancia EC2**
Creé una instancia EC2 con el tipo t2.micro (en Free Tier) y sistema operativo Ubuntu.

Configuré un grupo de seguridad permitiendo el tráfico en los puertos SSH (22) y HTTP (80).

3. **Generar y almacenar la clave SSH**
Generé un par de claves SSH para acceder a la instancia EC2.

Subí la clave privada como un secreto a GitHub en Settings > Secrets and variables > Actions.

4. **Configurar GitHub Actions**
En mi repositorio, configuré un flujo de trabajo en .github/workflows/deploy.yml para realizar las siguientes tareas:

Clonar el repositorio en la instancia EC2.

Instalar las dependencias necesarias, como Node.js.

Iniciar la aplicación usando pm2 para mantenerla activa.

5. **Realizar el despliegue**
Configuré GitHub Actions para que, al realizar un push a la rama main, el código se despliegue automáticamente en la instancia EC2.

La aplicación es accesible públicamente en la dirección IP de la instancia EC2.

6. **Validación**
Realicé un push al repositorio, verifiqué que la aplicación esté disponible en la IP pública de la instancia EC2.