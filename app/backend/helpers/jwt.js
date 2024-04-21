var { expressjwt: jwt } = require("express-jwt");


function authJwt() {
  const secret = process.env.secret;
  const api = process.env.API_URL;

  return jwt({
    secret,
    algorithms: ["HS256"],
  }).unless({
    path: [
      {url: /\/public\/uploads(.*)/ , methods: ['GET', 'OPTIONS'] },
      {url: /\/api\/v1\/produtos(.*)/ , methods: ['GET', 'OPTIONS'] },
      {url: /\/api\/v1\/categorias(.*)/ , methods: ['GET', 'OPTIONS'] },
      {url: /\/api\/v1\/pedidos(.*)/, methods: ['GET', 'OPTIONS', 'POST']},
      `${api}/usuarios/login`,
      `${api}/usuarios/cadastro`,
  ]
  });
}

module.exports = authJwt;