# Aula Hospitalaria (aula-hospitalaria)

A Quasar Project

## Install the dependencies
```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```


### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).






## Generar Build APK
Doc: https://quasar.dev/quasar-cli-vite/developing-cordova-apps/preparation

npm install -g cordova

### Configurar Variables de Entorno

export ANDROID_HOME="$HOME/Android/Sdk"
export ANDROID_SDK_ROOT="$HOME/Android/Sdk"
export PATH=$PATH:$ANDROID_SDK_ROOT/tools; PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools

### Dentro src-cordova
quasar mode add cordova

cordova platform add [android|ios]

## Checkear si estan todas las dependencias necesarias
cordova requirements

#### BUild COmmand
quasar dev -m [ios|android] // Android
