import config from '../config'

const URL_VIDEOS = `${config.URL_BACKEND}/videos`

function create(objetoDoVideo) {
    // console.log(config.URL_BACKEND);

    return fetch(`${URL_VIDEOS}?_embed=videos`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(objetoDoVideo), //converte para texto 
    })
        .then(async (respostaDoServidor) => {

            if (respostaDoServidor.ok) {
                const resposta = await respostaDoServidor.json();
                return resposta;
            }    

            throw new Error('Não foi possível cadastrar os dados :(');
            //tratar o erro do servidor não estar funcionando
        });
}

export default {
    create,
}