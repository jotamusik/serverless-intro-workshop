# Taller: Introducción a Serverless

Este repo tiene los distintos pasos que seguiremos en el taller.
Cada rama representará un paso a seguir en el taller y el código
necesario para continuar en cada paso.

## Guía de pasos

_Rama : Paso_

- **[step_1_simple_hello_world](https://github.com/jotamusik/serverless-intro-workshop/tree/step_1_simple_hello_world)** : Lambda simple con 'Hola mundo!'
- **[step_2_simple_api_hello_world](https://github.com/jotamusik/serverless-intro-workshop/tree/step_2_simple_api_hello_world)** : Lambda simple que coge de un query param un nombre para saludaro con 'Hola <nombre>!'
- **[step_3_cron_hello_world](https://github.com/jotamusik/serverless-intro-workshop/tree/step_3_cron_hello_world)** : Lambda con expresión cron y logs
- **[step_4_database_user_names](https://github.com/jotamusik/serverless-intro-workshop/tree/step_4_database_user_names)** : Lambda con inserción a base de datos a través de query param
- **[step_5_framework_hello_world](https://github.com/jotamusik/serverless-intro-workshop/tree/step_5_framework_hello_world)** : Proyecto de 'Hola mundo!' usando Serverless Framework
- **[step_6_framework_database](https://github.com/jotamusik/serverless-intro-workshop/tree/step_6_framework_database)** : Proyecto de inserción de ususarios por query param usando Serverless Framework

## Lambda simple que imprime por log Hola mundo! cada dos minutos
En este paso tenemos el código que tendremos que poner en la funcion en la consola de AWS en el fichero llamado [simpleApiHelloName.js](./src/simpleHelloWorld.js) y 
las posibles expresiones de crontab en el fichero [cronExpression.txt](./src/cronExpression.txt).
