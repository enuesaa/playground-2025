import { regex } from 'arkregex'

// arkregex
const userIdRegex = regex('^[a-z0-5]{6}$')
console.log('A00 is userID: ', userIdRegex.test('A000'))

// arktype
import { type } from 'arktype'

const User = type({
  name: 'string',
  platform: "'android' | 'ios'",
  versions: '(number | string)[]',
  'age?': 'number >= 20',
})
type User = typeof User.infer

const alan = User({
  name: 'alan',
  platform: 'android',
  versions: [0, '1', 0],
  age: 19,
})
if (alan instanceof type.errors) {
  console.error(alan.summary) // age must be at least 20 (was 19)
}

const userSchema = User.toJsonSchema()
console.log(userSchema)
/*
{
  '$schema': 'https://json-schema.org/draft/2020-12/schema',
  type: 'object',
  properties: {
    name: { type: 'string' },
    platform: { enum: [Array] },
    versions: { type: 'array', items: [Object] },
    age: { type: 'number', minimum: 20 }
  },
  required: [ 'name', 'platform', 'versions' ]
}
*/
