const generateAbout = (teamArr) => {
  return `

        ${teamArr
          .filter((manager) => manager.getRole() === "Manager")
          .map(({ name, id, email, officeNumber }) => {
            return `
            <div class="card" style="width: 18rem">
            <div class="card-body">
            <div class="bg-primary  p-2 px-3 text-white">
            <h5 class="card-title">${name}</h5>
            <h6 class="card-subtitle mb-2 text-white">
            <i class="icofont-coffee-mug"></i>
            Manager</h6>
            </div>
            <ul class="list-unstyled">
            <li>ID: ${id} </li>
            Email:
            <a  href="mailto:${email}" class="text-decoration-none">${email}</a>
            <li> Office Number: ${officeNumber}</li>
            </ul>
            </div>
            </div>
          `;
          })
          .join("")}
  
          ${teamArr
            .filter((engineer) => engineer.getRole() === "Engineer")
            .map(({ name, id, email, github }) => {
              return `
              <div class="card" style="width: 18rem">
              <div class="card-body">
              <div class="bg-primary p-2 px-3 text-white">
              <h5 class="card-title">${name}</h5>
              <h6 class="card-subtitle mb-2 text-white">
              <span class="icofont-binoculars"></span>
              Engineer</h6>
              </div>
              <ul class="list-unstyled">
              <li>ID: ${id} </li>
              Email: 
              <a href="mailto:${email}" class="text-decoration-none">${email}</a><br>
              GitHub:
              <a href="https://www.github.com/${github}" class="text-decoration-none"> ${github}</a>
              </ul>
              </div>
              </div>
            `;
            })
            .join("")}

            ${teamArr
              .filter((intern) => intern.getRole() === "Intern")
              .map(({ name, id, email, university }) => {
                return `
                  <div class="card" style="width: 18rem">
                  <div class="card-body">
                  <div class="bg-primary p-2 px-3 text-white">
                  <h5 class="card-title">${name}</h5>
                  <h6 class="card-subtitle mb-2 text-white">
                  <span class="icofont-graduate-alt"></span>
                  Intern</h6>
                  </div>
                  <ul class="list-unstyled">
                  <li>ID: ${id} </li>
                  Email: 
                  <a href="mailto:${email}" class="text-decoration-none">${email}</a>
                  <li> School: ${university}</li>
                  </ul>
                  </div>
                  </div>
                `;
              })
              .join("")}
      
        </div>
      </section>
    `;
};
module.exports = (Data) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <link rel="stylesheet" href="./icofont/icofont.min.css" />
        </head>
      <body>
      <header>
        
          <h1 class="page-title text-white text-center bg-danger p-4 px-5">My Team</h1>
        </header>
      <main class="row d-flex justify-content-around list-unstyled ">
        ${generateAbout(Data)}
      </main>
      <footer>
    
      </footer>
    </body>
    </html>
    `;
};
