import type { StrapiApp } from '@strapi/strapi/admin';

import logo from "./extensions/logo.png";

const config = {
  locales: ["en", "ru"],
  auth: {
    logo,
  },
  notifications: false,
  menu: {
    logo,
  },
  tutorials: false,
}

const bootstrap = (app: StrapiApp) => {
  console.log(app);
}

export default {
  config,
  bootstrap,
};
