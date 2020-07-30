export class MissingParamError extends Error {
  constructor (paramError: string) {
    super(`Missing parram: ${paramError}`)
    this.name = 'MissingParamError'
  }
}
