const Eventos = require("../models/eventos");

module.exports = (app) => {
  app.get("/eventos", (_req, res, next) => {
    Eventos.listar()
      .then((resultados) => res.json(resultados))
      .catch((erros) => next(erros));
  });

  app.get("/eventos/:id", (req, res, next) => {
    const id = parseInt(req.params.id);
    Eventos.buscarPorId(id)
      .then((resultado) => {
        if (resultado.length>1) {
          res.json(resultado);
        } else {
          res.status(404).end();
        }
      })
      .catch((erros) => next(erros));
  });

  app.post("/eventos", (req, res, next) => {
    const evento = req.body;
    Eventos.adicionar(evento)
      .then((eventoAdicionado) => res.status(201).json(eventoAdicionado))
      .catch((erros) => next(erros));
  });

  app.put("/eventos/:id", (req, res, next) => {
    const id = parseInt(req.params.id);
    const valores = req.body;
    Eventos.alterar(valores, id)
      .then((resultado) => res.json(resultado))
      .catch((erros) => next(erros));
  });

  app.delete("/eventos/:id", (req, res, next) => {
    const id = parseInt(req.params.id);
    Eventos.excluir(id)
      .then((resultados) => res.json(resultados))
      .catch((erros) => next(erros));
  });

  app.get("/eventos/status/:status", (req, res, next) => {
    const status = req.params.status;
    Eventos.listarPorStatus(status)
      .then((resultados) => res.json(resultados))
      .catch((erros) => next(erros));
  });
};