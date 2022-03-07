const Intern = require("../lib/Intern");

test("check university", () => {
  const intern = new Intern("guled", "200", "guled@this.email.com", 'uofm');

  expect(intern.university).toBe("uofm");
});


