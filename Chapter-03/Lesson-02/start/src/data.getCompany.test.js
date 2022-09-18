import { getCompany } from "./data";

test.skip("Should return not found message when company not found", async () => {
  const company = await getCompany(-99);
  expect(company).toContain("Company Not Found");
})