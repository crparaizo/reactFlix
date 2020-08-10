import React, { useState, useEffect } from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link, useHistory } from 'react-router-dom'
import useForm from '../../../hooks/useForm'
import FormField from '../../../components/FormField'
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos'
import categoriasRepository from '../../../repositories/categorias'


function CadastroVideo() {
    const history = useHistory();
    const [categorias, setCategorias] = useState([]);
    const categoryTitles = categorias.map(({ titulo }) => titulo);
    const { handlerChange, values } = useForm({
        titulo: 'Qualquer coisa',
        url: 'https://www.youtube.com/watch?v=Oo0BwrMM110',
        categoria: 'Front End',
    });

    useEffect(() => {
        categoriasRepository
            .getAll()
            .then((categoriasFromServer) => {
                setCategorias(categoriasFromServer);
            })
    }, [])

    // console.log(categorias);
    // console.log(categoryTitles);

    return (
        <PageDefault>
            <h1>Cadastro de Vídeo</h1>

            <form onSubmit={(event) => {
                event.preventDefault();

                const categoriaEscolhida = categorias.find((categoria) => {
                    return categoria.titulo === values.categoria;
                });

                console.log(categoriaEscolhida);

                videosRepository.create({
                    titulo: values.titulo,
                    url: values.url,
                    categoriaId: categoriaEscolhida.id,
                })
                    .then(() => {
                        console.log('Cadastrou com sucesso!')
                        history.push('/');
                    });
            }}>

                <FormField
                    label="Título do Vídeo"
                    value={values.titulo}
                    onChange={handlerChange}
                    type="text"
                    name="titulo"
                />

                <FormField
                    label="URL da Vídeo"
                    value={values.url}
                    onChange={handlerChange}
                    type="text"
                    name="url"
                />

                <FormField
                    label="Categoria da Vídeo"
                    value={values.categoria}
                    onChange={handlerChange}
                    type="text"
                    name="categoria"
                    suggestions={categoryTitles}
                />

                <Button type="submit">
                    Cadastrar
                </Button>

            </form>

            <Link to="/cadastro/categoria">
                Cadastrar Categoria
            </Link>
        </PageDefault>
    )
}

export default CadastroVideo