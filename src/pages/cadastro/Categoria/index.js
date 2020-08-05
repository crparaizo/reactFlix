import React, { useState } from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'
import FormField from '../../../components/FormField'

function CadastroCategoria() {

  const [categorias, setCategoria] = useState([]);

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: ''
  }

  const [valores, setValores] = useState(valoresIniciais); //state que guarda o texto que é digitado

  function setValor(chave, valor) { //parametros recebe chave e valor do campo

    //chave: nome, descricao,...
    setValores({
      ...valores,
      [chave]: valor //nome: 'valor'
    })
  }

  // console.log('[valores]', valores);

  function handlerChange(infosDoEvento) {

    // const { getAttribute, valor } = infosDoEvento.target;
    // setValor(getAttribute('name'), valor);

    setValor(infosDoEvento.target.getAttribute('name'), infosDoEvento.target.value);
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria {valores.nome} </h1>

      <form onSubmit={function handlerSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        // console.log('Você tentou enviar')
        setCategoria([
          ...categorias, //itens já armazenados na lista 
          valores //novo item
        ]);

        setValores(valoresIniciais)
      }}>

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
            type="text"
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

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para Home
            </Link>
    </PageDefault>
  )
}

export default CadastroCategoria