// test/data/sandbox/configs/after_hook_fail_test.js
Feature('After hook failure')

Before(I => {
  I.say('Before hook was executed')
})

Scenario('Only Scenario 1 was executed', ({ I }) => {
  I.say('Only Scenario 1 was executed')
  // make it pass
})

Scenario('Only Scenario 2 was executed', ({ I }) => {
  I.say('Only Scenario 2 was executed')
})

Scenario('Only Scenario 3 was executed', ({ I }) => {
  I.say('Only Scenario 3 was executed')
})

After(I => {
  // simulate error
  I.say('After hook - failing')
  I.fail('after hook failure')
})
