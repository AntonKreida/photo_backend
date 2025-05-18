import { Core } from '@strapi/strapi';

import { IUserStrapi } from '../../../../shared';

export class UserStrapiRepository {
  #strapi: Core.Strapi

  constructor( strapi: Core.Strapi) {
    this.#strapi = strapi
  }

  async findUsers(): Promise<IUserStrapi[]> {
    return (await this.#strapi.db.query('admin::user').findMany()) as IUserStrapi[];
  }
}
