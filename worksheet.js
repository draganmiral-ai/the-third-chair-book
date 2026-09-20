const fields = [...document.querySelectorAll('textarea')];
for (const field of fields) {
  const printable = document.createElement('div');
  printable.className = 'print-answer';
  printable.setAttribute('aria-hidden', 'true');
  field.after(printable);
  field.addEventListener('input', () => { printable.textContent = field.value; });
}
document.getElementById('print').addEventListener('click', () => window.print());
