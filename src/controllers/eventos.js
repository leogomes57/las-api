const Eventos = require("../models/eventos");
const moment = require("moment");

module.exports = (app) => {
  app.get("/moment", (req, res) => {
    // https://momentjs.com/guides/#/parsing/
    // formato da data em constante, pois vai ser utilizado várias vezes
    const FORMATO_DA_DATA = "DD-MM-YYYY";
    //obtenção da dataInicio e dataFim via query param
    //ex: localhost:3000/moment?dataInicio=05-05-2022&dataFim=12-05-2022
    var dataInicio = req.query.dataInicio;
    var dataFim = req.query.dataFim;
    var momentInicioDoDia = moment().startOf("day");

    // data em string transformada em objeto moment
    var dataInicioConvertida = moment(dataInicio, FORMATO_DA_DATA);
    var dataFimConvertida = moment(dataFim, FORMATO_DA_DATA);

    // var dataConvertida = moment(dataInicio, "DD-MM-YYYY");
    // var dataEhValida = moment(dataInicio, "DD-MM-YYYY", true).isValid();
    // var dataPorExtenso = dataConvertida.format("Do MMMM YYYY");
    res.send({
      dataRecebida: dataInicioConvertida,
      // dataInicioConvertida >= momentInicioDoDia
      dataInicioEhMaiorOuIgualAHoje:
        dataInicioConvertida.isSameOrAfter(momentInicioDoDia),
      // dataFimConvertida >= dataInicioConvertida
      dataFimEhMaiorOuIgualADataInicio:
        dataFimConvertida.isSameOrAfter(dataInicioConvertida),
      // dataCriadaAgora: moment(),
      // dataConvertida: dataConvertida,
      // typeOfDataConvertida: typeof dataConvertida,
      // dataPorExtenso: dataPorExtenso,
      // tipoDataDoJavascript: dataConvertida.toDate(),
      // dataEhValida,
    });
  });

  app.get("/eventos", (req, res, next) => {
    Eventos.listar()
      .then((resultados) => res.json(resultados))
      .catch((erros) => next(erros));
  });

  app.get("/eventos/:id", (req, res, next) => {
    const id = parseInt(req.params.id);
    Eventos.buscarPorId(id)
      .then((resultado) => {
        if (resultado) {
          res.json(resultado);
        } else {
          res.status(404).end();
        }
      })
      .catch((erros) => next(erros));
  });

  app.put("/eventos/:id", (req, res, next) => {
    const id = parseInt(req.params.id);
    const valores = req.body;
    Eventos.alterar(valores, id)
      .then((resultado) => {
        if (resultado) {
          res.json(resultado);
        } else {
          res.status(404).end();
        }
      })
      .catch((erros) => next(erros));
  });

  app.delete("/eventos/:id", (req, res, next) => {
    const id = parseInt(req.params.id);
    Eventos.excluir(id)
      .then((resultados) => res.json(resultados))
      .catch((erros) => next(erros));
  });
};
