import config from '../config'

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`

function getAll() {

    return fetch(`${URL_CATEGORIES}`)
        .then(async (respostaDoServidor) => {

            if (respostaDoServidor.ok) {
                const resposta = await respostaDoServidor.json();
                return resposta;
            }

            throw new Error ('Não foi possível pegar os dados :(');
        });
}

function getAllWithVideos() {
    // console.log(config.URL_BACKEND);

    return fetch(`${URL_CATEGORIES}?_embed=videos`)
        .then(async (respostaDoServidor) => {

            if (respostaDoServidor.ok) {
                const resposta = await respostaDoServidor.json();
                return resposta;
            }

            throw new Error ('Não foi possível pegar os dados :(');
            //tratar o erro do servidor não estar funcionando
        });
}

export default {
    getAllWithVideos,
    getAll
}