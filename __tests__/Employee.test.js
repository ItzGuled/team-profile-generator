const Employee = require("../lib/Employee");

test("checks id", () => {
  const employee = new Employee("dillon@email.com", "6400", "dillon");

  expect(employee.id).toBe("6400");
});
