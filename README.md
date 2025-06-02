<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Teslo API
1. Clonar el proyecto
2. Ejecutar el comando `yarn install`
3. Clonar el archivo **.env.template** a **.env**
4. Establecer las variables de entorno en el archivo **.env**
5. Levantar la base de datos utilizando el comando establecido en el apartado de base de datos
6. Ejecutar el comando `yarn start:dev` para levantar el proyecto
7. Ejecutar seed:
```
http://localhost:3000/api/seed
```

## Base de datos
- Para levantar la base de datos de manera local es necesario ejecutar el comando:
```
docker compose -f docker-compose.yaml up -d
```

## Enlaces a recursos del proyecto
- Seed: https://gist.github.com/Klerith/1fb1b9f758bb0c5b2253dfc94f09e1b6

