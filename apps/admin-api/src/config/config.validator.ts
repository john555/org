import { plainToInstance, type ClassConstructor } from 'class-transformer'
import { validateSync } from 'class-validator'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const validate = (validations: ClassConstructor<Record<string, any>>, config?: Record<string, unknown>) => {
  const validatedConfig = plainToInstance(validations, config, {
    enableImplicitConversion: true,
  })

  const errors = validateSync(validatedConfig, { skipMissingProperties: false })

  if (errors.length > 0) {
    throw new Error(errors.toString())
  }

  return validatedConfig
}
