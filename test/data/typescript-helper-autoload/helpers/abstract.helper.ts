import Helper from '@codeceptjs/helper'

export abstract class AbstractHelper extends Helper {
  protected getHelperName(): string {
    return this.constructor.name
  }

  protected log(message: string): void {
    console.log(`[${this.getHelperName()}] ${message}`)
  }
}
