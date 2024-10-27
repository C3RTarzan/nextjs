export default function Home() {
  const enviarParaAPI = async () => {
    try {
      // Exemplo de dados que você quer enviar
      const dados = {
        mensagem: 'Olá Mundo!!',
        nome: 'Usuário',
      };

      // Fazendo o POST para a API
      const resposta = await fetch('/api/exemplo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dados), // Convertendo os dados para JSON
      });

      // Verificando se a requisição foi bem-sucedida
      if (resposta.ok) {
        const data = await resposta.json();
        console.log('Sucesso:', data);
      } else {
        console.error('Erro na resposta:', resposta.status);
      }
    } catch (erro) {
      console.error('Erro na requisição:', erro);
    }
  };

  return (
    <div>
      <span>Olá Mundo!!</span>
      <button onClick={enviarParaAPI}>Enviar para API</button>
    </div>
  );
}
