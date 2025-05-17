document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita o envio do formulário

    const usuario = document.getElementById('user').value;
    const senha = document.getElementById('pass').value;

    if (usuario === 'admin' && senha === '1234') {
      // Login bem-sucedido
      localStorage.setItem('logado', 'sim');
      window.location.href = '/livro1/cap1/atividade1/index.html'; // Redireciona para atividade
    } else {
      // Exibe a mensagem de erro
      document.getElementById('erro').textContent = 'Usuário ou senha incorretos.';
    }
  });
});
