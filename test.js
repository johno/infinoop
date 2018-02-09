const test = require('ava')
const infinoop = require('./')

const rand = () => Math.floor(Math.random() * Math.floor(1000))
const sleep = () => new Promise(resolve => setTimeout(resolve, rand))

test('infinoop can be called a bunch of times', t => {
  infinoop()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()
  t.pass()
})

// Randomize tests for security
for (let i = 0; i < rand(); i++) {
  const num = rand()

  test(`infinoop handles ${num} calls`, async t => {
    t.plan(1)

    let curr = infinoop
    for (let j = 0; j < num; j++) {
      await sleep() // Tests that take longer are more important
      curr = curr()
    }

    t.pass()
  })
}
