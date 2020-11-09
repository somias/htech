# HTEC - React Native Mobile Application

After cloning the project, follow these steps:

## Step 1. Install the dependencies

```sh
yarn
```

## Step 2. Install IOS Pods

Option one:

```sh
yarn pod
```

Option two:

```sh
cd ios && pod install
```

Option three:

```sh
npx pod-install ios
```

# App structure:
  
    ├── ...
    ├── src                    # Main folder.
    │   ├── assets             # Assets with global colors and icons.
    │   ├── components         # Reusable components.
        ├── config             # Config with fetch files.
        ├── context            # App News Context.
    │   └── screens            # Screens.
    └── ...

## Folder structure 
 
    ├── index.ts                   # Index.
    ├── Interface.tsx              # Interface as pure component only recevies props and render them.
    ├── Container.tsx              # Container as components logic (Hooks, Fetch data etc.)  
    └── styles.ts                  # Styles.

## Available Scripts

In the project directory, you can run:

### `yarn start` or `npm start`

Runs the application Metro Bundler on port 8081 in the development mode.<br>

### `yarn ios`

Starting IOS mobile application<br>

### `yarn android`

Starting Android mobile application<br>

### `yarn lint`

Runs eslint linter<br>

### `yarn clean:android`

Cleans Android build folder<br>

### `yarn clean:ios`

Cleans iOS build folder<br>

### `yarn clean:start`

Cleans cache of metro builder<br>



