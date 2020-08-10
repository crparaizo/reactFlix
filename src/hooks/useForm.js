import {useState} from 'react';

export default function useForm(valuesIniciais) { //Customizar o que será manipulado

    const [values, setValores] = useState(valuesIniciais);
  
    function setValor(chave, valor) {
      setValores({
        ...values,
        [chave]: valor,
      });
    }
  
    function handlerChange(infosDoEvento) {
      setValor(infosDoEvento.target.getAttribute('name'), infosDoEvento.target.value);
    }
  
    function clearForm() {
      setValores(valuesIniciais);
    }
  
    return {
      values,
      handlerChange,
      clearForm
    }
  }