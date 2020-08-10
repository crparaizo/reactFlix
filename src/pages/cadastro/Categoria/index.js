import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm'

function CadastroCategoria() {
  const [categorias, setCategoria] = useState([]);

  const valuesIniciais = {
    titulo: '',
    descricao: '',
    cor: '',
  };

  const { handlerChange, values, clearForm } = useForm(valuesIniciais);

  // const [values, setValues] = useState(valuesIniciais); // state que guarda o texto que é digitado

  // function setValor(chave, value) { // parametros recebe chave e value do campo
  //   // chave: titulo, descricao,...
  //   setValues({
  //     ...values,
  //     [chave]: value, // titulo: 'value'
  //   });
  // }

  // // console.log('[values]', values);

  // function handlerChange(infosDoEvento) {
  //   // const { getAttribute, value } = infosDoEvento.target;
  //   // setValor(getAttribute('name'), value);

  //   setValor(infosDoEvento.target.getAttribute('name'), infosDoEvento.target.value);
  // }

  useEffect(() => {
    console.log('Teste'); //o que vai acontecer

    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://candyflix.herokuapp.com/categorias';

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
    //           "titulo": "Front End",
    //           "descricao": "Top",
    //           "cor": "#cbd1ff"
    //         },
    //         {
    //           "id": 1,
    //           "titulo": "Back End",
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
        {values.titulo}
      </h1>

      <form onSubmit={function handlerSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        // console.log('Você tentou enviar')
        setCategoria([
          ...categorias, // itens já armazenados na lista
          values, // novo item
        ]);

        clearForm();
      }}
      >

        <FormField
          label="Título da Categoria"
          value={values.titulo}
          onChange={handlerChange}
          type="text"
          name="titulo"
        />

        <div>

          {/*
          <label>
            titulo da Categoria:
          <input
              type="text"
              name="titulo"
              value={values['titulo']}
              onChange={handlerChange
                //testes:
                // console.log('[values]', values);
                // console.log('[infosDoEvento.target.value]', infosDoEvento.target.value); //target: alvo da mudança que estamos fazendo

                // setValor('titulo',infosDoEvento.target.value);
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
                value={values.descricao}
                name="descricao"
                onChange={handlerChange}
              />
            </label>
          </div> */}

          <FormField
            label="Descrição"
            type="textarea"
            name="descricao"
            value={values.descricao}
            onChange={handlerChange}
          />

          {/* Mudança de BackGround */}
          {/* (form:) style={{background: {tituloDaCategoria}}}

           <input
                type="color"
                value={values}
                onChange={function funcaoHandler(infosDoEvento) {
                  setValues(infosDoEvento.target.value);
                }}
              />
          */}

          {/* <div>
            <label>
              Cor:
          <input
                type="color"
                value={values.cor}
                name="cor"
                onChange={handlerChange}
              />
            </label>
          </div> */}

          <FormField
            label="Cor"
            type="color"
            name="cor"
            value={values.cor}
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
            {categoria.titulo}
          </li>
        ))}
      </ul> */}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
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
