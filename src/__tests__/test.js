import Validator from '../js/app';

test('Все верно', () => {
  const username = new Validator();
  const received = username.validateUsername('Kitten_777-Pro');
  expect(received).toEqual(true);
});

test('Неверный символ', () => {
  const username = new Validator();
  const received = username.validateUsername('Kitten_777$Pro');
  expect(received).toEqual(false);
});

test('Русский текст', () => {
  const username = new Validator();
  const received = username.validateUsername('Котенок_777-Pro');
  expect(received).toEqual(false);
});

test('Больше 3 цифр подряд', () => {
  const username = new Validator();
  const received = username.validateUsername('Kitten_7777-Pro');
  expect(received).toEqual(false);
});

test('Начинается с числа', () => {
  const username = new Validator();
  const received = username.validateUsername('7Kitten_777-Pro');
  expect(received).toEqual(false);
});

test('Начинается с тире', () => {
  const username = new Validator();
  const received = username.validateUsername('-Kitten_777-Pro');
  expect(received).toEqual(false);
});

test('Начинается с подчеркивания', () => {
  const username = new Validator();
  const received = username.validateUsername('_Kitten_777-Pro');
  expect(received).toEqual(false);
});

test('Заканчивается числом', () => {
  const username = new Validator();
  const received = username.validateUsername('Kitten_777-Pro7');
  expect(received).toEqual(false);
});

test('Заканчивается тире', () => {
  const username = new Validator();
  const received = username.validateUsername('Kitten_777-Pro-');
  expect(received).toEqual(false);
});

test('Заканчивается подчеркиванием', () => {
  const username = new Validator();
  const received = username.validateUsername('Kitten_777-Pro_');
  expect(received).toEqual(false);
});
