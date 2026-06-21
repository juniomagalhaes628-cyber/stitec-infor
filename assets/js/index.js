const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const progressBar = document.getElementById('progress');
    window.addEventListener('scroll', () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      progressBar.style.width = (total > 0 ? (window.scrollY / total) * 100 : 0) + '%';
    }, { passive: true });

    const backTop = document.getElementById('back-top');
    window.addEventListener('scroll', () => { backTop.classList.toggle('visible', window.scrollY > 400); }, { passive: true });
    backTop.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: reduced ? 'instant' : 'smooth' }); });

    const navToggle = document.getElementById('nav-toggle');
    const navMobile = document.getElementById('nav-mobile');
    navToggle.addEventListener('click', () => {
      const open = navMobile.classList.toggle('open');
      navToggle.classList.toggle('open', open);
      navToggle.setAttribute('aria-expanded', String(open));
    });
    navMobile.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      navMobile.classList.remove('open'); navToggle.classList.remove('open'); navToggle.setAttribute('aria-expanded', 'false');
    }));

    (function() {
      let sx = null;
      document.addEventListener('touchstart', e => { sx = e.touches[0].clientX; }, {passive:true});
      document.addEventListener('touchend', e => {
        if (sx == null) return;
        const dx = e.changedTouches[0].clientX - sx;
        if (sx < 30 && dx > 60) {
          navMobile.classList.add('open'); navToggle.classList.add('open'); navToggle.setAttribute('aria-expanded','true');
        } else if (navMobile.classList.contains('open') && dx < -60) {
          navMobile.classList.remove('open'); navToggle.classList.remove('open'); navToggle.setAttribute('aria-expanded','false');
        }
        sx = null;
      }, {passive:true});
    })();

    const ioFade = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('vis'); ioFade.unobserve(e.target); } });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fu').forEach(el => ioFade.observe(el));

    if (!reduced) {
      document.querySelectorAll('.svc-card, .tcard, .loja-card').forEach(card => {
        card.addEventListener('mousemove', e => {
          const r = card.getBoundingClientRect(), x = (e.clientX-r.left)/r.width-0.5, y = (e.clientY-r.top)/r.height-0.5;
          const i = card.classList.contains('loja-card') ? 6 : 10;
          card.style.transition = 'transform 0.1s ease, border-color 0.25s, box-shadow 0.4s';
          card.style.transform = `perspective(700px) rotateY(${x*i}deg) rotateX(${-y*i}deg) translateY(-4px) scale(1.02)`;
        });
        card.addEventListener('mouseleave', () => {
          card.style.transition = 'transform 0.6s cubic-bezier(0.23,1,0.32,1), border-color 0.25s, box-shadow 0.4s';
          card.style.transform = '';
        });
      });
    }

    function animateCount(el, target, suffix, dur) {
      const s = performance.now(), f = String(target).includes('.');
      (function tick(n) { const p=Math.min((n-s)/dur,1), e=1-Math.pow(1-p,3); el.textContent=(f?(e*target).toFixed(1):Math.round(e*target))+suffix; if(p<1) requestAnimationFrame(tick); })(s);
    }
    const ioStats = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return; ioStats.unobserve(e.target);
        const el=e.target, t=el.textContent.trim();
        if (!reduced) {
          if (t.startsWith('5.0')) animateCount(el,5.0,' ⭐',1200);
          else if (t.startsWith('+5')) { let n=0; const ti=setInterval(()=>{el.textContent='+' + ++n + ' anos'; if(n>=5) clearInterval(ti);},180); }
          else if (t==='14') animateCount(el,14,'',1000);
        }
      });
    }, { threshold: 0.5 });
    document.querySelectorAll('.stat-n').forEach(el => ioStats.observe(el));

    if (!reduced) {
      const wm = document.querySelector('.hero-wm');
      if (wm) window.addEventListener('scroll', () => { wm.style.transform=`translateY(calc(-52% + ${window.scrollY*0.18}px))`; }, { passive: true });
    }

    const nioNav = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { const id='#'+e.target.id; document.querySelectorAll('.nav-links a[href^="#"]').forEach(a => { a.style.color = a.getAttribute('href')===id ? 'var(--text)' : ''; }); } });
    }, { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('section[id]').forEach(s => nioNav.observe(s));

    (function() {
      const now=new Date(), dow=now.getDay(), t=now.getHours()*60+now.getMinutes();
      const isOpen = dow>=1 && dow<=5 && t>=600 && t<1050;
      document.querySelectorAll('#hours-body tr').forEach(row => { if(parseInt(row.dataset.day)===dow) row.classList.add('today'); });
      const badge=document.getElementById('open-badge'), txt=document.getElementById('open-badge-text');
      badge.classList.add(isOpen ? 'is-open' : 'is-closed');
      txt.textContent = isOpen ? 'Aberto agora' : 'Fechado';
    })();

    (function() {
      const track=document.getElementById('tslider-track'), cards=Array.from(track.querySelectorAll('.tcard'));
      const dotsEl=document.getElementById('ts-dots'), prev=document.getElementById('ts-prev'), next=document.getElementById('ts-next');
      let cur=0, pp=3, timer;
      function getPP() { return window.innerWidth<=520?1:window.innerWidth<=780?2:3; }
      function pages() { return Math.ceil(cards.length/pp); }
      function buildDots() {
        dotsEl.innerHTML='';
        for(let i=0;i<pages();i++){const b=document.createElement('button');b.className='tslider-dot'+(i===cur?' active':'');b.setAttribute('aria-label','Página '+(i+1));b.addEventListener('click',()=>go(i));dotsEl.appendChild(b);}
      }
      function go(page) {
        cur=Math.max(0,Math.min(page,pages()-1));
        const fc=cards[cur*pp]; track.style.transform=fc?`translateX(-${fc.offsetLeft}px)`:'';
        dotsEl.querySelectorAll('.tslider-dot').forEach((d,i)=>d.classList.toggle('active',i===cur));
        prev.disabled=cur===0; next.disabled=cur>=pages()-1;
      }
      function startAuto() { if(!reduced) timer=setInterval(()=>go(cur>=pages()-1?0:cur+1),5000); }
      function stopAuto()  { clearInterval(timer); }
      prev.addEventListener('click',()=>{stopAuto();go(cur-1);startAuto();});
      next.addEventListener('click',()=>{stopAuto();go(cur+1);startAuto();});
      const sl=document.querySelector('.tslider');
      sl.addEventListener('mouseenter',stopAuto); sl.addEventListener('mouseleave',startAuto);
      let tx=0;
      sl.addEventListener('touchstart',e=>{tx=e.touches[0].clientX;},{passive:true});
      sl.addEventListener('touchend',e=>{const dx=tx-e.changedTouches[0].clientX;if(Math.abs(dx)>40){stopAuto();go(dx>0?cur+1:cur-1);startAuto();}});
      window.addEventListener('resize',()=>{const p=getPP();if(p!==pp){pp=p;cur=0;buildDots();}go(cur);});
      pp=getPP(); buildDots(); go(0); startAuto();
    })();

    (function() {
      function hue(n){let h=0;for(let i=0;i<n.length;i++)h=n.charCodeAt(i)+((h<<5)-h);return Math.abs(h)%360;}
      document.querySelectorAll('.tcard-avatar').forEach(el=>{
        const name=el.dataset.name||'', parts=name.trim().split(/\s+/);
        el.textContent=(parts[0][0]+(parts[1]?parts[1][0]:'')).toUpperCase();
        el.style.background=`hsl(${hue(name)},55%,38%)`;
      });
    })();

    /* ── Hero canvas particle network ── */
    (function() {
      if (reduced) return;
      const cvs = document.getElementById('hero-canvas');
      if (!cvs) return;
      const ctx2d = cvs.getContext('2d');
      let pts = [], raf2 = null;
      const N = window.innerWidth < 640 ? 25 : 60;
      const LINK = window.innerWidth < 640 ? 90 : 115;
      function resizeCvs() { cvs.width = cvs.offsetWidth || 1; cvs.height = cvs.offsetHeight || 1; }
      function initPts() { pts = []; for (let i=0;i<N;i++) pts.push({x:Math.random()*cvs.width,y:Math.random()*cvs.height,vx:(Math.random()-.5)*.28,vy:(Math.random()-.5)*.28}); }
      function drawCvs() {
        ctx2d.clearRect(0,0,cvs.width,cvs.height);
        for (let i=0;i<N;i++) {
          const p=pts[i]; p.x+=p.vx; p.y+=p.vy;
          if(p.x<0||p.x>cvs.width) p.vx*=-1;
          if(p.y<0||p.y>cvs.height) p.vy*=-1;
          ctx2d.beginPath(); ctx2d.arc(p.x,p.y,1.5,0,Math.PI*2); ctx2d.fillStyle='rgba(96,165,250,0.55)'; ctx2d.fill();
          for (let j=i+1;j<N;j++) {
            const q=pts[j], d=Math.hypot(p.x-q.x,p.y-q.y);
            if(d<LINK){ ctx2d.beginPath(); ctx2d.moveTo(p.x,p.y); ctx2d.lineTo(q.x,q.y); ctx2d.strokeStyle=`rgba(37,99,235,${(1-d/LINK)*.22})`; ctx2d.lineWidth=.6; ctx2d.stroke(); }
          }
        }
        raf2 = requestAnimationFrame(drawCvs);
      }
      new IntersectionObserver(([e])=>{ if(e.isIntersecting){if(!raf2)raf2=requestAnimationFrame(drawCvs);}else{cancelAnimationFrame(raf2);raf2=null;} }).observe(document.getElementById('hero'));
      new ResizeObserver(()=>{resizeCvs();initPts();}).observe(document.getElementById('hero'));
      resizeCvs(); initPts(); raf2=requestAnimationFrame(drawCvs);
    })();

    /* ── Light mode toggle ── */
    (function() {
      const themeBtn = document.getElementById('theme-toggle');
      const root = document.documentElement;
      if (localStorage.getItem('theme') === 'light') root.classList.add('light');
      themeBtn?.addEventListener('click', () => {
        root.classList.toggle('light');
        localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
      });
    })();

    /* ── Contact form → WhatsApp ── */
    document.getElementById('contact-form')?.addEventListener('submit', e => {
      e.preventDefault();
      const name   = document.getElementById('cf-name').value.trim();
      const phone  = document.getElementById('cf-phone').value.trim();
      const device = document.getElementById('cf-device').value.trim();
      const msg    = document.getElementById('cf-msg').value.trim();
      if (!name || !phone) { alert('Por favor preenche o nome e telemóvel.'); return; }
      const text = `Olá Techlogic! 👋\nNome: ${name}\nTelemóvel: ${phone}${device ? '\nDispositivo: ' + device : ''}${msg ? '\nProblema: ' + msg : ''}`;
      window.open('https://wa.me/351910277026?text=' + encodeURIComponent(text), '_blank');
    });

    /* ── Mouse-reactive 3D phone ── */
    (function() {
      if (reduced) return;
      const heroEl = document.getElementById('hero');
      const phoneWp = document.querySelector('.phone-wrap');
      if (!heroEl || !phoneWp) return;
      heroEl.addEventListener('mousemove', e => {
        const r=heroEl.getBoundingClientRect();
        const x=(e.clientX-r.left)/r.width-.5, y=(e.clientY-r.top)/r.height-.5;
        phoneWp.style.transition='transform 0.12s ease';
        phoneWp.style.animation='none';
        phoneWp.style.transform=`rotateY(${-20+x*24}deg) rotateX(${8-y*18}deg)`;
      },{passive:true});
      heroEl.addEventListener('mouseleave', ()=>{
        phoneWp.style.transition='transform 1s cubic-bezier(0.23,1,0.32,1)';
        phoneWp.style.animation='';
        phoneWp.style.transform='';
      });
    })();


    /* ── Price Estimator ── */
    (function() {
      const PRICES = {
        iphone:  { ecra:'55€–120€', bateria:'45€–75€',  conector:'40€–65€', camara:'50€–90€',  outro:'A consultar' },
        samsung: { ecra:'45€–100€', bateria:'35€–60€',  conector:'30€–50€', camara:'40€–80€',  outro:'A consultar' },
        xiaomi:  { ecra:'35€–70€',  bateria:'25€–50€',  conector:'25€–45€', camara:'35€–65€',  outro:'A consultar' },
        huawei:  { ecra:'35€–70€',  bateria:'25€–50€',  conector:'25€–45€', camara:'35€–65€',  outro:'A consultar' },
        outro:   { ecra:'A consultar', bateria:'A consultar', conector:'A consultar', camara:'A consultar', outro:'A consultar' }
      };

      const step1   = document.getElementById('est-step1');
      const step2   = document.getElementById('est-step2');
      const result  = document.getElementById('est-result');
      const priceEl = document.getElementById('est-price-val');
      const waBtn   = document.getElementById('est-wa-btn');

      if (!step1 || !step2 || !result) return;

      let selBrand = null;

      step1.querySelectorAll('.est-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          selBrand = btn.dataset.brand;
          step1.querySelectorAll('.est-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          result.classList.add('est-hidden');
          step2.querySelectorAll('.est-btn').forEach(b => b.classList.remove('active'));
          step2.classList.remove('est-hidden');
          setTimeout(() => step2.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 50);
        });
      });

      step2.querySelectorAll('.est-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          if (!selBrand) return;
          const issue = btn.dataset.issue;
          const price = PRICES[selBrand]?.[issue] ?? 'A consultar';
          priceEl.textContent = price;
          const brandLabel = step1.querySelector('.est-btn.active')?.textContent?.trim() ?? '';
          const issueLabel = btn.textContent.trim();
          waBtn.href = 'https://wa.me/351910277026?text=' + encodeURIComponent(
            `Olá Techlogic! 👋\nDispositivo: ${brandLabel}\nProblema: ${issueLabel}\nEstimativa obtida no site: ${price}\nGostaria de confirmar o orçamento.`
          );
          step2.querySelectorAll('.est-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          result.classList.remove('est-hidden');
          setTimeout(() => result.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 50);
        });
      });

      document.querySelectorAll('.est-reset').forEach(btn => {
        btn.addEventListener('click', () => {
          selBrand = null;
          step1.querySelectorAll('.est-btn').forEach(b => b.classList.remove('active'));
          step2.querySelectorAll('.est-btn').forEach(b => b.classList.remove('active'));
          step2.classList.add('est-hidden');
          result.classList.add('est-hidden');
          step1.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
      });
    })();


    /* ── Cookie Consent Banner ── */
    (function() {
      if (localStorage.getItem('cookieConsent')) return;
      const bar     = document.getElementById('cookie-bar');
      const accept  = document.getElementById('cookie-accept');
      const decline = document.getElementById('cookie-decline');
      if (!bar || !accept || !decline) return;
      function dismiss(val) {
        localStorage.setItem('cookieConsent', val);
        bar.classList.remove('visible');
        setTimeout(() => { if (bar.parentNode) bar.parentNode.removeChild(bar); }, 450);
      }
      setTimeout(() => bar.classList.add('visible'), 1800);
      accept.addEventListener('click',  () => dismiss('accepted'));
      decline.addEventListener('click', () => dismiss('declined'));
    })();