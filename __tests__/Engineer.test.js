const Engineer = require("../lib/Engineer");

test("name", () => {
  const engineer = new Engineer("guled", "200", "guled@email.com");

  expect(engineer.name).toBe("guled");
});
