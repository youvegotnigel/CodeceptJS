import Helper from '@codeceptjs/helper';

interface TestData {
  message: string;
  count: number;
}

class CustomHelper extends Helper {
  async logTestData(data: TestData): Promise<void> {
    console.log(`Message: ${data.message}, Count: ${data.count}`);
  }

  getGreeting(name: string): string {
    return `Hello, ${name}!`;
  }
}

export default CustomHelper;
