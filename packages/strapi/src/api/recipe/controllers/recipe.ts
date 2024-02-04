/**
 * recipe controller
 */

import { factories } from '@strapi/strapi'

// export default factories.createCoreController('api::recipe.recipe');

export default factories.createCoreController('api::recipe.recipe', ({ strapi }) => ({
  async findOne(ctx) {
    const { id } = ctx.params
    const entity = await strapi.db.query('api::recipe.recipe').findOne({
      where: { slug: id },
      populate: ['img', 'tags'],
    })
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx)
    return this.transformResponse(sanitizedEntity)
  }
}));