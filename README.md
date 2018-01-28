##MagicCards

MagicCards project is based on creating you own quiz deck. There are two views Deck View and Add View. In Add view you can create you own deck and number of deck could be found on view deck.


This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).


##Steps to install the project.

### `npm install`

Install all the dependencies

### `npm start or yarn start`
```
npm start -- --reset-cache
# or
yarn start -- --reset-cache
```
#### `npm run ios`

Or press "i" when bundle is loaded.


## Environment Variables

You can configure some of Create React Native App's behavior using environment variables.

### Configuring Packager IP Address

When starting your project, you'll see something like this for your project URL:

```
exp://192.168.0.2:19000
```

The "manifest" at that URL tells the Expo app how to retrieve and load your app's JavaScript bundle, so even if you load it in the app via a URL like `exp://localhost:19000`, the Expo client app will still try to retrieve your app at the IP address that the start script provides.

In some cases, this is less than ideal. This might be the case if you need to run your project inside of a virtual machine and you have to access the packager via a different IP address than the one which prints by default. In order to override the IP address or hostname that is detected by Create React Native App, you can specify your own hostname via the `REACT_NATIVE_PACKAGER_HOSTNAME` environment variable:

Mac and Linux:

```
REACT_NATIVE_PACKAGER_HOSTNAME='my-custom-ip-address-or-hostname' npm start
```


The above example would cause the development server to listen on `exp://my-custom-ip-address-or-hostname:19000`.
