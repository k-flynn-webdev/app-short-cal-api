import { logger } from '../logger.js'

export const logError = async (context, next) => {
  try {
    await next()
  } catch (error) {
    logger.error(error)
    logger.error(error.stack)
    // Log validation errors
    if (error.data) {
      logger.error(error.data)
    }

    throw error
  }
}
