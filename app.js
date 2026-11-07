/* Maison & Liens — site autonome, sans dépendance ni collecte côté serveur. */
(() => {
  'use strict';
  const phone = '212781863430';
  const menuToggle = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#navigation');
  const closeMenu = () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Ouvrir le menu');
    navigation.classList.remove('open');
    document.body.classList.remove('menu-open');
  };
  menuToggle.addEventListener('click', () => {
    const open = menuToggle.getAttribute('aria-expanded') !== 'true';
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
    navigation.classList.toggle('open', open);
    document.body.classList.toggle('menu-open', open);
  });
  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && navigation.classList.contains('open')) { closeMenu(); menuToggle.focus(); }
  });
  window.matchMedia('(min-width: 901px)').addEventListener('change', event => { if (event.matches) closeMenu(); });

  const form = document.querySelector('#contact-form');
  const feedback = document.querySelector('#form-feedback');
  const city = form.elements.city;
  const otherCity = form.elements.otherCity;
  function updateRole() {
    const candidate = form.elements.role.value === 'candidate';
    document.querySelector('#service-label').textContent = candidate ? 'Votre métier *' : 'L’aide recherchée *';
    document.querySelector('#rhythm-label').textContent = candidate ? 'Votre disponibilité' : 'Le rythme souhaité';
    document.querySelector('#message-label').textContent = candidate ? 'Votre expérience et vos disponibilités' : 'Un peu plus sur votre besoin';
    form.elements.message.placeholder = candidate ? 'Votre expérience, les tâches que vous maîtrisez, vos disponibilités…' : 'Missions, horaires, date souhaitée…';
    feedback.hidden = true;
  }
  form.querySelectorAll('[name="role"]').forEach(input => input.addEventListener('change', updateRole));
  document.querySelectorAll('[data-role]').forEach(link => link.addEventListener('click', () => {
    form.querySelector(`[name="role"][value="${link.dataset.role}"]`).checked = true;
    if (link.dataset.service) form.elements.service.value = link.dataset.service;
    updateRole();
  }));
  city.addEventListener('change', () => {
    const show = city.value === 'Autre ville au Maroc';
    document.querySelector('#other-city-field').hidden = !show;
    otherCity.required = show;
    if (!show) otherCity.value = '';
  });
  form.addEventListener('input', () => { feedback.hidden = true; });
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const candidate = form.elements.role.value === 'candidate';
    const name = form.elements.name.value.trim();
    const selectedCity = city.value === 'Autre ville au Maroc' ? otherCity.value.trim() : city.value;
    if (!name || !selectedCity) {
      const empty = !name ? form.elements.name : otherCity;
      empty.setCustomValidity('Merci de renseigner ce champ.');
      empty.reportValidity();
      empty.addEventListener('input', () => empty.setCustomValidity(''), { once: true });
      return;
    }
    const lines = [
      'Bonjour Maison & Liens,',
      '',
      candidate ? 'Je souhaite vous présenter ma candidature.' : 'Je souhaite trouver du personnel de maison.',
      `Nom : ${name}`,
      `Ville : ${selectedCity}`,
      `${candidate ? 'Métier' : 'Aide recherchée'} : ${form.elements.service.value}`
    ];
    if (form.elements.rhythm.value) lines.push(`${candidate ? 'Disponibilité' : 'Rythme souhaité'} : ${form.elements.rhythm.value}`);
    if (form.elements.message.value.trim()) lines.push('', form.elements.message.value.trim());
    lines.push('', 'Merci, à bientôt.');
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(lines.join('\n'))}`;
    document.querySelector('#prepared-message').href = url;
    feedback.hidden = false;
    window.open(url, '_blank', 'noopener,noreferrer');
  });
  // Sans JavaScript, garder le lien direct, éviter l'envoi du formulaire en GET.
  form.setAttribute('autocomplete', 'on');
  document.querySelector('#year').textContent = new Date().getFullYear();

  const dialog = document.querySelector('#privacy-dialog');
  document.querySelector('#open-privacy').addEventListener('click', () => dialog.showModal());
  document.querySelector('#close-privacy').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const box = dialog.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
  });

  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const sections = document.querySelectorAll('.section-heading, .service, .approach-intro, .steps li, .candidate-copy, .faq-intro');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
    }, { threshold: 0.08 });
    document.documentElement.classList.add('reveal-enabled');
    sections.forEach(section => { section.setAttribute('data-reveal', ''); observer.observe(section); });
  }
})();
