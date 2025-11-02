// main.js - máscaras simples e manipulação do formulário
document.addEventListener('DOMContentLoaded', function () {
  // atualiza ano no footer
  const anoElem = document.getElementById('ano');
  if (anoElem) anoElem.textContent = new Date().getFullYear();

  // Máscara simples para CPF (000.000.000-00)
  const cpf = document.getElementById('cpf');
  if (cpf) {
    cpf.addEventListener('input', function (e) {
      let v = e.target.value.replace(/\D/g, '').slice(0,11);
      v = v.replace(/^(\d{3})(\d)/, '$1.$2');
      v = v.replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3');
      v = v.replace(/\.(\d{3})(\d)/, '.$1-$2');
      e.target.value = v;
    });
  }

  // Telefone (00) 00000-0000
  const tel = document.getElementById('telefone');
  if (tel) {
    tel.addEventListener('input', function (e) {
      let v = e.target.value.replace(/\D/g, '').slice(0,11);
      v = v.replace(/^(\d{2})(\d)/, '($1) $2');
      v = v.replace(/(\d{5})(\d)/, '$1-$2');
      e.target.value = v;
    });
  }

  // CEP 00000-000
  const cep = document.getElementById('cep');
  if (cep) {
    cep.addEventListener('input', function (e) {
      let v = e.target.value.replace(/\D/g, '').slice(0,8);
      v = v.replace(/^(\d{5})(\d)/, '$1-$2');
      e.target.value = v;
    });
  }

  // Exemplo de submissão local (sem back-end) com validação nativa
  const form = document.getElementById('cadastroForm');
  if (form) {
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      if (!form.checkValidity()) {
        // Se algo inválido, usa o relatório nativo
        form.reportValidity();
        return;
      }
      const msg = document.getElementById('formMsg');
      msg.textContent = 'Obrigado! Seu cadastro foi recebido (simulação).';
      msg.style.color = 'green';
      form.reset();
    });
  }
});
