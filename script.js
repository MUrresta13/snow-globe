(() => {
  const input = document.getElementById('answer');
  const checkBtn = document.getElementById('checkBtn');
  const msg = document.getElementById('msg');
  const dlg = document.getElementById('passDlg');
  const copyBtn = document.getElementById('copyBtn');
  const closeBtn = document.getElementById('closeBtn');
  const PASS = 'ELMSTREETDREAMER';
  const RIGHT = 16;

  function check() {
    const val = parseInt((input.value || '').trim(), 10);
    if (Number.isNaN(val)) {
      showErr('Please enter a number.');
      return;
    }
    if (val === RIGHT) {
      msg.className = 'msg ok';
      msg.textContent = 'Correct!';
      document.getElementById('codeBox').textContent = PASS;
      (typeof dlg.showModal === 'function') ? dlg.showModal() : alert('Passcode: ' + PASS);
    } else {
      showErr('Not quite. Try again.');
      input.classList.remove('shake'); void input.offsetWidth; input.classList.add('shake');
    }
  }

  function showErr(t){ msg.className='msg err'; msg.textContent=t; }

  checkBtn.addEventListener('click', check);
  input.addEventListener('keydown', (e)=>{ if(e.key==='Enter') check(); });
  closeBtn.addEventListener('click', ()=> dlg.close());
  copyBtn.addEventListener('click', async ()=>{
    try{ await navigator.clipboard.writeText(PASS); copyBtn.textContent='Copied!'; setTimeout(()=>copyBtn.textContent='Copy code',1000);}catch{}
  });
})();