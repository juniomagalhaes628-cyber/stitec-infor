(function() {
      const PRODUCTS = [
        /* ── Capas ── */
        { id:1,  cat:'capas', name:'Capa iPhone 15 / 15 Pro / 15 Pro Max', price:14.99, badge:'iPhone 15', hot:'popular', stock:'disponivel', rating:4.5, reviews:31,
          img:'https://images.pexels.com/photos/18423742/pexels-photo-18423742.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
          desc:'Capa resistente para iPhone 15, 15 Pro e 15 Pro Max com proteção reforçada nos cantos e design elegante que valoriza o teu telemóvel.',
          features:['Compatível com iPhone 15, 15 Pro e 15 Pro Max','Proteção anti-impacto nos cantos','Material TPU premium','Acesso total a todos os botões e portas'] },
        { id:2,  cat:'capas', name:'Capa Samsung Galaxy S24 (silicone)', price:11.99, badge:'Samsung', stock:'disponivel', rating:4.3, reviews:18,
          img:'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=300&fit=crop&q=80',
          desc:'Capa de silicone macio para Samsung Galaxy S24 que protege sem adicionar volume. Toque suave e antiderrapante.',
          features:['Silicone premium de alta qualidade','Proteção lateral e traseira','Antiderrapante','Compatível com carregamento sem fios'] },
        { id:3,  cat:'capas', name:'Capa Xiaomi / Huawei (silicone)', price:9.99, badge:'Xiaomi·Huawei', stock:'disponivel', rating:4.1, reviews:14,
          img:'https://images.pexels.com/photos/969462/pexels-photo-969462.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
          desc:'Capa de silicone universal compatível com vários modelos Xiaomi e Huawei. Proteção eficaz ao melhor preço.',
          features:['Compatível com múltiplos modelos','Silicone flexível resistente','Proteção completa traseira e lados','Leveza e ergonomia'] },
        { id:4,  cat:'capas', name:'Capa com Porta-Cartão (universal)', price:13.99, badge:'Universal', stock:'disponivel', rating:4.4, reviews:22,
          img:'https://images.pexels.com/photos/374004/pexels-photo-374004.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
          desc:'Capa universal com porta-cartão integrado para transportar cartões de crédito ou identidade. Funcionalidade e proteção num só.',
          features:['Porta-cartão integrado (1–3 cartões)','Compatível com a maioria dos smartphones','Material resistente tipo carteira','Fecho seguro magnético'] },
        { id:5,  cat:'capas', name:'Capa Transparente Anti-Choque', price:6.99, badge:'Universal', stock:'ultimas', rating:4.0, reviews:9,
          img:'https://images.pexels.com/photos/7742552/pexels-photo-7742552.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
          desc:'Capa transparente de policarbonato rígido que protege o teu telemóvel sem esconder o seu design original.',
          features:['Policarbonato transparente resistente','Anti-amarelecimento','Proteção contra quedas até 1 m','Compatível com a maioria dos smartphones'] },

        { id:25, cat:'capas', name:'Capa iPhone 14 / 14 Pro / 14 Plus', price:12.99, badge:'iPhone 14', hot:'novo', stock:'disponivel', rating:4.2, reviews:15,
          img:'https://images.pexels.com/photos/14238851/pexels-photo-14238851.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
          desc:'Capa para iPhone 14, 14 Pro e 14 Plus com proteção completa e design slim. Disponível em várias cores.',
          features:['Compatível com iPhone 14, 14 Pro e 14 Plus','Material TPU flexível de alta qualidade','Proteção anti-impacto','Acesso total a câmara e botões'] },
        { id:26, cat:'capas', name:'Capa iPhone 13 / 13 Pro / 13 mini', price:11.99, badge:'iPhone 13', hot:'novo', stock:'disponivel', rating:4.1, reviews:12,
          img:'https://images.pexels.com/photos/1670768/pexels-photo-1670768.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
          desc:'Capa para iPhone 13, 13 Pro e 13 mini — proteção robusta com acabamento premium. Vários modelos disponíveis.',
          features:['Compatível com iPhone 13, 13 Pro e 13 mini','Proteção anti-choque','Acabamento premium','Acesso total a todos os botões'] },
        { id:27, cat:'capas', name:'Capa iPhone 12 / 12 Pro / 12 mini', price:10.99, badge:'iPhone 12', hot:'novo', stock:'disponivel', rating:4.0, reviews:8,
          img:'https://images.pexels.com/photos/374117/pexels-photo-374117.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
          desc:'Capa para iPhone 12, 12 Pro e 12 mini. Proteção eficaz com design elegante e leveza excepcional.',
          features:['Compatível com iPhone 12, 12 Pro e 12 mini','Material TPU resistente','Proteção lateral e traseira completa','Compatível com MagSafe'] },
        { id:28, cat:'capas', name:'Capa iPhone 11 / 11 Pro', price:9.99, badge:'iPhone 11', hot:'novo', stock:'disponivel', rating:3.9, reviews:7,
          img:'https://images.pexels.com/photos/7742552/pexels-photo-7742552.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
          desc:'Capa para iPhone 11 e 11 Pro — proteção sólida ao melhor preço para modelos anteriores em excelente estado.',
          features:['Compatível com iPhone 11 e 11 Pro','TPU slim de qualidade','Proteção anti-impacto','Acesso total a câmara e conectores'] },

        { id:29, cat:'capas', name:'Capa Samsung Galaxy A55 / A35', price:11.99, badge:'Samsung A', hot:'novo', stock:'disponivel', rating:4.3, reviews:11,
          img:'https://images.pexels.com/photos/5750001/pexels-photo-5750001.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
          desc:'Capa para Samsung Galaxy A55 e A35 — um dos modelos mid-range mais vendidos. Proteção resistente com acabamento premium.',
          features:['Compatível com Galaxy A55 e A35','Material TPU flexível resistente','Proteção anti-choque nos cantos','Acesso total a câmara e botões'] },
        { id:30, cat:'capas', name:'Capa Samsung Galaxy S23 / S23+', price:12.99, badge:'Samsung S23', hot:'novo', stock:'disponivel', rating:4.4, reviews:19,
          img:'https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
          desc:'Capa para Samsung Galaxy S23 e S23+ com proteção completa e design elegante. Compatível com carregamento sem fios.',
          features:['Compatível com Galaxy S23 e S23+','Silicone premium antiderrapante','Proteção lateral e traseira','Compatível com carregamento sem fios'] },
        { id:31, cat:'capas', name:'Capa Xiaomi Redmi Note 13', price:9.99, badge:'Xiaomi', hot:'novo', stock:'disponivel', rating:4.2, reviews:16,
          img:'https://images.pexels.com/photos/969462/pexels-photo-969462.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
          desc:'Capa para Xiaomi Redmi Note 13 — um dos smartphones mais vendidos de 2024. Proteção eficaz ao melhor preço.',
          features:['Específica para Redmi Note 13','TPU flexível resistente','Proteção anti-choque','Acesso a câmara tripla e todas as portas'] },
        { id:32, cat:'capas', name:'Capa Samsung Galaxy A14 / A15', price:9.99, badge:'Samsung A', hot:'novo', stock:'disponivel', rating:4.1, reviews:13,
          img:'https://images.pexels.com/photos/3945654/pexels-photo-3945654.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
          desc:'Capa para Samsung Galaxy A14 e A15 — modelos de entrada muito populares. Proteção completa ao melhor preço.',
          features:['Compatível com Galaxy A14 e A15','Material TPU resistente','Design slim e leveza','Proteção lateral e traseira completa'] },

        /* ── Hardware PC ── */
        { id:6,  cat:'hardware', name:'RAM 8 GB DDR4 3200 MHz', price:24.99, badge:'PC', stock:'disponivel', rating:4.7, reviews:38,
          img:'https://images.pexels.com/photos/23941163/pexels-photo-23941163.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
          desc:'Módulo de memória RAM DDR4 de 8 GB a 3200 MHz para upgrade de desktop. Aumenta a velocidade do teu PC imediatamente.',
          features:['8 GB DDR4 3200 MHz','Tensão 1.35 V','Compatível com Intel e AMD','Latência CL22'] },
        { id:7,  cat:'hardware', name:'SSD 256 GB SATA III (2.5")', price:34.99, badge:'PC', stock:'disponivel', rating:4.6, reviews:29,
          img:'https://images.unsplash.com/photo-1597225244516-7b772991d4f5?w=400&h=300&fit=crop&q=80',
          desc:'SSD 2.5" SATA III de 256 GB para substituição de disco rígido. Leitura sequencial até 550 MB/s.',
          features:['256 GB de capacidade','SATA III 6Gb/s','Leitura sequencial até 550 MB/s','Compatível com Windows e macOS'] },
        { id:8,  cat:'hardware', name:'SSD 512 GB SATA III (2.5")', price:54.99, badge:'PC', stock:'disponivel', rating:4.7, reviews:24,
          img:'https://images.unsplash.com/photo-1617042375876-a13e36732a04?w=400&h=300&fit=crop&q=80',
          desc:'SSD 2.5" SATA III de 512 GB para mais espaço de armazenamento rápido. Ideal para upgrade de portátil ou desktop.',
          features:['512 GB de capacidade','SATA III 6Gb/s','Leitura sequencial até 550 MB/s','Escrita sequencial até 500 MB/s'] },
        { id:9,  cat:'hardware', name:'SSD 1 TB NVMe M.2 PCIe', price:79.99, badge:'PC', hot:'popular', stock:'disponivel', rating:4.9, reviews:47,
          img:'https://images.pexels.com/photos/5222605/pexels-photo-5222605.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
          desc:'SSD NVMe M.2 PCIe de 1 TB ultra-rápido. Velocidades de leitura até 3500 MB/s — ideal para gaming e edição.',
          features:['1 TB de capacidade','Interface PCIe NVMe M.2','Leitura sequencial até 3500 MB/s','Compatível com PCIe 3.0 e 4.0'] },
        { id:10, cat:'hardware', name:'Pasta Térmica 10 g (alta condutividade)', price:4.99, badge:'PC', stock:'ultimas', rating:4.5, reviews:63,
          img:'https://images.pexels.com/photos/6636463/pexels-photo-6636463.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
          desc:'Pasta térmica de alta condutividade para CPU e GPU. Garante temperaturas mais baixas e maior durabilidade do equipamento.',
          features:['Condutividade térmica 8.5 W/m·K','Seringa de 10 g','Para CPU, GPU e outros chips','Fácil aplicação'] },

        /* ── Acessórios ── */
        { id:11, cat:'acessorios', name:'Cabo USB-C 1 m (trançado, 60 W)', price:5.99, badge:'Cabo', stock:'disponivel', rating:4.3, reviews:41,
          img:'https://images.pexels.com/photos/3921711/pexels-photo-3921711.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
          desc:'Cabo USB-C trançado de 1 metro com suporte a carga rápida até 60 W. Durável e compatível com a maioria dos dispositivos.',
          features:['Comprimento 1 metro','Carga rápida até 60 W','Revestimento em nylon trançado','Compatível com USB-C universalmente'] },
        { id:12, cat:'acessorios', name:'Cabo Lightning 1 m (trançado, MFi)', price:6.99, badge:'Cabo', stock:'disponivel', rating:4.4, reviews:35,
          img:'https://images.pexels.com/photos/914912/pexels-photo-914912.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
          desc:'Cabo Lightning trançado de 1 metro certificado MFi para iPhone e iPad. Garantia de compatibilidade com todos os dispositivos Apple.',
          features:['Comprimento 1 metro','Certificação MFi Apple','Revestimento em nylon trançado','Suporte a carga rápida 20 W'] },
        { id:13, cat:'acessorios', name:'Carregador 20 W USB-C (GaN)', price:12.99, badge:'Carregador', stock:'disponivel', rating:4.6, reviews:28,
          img:'https://images.unsplash.com/photo-1585338816079-6e52f9697f7d?w=400&h=300&fit=crop&q=80',
          desc:'Carregador compacto GaN 20 W com porta USB-C para carga rápida de iPhone, iPad e Android. Mais pequeno que carregadores tradicionais.',
          features:['Potência 20 W','Tecnologia GaN (Nitreto de Gálio)','Porta USB-C Power Delivery','Certificação CE'] },
        { id:14, cat:'acessorios', name:'Película Vidro Temperado 9H', price:4.99, badge:'Proteção', stock:'ultimas', rating:4.2, reviews:52,
          img:'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=400&h=300&fit=crop&q=80',
          desc:'Película de vidro temperado 9H para proteção máxima do ecrã contra riscos e quedas. Ultra-fina e invisível.',
          features:['Dureza 9H (resistente a riscos)','Espessura 0.33 mm','99% de transparência','Instalação sem bolhas de ar'] },
        { id:15, cat:'acessorios', name:'Power Bank 10 000 mAh (USB-C + USB-A)', price:19.99, badge:'Bateria', stock:'disponivel', rating:4.5, reviews:23,
          img:'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=300&fit=crop&q=80',
          desc:'Bateria portátil de 10 000 mAh com saídas USB-C e USB-A para carregar todos os teus dispositivos em viagem.',
          features:['Capacidade 10 000 mAh','Saída USB-C e USB-A','Entrada USB-C para recarregar','LED indicador de nível de carga'] },
        { id:16, cat:'acessorios', name:'Auriculares Bluetooth sem fio', price:24.99, badge:'Áudio', hot:'popular', stock:'disponivel', rating:4.8, reviews:34,
          img:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop&q=80',
          desc:'Auriculares Bluetooth sem fio com cancelamento de ruído passivo. Autonomia até 20 horas e som de qualidade premium.',
          features:['Bluetooth 5.0','Autonomia até 20 horas','Microfone integrado para chamadas','Almofadas memory foam'] },

        /* ── Periféricos ── */
        { id:17, cat:'perifericos', name:'Teclado USB Office Slim', price:9.99, badge:'Periférico', hot:'novo', stock:'disponivel', rating:4.2, reviews:17,
          img:'https://images.pexels.com/photos/785429/pexels-photo-785429.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
          desc:'Teclado USB slim de escritório com teclas de membrana silenciosas. Ergonómico e prático para uso diário em casa ou escritório.',
          features:['Interface USB plug-and-play','Teclas de membrana silenciosas','Design ultrafino e ergonómico','Compatível com Windows e macOS'] },
        { id:18, cat:'perifericos', name:'Rato Óptico USB 1200 DPI', price:6.99, badge:'Periférico', hot:'novo', stock:'disponivel', rating:4.3, reviews:21,
          img:'https://images.pexels.com/photos/3946013/pexels-photo-3946013.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
          desc:'Rato óptico USB com resolução de 1200 DPI para precisão no trabalho e jogos casuais. Leve e confortável para uso prolongado.',
          features:['Resolução 1200 DPI','Interface USB','Sensor óptico de alta precisão','Design ambidextro ergonómico'] },
        { id:19, cat:'perifericos', name:'Webcam Full HD 1080p com Microfone', price:22.99, badge:'Webcam', hot:'novo', stock:'disponivel', rating:4.5, reviews:26,
          img:'https://images.pexels.com/photos/15399856/pexels-photo-15399856.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
          desc:'Webcam USB Full HD 1080p com microfone integrado para videoconferências e teletrabalho. Instalação plug-and-play sem drivers.',
          features:['Resolução Full HD 1080p a 30fps','Microfone integrado com redução de ruído','Clip universal para monitor ou portátil','Plug-and-play, sem drivers'] },
        { id:20, cat:'perifericos', name:'Hub USB 3.0 de 4 Portas', price:9.99, badge:'Hub', hot:'novo', stock:'disponivel', rating:4.1, reviews:14,
          img:'https://images.pexels.com/photos/4195404/pexels-photo-4195404.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
          desc:'Hub USB 3.0 de 4 portas que transforma uma porta USB em quatro. Ideal para portáteis com poucas entradas USB.',
          features:['4 portas USB 3.0 (até 5 Gbps)','Cabo USB-A integrado','Retrocompatível com USB 2.0','Plug-and-play sem drivers'] },

        /* ── Armazenamento ── */
        { id:21, cat:'armazenamento', name:'Disco Externo 1 TB USB 3.0 (2.5")', price:44.99, badge:'Externo', hot:'novo', stock:'disponivel', rating:4.6, reviews:32,
          img:'https://images.pexels.com/photos/5951759/pexels-photo-5951759.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
          desc:'Disco rígido externo portátil de 1 TB USB 3.0 para backup de dados, fotos e vídeos. Alimentado pelo USB, sem fonte extra.',
          features:['1 TB de capacidade','USB 3.0 (retrocompatível com 2.0)','Alimentado pelo USB','Compatível com Windows, macOS e Linux'] },
        { id:22, cat:'armazenamento', name:'Pen Drive 32 GB USB 3.0 (pack 2)', price:5.99, badge:'Pen', hot:'novo', stock:'ultimas', rating:4.0, reviews:19,
          img:'https://images.pexels.com/photos/5474288/pexels-photo-5474288.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
          desc:'Pack de 2 pens drive de 32 GB USB 3.0 para transferência rápida de ficheiros. Pequenas, leves e universais.',
          features:['32 GB de capacidade cada','USB 3.0 — leitura até 100 MB/s','Pack de 2 unidades','Compatível com Windows, macOS e Linux'] },

        /* ── Rede ── */
        { id:23, cat:'rede', name:'Router Wi-Fi 5 AC1200 Dual Band', price:29.99, badge:'Wi-Fi', hot:'popular', stock:'disponivel', rating:4.7, reviews:41,
          img:'https://images.pexels.com/photos/4218546/pexels-photo-4218546.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
          desc:'Router Wi-Fi 5 AC1200 Dual Band para velocidades rápidas em toda a casa. Bandas 2.4 GHz + 5 GHz para mais flexibilidade.',
          features:['Wi-Fi 5 AC1200 Dual Band','Bandas 2.4 GHz + 5 GHz','4 antenas omnidireccionais','1 porta WAN + 4 portas LAN Gigabit'] },
        { id:24, cat:'rede', name:'Switch Gigabit 8 Portas 1 Gbps', price:19.99, badge:'Rede', hot:'novo', stock:'disponivel', rating:4.4, reviews:27,
          img:'https://images.pexels.com/photos/2881224/pexels-photo-2881224.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
          desc:'Switch de rede Gigabit com 8 portas de 1 Gbps para criar ou expandir uma rede com fios em casa ou escritório.',
          features:['8 portas Gigabit Ethernet (1 Gbps)','Plug-and-play, sem configuração','LED de estado por porta','Carcaça metálica robusta'] },
      ];

      const SHIP_FEE   = 3.50;
      const WA_NUM     = '351910277026';
      const STORAGE_KEY = 'techlogic_cart';

      let cart = [];
      try { cart = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); } catch(e) {}

      function saveCart() { localStorage.setItem(STORAGE_KEY, JSON.stringify(cart)); }

      function getTotal(includeShip) {
        const sub = cart.reduce((s, c) => {
          const p = PRODUCTS.find(x => x.id === c.id);
          return s + (p ? p.price * c.qty : 0);
        }, 0);
        return sub + (includeShip ? SHIP_FEE : 0);
      }

      function updateBadge() {
        const total = cart.reduce((s, c) => s + c.qty, 0);
        const badge = document.getElementById('cart-badge');
        if (!badge) return;
        badge.textContent = total;
        badge.hidden = total === 0;
      }

      let currentCat = 'all';

      function renderProducts(cat, skipAnim) {
        const grid = document.getElementById('shop-grid');
        if (!grid) return;
        const query = (document.getElementById('shop-search')?.value || '').toLowerCase().trim();
        const sortVal = document.getElementById('shop-sort')?.value || 'default';
        const maxPrice = parseFloat(document.getElementById('price-max')?.value ?? 999);
        let list = (cat === 'all' ? [...PRODUCTS] : PRODUCTS.filter(p => p.cat === cat));
        if (query) {
          list = list.filter(p =>
            p.name.toLowerCase().includes(query) ||
            p.badge.toLowerCase().includes(query)
          );
        }
        if (maxPrice < 100) list = list.filter(p => p.price <= maxPrice);
        if (sortVal === 'price-asc')  list.sort((a,b) => a.price - b.price);
        else if (sortVal === 'price-desc') list.sort((a,b) => b.price - a.price);
        else if (sortVal === 'name-az')    list.sort((a,b) => a.name.localeCompare(b.name,'pt'));
        if (list.length === 0) {
          grid.innerHTML = '<p class="shop-no-results">Nenhum produto encontrado. Tenta outra pesquisa.</p>';
          return;
        }
        const HOT_LABEL = { popular:'🔥 Popular', novo:'✨ Novo', oferta:'⚡ Oferta' };
        const STOCK_HTML = {
          disponivel: '<div class="product-stock stock-disponivel"><span class="stock-dot"></span>Em stock</div>',
          ultimas:    '<div class="product-stock stock-ultimas"><span class="stock-dot"></span>Últimas unidades</div>',
          esgotado:   '<div class="product-stock stock-esgotado"><span class="stock-dot"></span>Esgotado</div>',
        };
        grid.innerHTML = list.map(p => {
          const inCart = cart.some(c => c.id === p.id);
          const isEsgotado = p.stock === 'esgotado';
          const hotBadge = p.hot ? `<span class="product-hot ${p.hot}">${HOT_LABEL[p.hot]}</span>` : '';
          const stockHtml = STOCK_HTML[p.stock] || '';
          const starsHtml = p.rating ? `<div class="product-stars"><span class="stars-filled">${'★'.repeat(Math.round(p.rating))}${'☆'.repeat(5-Math.round(p.rating))}</span><span class="stars-count">(${p.reviews})</span></div>` : '';
          return `<div class="product-card" data-id="${p.id}">
            <div class="product-img-wrap">
              <img src="${p.img}" alt="${p.name}" class="product-img" loading="lazy" width="400" height="200">
              <span class="product-badge">${p.badge}</span>
              ${hotBadge}
            </div>
            <div class="product-body">
              <div class="product-name">${p.name}</div>
              ${starsHtml}
              <div class="product-price">${p.price.toFixed(2).replace('.',',')}€</div>
              ${stockHtml}
              ${inCart ? `<div class="card-qty-ctrl" data-id="${p.id}">
                <button class="card-qty-btn" data-action="dec" data-id="${p.id}" aria-label="Diminuir">−</button>
                <span class="card-qty-val">${cart.find(c=>c.id===p.id)?.qty||1}</span>
                <button class="card-qty-btn" data-action="inc" data-id="${p.id}" aria-label="Aumentar">+</button>
              </div>` : `<button class="product-add" data-id="${p.id}"${isEsgotado ? ' disabled' : ''}>
                ${isEsgotado ? '✕ Esgotado' : '+ Adicionar ao carrinho'}
              </button>`}
              <div class="product-view-hint">Ver produto →</div>
            </div>
          </div>`;
        }).join('');
        grid.querySelectorAll('.product-add:not([disabled])').forEach(btn => {
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            addToCart(Number(btn.dataset.id));
          });
        });
        grid.querySelectorAll('.card-qty-btn').forEach(btn => {
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = Number(btn.dataset.id);
            if (btn.dataset.action === 'inc') updateQty(id, 1);
            else updateQty(id, -1);
          });
        });
        grid.querySelectorAll('.product-card').forEach(card => {
          card.addEventListener('click', () => {
            location.href = 'produto.html?id=' + card.dataset.id;
          });
        });
        if (!window.matchMedia('(prefers-reduced-motion:reduce)').matches) {
          grid.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('mousemove', ev => {
              const r = card.getBoundingClientRect();
              const x = (ev.clientX - r.left) / r.width - 0.5;
              const y = (ev.clientY - r.top)  / r.height - 0.5;
              card.style.transform = `perspective(900px) rotateY(${x*10}deg) rotateX(${-y*8}deg) translateY(-6px)`;
            });
            card.addEventListener('mouseleave', () => { card.style.transform = ''; });
          });
          if (!skipAnim) {
            const io3d = new IntersectionObserver(entries => {
              entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('card-revealed'); io3d.unobserve(e.target); } });
            }, {threshold:0.06});
            grid.querySelectorAll('.product-card').forEach((card, i) => {
              card.style.animationDelay = (i * 0.04) + 's';
              io3d.observe(card);
            });
          }
        }
      }

      function renderCartItems() {
        const container = document.getElementById('cart-items');
        const footer    = document.getElementById('cart-footer');
        const emptyEl   = document.getElementById('cart-empty');
        const totalEl   = document.getElementById('cart-total');
        const shipCb    = document.getElementById('cart-ship');
        if (!container) return;
        const isEmpty = cart.length === 0;
        if (emptyEl) emptyEl.hidden = !isEmpty;
        if (footer)  footer.hidden  = isEmpty;
        container.innerHTML = cart.map(c => {
          const p = PRODUCTS.find(x => x.id === c.id);
          if (!p) return '';
          return `<div class="cart-item" data-id="${p.id}">
            <img src="${p.img}" alt="${p.name}" class="cart-item-img" loading="lazy">
            <div class="cart-item-info">
              <div class="cart-item-name">${p.name}</div>
              <div class="cart-item-line">
                <span class="cart-item-price">${(p.price * c.qty).toFixed(2).replace('.',',')}€</span>
                <div class="cart-item-qty">
                  <button class="qty-btn" data-action="dec" data-id="${p.id}" aria-label="Diminuir">−</button>
                  <span class="qty-val">${c.qty}</span>
                  <button class="qty-btn" data-action="inc" data-id="${p.id}" aria-label="Aumentar">+</button>
                  <button class="qty-rm" data-action="rm"  data-id="${p.id}" aria-label="Remover">✕</button>
                </div>
              </div>
            </div>
          </div>`;
        }).join('');
        container.querySelectorAll('.qty-btn, .qty-rm').forEach(btn => {
          btn.addEventListener('click', () => {
            const id = Number(btn.dataset.id);
            if (btn.dataset.action === 'rm')  removeFromCart(id);
            else updateQty(id, btn.dataset.action === 'inc' ? 1 : -1);
          });
        });
        if (totalEl && shipCb) {
          totalEl.textContent = getTotal(shipCb.checked).toFixed(2).replace('.',',') + '€';
        }
      }

      function addToCart(id) {
        const product = PRODUCTS.find(p => p.id === id);
        if (!product) return;
        const existing = cart.find(c => c.id === id);
        if (existing) existing.qty++;
        else cart.push({ id, qty: 1 });
        saveCart(); updateBadge(); renderCartItems(); renderProducts(currentCat, true);
        openCart();
      }

      function removeFromCart(id) {
        cart = cart.filter(c => c.id !== id);
        saveCart(); updateBadge(); renderCartItems(); renderProducts(currentCat, true);
      }

      function updateQty(id, delta) {
        const item = cart.find(c => c.id === id);
        if (!item) return;
        item.qty = Math.max(0, item.qty + delta);
        if (item.qty === 0) return removeFromCart(id);
        saveCart(); updateBadge(); renderCartItems(); renderProducts(currentCat, true);
      }

      function clearCart() {
        cart = []; saveCart(); updateBadge(); renderCartItems(); renderProducts(currentCat, true);
      }

      function openCart() {
        const drawer = document.getElementById('cart-drawer');
        const overlay = document.getElementById('cart-overlay');
        if (!drawer) return;
        renderCartItems();
        drawer.classList.add('open'); drawer.setAttribute('aria-hidden','false');
        overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
      }

      function closeCart() {
        const drawer = document.getElementById('cart-drawer');
        const overlay = document.getElementById('cart-overlay');
        if (!drawer) return;
        drawer.classList.remove('open'); drawer.setAttribute('aria-hidden','true');
        overlay.classList.remove('open');
        document.body.style.overflow = '';
      }

      function openCheckout() {
        const modal = document.getElementById('checkout-overlay');
        if (cart.length === 0 || !modal) return;
        modal.classList.add('open'); modal.setAttribute('aria-hidden','false');
      }

      function closeCheckout() {
        const modal = document.getElementById('checkout-overlay');
        if (!modal) return;
        modal.classList.remove('open'); modal.setAttribute('aria-hidden','true');
      }

      function buildWAMessage() {
        const ship = document.getElementById('cart-ship')?.checked;
        const lines = cart.map(c => {
          const p = PRODUCTS.find(x => x.id === c.id);
          return p ? `• ${p.name} (x${c.qty}) — ${(p.price * c.qty).toFixed(2)}€` : '';
        }).filter(Boolean).join('\n');
        return `Olá Techlogic! 🛒\n\nGostaria de encomendar:\n${lines}${ship ? '\n• Envio CTT — 3.50€' : ''}\n\nTotal: ${getTotal(ship).toFixed(2)}€\n\nMétodo de pagamento: (indicar)`;
      }

      /* ── Event listeners ── */
      document.querySelectorAll('.shop-tab').forEach(tab => {
        tab.addEventListener('click', () => {
          document.querySelectorAll('.shop-tab').forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected','false'); });
          tab.classList.add('active'); tab.setAttribute('aria-selected','true');
          currentCat = tab.dataset.cat;
          renderProducts(currentCat);
        });
      });

      document.getElementById('shop-search')?.addEventListener('input', e => {
        const clearBtn = document.getElementById('search-clear');
        if (clearBtn) clearBtn.classList.toggle('visible', e.target.value.length > 0);
        renderProducts(currentCat);
      });
      document.getElementById('search-clear')?.addEventListener('click', () => {
        const input = document.getElementById('shop-search');
        if (input) { input.value = ''; input.dispatchEvent(new Event('input')); input.focus(); }
      });
      document.getElementById('shop-sort')?.addEventListener('change', () => {
        renderProducts(currentCat);
      });

      document.getElementById('price-max')?.addEventListener('input', e => {
        document.getElementById('price-val').textContent = e.target.value;
        renderProducts(currentCat);
      });

      document.getElementById('cart-fab')?.addEventListener('click', openCart);
      document.getElementById('cart-close')?.addEventListener('click', closeCart);
      document.getElementById('cart-overlay')?.addEventListener('click', closeCart);
      document.getElementById('cart-checkout-btn')?.addEventListener('click', () => { closeCart(); openCheckout(); });
      document.getElementById('cart-clear')?.addEventListener('click', () => { if (confirm('Limpar o carrinho?')) clearCart(); });
      document.getElementById('cart-ship')?.addEventListener('change', renderCartItems);

      document.getElementById('pay-whatsapp')?.addEventListener('click', () => {
        window.open('https://wa.me/' + WA_NUM + '?text=' + encodeURIComponent(buildWAMessage()), '_blank');
        clearCart(); closeCheckout();
      });
      document.getElementById('pay-paypal')?.addEventListener('click', () => {
        const total = getTotal(document.getElementById('cart-ship')?.checked).toFixed(2);
        window.open('https://paypal.me/techlogic/' + total + 'EUR', '_blank');
        clearCart(); closeCheckout();
      });
      document.getElementById('checkout-close')?.addEventListener('click', closeCheckout);
      document.getElementById('checkout-overlay')?.addEventListener('click', e => {
        if (e.target === e.currentTarget) closeCheckout();
      });
      document.addEventListener('keydown', e => {
        if (e.key === 'Escape') { closeCart(); closeCheckout(); }
      });

      renderProducts('all');
      updateBadge();

      function renderRecentlyViewed() {
        const ids = JSON.parse(localStorage.getItem('techlogic_viewed') || '[]');
        const prods = ids.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean).slice(0, 4);
        const section = document.getElementById('recently-section');
        const grid = document.getElementById('recently-grid');
        if (!section || !grid || prods.length === 0) return;
        section.style.display = '';
        grid.innerHTML = prods.map(p => `<a href="produto.html?id=${p.id}" class="recently-card">
          <img src="${p.img}" alt="${p.name}" class="recently-img" loading="lazy">
          <div class="recently-body">
            <div class="recently-name">${p.name}</div>
            <div class="recently-price">${p.price.toFixed(2).replace('.',',')}€</div>
          </div>
        </a>`).join('');
      }
      renderRecentlyViewed();
    })();

    (function() {
      const btn = document.getElementById('theme-toggle');
      const root = document.documentElement;
      if (localStorage.getItem('theme') === 'light') root.classList.add('light');
      btn?.addEventListener('click', () => {
        root.classList.toggle('light');
        localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
      });
    })();

    (function() {
      if (localStorage.getItem('cookieConsent')) return;
      const bar = document.getElementById('cookie-bar');
      const accept = document.getElementById('cookie-accept');
      const decline = document.getElementById('cookie-decline');
      if (!bar || !accept || !decline) return;
      function dismiss(val) {
        localStorage.setItem('cookieConsent', val);
        bar.classList.remove('visible');
        setTimeout(() => { if (bar.parentNode) bar.parentNode.removeChild(bar); }, 450);
      }
      setTimeout(() => bar.classList.add('visible'), 1800);
      accept.addEventListener('click', () => dismiss('accepted'));
      decline.addEventListener('click', () => dismiss('declined'));
    })();

    // Back to top
    (function() {
      const btn = document.getElementById('back-top');
      if (!btn) return;
      window.addEventListener('scroll', () => btn.classList.toggle('visible', window.scrollY > 320), {passive:true});
      btn.addEventListener('click', () => window.scrollTo({top:0,behavior:'smooth'}));
    })();

    // Cart drawer swipe to close
    (function() {
      const drawer = document.getElementById('cart-drawer');
      if (!drawer) return;
      let sx;
      drawer.addEventListener('touchstart', e => { sx = e.touches[0].clientX; }, {passive:true});
      drawer.addEventListener('touchend', e => {
        if (sx != null && e.changedTouches[0].clientX - sx > 60) {
          document.getElementById('cart-close')?.click();
        }
        sx = null;
      }, {passive:true});
    })();