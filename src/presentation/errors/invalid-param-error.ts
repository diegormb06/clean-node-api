export class InvalidParramError extends Error {
  constructor (paramName: string) {
    super(`Invalid parram: ${paramName}`)
    this.name = 'InvalidParramError'
  }
}
