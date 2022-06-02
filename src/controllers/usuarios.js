const Usuarios = require("../models/usuarios");

module.exports = (app) => {
  app.get("/usuarios", (_req, res, next) => {
    Usuarios.listar()
      .then((resultados) => res.json(resultados))
      .catch((erros) => next(erros));
  });

  app.get("/usuarios/:id", (req, res, next) => {
    const id = parseInt(req.params.id);
    Usuarios.buscarPorId(id)
      .then((resultado) => {
        if (resultado.length > 1) {
          res.json(resultado);
        } else {
          res.status(404).end();
        }
      })
      .catch((erros) => next(erros));
  });

  app.post("/usuarios", (req, res, next) => {
    const usuario = req.body;
    Usuarios.adicionar(usuario)
      .then((resultado) => res.status(201).json(resultado))
      .catch((erros) => next(erros));
  });

  app.put("/usuarios/:id", (req, res, next) => {
    const id = parseInt(req.params.id);
    const valores = req.body;
    Usuarios.alterar(valores, id)
      .then((resultado) => res.json(resultado))
      .catch((erros) => next(erros));
  });

  app.delete("/usuarios/:id", (req, res, next) => {
    const id = parseInt(req.params.id);
    Usuarios.excluir(id)
      .then((resultados) => res.json(resultados))
      .catch((erros) => next(erros));
  });

  app.get("/usuarios/nome/:nome", (req, res, next) => {
    const nome = req.params.nome;
    Usuarios.buscarPorNome(nome)
      .then((resultado) => res.json(resultado))
      .catch((erros) => next(erros));
  });

  app.get("/usuarios/:id/dados-pessoais", (req, res, next) => {
    const id = parseInt(req.params.id);
    Usuarios.buscarDadosPessoais(id)
      .then((resultado) => res.json(resultado))
      .catch((erros) => next(erros));
  });

  app.get("/usuarios/:id/contatos", (req, res, next) => {
    const id = parseInt(req.params.id);
    Usuarios.buscarContatos(id)
      .then((resultado) => res.json(resultado))
      .catch((erros) => next(erros));
  });

  app.get("/usuarios/:id/endereco", (req, res, next) => {
    const id = parseInt(req.params.id);
    Usuarios.buscarEndereco(id)
      .then((resultado) => res.json(resultado))
      .catch((erros) => next(erros));
  });

  app.put("/usuarios/:id/dados-pessoais", (req, res, next) => {
    const id = parseInt(req.params.id);
    const valores = req.body;
    Usuarios.alterarDadosPessoais(valores, id)
      .then((resultado) => res.json(resultado))
      .catch((erros) => erros.codigo == 1 ? res.status(400).json({ cpf: "Cpf inválido" }) : next(erros));
  });

  app.put("/usuarios/:id/contatos", (req, res, next) => {
    const id = parseInt(req.params.id);
    const valores = req.body;
    Usuarios.alterarContatos(valores, id)
      .then((resultado) => res.json(resultado))
      .catch((erros) => next(erros));
  });

  app.put("/usuarios/:id/endereco", (req, res, next) => {
    const id = parseInt(req.params.id);
    const valores = req.body;
    Usuarios.alterarEndereco(valores, id)
      .then((resultado) => res.json(resultado))
      .catch((erros) => next(erros));
  });

  app.put("/usuarios/:id/senha", (req, res, next) => {
    const id = parseInt(req.params.id);
    const valores = req.body;
    Usuarios.alterarSenha(valores, id)
      .then(() => res.json({ "senha": "Senha alterada com sucesso" }))
      .catch((erros) => next(erros));
  });
};
