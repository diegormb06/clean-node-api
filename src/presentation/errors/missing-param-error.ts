export class MissingParramError extends Error {
  constructor (paramError: string) {
    super(`Missing parram: ${paramError}`)
    this.name = 'MissingParramError'
  }
}
