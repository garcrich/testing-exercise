import { isUrl, isEmail } from "./validators";

describe('Email validations', () => {
  test("isEmail should return true when valid email", () => {
    expect(isEmail("someone@somewhere.com")).toBe(true);
  });
  
  test("invalid emailisEmail should return false when invalid email", () => {
    expect(isEmail("someone")).toBe(false);
  });
});

describe('Url validations', () => {
  test("isUrl should return true when valid url", () => {
    expect(isUrl("https://www.google.com")).toBe(true);
  });
  
  test("isUrl should return false when invalid url", () => {
    expect(isUrl("google")).toBe(false);
  });
});
