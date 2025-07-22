import type { StrapiApp } from '@strapi/strapi/admin';
import { setPluginConfig } from '@_sh/strapi-plugin-ckeditor';

import {
  defaultHtmlPreset,
} from '@_sh/strapi-plugin-ckeditor';

import type {
  PluginConfig,
} from '@_sh/strapi-plugin-ckeditor';

const myConfig: PluginConfig = {
  presets: [defaultHtmlPreset],
};


export default {
  config: {
    locales: [],
  },
  register() {
    console.log('Registering CKEditor plugin with custom configuration');
    setPluginConfig(myConfig);
  },
 bootstrap(app: StrapiApp) {
   setPluginConfig(myConfig)
  },
};
