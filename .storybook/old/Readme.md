# Are you old ?
This is the old way to do storybook with different files:
- **config.js** is the entry point which loads the stories with `configure` method imported from _@storybook/react_.
- **addons.js** which declare addons that would be loaded in **config.js** file with `setAddon` method.