const path = require('path')
const exec = require('child_process').exec
const assert = require('assert')

const runner = path.join(__dirname, '/../../bin/codecept.js')
// point to the sandbox config dir where you put the codecept conf that references the test file above
const codecept_dir = path.join(__dirname, '/../data/sandbox/configs/afterhook')
const codecept_run = `${runner} run --config ${codecept_dir}/codecept.conf.js `

describe('After hook failure', () => {
  it('should not skip remaining scenarios when After hook throws', done => {
    exec(`${codecept_run} after_hook_fail_test.js --steps`, (err, stdout, stderr) => {
      // all scenarios' log messages must be present (they were executed)
      stdout.should.include('Only Scenario 1 was executed')
      stdout.should.include('Only Scenario 2 was executed')
      stdout.should.include('Only Scenario 3 was executed')

      // the After hook log should appear at least once
      stdout.should.include('after hook failure')

      // Expect that at least one test is reported failed, but remaining scenarios were run.
      // Exact summary text might vary by CodeceptJS version, choose the exact string used in repo tests.
      // For example: "1 failed" or "1 failed, 2 passed"
      stdout.should.match(/1 failed/i)
      stdout.should.match(/2 passed|3 passed|passed/i) // loose check ensuring passed/failed summary present

      // Because a test failed, the runner will exit with non-zero code -> err is truthy
      assert(err)

      done()
    })
  })
})
