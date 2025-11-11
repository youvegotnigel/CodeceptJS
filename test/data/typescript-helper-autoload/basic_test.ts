Feature('TypeScript Helper Auto-load Test');

Scenario('Load TypeScript helper automatically', async ({ I }) => {
  const greeting = await I.getGreeting('World');
  console.log('Greeting:', greeting);
  
  if (greeting !== 'Hello, World!') {
    throw new Error(`Expected "Hello, World!" but got "${greeting}"`);
  }
});
