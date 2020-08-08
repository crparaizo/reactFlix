import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const [categorias, setCategoria] = useState([]);

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [valores, setValores] = useState(valoresIniciais); // state que guarda o texto que é digitado

  function setValor(chave, valor) { // parametros recebe chave e valor do campo
    // chave: nome, descricao,...
    setValores({
      ...valores,
      [chave]: valor, // nome: 'valor'
    });
  }

  // console.log('[valores]', valores);

  function handlerChange(infosDoEvento) {
    // const { getAttribute, valor } = infosDoEvento.target;
    // setValor(getAttribute('name'), valor);

    setValor(infosDoEvento.target.getAttribute('name'), infosDoEvento.target.value);
  }

  useEffect(() => {
    console.log('asdf'); //o que vai acontecer

    const URL = 'http://localhost:8080/categorias';
    fetch(URL)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategoria([
          ...resposta,
        ]);
      });

    //   setTimeout(
    //     () => {
    //       setCategoria([
    //         ...categorias, {
    //           "id": 1,
    //           "nome": "Front End",
    //           "descricao": "Top",
    //           "cor": "#cbd1ff"
    //         },
    //         {
    //           "id": 1,
    //           "nome": "Back End",
    //           "descricao": "Eita",
    //           "cor": "#cbd1ff"
    //         }
    //       ]);
    //     }, 4 * 1000);
  }, []); //quando irá mudar

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria
        {valores.nome}
      </h1>

      <form onSubmit={function handlerSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        // console.log('Você tentou enviar')
        setCategoria([
          ...categorias, // itens já armazenados na lista
          valores, // novo item
        ]);

        setValores(valoresIniciais);
      }}
      >

        <FormField
          label="Nome da Categoria"
          value={valores.nome}
          onChange={handlerChange}
          type="text"
          name="nome"
        />

        <div>

          {/*
          <label>
            Nome da Categoria:
          <input
              type="text"
              name="nome"
              value={valores['nome']}
              onChange={handlerChange
                //testes:
                // console.log('[valores]', valores);
                // console.log('[infosDoEvento.target.value]', infosDoEvento.target.value); //target: alvo da mudança que estamos fazendo

                // setValor('nome',infosDoEvento.target.value);
                //ou
                // setValor(infosDoEvento.target.getAttribute('name'), infosDoEvento.target.value);
              }
            />
          </label> */}

          {/* <div>
            <label>
              Descrição:
          <textarea
                type="text"
                value={valores.descricao}
                name="descricao"
                onChange={handlerChange}
              />
            </label>
          </div> */}

          <FormField
            label="Descrição"
            type="textarea"
            name="descricao"
            value={valores.descricao}
            onChange={handlerChange}
          />

          {/* Mudança de BackGround */}
          {/* (form:) style={{background: {nomeDaCategoria}}}

           <input
                type="color"
                value={valores}
                onChange={function funcaoHandler(infosDoEvento) {
                  setValores(infosDoEvento.target.value);
                }}
              />
          */}

          {/* <div>
            <label>
              Cor:
          <input
                type="color"
                value={valores.cor}
                name="cor"
                onChange={handlerChange}
              />
            </label>
          </div> */}

          <FormField
            label="Cor"
            type="color"
            name="cor"
            value={valores.cor}
            onChange={handlerChange}
          />

        </div>

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Loading
        </div>
      )}

      {/* <ul>
        {categorias.map((categoria, indice) => (
          <li key={`${categoria}${indice}`}>
            {categoria.nome}
          </li>
        ))}
      </ul> */}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
