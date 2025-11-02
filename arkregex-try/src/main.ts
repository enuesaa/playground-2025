import { regex } from 'arkregex';

// arkregex
const userIdRegex = regex('^[a-z0-5]{6}$');
console.log('A00 is userID: ', userIdRegex.test('A000'));

// arktype
import { type } from 'arktype';

const userSchema = type({
  name: 'string',
  platform: "'android' | 'ios'",
  versions: '(number | string)[]',
});
type User = typeof userSchema.infer;

const alan = userSchema({
  name: 'alan',
  platform: 'android',
  versions: [0, '1', 0],
});
if (alan instanceof type.errors) {
  console.error(alan.summary);
}
