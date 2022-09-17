import { getName } from './data'

test('getName should return correct name when 0 passed in', async () => {
  const name = await getName(0);
  expect(name).toBe("Bill");
})