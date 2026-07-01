/* ============================================
   SCRIPT - Site Eduarda & Hayssa
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- NAVBAR: efeito de scroll ---------- */
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  /* ---------- MENU MOBILE ---------- */
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  navToggle.addEventListener('click', function () {
    navToggle.classList.toggle('aberto');
    navLinks.classList.toggle('aberto');
  });

  // Fecha o menu ao clicar em um link
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    link.addEventListener('click', function () {
      navToggle.classList.remove('aberto');
      navLinks.classList.remove('aberto');
    });
  });

  /* ---------- SCROLL REVEAL (animacao ao rolar) ---------- */
  const elementosReveal = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  elementosReveal.forEach(function (el) {
    observer.observe(el);
  });

  /* ---------- CONTAGEM REGRESSIVA ---------- */
  // PLACEHOLDER: ajustar data/horario exato do casamento abaixo
  const dataCasamento = new Date('2026-08-22T16:30:00').getTime();

  const elDias = document.getElementById('countdown-dias');
  const elHoras = document.getElementById('countdown-horas');
  const elMinutos = document.getElementById('countdown-minutos');
  const elSegundos = document.getElementById('countdown-segundos');

  function atualizarContagem() {
    const agora = new Date().getTime();
    const diferenca = dataCasamento - agora;

    const diasRestantes = Math.floor(diferenca / (1000 * 60 * 60 * 24));

    // Mensagem especial baseada nos dias restantes
    const mensagemEl = document.getElementById('countdown-mensagem');
    if (mensagemEl) {
      if (diferenca <= 0) {
        mensagemEl.textContent = 'Hoje dizemos sim! 🌈';
        mensagemEl.style.display = 'block';
      } else if (diasRestantes <= 2) {
        mensagemEl.textContent = 'Já já nos vemos! 💛';
        mensagemEl.style.display = 'block';
      } else if (diasRestantes <= 5) {
        mensagemEl.textContent = 'A festa está chegando! 🌈';
        mensagemEl.style.display = 'block';
      } else {
        mensagemEl.style.display = 'none';
      }
    }

    if (diferenca <= 0) {
      elDias.textContent = '0';
      elHoras.textContent = '0';
      elMinutos.textContent = '0';
      elSegundos.textContent = '0';
      return;
    }

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    elDias.textContent = dias;
    elHoras.textContent = horas;
    elMinutos.textContent = minutos;
    elSegundos.textContent = segundos;
  }

  atualizarContagem();
  setInterval(atualizarContagem, 1000);

  /* ---------- FORMULARIO RSVP (Formspree) ---------- */
  const rsvpForm = document.getElementById('rsvp-form');
  const formMensagem = document.getElementById('form-mensagem');

  rsvpForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    const botaoEnviar = rsvpForm.querySelector('button[type="submit"]');
    const textoOriginal = botaoEnviar.textContent;
    botaoEnviar.textContent = 'Enviando...';
    botaoEnviar.disabled = true;

    const formData = new FormData(rsvpForm);

    try {
      // PLACEHOLDER: substituir pela URL do seu endpoint Formspree
      const response = await fetch(rsvpForm.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        formMensagem.textContent = 'Obrigado! Sua presença foi confirmada. ✓';
        formMensagem.className = 'form-mensagem sucesso';
        rsvpForm.reset();
      } else {
        formMensagem.textContent = 'Ops! Algo deu errado. Tente novamente ou nos chame no WhatsApp.';
        formMensagem.className = 'form-mensagem erro';
      }
    } catch (error) {
      formMensagem.textContent = 'Ops! Algo deu errado. Tente novamente ou nos chame no WhatsApp.';
      formMensagem.className = 'form-mensagem erro';
    } finally {
      botaoEnviar.textContent = textoOriginal;
      botaoEnviar.disabled = false;
    }
  });

  /* ---------- COPIAR CHAVE PIX ---------- */
  document.querySelectorAll('.btn-copiar').forEach(function (botao) {
    botao.addEventListener('click', function () {
      // PLACEHOLDER: a chave pix real esta no atributo data-pix de cada botao no HTML
      const chavePix = botao.getAttribute('data-pix');

      navigator.clipboard.writeText(chavePix).then(function () {
        const textoOriginal = botao.textContent;
        botao.textContent = 'Chave copiada! ✓';
        botao.classList.add('copiado');

        setTimeout(function () {
          botao.textContent = textoOriginal;
          botao.classList.remove('copiado');
        }, 2200);
      }).catch(function () {
        alert('Não foi possível copiar. A chave Pix é: ' + chavePix);
      });
    });
  });

});
