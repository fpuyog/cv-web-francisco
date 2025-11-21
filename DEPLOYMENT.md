# Despliegue en GitHub Pages

Este documento describe cómo desplegar este proyecto en GitHub Pages.

## Configuración Inicial

### 1. Configurar GitHub Pages en el Repositorio

Antes de que el workflow pueda desplegar exitosamente, debes configurar GitHub Pages en tu repositorio:

1. Ve a tu repositorio en GitHub: `https://github.com/fpuyog/cv-web-francisco`
2. Haz clic en **Settings** (Configuración)
3. En el menú lateral, haz clic en **Pages**
4. En la sección **Source** (Origen), selecciona **GitHub Actions**
5. Guarda los cambios

### 2. Verificar Permisos del Workflow

El archivo `.github/workflows/deploy.yml` ya está configurado con los permisos necesarios:

```yaml
permissions:
  contents: read
  pages: write
  id-token: write
```

## Proceso de Despliegue

### Despliegue Automático

El sitio se despliega automáticamente cuando se hace push a las ramas `main` o `master`:

1. Realiza cambios en tu código local
2. Haz commit de los cambios:
   ```bash
   git add .
   git commit -m "Descripción de los cambios"
   ```
3. Haz push al repositorio:
   ```bash
   git push origin main
   ```
4. GitHub Actions ejecutará automáticamente el workflow de despliegue

### Verificar el Despliegue

Después de hacer push:

1. Ve a tu repositorio en GitHub
2. Haz clic en la pestaña **Actions**
3. Verás el workflow "Deploy to GitHub Pages" en ejecución
4. El workflow tiene dos jobs:
   - **build**: Compila el proyecto
   - **deploy**: Despliega a GitHub Pages
5. Una vez completado (✅), tu sitio estará disponible en:
   ```
   https://fpuyog.github.io/cv-web-francisco/
   ```

## Solución de Problemas

### El job "deploy" falla

Si el job de deploy falla:

1. Verifica que GitHub Pages esté configurado en **GitHub Actions** (ver paso 1 arriba)
2. Verifica que el workflow tenga los permisos correctos
3. Revisa los logs del workflow en la pestaña Actions para más detalles

### La página no se actualiza

Si hiciste cambios pero la página no se actualiza:

1. Verifica que el workflow se haya ejecutado exitosamente
2. Espera unos minutos (GitHub Pages puede tardar en actualizar)
3. Limpia la caché de tu navegador (Ctrl + F5)

## Desarrollo Local

Para probar el sitio localmente antes de desplegarlo:

```bash
# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm run dev

# El sitio se abrirá en http://localhost:3000
```

Para crear una build de producción local:

```bash
npm run build
```

Los archivos se generarán en la carpeta `dist/`.
