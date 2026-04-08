# 🍕 Fornalha Pizzaria — Site Premium

Stack: HTML · CSS · JS Vanilla · Decap CMS · Netlify · GitHub

---

## 📁 Estrutura de Pastas

```
/
├── index.html                    ← Página pública principal
├── sitemap.xml                   ← SEO: mapa do site
├── robots.txt                    ← SEO: diretivas para crawlers
├── netlify.toml                  ← Headers de cache e segurança
├── _redirects                    ← Redirecionamentos Netlify
│
├── assets/
│   ├── css/style.css             ← CSS completo (tema fogo/terracota)
│   ├── js/main.js                ← JS: renderização + cardápio + carrosséis + chamas
│   └── images/uploads/           ← Imagens enviadas via CMS ou manualmente
│
├── admin/
│   ├── index.html                ← Painel Decap CMS com 5 live previews
│   ├── config.yml                ← Configuração do CMS (collections, campos)
│   └── preview.css               ← CSS base para preview no painel
│
└── dados/                        ← JSONs editados pelo CMS
    ├── navbar.json               ← Logo e links do menu
    ├── hero.json                 ← Banner principal
    ├── historia.json             ← Texto e imagem da história
    ├── diferenciais.json         ← 4 cards de diferenciais
    ├── cardapio.json             ← 98 pizzas + bordas (cardápio completo)
    ├── galeria.json              ← Fotos e vídeos
    ├── depoimentos.json          ← Feedbacks de clientes
    ├── empresa.json              ← Contato, horário, mapa, redes
    └── configuracoes.json        ← SEO e OG image
```

---

## 🖼️ Imagens — Nomeação Obrigatória

Coloque todas as fotos reais na pasta `assets/images/uploads/` com **exatamente estes nomes**:

| Arquivo                         | Descrição                                       | Tamanho ideal  |
|--------------------------------|-------------------------------------------------|----------------|
| `logo-fornalha.png`            | Logo da pizzaria (PNG com fundo transparente)   | 300×120px      |
| `hero-fachada.jpg`             | Foto da fachada da pizzaria (fundo do hero)     | 1920×1080px    |
| `historia-equipe.jpg`          | Foto da equipe ou dos fundadores                | 800×600px      |
| `galeria-01.jpg`               | Pizza saindo do forno                           | 800×600px      |
| `galeria-02.jpg`               | Forno à lenha em ação                           | 800×600px      |
| `galeria-03.jpg`               | Montagem artesanal                              | 800×600px      |
| `galeria-04.jpg`               | Pizza Gigante                                   | 800×600px      |
| `galeria-05.jpg`               | Massa de fermentação lenta                      | 800×600px      |
| `galeria-06.jpg`               | Rodízio em família                              | 800×600px      |
| `galeria-07.jpg`               | Pizza Doce especial                             | 800×600px      |
| `galeria-08.jpg`               | Ambiente da pizzaria                            | 800×600px      |
| `galeria-video-thumb.jpg`      | Thumbnail do vídeo na galeria                   | 800×600px      |
| `dep-mariana.jpg`              | Foto da cliente Mariana                         | 200×200px      |
| `dep-ricardo.jpg`              | Foto do cliente Ricardo                         | 200×200px      |
| `dep-carvalho.jpg`             | Foto da família Carvalho                        | 200×200px      |
| `dep-juliana.jpg`              | Foto da cliente Juliana                         | 200×200px      |
| `favicon.png`                  | Ícone da aba do navegador                       | 32×32px        |
| `apple-touch-icon.png`         | Ícone para iOS (ao salvar na home)              | 180×180px      |
| `og-image.jpg`                 | Imagem para compartilhamento social             | 1200×630px     |

> **Dica:** Todas as imagens que não forem fornecidas serão substituídas por fotos de placeholder automaticamente, para que o site funcione durante o desenvolvimento.

---

## 🎨 Paleta de Cores

| Cor             | Valor HEX | Uso                                    |
|----------------|-----------|----------------------------------------|
| Fundo escuro    | `#0A0604` | 60% — base de todas as seções          |
| Terracota       | `#8B3A1E` | 30% — bordas, destaques, cards         |
| Terracota vivo  | `#C8542E` | Hover, título em destaque              |
| Branco/Creme    | `#FFF3E6` | Textos principais                      |
| Amarelo âmbar   | `#F5A623` | 10% — preços, badges, estrelas, fogo   |
| Laranja brasa   | `#E8520A` | Gradientes de botões, detalhes         |

---

## 🚀 Deploy — Passo a Passo

### Passo 1 — Subir no GitHub

```bash
git init
git add .
git commit -m "feat: Fornalha Pizzaria — site completo"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/fornalha-pizzaria.git
git push -u origin main
```

### Passo 2 — Conectar ao Netlify

1. Acesse [app.netlify.com](https://app.netlify.com)
2. Clique em **"Add new site" → "Import an existing project"**
3. Conecte ao GitHub e selecione o repositório `fornalha-pizzaria`
4. Configurações de build:
   - **Build command:** *(deixar em branco)*
   - **Publish directory:** `.`
5. Clique em **Deploy site**

### Passo 3 — Ativar Netlify Identity

1. No painel Netlify: **Site settings → Identity → Enable Identity**
2. Em **Registration preferences**: selecione **"Invite only"**
3. Role até **"Git Gateway"** → clique em **"Enable Git Gateway"**

### Passo 4 — Convidar os proprietários

1. No painel Netlify: **Identity → Invite users**
2. Insira o e-mail dos proprietários
3. Eles receberão um e-mail para criar a senha
4. Após criarem a senha, são redirecionados automaticamente para `/admin/`

### Passo 5 — Configurar o Domínio (Registro.br)

1. No Registro.br: altere os nameservers para:
   ```
   dns1.p04.nsone.net
   dns2.p04.nsone.net
   dns3.p04.nsone.net
   dns4.p04.nsone.net
   ```
2. No Netlify: **Domain settings → Add custom domain**
3. Digite: `fornalhapizzaria.com.br` (ou o domínio escolhido)
4. SSL/HTTPS é ativado automaticamente via Let's Encrypt

---

## 🔧 Acesso ao Painel Admin

**URL:** `https://seudominio.com.br/admin/`

### O que pode ser editado pelo painel:

| Seção             | O que é editável                                                     |
|------------------|----------------------------------------------------------------------|
| Navbar            | Logo, links do menu, texto do botão CTA                              |
| Hero              | Foto da fachada, título, badge, subtítulo, botões, estatísticas      |
| Nossa História    | Texto completo, foto da equipe, assinatura                           |
| Diferenciais      | Todos os 4 cards: ícone, título e texto                              |
| Cardápio          | **Todas as 98 pizzas**: nome, ingredientes, preços por tamanho       |
|                  | Adicionar/remover categorias e pizzas                                |
|                  | Bordas recheadas: sabores e preços                                   |
| Galeria           | Adicionar/remover fotos e vídeos (YouTube embed)                     |
| Depoimentos       | Todos os feedbacks: foto, nome, texto, estrelas                      |
| Contato           | Endereço, horário, telefones, links das redes, embed do mapa         |
| SEO               | Título, descrição, palavras-chave, imagem de compartilhamento        |

---

## 📱 Funcionalidades do Site

- ✅ **100% Responsivo** — Mobile first, funciona em todos os dispositivos
- ✅ **Efeito de chamas** no Hero (Canvas animado com partículas de fogo)
- ✅ **Cardápio com busca** — filtra pizzas por nome ou ingrediente em tempo real
- ✅ **Abas de categoria** — Tradicionais, Especiais, Gourmet e Doces
- ✅ **Botão WhatsApp específico** por pizza (mensagem com nome e ingredientes)
- ✅ **Bordas Recheadas** — banner com todos os sabores e preços
- ✅ **Galeria carrossel** com lightbox (fotos e vídeos YouTube)
- ✅ **Depoimentos em carrossel** com autoplay e swipe touch
- ✅ **SEO completo** — Schema.org Restaurant, OG, Twitter Card, sitemap
- ✅ **WhatsApp flutuante** em todas as páginas
- ✅ **Animações de scroll** — elementos surgem suavemente ao rolar
- ✅ **Zero custo de servidor** — hospedagem gratuita na Netlify

---

## 📞 Dados da Empresa (já configurados)

- **Endereço:** Rua Lisboa Jr, 148 — Centro, Piratininga — SP, 17490-058
- **WhatsApp:** (14) 99645-0258
- **Fixo:** (14) 3500-0447
- **Funcionamento:** Segunda a Domingo, 17h às 23h
- **Instagram:** [@fornalhapizzaria_piratininga](https://www.instagram.com/fornalhapizzaria_piratininga/)
- **Facebook:** [FornalhaPizzariaPiratininga](https://www.facebook.com/FornalhaPizzariaPiratininga)
