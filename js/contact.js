/* Bloco de atendimento + formulário (usado na Home e no Fale Conosco) */
(function () {
  const slot = document.getElementById("contact-slot");
  if (!slot) return;
  const ic = {
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s-8-6.6-8-13a8 8 0 0 1 16 0c0 6.4-8 13-8 13z"/><circle cx="12" cy="9" r="3"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="3"/><path d="M22 7l-10 6L2 7"/></svg>',
    map: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4z"/><path d="M8 2v16M16 6v16"/></svg>',
    fb: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 8.5V6.6c0-.9.6-1.1 1-1.1h2.6V1.6L14 1.5c-4 0-4.9 3-4.9 4.9v2.1H6.8v4h2.3V22.5H14V12.5h3.3l.4-4z"/></svg>',
    ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none"/></svg>',
    wa: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 0 1 2.2 12C2.2 6.6 6.6 2.2 12 2.2c2.6 0 5.1 1 6.9 2.9a9.7 9.7 0 0 1 2.9 6.9c0 5.4-4.4 9.8-9.8 9.8zm8.4-18.2A11.8 11.8 0 0 0 12 .2C5.5.2.2 5.5.2 12c0 2.1.5 4.1 1.6 5.9L.1 23.9l6.1-1.6c1.7.9 3.7 1.4 5.7 1.4 6.5 0 11.8-5.3 11.8-11.8 0-3.1-1.2-6.1-3.3-8.3z"/></svg>',
  };
  slot.innerHTML = `
    <div class="info-card reveal left">
      <h3>Atendimento:</h3>
      <div class="info-line"><div class="ic">${ic.pin}</div><div><small>Endereço</small><span>COLÉGIO HOLUS FTD<br>Av. Irmãs Cintra, 961 - Centro<br>São Manuel - SP CEP: 18650-000</span></div></div>
      <div class="info-line"><div class="ic">${ic.phone}</div><div><small>Fone</small><a href="tel:+551438415060">(14) 3841-5060</a></div></div>
      <div class="info-line"><div class="ic">${ic.mail}</div><div><small>E-Mail</small><a href="mailto:colegioholus@colegioholus.com.br">colegioholus@colegioholus.com.br</a></div></div>
      <div class="info-line"><div class="ic">${ic.map}</div><div><small>Google Maps</small><a href="https://goo.gl/maps/ES4UTD5LmFRs6Xca9" target="_blank" rel="noopener">Acesse o mapa interativo no Google Maps. Clique aqui!</a></div></div>
      <h3 style="margin-top:30px;position:relative;z-index:1">REDES SOCIAIS:</h3>
      <p style="position:relative;z-index:1;margin:0">Acompanhe as novidades do Colégio Holus nas Redes Sociais.</p>
      <div class="socials">
        <a href="https://www.facebook.com/Col%C3%A9gio-Holus-Objetivo-181601305249721/" target="_blank" rel="noopener" aria-label="Facebook do Colégio Holus">${ic.fb}</a>
        <a href="https://www.facebook.com/UNIP-S%C3%A3o-Manuel-635206229988993/" target="_blank" rel="noopener" aria-label="Facebook da UNIP São Manuel">${ic.fb}</a>
        <a href="https://www.instagram.com/colegioholus/" target="_blank" rel="noopener" aria-label="Instagram">${ic.ig}</a>
        <a href="https://api.whatsapp.com/send?phone=5514991159887&text=ColegioHolusSite" target="_blank" rel="noopener" aria-label="WhatsApp">${ic.wa}</a>
      </div>
    </div>
    <div class="form-card reveal right">
      <h3>Formulário:</h3>
      <p style="color:var(--muted)">Entre em contato via formulário no site, retornaremos assim que possivel ou se preferir encaminhe um email.</p>
      <form class="contact-form" novalidate>
        <div class="form-grid">
          <div class="field"><label for="f-nome">Nome</label><input id="f-nome" name="nome" required autocomplete="name"></div>
          <div class="field"><label for="f-email">E-mail</label><input id="f-email" name="email" type="email" required autocomplete="email"></div>
          <div class="field"><label for="f-tel">Telefone</label><input id="f-tel" name="telefone" type="tel" autocomplete="tel"></div>
          <div class="field"><label for="f-cid">Cidade</label><input id="f-cid" name="cidade" autocomplete="address-level2"></div>
          <div class="field full"><label for="f-mot">Motivo do Contato</label>
            <select id="f-mot" name="motivo" required>
              <option value="">Selecione…</option>
              <option>Matrículas</option><option>Concurso de Bolsas</option><option>Educação Infantil</option>
              <option>Ensino Fundamental</option><option>Ensino Médio</option><option>EAD UNIP</option>
              <option>Portal do Aluno</option><option>Outros assuntos</option>
            </select></div>
          <div class="field full"><label for="f-msg">Mensagem</label><textarea id="f-msg" name="mensagem" required></textarea></div>
        </div>
        <div class="form-actions">
          <button class="btn orange" type="submit" data-via="whats">Enviar pelo WhatsApp</button>
          <button class="btn navy" type="submit" data-via="email">Enviar por e-mail</button>
        </div>
      </form>
    </div>`;
})();
