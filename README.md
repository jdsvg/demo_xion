# xion (Demo)
Documentación

---

El proyecto se implementará de la siguiente manera:

- Se tendrá separación de BackEnd y Frontend
    - BackEnd: Django-Rest
        - Manejo del Servidor
        - Manejo de base de datos
        - Manejos de APIs
    - Frontend: React
        - Componentes de la App
        - Secciones de la App
        - Estilos de la App
        - Eventos de la App

---

# Listado de dependencias:

## Python

---

- Dependencias consecuentes:
    
    ```jsx
    Django              4.0.2
    django-rest-knox    4.2.0 #Se debe parametrizar en el core de Django
    djangorestframework 3.13.1#Se debe parametrizar en el core de Django
    pycryptodome
    scrypt
    mysqlclient         2.1.0
    nodeenv             1.6.0
    pip                 21.1.3
    pandas
    pymysql
    setuptools          56.0.0
    
    ```
    

---

## Node

```jsx
"devDependencies": {
    "@babel/core": "^7.17.2",
    "@babel/preset-env": "^7.16.11",
    "@babel/preset-react": "^7.16.7",
    "babel-loader": "^8.2.3",
    "babel-plugin-transform-class-properties": "^6.24.1",
    "css-loader": "^6.6.0",
    "style-loader": "^3.3.1",
    "webpack": "^5.68.0",
    "webpack-cli": "^4.9.2"
  },
  "dependencies": {
    "axios": "^0.26.0",
    "prop-types": "^15.8.1",
    "react": "^17.0.2",
    "react-alert": "^7.0.3",
    "react-alert-template-basic": "^1.0.2",
    "react-dom": "^17.0.2",
    "react-redux": "^7.2.6",
    "react-router-dom": "^5.3.0",
    "react-transition-group": "^4.4.2",
    "redux": "^4.1.2",
    "redux-devtools-extension": "^2.13.9",
    "redux-thunk": "^2.4.1"
  }
```

# 🌟 Prueba de funcionalidad (Django)

---

Se deberá validar:

- Que se levante el servidor
- Que la implementación de la base de datos, este funcionando

---

Para esto, se debe primero verificar la syntaxis y la estructura del código:

```python
python manage.py **check**
```

- Si
    - Es la primera ver levantando el servidor
    - Se instanciaron modelos,

se realiza la carga de modelos en la base de datos:

```python
python manage.py **makemigrations**
python manage.py **migrate**
```

Una vez finalizada la carga, se deberá verificar en el gestor de bases de datos

---

Una vez verificada la estructura del proyecto, se levanta de nuevo el servidor:

```python
python manage.py **runserver**
```

# 1) 💡 Jerarquía carpetas

---

- **Carpeta Main**
    - **Carpeta general del proyecto**
        - **account**
        - **Carpeta core del proyecto**
        - **Carpeta de una app_x**
        - **...**
        - **Carpeta de una app_y**
        - **manage.py**
        - **Carpeta de frontend**

---


# 2) Entornos virtuales y parametrizaciones

En caso de que la App se migre a otro entorno de trabajo (y no esté en un Docker, se deben generar cada uno de los entornos e instalar nuevamente las dependencias)

---

<aside>
💡 Creación de un entorno virtual para ***Python*** y ***Node.*** Se levantarán los frameworks (Django y Node)
</aside>

# Django-Python

## 2.1) Generar un entorno virtual de Python y activarlo

---

En: **Carpeta Main**

```bash
python -m venv zone_env_pyton

zone_env_pyton\Scripts\activate
```

---

    
# Node/React-JS

## 2.4) Generar entorno virtual de Node y activarlo

---

- Entorno virtual de Node
    - En **Carpeta Main**:
        - Crear entorno virtual ***Node***:
            - Con el entorno virtual de Python activado situar la instancia ***Node***, con permisos para Windows:
                
                Esto se hace de esta forma, ya que se está usando la librería nodeenv, propia de Python, para no tener que instalar Node
                
                ```bash
                runas /env /profile /user:<user_name or user_email> "nodeenv -p"
                ```
                
                ---
                
            - Crear entorno virtual de ***Node:***
                
                ```bash
                runas /env /profile /user:<user_name or user_email> "nodeenv env_prj_<name>node*"*
                ```
                
            - En una shell diferente, activar entorno virtual de ***Node**:*
                
                ```bash
                *env_prj*<name>_react/Scripts/activate.bat
                ```
                

---


## 2.5) Levantar frameworks *Node* e instalar dependencias en el entorno virtual (***Node***)

---

Para poder instalar las dependencias es necesario primero generar un proyecto de Node, sobre npm y después instalar las dependencias:

- En **Carpeta Main:**
    
    ```bash
    npm init -y
    ```
    

- Dev-Dependencias
    
    ```bash
    npm i -D <nombre_dev-dependencia>
    ```
    

---

- Dependencias:
    
    ```bash
    npm i <nombre_dependencia_consecuente>
    ```
---

## 2.5.1) Babel y Webpack

Es necesario generar y parametrizar una serie de archivos para indicar al proyecto de ***Node***, para realizar la traducción de TypeScript o JSX a JavaScript (**Babel**) o permitir al proyecto cargar archivos de ciertas extensiones a la App Web (**Webpack**)

<aside>
💡 ***Babel***: Permite traducir instrucciones JS de varias versiones (versiones JS, JSX, TypeScript), y manejarlas como objetos para que pueda ser entendido por el navegador y el middleware
***Webpack***: Permite manejar los módulos de **JS**, los archivos **CSS** y archivos estáticos como **JPG**, para que puedan ser compilados y cargados al componente ***main.js*** y así a la App Web

</aside>

---

- ***Babel***
    
    Babel trabaja con parametrizaciones de tipo JSON, para instanciarlas, sera necesario generar un archivo ***.babelrc***
    
    - En Carpeta Main, crear un archivo: ***.babelrc***
    
    Lo siguiente, sera generar las parametrizaciones 
    
    - En Carpeta Main → ***.babelrc**:*
        
        ```json
        {
            "presets": ["@babel/preset-env", "@babel/preset-react"],
            "plugins":["transform-class-properties"]
        }
        ```
        

---

- Webpack
    
    Webpack, trabaja con parametrización de tipo JSON. 
    
    Para instanciar estas parametrizaciones, es necesario un archivo webpack de extensión .js
    
    - En Carpeta Main, crear un archivo: ***webpack.config.js***
    
    Lo siguiente es generar las parametrizaciones
    
    - En **Carpeta Main** → ***webpack.config.js***:
        
        ```jsx
        module.exports = {
            module:{
                rules: [
                    {
                        test: /\.js$/,
                        
                        exclude:/node_modules/,
                        use:{
                            loader:"babel-loader"
                        } 
                    }
                ]//rules
            }//module
        };//module.exports
        ```
---

# 🌟 Arquitectura de REST, MVT/MVC

---

Django maneja una estructura similar al MVC, denominada MVT —Model, View, Template—:

- Donde el (M) modelo, haría de entidad, la (V) vista de controlador y el (T) template de base para los estilos y maquetación que tendría la App Web.

# Vistas de las API (vistas con Clase)

---

- En el caso de la **API**, la vista viene a ser una clase que gracias a ***djangorestframework***, se predefine su vista, sin necesidad de generala manualmente, por lo que no es necesario tocar views.py.
    - Esta vista predefinida sirve para hacer CRUD, donde la **API** llama al **serializador** y este a su vez al **modelo**. Luego en la erutación se indica como se navega a esta vista-api, generada a partir de una clase.
   
Es decir:
  -   Tenernos un **modelo**, este requiere de una manipulación (CRUD).
  -   Para esto se creará una **API**, que permita hacer el llamado al **modelo**. La cual, para poder acceder a los datos de dicho **modelo**, necesitara un **serializador** el cual empaquete los datos en un **JSON**
        
                    

---

# Vista FrontEnd (Vistas con Funciones)

---

- En este otro caso lo que tenemos es un **template** (.html) que llama un *script* de ***.js*** (***main.js***), el cual es el compilado de otros **componentes** y **elementos estáticos**. El **template** es llamado por la función en ***views.py*** generando una vista, y esta vista es enrutada para poder navegar hacia esta.
    - urls.py(core) ⇒ urls.py(app) ⇒ views.py ⇒ index.html ⇒ main.js :: <compilación de otros **componentes** y **elementos estáticos>**
- Así como en este caso prescindimos de una clase para generar la vista, también prescindimos tanto de un serializador y de un modelo. Ya que esta App-Django (frontend), está enfocada en contener y generar el Frontend del aplicativo, y no en generar un **endpoint** o una entidad que requiera ser almacenada y administrada por una base de datos

---


# 🌟 Arquitectura de components (FrontEnd)

- React es un framework que trabaja muy bien la parte Frontend de un proyecto.
    - Este se basa en componentes, donde por ejemplo la sección de **inicio** de una App Web es un componente, la sección de **login**, es otro componente y la **barra de navegación** es otro componente, cada uno independiente, pero relacionados entre sí.
    - Todos son instanciados por un componente principal (***App.js***), el cual es llamado por ***index.js*** del cual sirve de **punto de referencia** de lo que necesita ser compilado y enviado al ***main.js.***
    - ***Es*** decir que ***index.js*** llama ***App.js*** y, ***App.js*** llama los otros componentes. Luego ***React*** compila ***index.js*** generando un ***main.js***. E
    - Este último, **main.js**, es llamado por el **template** del BackEnd (entorno de Django) que renderizara esta vista.
    
    Así se tiene un Frontend mucho más optimizado y organizado gracias a ***React***
    
    - ***index.js***, haría el llamado a ***App.js***, y este a su vez llamaría a cada uno de los diferentes componentes, cada uno con sus propias dependencias y elementos estáticos

---


## Implementando entornos **npm** de desarrollo y producción


**Node** utilizara un **punto de referencia** desde donde compilar los componentes y luego enviara esa compilación a un archivo que tendrá el binario con toda la lógica del negocio que se ha desarrollado

En esta parametrización se indica que fichero hará de **punto de referencia** (***index.js***) para la compilación de cada uno de los componentes, en un solo componente (***main.js***)

Donde: index.js ⇒ Apps.js ⇒ <otros componentes>

Y **Node** genera un archivo compilado (***main.js***), a partir del punto de referencia ***index.js***

- En Carpeta Main → package.json → (Dic)::scripts
    
    Indicar lo siguiente:
    
    ```jsx
    "scripts": {
        ~~"test": "echo \"Error: no test specified\" && exit 1"~~
    		"dev": "webpack --mode development --watch ./project_name/frontend/src/**index.js** --output-path ./project_name/frontend/static/frontend/",
    		"build": "webpack --mode production ./project_name/frontend/src/**index.js** --output-path ./project_name/frontend/static/frontend/"
      },
    ```
    
    ---
    
---
  
 
# Implementando Redux

- Tener en cuenta las dependencias de Redux  instaladas

Redux permite administrar los “estados” del aplicativo, que hacen referencia a datos (datos del usuario logeado o información de formularios, información de tokenizacion u otros parámetros de seguimiento) que se necesitan gestionar a lo largo de la utilización del la aplicación, a estos datos en seguimiento se les denomina **estados**

---

Para implementar Redux hay que implementar a **Store**, que viene a ser un conjunto de objetos sobre los cuales descansan los estados de la aplicación 

---

También se necesita implementar a **reducers** y a cada “***reducer***” orientado a segmentos o entidades en la App Web

---

Así como también a **actions y** cada **“action”** para cada segmento o entidad de la que se quiera poder gestionar estados

---

- **reducers**: Habilita la **actualización** de estados en base a **eventos**
    - Donde **reducers** escucha ****los eventos realizados a los componentes y envía dichas solicitudes a **actions**
    - Se entiende que debe haber un “***reducer***” por cada segmento o entidad presente en la App Web de la que se quiera gestionar los estados.
    - Cada “***reducer***” será agrupado e instanciado por un **punto de referencia reducer***:* ***index.js*** que instanciara cada **reducer** necesario para el funcionamiento de la App Web
        
        ---
        
- **actions**: Se entienden como componentes o elementos que actualizan los eventos que se hacen sobre los estados (ejecuta la actualización de estados enviada por **reducers**)
    - Cada evento sobre un segmento o entidad del que se tenga el seguimiento en los **estados** deberá ser actualizado por **actions**
    - Se entiende que debe haber un **punto de referencia action**: **types.js** el cual indique los tipos de acciones que habrá sobre cada segmento o entidad de la que se quiere administrar sus estados en la App Web

---

  
Funcionamiento de Store, Reducers, y Actions:



- Sobre **Store** descansa la información de los **estados**, los **reducers** al escuchar que un **evento,** referencian el evento a **Types**, este comunica dicho evento a **actions** por medio de la referencias parametrizadas en **Types**.
    - Cuando hay relación entre el evento escuchado por reducers y la parametrización en Types, se genera la **actualización** de los **estados** en **actions**, la cual es devuelta a los **reducers** y así la **Store** sostiene nuevamente la **información actualizada** de los estados

---

    Muestras:
 
 Login
  
 ![image](https://user-images.githubusercontent.com/52754373/159178748-d6bc978f-688a-4320-a87c-75b8273cade6.png)

Contacts
    
 ![image](https://user-images.githubusercontent.com/52754373/159178795-a9370e71-b524-4d2b-b2ff-62fe2920eb85.png)

  
  
  
  
  
Para el desarrollo de este aplicativo se camino sobre los hombros de 
[Brad Traversy](https://github.com/bradtraversy): 
[Proyecto original aquí](https://github.com/bradtraversy/lead_manager_react_django)
  
