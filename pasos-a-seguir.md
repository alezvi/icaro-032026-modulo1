
#### GIT

###### Crear un repositorio localmente (no repetir este paso)

> git init

###### Para agregar los cambios de un archivo

> git add nombre-del-archivo.html

###### Para confirmar los cambios que se agregaron

> git commit -m "mensaje descriptivo explicando el cambio en menos de 10 palabras"

###### Linkear el repositorio local con el remoto (por unica vez)

> git remote add origin git@github.com:alezvi/icaro-032026-modulo1.git

###### Cambiar el nombre de la rama a main (por unica vez)

> git branch -M main

###### Enviando los cambios locales al repositorio remoto

> git push -u origin main

###### Trabajo diario:
```
git status 
git add ...
git commit -m "..."
git push
```

###### Crear una rama 

> git branch "nombre"

###### Ingresar a la rama 

> git checkout "nombre"

###### Primer push 

> git push -u origin nombre

###### Siguientes push

> git push 
