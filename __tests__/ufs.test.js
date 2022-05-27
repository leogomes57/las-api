const supertest = require("supertest");
const customExpress = require("../src/config/customExpress");
const request = supertest(customExpress());

jest.mock("../src/repositorios/ufs");

describe("API UFs", () => {
    test("Consultar lista de UFS", async () => {
        const resp = await request.get("/ufs");
        expect(resp.statusCode).toBe(200);
        expect(resp.body).toEqual(["RO", "AC", "AM", "RR", "PA", "AP", "TO", "MA", "PI", "CE", "RN", "PB", "PE", "AL", "SE", "BA", "MG", "ES", "RJ", "SP", "PR", "SC", "RS", "MS"]);
    });
    test("Consultar lista de municipios por UF", async () => {
        const resp = await request.get("/ufs/ba/municipios");
        expect(resp.statusCode).toBe(200);
        expect(resp.body).toEqual(["Abaíra", "Abaré",
            "Acajutiba", "Adustina",
            "Água Fria", "Érico Cardoso", "Aiquara", "Alagoinhas", "Alcobaça",
            "Almadina", "Amargosa", "Amélia Rodrigues", "América Dourada", "Anagé", "Andaraí", "Andorinha",
            "Angical", "Anguera", "Antas", "Antônio Cardoso", "Antônio Gonçalves", "Aporá", "Apuarema", "Aracatu",
            "Araçás", "Araci", "Aramari", "Arataca", "Aratuípe", "Aurelino Leal", "Baianópolis",
            "Baixa Grande", "Banzaê", "Barra", "Barra da Estiva", "Barra do Choça", "Barra do Mendes",
            "Barra do Rocha", "Barreiras", "Barro Alto", "Barrocas", "Barro Preto", "Belmonte", "Belo Campo",
            "Biritinga", "Boa Nova", "Boa Vista do Tupim", "Bom Jesus da Lapa", "Bom Jesus da Serra", "Boninal",
            "Bonito", "Boquira", "Botuporã", "Brejões", "Brejolândia", "Brotas de Macaúbas", "Brumado",
            "Buerarema", "Buritirama", "Caatiba", "Cabaceiras do Paraguaçu", "Cachoeira", "Caculé", "Caém",
            "Caetanos", "Caetité", "Cafarnaum", "Cairu", "Caldeirão Grande", "Camacan", "Camaçari", "Camamu",
            "Campo Alegre de Lourdes", "Campo Formoso", "Canápolis", "Canarana", "Canavieiras", "Candeal",
            "Candeias", "Candiba", "Cândido Sales", "Cansanção", "Canudos", "Capela do Alto Alegre",
            "Capim Grosso", "Caraíbas", "Caravelas", "Cardeal da Silva", "Carinhanha", "Casa Nova",
            "Castro Alves", "Catolândia", "Catu", "Caturama", "Central", "Chorrochó", "Cícero Dantas",
            "Cipó", "Coaraci", "Cocos", "Conceição da Feira", "Conceição do Almeida", "Conceição do Coité", "Conceição do Jacuípe", "Conde", "Condeúba", "Contendas do Sincorá", "Coração de Maria", "Cordeiros", "Coribe", "Coronel João Sá", "Correntina", "Cotegipe", "Cravolândia", "Crisópolis", "Cristópolis", "Cruz das Almas", "Curaçá", "Dário Meira", "Dias d'Ávila", "Dom Basílio", "Dom Macedo Costa", "Elísio Medrado", "Encruzilhada", "Entre Rios", "Esplanada", "Euclides da Cunha", "Eunápolis", "Fátima", "Feira da Mata", "Feira de Santana", "Filadélfia", "Firmino Alves", "Floresta Azul", "Formosa do Rio Preto", "Gandu", "Gavião", "Gentio do Ouro", "Glória", "Gongogi", "Governador Mangabeira", "Guajeru", "Guanambi", "Guaratinga",
            "Heliópolis", "Iaçu", "Ibiassucê", "Ibicaraí", "Ibicoara", "Ibicuí", "Ibipeba", "Ibipitanga",
            "Ibiquera", "Ibirapitanga", "Ibirapuã", "Ibirataia", "Ibitiara", "Ibititá", "Ibotirama", "Ichu", "Igaporã",
            "Igrapiúna", "Iguaí", "Ilhéus", "Inhambupe", "Ipecaetá", "Ipiaú", "Ipirá", "Ipupiara", "Irajuba", "Iramaia",
            "Iraquara", "Irará", "Irecê", "Itabela", "Itaberaba", "Itabuna", "Itacaré", "Itaeté", "Itagi", "Itagibá",
            "Itagimirim", "Itaguaçu da Bahia", "Itaju do Colônia", "Itajuípe", "Itamaraju", "Itamari", "Itambé",
            "Itanagra", "Itanhém", "Itaparica", "Itapé", "Itapebi", "Itapetinga", "Itapicuru", "Itapitanga", "Itaquara",
            "Itarantim", "Itatim", "Itiruçu", "Itiúba", "Itororó", "Ituaçu", "Ituberá", "Iuiu", "Jaborandi", "Jacaraci",
            "Jacobina", "Jaguaquara", "Jaguarari", "Jaguaripe", "Jandaíra", "Jequié", "Jeremoabo", "Jiquiriçá", "Jitaúna", "João Dourado", "Juazeiro", "Jucuruçu", "Jussara", "Jussari", "Jussiape", "Lafaiete Coutinho", "Lagoa Real", "Laje", "Lajedão", "Lajedinho", "Lajedo do Tabocal", "Lamarão", "Lapão", "Lauro de Freitas", "Lençóis", "Licínio de Almeida", "Livramento de Nossa Senhora", "Luís Eduardo Magalhães", "Macajuba", "Macarani", "Macaúbas", "Macururé", "Madre de Deus", "Maetinga", "Maiquinique", "Mairi", "Malhada", "Malhada de Pedras", "Manoel Vitorino", "Mansidão", "Maracás", "Maragogipe", "Maraú", "Marcionílio Souza", "Mascote", "Mata de São João", "Matina", "Medeiros Neto", "Miguel Calmon", "Milagres", "Mirangaba", "Mirante", "Monte Santo", "Morpará", "Morro do Chapéu", "Mortugaba", "Mucugê", "Mucuri", "Mulungu do Morro", "Mundo Novo", "Muniz Ferreira", "Muquém do São Francisco", "Muritiba", "Mutuípe", "Nazaré", "Nilo Peçanha", "Nordestina", "Nova Canaã", "Nova Fátima", "Nova Ibiá", "Nova Itarana", "Nova Redenção", "Nova Soure", "Nova Viçosa", "Novo Horizonte", "Novo Triunfo", "Olindina", "Oliveira dos Brejinhos", "Ouriçangas", "Ourolândia", "Palmas de Monte Alto", "Palmeiras", "Paramirim", "Paratinga", "Paripiranga", "Pau Brasil", "Paulo Afonso", "Pé de Serra", "Pedrão", "Pedro Alexandre", "Piatã", "Pilão Arcado", "Pindaí", "Pindobaçu", "Pintadas", "Piraí do Norte", "Piripá", "Piritiba", "Planaltino", "Planalto", "Poções", "Pojuca", "Ponto Novo", "Porto Seguro", "Potiraguá", "Prado", "Presidente Dutra", "Presidente Jânio Quadros", "Presidente Tancredo Neves", "Queimadas", "Quijingue", "Quixabeira", "Rafael Jambeiro", "Remanso", "Retirolândia", "Riachão das Neves", "Riachão do Jacuípe", "Riacho de Santana", "Ribeira do Amparo", "Ribeira do Pombal", "Ribeirão do Largo", "Rio de Contas", "Rio do Antônio", "Rio do Pires", "Rio Real", "Rodelas", "Ruy Barbosa", "Salinas da Margarida", "Salvador", "Santa Bárbara", "Santa Brígida", "Santa Cruz Cabrália", "Santa Cruz da Vitória", "Santa Inês", "Santaluz", "Santa Luzia", "Santa Maria da Vitória", "Santana", "Santanópolis", "Santa Rita de Cássia", "Santa Terezinha", "Santo Amaro", "Santo Antônio de Jesus", "Santo Estêvão", "São Desidério", "São Domingos", "São Félix", "São Félix do Coribe", "São Felipe", "São Francisco do Conde", "São Gabriel", "São Gonçalo dos Campos", "São José da Vitória",
            "São José do Jacuípe", "São Miguel das Matas", "São Sebastião do Passé", "Sapeaçu", "Sátiro Dias", "Saubara", "Saúde", "Seabra", "Sebastião Laranjeiras", "Senhor do Bonfim", "Serra do Ramalho", "Sento Sé", "Serra Dourada", "Serra Preta", "Serrinha", "Serrolândia", "Simões Filho", "Sítio do Mato", "Sítio do Quinto", "Sobradinho", "Souto Soares", "Tabocas do Brejo Velho", "Tanhaçu", "Tanque Novo", "Tanquinho", "Taperoá", "Tapiramutá", "Teixeira de Freitas", "Teodoro Sampaio", "Teofilândia", "Teolândia", "Terra Nova", "Tremedal", "Tucano", "Uauá", "Ubaíra", "Ubaitaba", "Ubatã", "Uibaí", "Umburanas", "Una", "Urandi", "Uruçuca", "Utinga", "Valença", "Valente", "Várzea da Roça", "Várzea do Poço", "Várzea Nova", "Varzedo", "Vera Cruz", "Vereda", "Vitória da Conquista", "Wagner", "Wanderley", "Wenceslau Guimarães", "Xique-Xique"]);
    });
});