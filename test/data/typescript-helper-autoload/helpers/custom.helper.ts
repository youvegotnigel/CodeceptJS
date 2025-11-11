import { AbstractHelper } from './abstract.helper'

interface TestData {
  message: string
  count: number
}

class CustomHelper extends AbstractHelper {
  async logTestData(data: TestData): Promise<void> {
    this.log(`Message: ${data.message}, Count: ${data.count}`)
  }

  getGreeting(name: string): string {
    return `Hello, ${name}!`
  }
}

export default CustomHelper
