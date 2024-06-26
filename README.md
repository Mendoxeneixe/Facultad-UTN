### Clonar un repositorio remoto en tu máquina local

```bash
git clone <url_del_repositorio>
```

### Iniciar un nuevo repositorio en un directorio local

```bash
git init
```

### Agregar archivos al área de preparación (staging area) para el próximo commit

```bash
git add <nombre_del_archivo>
```

### Agregar todos los archivos modificados y eliminados al área de preparación

```bash
git add .
```

### Confirmar los cambios con un mensaje descriptivo

```bash
git commit -m "Mensaje del commit"
```

### Ver el estado de los archivos en el repositorio

```bash
git status
```

### Ver el historial de commits

```bash
git log
```

### Crear una nueva rama

```bash
git branch <nombre_de_la_rama>
```

### Cambiar a una rama específica

```bash
git checkout <nombre_de_la_rama>
```

### Crear una nueva rama y cambiar a ella en un solo comando

```bash
git checkout -b <nombre_de_la_rama>
```

### Fusionar una rama específica en la rama actual

```bash
git merge <nombre_de_la_rama>
```

### Descargar los cambios del repositorio remoto al repositorio local

```bash
git pull
```

### Subir cambios locales al repositorio remoto

```bash
git push
```

### Ver la diferencia entre el archivo local y el estado en el repositorio

```bash
git diff <nombre_del_archivo>
```

### Deshacer los cambios en un archivo y restaurarlo al último commit

```bash
git checkout -- <nombre_del_archivo>
```

### Ver la diferencia entre el archivo local y el estado en el repositorio

```bash
git diff <file_name>
```

### Eliminar un archivo del directorio de trabajo y del índice de git

```bash
git rm <file_name>
```

### Restablecer el estado del índice a la última confirmación

```bash
git reset HEAD <file_name>
```

### Deshacer los cambios en el directorio de trabajo

```bash
git checkout -- <file_name>
```

### Ver una lista detallada de los cambios realizados en un archivo

```bash
git log -p <file_name>
```

### Cambiar de rama conservando los cambios sin confirmar en el directorio de trabajo

```bash
git checkout -m <branch_name>
```

### Mostrar estadísticas sobre los archivos modificados y confirmaciones en el repositorio

```bash
git log --stat
```

### Mostrar la diferencia entre dos ramas

```bash
git diff <branch_name1>..<branch_name2>
```

### Eliminar una rama en git

```bash
git branch -d <nombre_de_la_rama>
```

### Si necesitas eliminar la rama de todas formas, incluso si no está completamente fusionada,

### puedes usar -D:

### La opción -D es más agresiva y forzará la eliminación, incluso si hay trabajo sin fusionar.

```bash
git branch -D <nombre_de_la_rama>
```

### Aplicar un parche desde un archivo o una URL

```bash
git apply <patch_file>
```

### Mostrar un resumen de las confirmaciones realizadas por cada colaborador

```bash
git shortlog
```

### Esto agregará un nuevo control remoto con el nombre especificado en lugar de "origin".</span>

```bash
git remote add nombre_deseado URL_del_repositorio_remoto
```

### Actualizar la URL del control remoto existente llamado "origin" con la nueva URL especificada.

```bash
git remote set-url origin nueva_URL
```

### Este comando realiza dos acciones en una sola línea:

### -a: Agrega todos los archivos modificados y eliminados al área de preparación (staging area).

### -m "Mensaje del commit": Agrega un mensaje al commit para describir los cambios realizados.

```bash
git commit -am "Mensaje del commit"
```

### Este comando permite agregar o arreglar el mensaje de un commit

```bash
git commit -amend -m "Mensaje del commit"
```

### Este comando permite deshacer tu último commit

### y el parámetro --soft mantiene los cambios en local

```bash
git reset --soft HEAD~1
```

### Este comando permite deshacer tu último commit

### y el parámetro --hard para borrarlos del todo

```bash
git reset --hard HEAD~1
```

### Si has hecho un push al repositorio tiene arreglo

### hacemos un git log --oneline para buscar el id del commit

```bash
git revert "identificador del commit" ej: b3be3e0369
```

### Este comando eliminará los archivos no rastreados

### que están pendientes de commit

```bash
git clean -f
```

### Este comando eliminará los directorios y archivos no rastreados

### que están pendientes de commit

```bash
git clean -fd
```

---

### **¿Qué es el pip y porque lo actualizamos?**

Pip (Python Package Installer) es una herramienta de gestión de paquetes utilizada para instalar y gestionar bibliotecas y dependencias en proyectos de Python. Es el sistema de gestión de paquetes estándar y más utilizado en el ecosistema de Python.

#

## **¿Por qué se usa pip?**

**• Instalación de paquetes:** Permite instalar fácilmente paquetes desde el Python Package Index (PyPI) y otras fuentes.

**• Gestión de dependencias:** Maneja automáticamente las dependencias de los paquetes, es decir, los paquetes que son necesarios para que funcione el paquete que deseas instalar.

**• Actualización y eliminación de paquetes:** Permite actualizar los paquetes instalados a sus versiones más recientes y también eliminarlos cuando ya no son necesarios.

**• Facilidad de uso:** Proporciona una interfaz de línea de comandos simple y directa para realizar todas estas tareas.

#

## **¿Por qué actualizamos pip?**

**• Nuevas funcionalidades:** Las nuevas versiones de pip pueden incluir nuevas características y mejoras que facilitan su uso y lo hacen más eficiente.

**• Mejoras de rendimiento:** Las actualizaciones a menudo optimizan el rendimiento de pip, haciendo que la instalación y gestión de paquetes sea más rápida y eficiente.

**• Compatibilidad:** Con el tiempo, la infraestructura subyacente y los paquetes de Python evolucionan. Las actualizaciones de pip aseguran que se mantenga compatible con las versiones más recientes de Python y otros paquetes.

**• Corrección de errores:** Las nuevas versiones solucionan errores y problemas conocidos en versiones anteriores, mejorando la estabilidad y confiabilidad de pip.

**• Seguridad:** Las actualizaciones pueden incluir parches de seguridad que protegen contra vulnerabilidades que podrían ser explotadas.

#

## **¿Cómo actualizar pip?**

Actualizar pip es un proceso sencillo que se puede realizar con el siguiente comando:

#

## **En Git Bash**

Colocar en la consola:

pip install --upgrade pip

Este comando descarga e instala la versión más reciente de pip disponible en PyPI.

En resumen, pip es una herramienta esencial para cualquier desarrollador de Python, facilitando enormemente la gestión de paquetes y dependencias. Mantener pip actualizado garantiza que dispongas de las últimas mejoras y correcciones, mejorando así tu entorno de desarrollo.

#

<div>Maximiliano David Tomio</div>
