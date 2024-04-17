async function listaVideos(){
    try{
        const conexao = await fetch('http://localhost:3000/videos')
        const conexaoConvertida = await conexao.json();
        return conexaoConvertida

    } catch (err) {
        console.log(err)
    }
}

export const conectaAPI = {
    listaVideos
}