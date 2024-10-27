export default function handler(req, res) {
    if (req.method === 'POST') {
      // Aqui você processa os dados enviados
      const { mensagem, nome } = req.body;
  
      // Faz algo com os dados, como salvar em um banco de dados
      console.log('Dados recebidos:', mensagem, nome);
  
      // Retorna uma resposta
      res.status(200).json({ sucesso: true, mensagem: 'Dados recebidos com sucesso!' });
    } else {
      res.status(405).json({ erro: 'Método não permitido' });
    }
  }
  