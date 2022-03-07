const Manager = require("../lib/Manager");

test("check office number", () => {
  const manager = new Manager("dunbar", "202", "dunbar@email.com", '55');

  expect(manager.officeNumber).toBe("55");
});
