import { Core } from '@strapi/strapi';

import { IUserStrapi } from '../../../../shared';

export class UserStrapiRepository {
  constructor(private readonly strapi: Core.Strapi) {}

  async findUsers(): Promise<IUserStrapi[]> {
    return (await this.strapi.db.query('admin::user').findMany()) as IUserStrapi[];
  }
}
