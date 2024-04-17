async function conectaAPI(){
    try{
        const conexao = await fetch('http://localhost:3000/videos')
        const livros = await conexao.json();
        console.table(livros)

    } catch (err) {
        console.log(err)
    }
}
conectaAPI()