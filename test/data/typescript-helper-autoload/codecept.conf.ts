export const config: CodeceptJS.MainConfig = {
  tests: './*_test.ts',
  output: './output',
  require: ['tsx/cjs'],
  helpers: {
    CustomHelper: {
      require: './helpers/custom.helper.ts'
    }
  },
  include: {},
  name: 'typescript-helper-autoload'
};
