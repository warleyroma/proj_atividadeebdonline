// =====================================================================
// SUPABASE CONFIGURAÇÃO
// =====================================================================
// IMPORTANTE: Substitua estas informações pelas suas credenciais do Supabase
const SUPABASE_URL = "https://heawqiypuzrnxlyslxlw.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhlYXdxaXlwdXpybnhseXNseGx3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ2MTI1NDMsImV4cCI6MjA5MDE4ODU0M30.Lir7lh0MKB-2WpFLwLUyHdOyD9LVrwefr0_8VzO4GyI";

// Inicializa o cliente Supabase
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// =====================================================================
// BANCO DE DADOS
// =====================================================================
const BANCO = {
  quiz: [
    { pergunta: "Quem morreu pelos nossos pecados?",    opcoes: ["Jesus", "Pedro", "Paulo"], correta: 0 },
    { pergunta: "A salvação vem por:",                   opcoes: ["Fé", "Obras", "Dinheiro"], correta: 0 },
    { pergunta: "Quem justifica o homem?",               opcoes: ["Deus", "O próprio homem", "A Lei"], correta: 0 },
    { pergunta: "O pecado afeta:",                       opcoes: ["Todos", "Alguns", "Ninguém"], correta: 0 },
    { pergunta: "O salário do pecado é:",                opcoes: ["Morte", "Vida", "Bênção"], correta: 0 },
    { pergunta: "Cristo é o único:",                     opcoes: ["Salvador", "Profeta", "Rei terreno"], correta: 0 },
    { pergunta: "A fé produz:",                          opcoes: ["Obediência", "Medo", "Dúvida"], correta: 0 },
    { pergunta: "A graça é:",                            opcoes: ["Favor imerecido", "Recompensa", "Troca"], correta: 0 },
    { pergunta: "Israel foi escolhido por:",             opcoes: ["Deus", "Homem", "Seus reis"], correta: 0 },
    { pergunta: "A santificação é:",                     opcoes: ["Um processo", "Evento único", "Um ritual"], correta: 0 },
    { pergunta: "A salvação é um:",                      opcoes: ["Dom de Deus", "Pagamento", "Esforço"], correta: 0 },
    { pergunta: "A Bíblia é:",                           opcoes: ["Palavra de Deus", "Livro comum", "História humana"], correta: 0 },
    { pergunta: "A santificação é:",                     opcoes: ["Condição indispensável para contemplar a face de Deus", "Uma opção secundária na vida cristã", "Apenas um símbolo sem importância"
  ], correta: 0 }
  ],
  anagrama: [
    { embaralhado: "ODAEPC",       resposta: "PECADO" },
    { embaralhado: "EF",           resposta: "FE" },
    { embaralhado: "ACARG",        resposta: "GRACA" },
    { embaralhado: "SUJES",        resposta: "JESUS" },
    { embaralhado: "AOCLVASA",     resposta: "SALVACAO" },
    { embaralhado: "NTOCAIFICASA", resposta: "SANTIFICACAO" },
    { embaralhado: "SUED",         resposta: "DEUS" },
    { embaralhado: "CRZU",         resposta: "CRUZ" },
    { embaralhado: "AIVD",         resposta: "VIDA" },
    { embaralhado: "ROAM",         resposta: "AMOR" },
    { embaralhado: "AMLA",         resposta: "ALMA" },
    { embaralhado: "OINER",        resposta: "REINO" }
  ],
  vf: [
    { pergunta: "Fé é apenas emoção",             correta: false },
    { pergunta: "Deus salva o homem",             correta: true  },
    { pergunta: "A salvação depende de obras",    correta: false },
    { pergunta: "Cristo morreu pelos pecados",    correta: true  },
    { pergunta: "Todos os homens são pecadores",  correta: true  },
    { pergunta: "A graça pode ser comprada",      correta: false },
    { pergunta: "A Bíblia é inspirada por Deus",  correta: true  },
    { pergunta: "Santificação é instantânea",     correta: false },
    { pergunta: "Jesus é o único caminho",        correta: true  },
    { pergunta: "O pecado não tem consequências", correta: false },
    { pergunta: "A fé gera obediência",           correta: true  },
    { pergunta: "Deus rejeita o arrependido",     correta: false },
    { pergunta: "A santificação é um processo contínuo na vida do cristão.", correta: true },
    { pergunta: "A santificação acontece apenas no momento da conversão.", correta: false }
  ],
  forca: [
    { dica: "Quem nos salva?",                resposta: "JESUS" },
    { dica: "Quem justifica o pecador?",      resposta: "DEUS" },
    { dica: "Meio de salvação",               resposta: "FE" },
    { dica: "O que Cristo trouxe",            resposta: "SALVACAO" },
    { dica: "O que vence o pecado",           resposta: "GRACA" },
    { dica: "O que Cristo oferece",           resposta: "VIDA" },
    { dica: "Instrumento da morte de Cristo", resposta: "CRUZ" },
    { dica: "Sentimento divino",              resposta: "AMOR" },
    { dica: "Animal que enganou eva",      resposta: "SERPENTE" },
    { dica: "Qual fruto Deus proibiu que fosse comido no jardim do eden",      resposta: "DO BEM E DO MAL" },
     { dica: "Separado do mal",      resposta: "SANTO" },
  ],
  soletrar: ["SALVACAO","PECADO","GRACA","FE","CRUZ","DEUS","JESUS","VIDA","AMOR","ALMA","REINO","VERDADE"],
  cruzadinha: [
    { dica: "Meio de salvação",               resposta: "FE" },
    { dica: "Filho de Deus",                  resposta: "JESUS" },
    { dica: "Favor imerecido",                resposta: "GRACA" },
    { dica: "Erro do homem",                  resposta: "PECADO" },
    { dica: "Instrumento de morte de Cristo", resposta: "CRUZ" },
    { dica: "Criador de tudo",                resposta: "DEUS" },
    { dica: "Vida eterna",                    resposta: "SALVACAO" },
    { dica: "Sentimento divino",              resposta: "AMOR" },
    { dica: "Ato judicial divino",            resposta: "JUSTIFICACAO" },
    { dica: "Caminho correto",                resposta: "VERDADE" },
    { dica: "Transgressão contra Deus",       resposta: "PECADO" },
    { dica: "Trazer a vida o que estava morto", resposta: "REGERENARACAO" }
  ],
  pares: [
    { dica: "Meio de salvação",               resposta: "FÉ" },
    { dica: "Filho de Deus",                  resposta: "JESUS" },
    { dica: "Favor imerecido",                resposta: "GRAÇA" },
    { dica: "Erro do homem",                  resposta: "PECADO" },
    { dica: "Instrumento de morte de Cristo", resposta: "CRUZ" },
    { dica: "Criador de tudo",                resposta: "DEUS" },
    { dica: "Vida eterna",                    resposta: "SALVACAO" },
    { dica: "Sentimento divino",              resposta: "AMOR" },
    { dica: "Inimigo das nossas almas",       resposta: "DIABO" }
  ],
  ordem: {
    label: "Coloque na ordem certa:",
    itens:   ["Queda", "Restauração", "Criação", "Redenção"],
    corretos: ["Criação", "Queda", "Redenção", "Restauração"]
  },
  flashcard: [
    {
      pergunta: "O que é Graça?",
      frase:    "Graça é o ___SLOT0___ de Deus dado ao ___SLOT1___ sem que ele ___SLOT2___.",
      slots:    ["favor", "homem", "mereça"],
      distratores: ["castigo", "anjo", "peça"]
    },
    {
      pergunta: "O que é Fé?",
      frase:    "Fé é a ___SLOT0___ das coisas que se esperam e a prova das ___SLOT1___ que não se ___SLOT2___.",
      slots:    ["certeza", "coisas", "veem"],
      distratores: ["dúvida", "erros", "ouvem"]
    },
    {
      pergunta: "O que é Pecado?",
      frase:    "Pecado é a ___SLOT0___ da Lei de ___SLOT1___, que ___SLOT2___ a todos.",
      slots:    ["transgressão", "Deus", "afeta"],
      distratores: ["obediência", "homem", "salva"]
    },
    {
      pergunta: "O que é Salvação?",
      frase:    "Salvação é a ___SLOT0___ do pecado por meio da ___SLOT1___ em ___SLOT2___.",
      slots:    ["libertação", "fé", "Jesus"],
      distratores: ["prisão", "obra", "Pedro"]
    },
    {
      pergunta: "O que é Santificação?",
      frase:    "Santificação é o ___SLOT0___ de ser ___SLOT1___ pela ___SLOT2___ de Deus.",
      slots:    ["processo", "santo", "graça"],
      distratores: ["instante", "perfeito", "força"]
    },
    {
      pergunta: "O que é Arrependimento?",
      frase:    "Arrependimento é a ___SLOT0___ de mente que leva a ___SLOT1___ o ___SLOT2___.",
      slots:    ["mudança", "abandonar", "pecado"],
      distratores: ["firmeza", "amar", "mundo"]
    },
    {
  pergunta: "O que ensina Gênesis 1:27?",
  frase: "Deus criou o homem à sua ___SLOT0___, conforme a sua ___SLOT1___.",
  slots: ["imagem", "semelhança"],
  distratores: ["forma", "natureza", "aparência"],
  referencia: "Gênesis 1:27"
},
  {
  pergunta: "O que ensina Romanos 3:23?",
  frase: "Pois todos ___SLOT0___ e carecem da ___SLOT1___ de Deus.",
  slots: ["pecaram", "glória"],
  distratores: ["viveram", "presença", "força"],
  referencia: "Romanos 3:23"
},
    {
  pergunta: "O que ensina Gálatas 4:4?",
  frase: "Vindo a plenitude do tempo, Deus enviou seu ___SLOT0___, nascido de ___SLOT1___.",
  slots: ["Filho", "mulher"],
  distratores: ["servo", "homem", "terra"],
  referencia: "Gálatas 4:4"
},
    {
  pergunta: "O que ensina Colossenses 1:13-14?",
  frase: "Ele nos tirou do poder das ___SLOT0___ e nos transportou para o reino do seu ___SLOT1___ amado.",
  slots: ["trevas", "Filho"],
  distratores: ["sombras", "Senhor", "espírito"],
  referencia: "Colossenses 1:13-14"
}
  ]
};

// =====================================================================
// SEQUÊNCIA
// =====================================================================
const SEQUENCIA = [
  "quiz", "anagrama", "vf", "pares",
  "forca", "quiz_anagrama", "cruzadinha",
  "ordem", "flashcard", "memoria", "quiz", "vf",
  "palavras_cruzadas", "anagrama", "forca", "pares"
];

// =====================================================================
// ESTADO GLOBAL
// =====================================================================
let estado = {
  nome: "",
  pontos: 0,
  jogoAtual: 0,
  respondido: false,
  timer: null,
  tempo: 90
};

let _quizFila = [];
let _quizIdx  = 0;
let _paresSel    = null;
let _paresAcertos = 0;
let _paresTotal   = 0;
let _forcaResposta = "";
let _forcaAcertos  = new Set();
let _forcaErros    = 0;
const FORCA_MAX_ERROS = 6;
let _ordemAtual = [];
let _ordemQ     = null;
let _dragSrc    = null;
let _qaRespostas     = 0;
let _qaQuizFeito     = false;
let _qaAnagramaFeito = false;
let _fcBancoOrdem    = null;
let _fcCliqueWord    = null;
let _fcQ          = null;
let _fcSlots      = [];
let _fcFlipped    = false;
let _fcDragWord   = null;
let _fcDragFrom   = null;
let _memCartas       = [];
let _memSelecionadas = [];
let _memAcertos      = 0;
let _memBloqueado    = false;
const _memPares = [
  { par: 0, texto: "FÉ",    emoji: "🙏" },
  { par: 1, texto: "GRAÇA", emoji: "✨" },
  { par: 2, texto: "CRUZ",  emoji: "✝️"  },
  { par: 3, texto: "JESUS", emoji: "👑" },
  { par: 4, texto: "AMOR",  emoji: "❤️"  },
  { par: 5, texto: "DEUS",  emoji: "☁️"  }
];
let _pcPalavrasGeradas = [];
let _pcLinhas          = 0;
let _pcColunas         = 0;
let _pcGrade           = [];
let _pcRespostas       = {};
let _pcAtiva           = null;
let _pcPalavraAtiva    = null;
const _PC_BANCO = [
  { palavra: "JESUS",    dica: "Filho de Deus"             },
  { palavra: "DEUS",     dica: "Criador de tudo"           },
  { palavra: "FE",       dica: "Meio de salvação"          },
  { palavra: "GRACA",    dica: "Favor imerecido"           },
  { palavra: "PECADO",   dica: "Transgressão da Lei"       },
  { palavra: "SALVACAO", dica: "Dom de Deus ao homem"      },
  { palavra: "AMOR",     dica: "Sentimento divino"         },
  { palavra: "VERDADE",  dica: "O que liberta"             },
  { palavra: "DIABO",    dica: "o tentador"             },
  { palavra: "CRUZ",     dica: "Instrumento de redenção"   },
  { palavra: "SANTIFICACAO",     dica: "Processo continuo na vida do crente" },
  { palavra: "VIDA",     dica: "Dom que Cristo oferece"    },
  { palavra: "LUZ",      dica: "Cristo é a nossa ___"      },
  { palavra: "PAZ",      dica: "Fruto do Espírito"         },
  { palavra: "LEI",      dica: "Mandamentos de Deus"       },
  { palavra: "ORACAO",   dica: "Comunicação com Deus"      },
  { palavra: "PROFETA",  dica: "Porta-voz de Deus"         },
  { palavra: "BATISMO",  dica: "Rito de iniciação cristã"  },
  { palavra: "PARAISO",  dica: "Morada eterna dos salvos"  },
  { palavra: "SANTO", dica: "Separado do mal"         }
];

// =====================================================================
// SUPABASE + SYNC (LOCAL + ONLINE)
// =====================================================================

// 🔄 Salvar pontuação com fallback inteligente
async function salvarPontuacao(nome, pontos) {
  const registro = {
    nome,
    pontos,
    data_jogo: new Date().toISOString()
  };

  // 💾 salva local SEMPRE
  salvarRankingLocal(registro);

  try {
    const { error } = await supabaseClient
      .from('pontuacoes')
      .insert([registro]);

    if (error) throw error;

    console.log("🌐 Pontuação salva no Supabase");

  } catch (err) {
    console.warn("💾 Offline, salvando como pendente");
    salvarPendente(registro);
  }
}

// 💾 Ranking local
function salvarRankingLocal(novo) {
  try {
    const r = JSON.parse(localStorage.getItem("rank") || "[]");

    r.push(novo);
    r.sort((a, b) => b.pontos - a.pontos);

    localStorage.setItem("rank", JSON.stringify(r.slice(0, 20)));
  } catch (_) {}
}

// ⏳ Salvar pendentes
function salvarPendente(registro) {
  const pendentes = JSON.parse(localStorage.getItem("pendentes") || "[]");

  pendentes.push(registro);

  localStorage.setItem("pendentes", JSON.stringify(pendentes));
}

// 🔄 Sincronizar pendentes
async function sincronizarPendentes() {
  const pendentes = JSON.parse(localStorage.getItem("pendentes") || "[]");

  if (!pendentes.length) return;

  console.log("🔄 Sincronizando pendentes...", pendentes);

  try {
    const { error } = await supabaseClient
      .from('pontuacoes')
      .insert(pendentes);

    if (error) throw error;

    console.log("✅ Pendentes enviados");

    localStorage.removeItem("pendentes");

  } catch (err) {
    console.warn("❌ Ainda sem conexão com Supabase");
  }
}

// 🌐 Carregar ranking global
async function carregarRankingGlobal() {
  const loadingEl = document.getElementById("ranking-loading");
  if (loadingEl) loadingEl.classList.remove("hidden");

  console.log("🌐 Buscando ranking no Supabase...");

  try {
    const { data, error } = await supabaseClient
      .from('pontuacoes')
      .select('nome, pontos')
      .order('pontos', { ascending: false })
      .limit(20);

    if (loadingEl) loadingEl.classList.add("hidden");

    if (error) {
      console.error('Erro Supabase:', error);
      console.log("💾 Usando localStorage");
      carregarRankingLocal();
      return;
    }

    if (data && data.length > 0) {
      const lista = document.getElementById("listaRanking");

      if (lista) {
        lista.innerHTML = data.map((p, i) =>
          `<li class="bg-slate-700 p-3 rounded-xl flex justify-between items-center">
            <span class="font-semibold">${i + 1}. ${p.nome}</span>
            <span class="text-yellow-400 font-bold">${p.pontos} pts</span>
          </li>`
        ).join("");
      }

      console.log("✅ Dados vindos do Supabase");

    } else {
      console.log("💾 Supabase vazio, usando local");
      carregarRankingLocal();
    }

  } catch (err) {
    if (loadingEl) loadingEl.classList.add("hidden");

    console.error('Erro conexão:', err);
    console.log("💾 Usando localStorage");
    carregarRankingLocal();
  }
}

// 💾 Carregar ranking local
function carregarRankingLocal() {
  try {
    const r = JSON.parse(localStorage.getItem("rank") || "[]");
    const lista = document.getElementById("listaRanking");

    if (lista) {
      lista.innerHTML = r.length
        ? r.map((p, i) =>
            `<li class="bg-slate-700 p-3 rounded-xl flex justify-between items-center">
              <span class="font-semibold">${i + 1}. ${p.nome}</span>
              <span class="text-yellow-400 font-bold">${p.pontos} pts</span>
            </li>`
          ).join("")
        : `<li class="text-slate-400 text-center py-4">Nenhum resultado ainda.</li>`;
    }

    console.log("💾 Dados vindos do localStorage");

  } catch (_) {
    const lista = document.getElementById("listaRanking");
    if (lista) {
      lista.innerHTML = `<li class="text-slate-400 text-center py-4">Nenhum resultado ainda.</li>`;
    }
  }
}

// 🏆 Ver posição no ranking
async function verificarPosicaoNoRanking(pontos) {
  try {
    const { data, error } = await supabaseClient
      .from('pontuacoes')
      .select('pontos')
      .gte('pontos', pontos);

    if (!error && data) {
      const posicao = data.length;

      const { count } = await supabaseClient
        .from('pontuacoes')
        .select('*', { count: 'exact', head: true });

      const totalJogadores = count || 0;

      const posEl = document.getElementById("ranking-position");
      if (posEl) {
        posEl.innerHTML =
          `🏆 Você ficou em ${posicao}º lugar entre ${totalJogadores} jogadores! 🏆`;
      }
    }

  } catch (err) {
    console.error('Erro ao verificar posição:', err);
  }
}

// 📊 UI
function verRankingGlobal() {
  document.getElementById("final")?.classList.add("hidden");
  document.getElementById("login")?.classList.add("hidden");
  document.getElementById("game")?.classList.add("hidden");
  document.getElementById("ranking")?.classList.remove("hidden");

  carregarRankingGlobal();
}

function voltarLogin() {
  document.getElementById("ranking")?.classList.add("hidden");
  document.getElementById("login")?.classList.remove("hidden");
  document.getElementById("game")?.classList.add("hidden");
  document.getElementById("final")?.classList.add("hidden");
}

// 🚀 AUTO SYNC
sincronizarPendentes();
window.addEventListener("online", sincronizarPendentes);

// =====================================================================
// UTILITÁRIOS
// =====================================================================
function $(id) { return document.getElementById(id); }

function aleatorio(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function embaralhar(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function normalizar(str) {
  return str.toUpperCase().trim()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// =====================================================================
// LAYOUT HELPERS
// =====================================================================
function layout(tituloTxt, conteudo) {
  const pct = Math.round((estado.jogoAtual / SEQUENCIA.length) * 100);
  $("game").innerHTML = `
    <div class="bg-slate-800 p-4 rounded-2xl shadow-lg space-y-3 fade-in">
      <div class="flex justify-between items-center">
        <h2 class="text-base font-bold text-blue-400 leading-tight">${tituloTxt}</h2>
        <span id="tempo" class="text-yellow-400 font-bold text-sm ml-2 shrink-0"></span>
      </div>
      <div class="progress-bar-wrap">
        <div class="progress-bar-fill" style="width:${pct}%"></div>
      </div>
      <p class="text-xs text-slate-500 text-right">
        ${estado.jogoAtual + 1} / ${SEQUENCIA.length}
      </p>
      ${conteudo}
    </div>
  `;
}

// =====================================================================
// TIMER
// =====================================================================
function iniciarTimer(segundos) {
  clearInterval(estado.timer);
  estado.tempo = segundos || 90;
  _atualizarTimerUI();

  estado.timer = setInterval(() => {
    estado.tempo--;
    _atualizarTimerUI();
    if (estado.tempo <= 0) {
      clearInterval(estado.timer);
      if (!estado.respondido) proximoJogo();
    }
  }, 1000);
}

function _atualizarTimerUI() {
  const el = $("tempo");
  if (!el) return;
  el.textContent = "⏱ " + estado.tempo + "s";
  el.style.color = estado.tempo <= 15 ? "#ef4444" : "";
}

function pararTimer() {
  clearInterval(estado.timer);
}

// =====================================================================
// START
// =====================================================================
function start() {
  const nome = $("nome").value.trim();
  if (!nome) { alert("Digite seu nome!"); return; }

  estado.nome       = nome;
  estado.pontos     = 0;
  estado.jogoAtual  = 0;
  estado.respondido = false;
  _quizFila = [];
  _quizIdx  = 0;
  _qaRespostas     = 0;
  _qaQuizFeito     = false;
  _qaAnagramaFeito = false;
  _fcBancoOrdem    = null;
  _fcCliqueWord    = null;

  $("login").classList.add("hidden");
  $("game").classList.remove("hidden");
  carregarJogo();
}

// =====================================================================
// FLUXO
// =====================================================================
function carregarJogo() {
  if (estado.jogoAtual >= SEQUENCIA.length) { finalizar(); return; }
  estado.respondido = false;
  const tipo = SEQUENCIA[estado.jogoAtual];
  const mapa = {
    quiz:              jogoQuiz,
    anagrama:          jogoAnagrama,
    vf:                jogoVF,
    pares:             jogoPares,
    forca:             jogoForca,
    cruzadinha:        jogoCruzadinha,
    quiz_anagrama:     jogoQuizAnagrama,
    ordem:             jogoOrdem,
    flashcard:         jogoFlashcard,
    memoria:           jogoMemoria,
    palavras_cruzadas: jogoPalavrasCruzadas
  };
  const fn = mapa[tipo];
  if (fn) fn(); else proximoJogo();
}

function proximoJogo() {
  pararTimer();
  estado.jogoAtual++;
  setTimeout(carregarJogo, 900);
}

// =====================================================================
// RESPOSTA
// =====================================================================
function acertar() {
  if (estado.respondido) return;
  estado.respondido = true;
  estado.pontos += 10;
  pararTimer();
  feedback(true);
}

function errar() {
  if (estado.respondido) return;
  estado.respondido = true;
  pararTimer();
  feedback(false);
}

function check(resposta) {
  if (estado.respondido) return;
  const el = $("resp");
  if (!el) return;
  const val = normalizar(el.value);
  if (!val) { alert("Digite uma resposta!"); return; }
  normalizar(resposta) === val ? acertar() : errar();
}

// =====================================================================
// FEEDBACK
// =====================================================================
function feedback(ok) {
  document.querySelectorAll(".feedback").forEach(f => f.remove());
  const el = document.createElement("div");
  el.className = "feedback";
  el.style.background = ok ? "#22c55e" : "#ef4444";
  el.textContent = ok ? "✔ Acertou!" : "✖ Errou";
  document.body.appendChild(el);
  setTimeout(() => { el.remove(); proximoJogo(); }, 800);
}

// =====================================================================
// JOGO: QUIZ
// =====================================================================
function jogoQuiz() {
  if (_quizFila.length === 0 || _quizIdx >= _quizFila.length) {
    _quizFila = embaralhar(BANCO.quiz);
    _quizIdx  = 0;
  }
  const q = _quizFila[_quizIdx++];
  const respostaCorreta    = q.opcoes[q.correta];
  const opcoesEmbaralhadas = embaralhar([...q.opcoes]);
  const novoIndiceCorreto  = opcoesEmbaralhadas.indexOf(respostaCorreta);

  layout("Quiz", `
    <p class="text-center font-semibold text-base leading-snug">${q.pergunta}</p>
    <div class="quiz-grid gap-2 mt-1">
      ${opcoesEmbaralhadas.map((op, i) =>
        `<button class="btn" id="qopt-${i}" onclick="responderQuiz(${i}, ${novoIndiceCorreto})">${op}</button>`
      ).join("")}
    </div>
  `);
  iniciarTimer(60);
}

function responderQuiz(i, correta) {
  if (estado.respondido) return;
  for (let k = 0; k < 3; k++) {
    const b = $(`qopt-${k}`);
    if (!b) continue;
    b.disabled = true;
    if (k === correta) b.style.background = "#22c55e";
    else if (k === i)  b.style.background = "#ef4444";
  }
  i === correta ? acertar() : errar();
}

// =====================================================================
// JOGO: ANAGRAMA
// =====================================================================
function jogoAnagrama() {
  const q = aleatorio(BANCO.anagrama);
  layout("Anagrama", `
    <p class="text-center font-semibold text-sm">Desembaralhe a palavra:</p>
    <div class="anagrama-word text-yellow-400 text-center font-bold py-3">${q.embaralhado}</div>
    <input id="resp" class="input mb-2" placeholder="Sua resposta..."
           autocomplete="off" autocorrect="off" spellcheck="false"
           inputmode="text" style="text-transform:uppercase">
    <button class="btn" onclick="check('${q.resposta}')">Confirmar</button>
  `);
  iniciarTimer(60);
  if (window.innerWidth > 600) { const r = $("resp"); if (r) r.focus(); }
}

// =====================================================================
// JOGO: VERDADEIRO OU FALSO
// =====================================================================
function jogoVF() {
  const q = aleatorio(BANCO.vf);
  layout("Verdadeiro ou Falso", `
    <p class="text-center font-semibold text-base leading-snug">${q.pergunta}</p>
    <div class="grid grid-cols-2 gap-3 mt-3">
      <button class="btn btn-success" onclick="responderVF(true, ${q.correta})">✔ Verdadeiro</button>
      <button class="btn btn-error"   onclick="responderVF(false, ${q.correta})">✖ Falso</button>
    </div>
  `);
  iniciarTimer(30);
}

function responderVF(escolha, correta) {
  if (estado.respondido) return;
  escolha === correta ? acertar() : errar();
}

// =====================================================================
// JOGO: PARES
// =====================================================================
function jogoPares() {
  const amostra = embaralhar(BANCO.pares).slice(0, 4);
  _paresSel     = null;
  _paresAcertos = 0;
  _paresTotal   = amostra.length;

  const dicas     = amostra.map((p, i) => ({ texto: p.dica,     idx: i, tipo: "dica" }));
  const respostas = amostra.map((p, i) => ({ texto: p.resposta, idx: i, tipo: "resp" }));
  const todos     = embaralhar([...dicas, ...respostas]);

  const cards = todos.map((item, pos) =>
    `<div class="parItem" id="par-${pos}"
          data-idx="${item.idx}" data-tipo="${item.tipo}"
          onclick="selecionarPar(${pos})">
       ${item.texto}
     </div>`
  ).join("");

  layout("Pares", `
    <p class="text-center font-semibold text-sm">Conecte cada definição à palavra:</p>
    <div class="grid grid-cols-2 gap-2 mt-2">${cards}</div>
    <p class="text-center text-xs text-slate-400 mt-2">
      Acertos: <span id="pares-ok">0</span>/${_paresTotal}
    </p>
  `);
  iniciarTimer(90);
}

function selecionarPar(pos) {
  if (estado.respondido) return;
  const el = $(`par-${pos}`);
  if (!el || el.dataset.matched) return;

  if (!_paresSel) {
    _paresSel = { pos, idx: +el.dataset.idx, tipo: el.dataset.tipo };
    el.style.background = "#3b82f6";
    return;
  }

  if (_paresSel.pos === pos) {
    el.style.background = "";
    _paresSel = null;
    return;
  }

  const prev = $(`par-${_paresSel.pos}`);
  const tiposDif = _paresSel.tipo !== el.dataset.tipo;
  const mesmoPar = _paresSel.idx === +el.dataset.idx;

  if (tiposDif && mesmoPar) {
    [el, prev].forEach(c => {
      c.style.background = "#22c55e";
      c.dataset.matched  = "1";
      c.style.opacity    = "0.6";
      c.style.cursor     = "default";
    });
    _paresAcertos++;
    const span = $("pares-ok");
    if (span) span.textContent = _paresAcertos;
    if (_paresAcertos === _paresTotal) acertar();
  } else {
    [el, prev].forEach(c => { c.style.background = "#ef4444"; });
    setTimeout(() => {
      if (!el.dataset.matched)   el.style.background   = "";
      if (!prev.dataset.matched) prev.style.background = "";
    }, 600);
  }
  _paresSel = null;
}

// =====================================================================
// JOGO: FORCA
// =====================================================================
function jogoForca() {
  const q        = aleatorio(BANCO.forca);
  _forcaResposta = normalizar(q.resposta);
  _forcaAcertos  = new Set();
  _forcaErros    = 0;
  _renderForca(q.dica);
  iniciarTimer(90);
}

function _renderForca(dica) {
  const palavra = _forcaResposta.split("").map((l, i) =>
    `<span id="fl-${i}"
      style="display:inline-flex;align-items:center;justify-content:center;
             width:clamp(24px,7vw,34px);height:clamp(24px,7vw,34px);
             text-align:center;font-size:clamp(1rem,5vw,1.4rem);
             font-weight:bold;border-bottom:3px solid #facc15;margin:0 3px;
             color:#facc15">
      ${_forcaAcertos.has(l) ? l : ""}
    </span>`
  ).join("");

  const teclas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(l => {
    const acertou = _forcaAcertos.has(l) && _forcaResposta.includes(l);
    const errou   = _forcaAcertos.has(l) && !_forcaResposta.includes(l);
    const bg = acertou ? "#22c55e" : errou ? "#ef4444" : "#475569";
    const op = errou ? "opacity:.35;" : "";
    return `<button id="key-${l}" onclick="chutar('${l}')"
              class="forca-key"
              style="background:${bg};${op}"
              ${_forcaAcertos.has(l) ? "disabled" : ""}>${l}</button>`;
  }).join("");

  layout("Forca", `
    <p class="text-center font-semibold text-sm">${dica}</p>
    <div class="flex justify-center flex-wrap gap-1 py-3">${palavra}</div>
    <p class="text-center text-xs text-red-400 mb-2">
      Erros: <span id="forca-erros">${_forcaErros}</span> / ${FORCA_MAX_ERROS}
    </p>
    <div class="flex flex-wrap gap-1 justify-center">${teclas}</div>
  `);
}

function chutar(letra) {
  if (estado.respondido) return;
  const btn = $("key-" + letra);
  if (!btn || btn.disabled) return;
  btn.disabled = true;
  _forcaAcertos.add(letra);

  if (_forcaResposta.includes(letra)) {
    btn.style.background = "#22c55e";
    _forcaResposta.split("").forEach((l, i) => {
      if (l === letra) {
        const el = $("fl-" + i);
        if (el) el.textContent = letra;
      }
    });
    if (_forcaResposta.split("").every(l => _forcaAcertos.has(l))) acertar();
  } else {
    btn.style.background = "#ef4444";
    btn.style.opacity    = "0.35";
    _forcaErros++;
    const badge = $("forca-erros");
    if (badge) badge.textContent = _forcaErros;
    if (_forcaErros >= FORCA_MAX_ERROS) errar();
  }
}

// =====================================================================
// JOGO: CRUZADINHA
// =====================================================================
function jogoCruzadinha() {
  const q = aleatorio(BANCO.cruzadinha);
  layout("Cruzadinha", `
    <p class="text-center font-semibold text-base">${q.dica}</p>
    <input id="resp" class="input mb-2" placeholder="Sua resposta..."
           autocomplete="off" autocorrect="off" spellcheck="false"
           style="text-transform:uppercase">
    <button class="btn" onclick="check('${q.resposta}')">Responder</button>
  `);
  iniciarTimer(45);
  if (window.innerWidth > 600) { const r = $("resp"); if (r) r.focus(); }
}

// =====================================================================
// JOGO: ORDEM (drag & drop + touch) - VERSÃO CORRIGIDA SEM PISCADA
// =====================================================================
function jogoOrdem() {
  _ordemQ     = BANCO.ordem;
  _ordemAtual = embaralhar([..._ordemQ.itens]);
  _renderOrdem();
  iniciarTimer(60);
}

function _renderOrdem() {
  const itens = _ordemAtual.map((item, i) =>
    `<div class="btn ordem-item" draggable="true" data-idx="${i}"
          ondragstart="dragStart(event)"
          ondragover="dragOver(event)"
          ondrop="dragDrop(event,${i})"
          ondragleave="dragLeave(event)"
          ondragend="dragEnd(event)"
          ontouchstart="touchStart(event,${i})"
          ontouchmove="touchMove(event)"
          ontouchend="touchEnd(event,${i})">
       <span style="opacity:.5;font-size:1.2rem">⠿</span> ${item}
     </div>`
  ).join("");

  layout("Ordem", `
    <p class="text-center font-semibold text-sm">${_ordemQ.label}</p>
    <div class="space-y-2 mt-2" id="ordem-list">${itens}</div>
    <button class="btn btn-success mt-3" onclick="verificarOrdem()">✔ Confirmar Ordem</button>
  `);
}

function dragStart(e) {
  _dragSrc = e.currentTarget;
  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text/plain", "");
  // Remove a imagem fantasma padrão que causa piscada
  const img = new Image();
  img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
  e.dataTransfer.setDragImage(img, 0, 0);
}

function dragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = "move";
  e.currentTarget.style.outline = "2px solid #3b82f6";
}

function dragLeave(e) {
  e.currentTarget.style.outline = "";
}

function dragDrop(e, toIdx) {
  e.preventDefault();
  e.stopPropagation();
  e.currentTarget.style.outline = "";
  if (!_dragSrc || _dragSrc === e.currentTarget) return;
  
  const fromIdx = +_dragSrc.dataset.idx;
  [_ordemAtual[fromIdx], _ordemAtual[toIdx]] = [_ordemAtual[toIdx], _ordemAtual[fromIdx]];
  _renderOrdem();
}

function dragEnd(e) {
  e.preventDefault();
  document.querySelectorAll('.ordem-item').forEach(el => {
    el.style.outline = "";
  });
  _dragSrc = null;
}

let _touchSrcIdx = null;
let _touchStartY = 0;
let _touchStartX = 0;
let _touchTarget = null;

function touchStart(e, idx) {
  e.preventDefault();
  _touchSrcIdx = idx;
  _touchTarget = e.currentTarget;
  _touchStartY = e.touches[0].clientY;
  _touchStartX = e.touches[0].clientX;
  e.currentTarget.style.outline = "2px solid #3b82f6";
  e.currentTarget.style.opacity = "0.7";
  e.currentTarget.style.transform = "scale(0.98)";
}

function touchMove(e) {
  if (_touchSrcIdx === null) return;
  e.preventDefault();
  
  const currentY = e.touches[0].clientY;
  const currentX = e.touches[0].clientX;
  const deltaY = Math.abs(currentY - _touchStartY);
  const deltaX = Math.abs(currentX - _touchStartX);
  
  if (deltaY > 15 || deltaX > 15) {
    const elementUnderFinger = document.elementFromPoint(currentX, currentY);
    const targetItem = elementUnderFinger?.closest('.ordem-item');
    
    if (targetItem && targetItem !== _touchTarget) {
      const targetIdx = parseInt(targetItem.dataset.idx);
      if (!isNaN(targetIdx) && targetIdx !== _touchSrcIdx) {
        [_ordemAtual[_touchSrcIdx], _ordemAtual[targetIdx]] = 
        [_ordemAtual[targetIdx], _ordemAtual[_touchSrcIdx]];
        _touchSrcIdx = targetIdx;
        _touchTarget = targetItem;
        _renderOrdem();
        setTimeout(() => {
          const newTarget = document.querySelector(`.ordem-item[data-idx="${targetIdx}"]`);
          if (newTarget) {
            newTarget.style.outline = "2px solid #3b82f6";
            newTarget.style.opacity = "0.7";
            newTarget.style.transform = "scale(0.98)";
          }
        }, 10);
      }
    }
  }
}

function touchEnd(e, idx) {
  e.preventDefault();
  if (_touchTarget) {
    _touchTarget.style.outline = "";
    _touchTarget.style.opacity = "";
    _touchTarget.style.transform = "";
  }
  _touchSrcIdx = null;
  _touchTarget = null;
  _touchStartY = 0;
  _touchStartX = 0;
}

function verificarOrdem() {
  if (estado.respondido) return;
  const certo = _ordemQ.corretos.every((v, i) => v === _ordemAtual[i]);
  certo ? acertar() : errar();
}

// =====================================================================
// JOGO: QUIZ + ANAGRAMA
// =====================================================================
function jogoQuizAnagrama() {
  if (_quizFila.length === 0 || _quizIdx >= _quizFila.length) {
    _quizFila = embaralhar(BANCO.quiz);
    _quizIdx  = 0;
  }
  const q  = _quizFila[_quizIdx++];
  const an = aleatorio(BANCO.anagrama);

  const qaRespostaCorreta    = q.opcoes[q.correta];
  const qaOpcoesEmbaralhadas = embaralhar([...q.opcoes]);
  const qaNovoIndiceCorreto  = qaOpcoesEmbaralhadas.indexOf(qaRespostaCorreta);

  _qaQuizFeito     = false;
  _qaAnagramaFeito = false;

  layout("Quiz + Anagrama", `
    <p class="text-center text-xs text-slate-400 uppercase tracking-widest mb-1">Pergunta</p>
    <p class="text-center font-semibold text-sm leading-snug">${q.pergunta}</p>
    <div class="grid gap-2 mt-1">
      ${qaOpcoesEmbaralhadas.map((op, i) =>
        `<button class="btn" id="qopt-${i}" onclick="responderQuizAnagrama(${i}, ${qaNovoIndiceCorreto})">${op}</button>`
      ).join("")}
    </div>
    <hr class="border-slate-600 my-3">
    <p class="text-center text-xs text-slate-400 uppercase tracking-widest mb-1">Desembaralhe</p>
    <div class="anagrama-word text-yellow-400 text-center font-bold py-2">${an.embaralhado}</div>
    <input id="resp" class="input mb-2" placeholder="Sua resposta..."
           autocomplete="off" autocorrect="off" spellcheck="false"
           style="text-transform:uppercase">
    <button class="btn" onclick="checkAnagrama('${an.resposta}')">Confirmar palavra</button>
  `);
  iniciarTimer(90);
}

function responderQuizAnagrama(i, correta) {
  if (_qaQuizFeito) return;
  _qaQuizFeito = true;
  for (let k = 0; k < 3; k++) {
    const b = $("qopt-" + k);
    if (!b) continue;
    b.disabled = true;
    if (k === correta) b.style.background = "#22c55e";
    else if (k === i)  b.style.background = "#ef4444";
  }
  if (i === correta) estado.pontos += 10;
  _tentarFinalizarQA();
}

function checkAnagrama(resposta) {
  if (_qaAnagramaFeito) return;
  const el = $("resp");
  if (!el) return;
  const val = normalizar(el.value);
  if (!val) { alert("Digite uma resposta!"); return; }
  _qaAnagramaFeito = true;
  el.disabled = true;
  if (normalizar(resposta) === val) { el.style.background = "#22c55e44"; estado.pontos += 10; }
  else { el.style.background = "#ef444444"; }
  _tentarFinalizarQA();
}

function _tentarFinalizarQA() {
  if (!_qaQuizFeito || !_qaAnagramaFeito) return;
  _qaRespostas = 0; _qaQuizFeito = false; _qaAnagramaFeito = false;
  estado.respondido = true;
  pararTimer();
  document.querySelectorAll(".feedback").forEach(f => f.remove());
  const el = document.createElement("div");
  el.className = "feedback";
  el.style.background = "#22c55e";
  el.textContent = "✔ Concluído!";
  document.body.appendChild(el);
  setTimeout(() => { el.remove(); estado.jogoAtual++; carregarJogo(); }, 800);
}

// =====================================================================
// JOGO: FLASHCARD
// =====================================================================
function jogoFlashcard() {
  _fcQ          = aleatorio(BANCO.flashcard);
  _fcSlots      = [null, null, null];
  _fcFlipped    = false;
  _fcDragWord   = null;
  _fcDragFrom   = null;
  _fcBancoOrdem = null;
  _fcCliqueWord = null;
  _renderFlashcard();
  iniciarTimer(90);
}

function _renderFlashcard() {
  const q = _fcQ;

  const frente = `
    <div style="text-align:center;padding:1rem">
      <p style="font-size:1rem;font-weight:bold;color:#93c5fd">${q.pergunta}</p>
      <p style="font-size:.75rem;color:#94a3b8;margin-top:.5rem">Toque para ver a frase</p>
    </div>`;

  let fraseHtml = q.frase;
  for (let s = 0; s < 3; s++) {
    const conteudo = _fcSlots[s]
      ? `<span style="color:#fbbf24;font-weight:bold">${_fcSlots[s]}</span>`
      : `<span style="color:#94a3b8;font-size:.7rem">aqui</span>`;

    const slotHtml = `<span
        id="fc-slot-${s}"
        ondragover="fcDragOver(event)"
        ondragleave="fcDragLeave(event)"
        ondrop="fcDrop(event,${s})"
        onclick="fcSlotClick(${s})"
        style="
          display:inline-flex;align-items:center;justify-content:center;
          min-width:64px;height:26px;
          background:${_fcSlots[s] ? '#1e3a5f' : '#1e293b'};
          border:2px dashed ${_fcSlots[s] ? '#3b82f6' : '#475569'};
          border-radius:6px;padding:0 6px;
          vertical-align:middle;margin:0 2px;
          cursor:pointer;transition:.2s;font-size:.8rem
        ">${conteudo}</span>`;
    fraseHtml = fraseHtml.replace(`___SLOT${s}___`, slotHtml);
  }

  const verso = `
    <div style="padding:.6rem;font-size:.85rem;line-height:2.1;color:#e2e8f0">
      ${fraseHtml}
    </div>`;

  if (!_fcBancoOrdem) {
    _fcBancoOrdem = embaralhar([...q.slots, ...q.distratores]);
  }
  const usadas      = _fcSlots.filter(Boolean);
  const disponiveis = _fcBancoOrdem.filter(p => !usadas.includes(p));

  const bancoPalavras = disponiveis.map(palavra => `
    <span
      id="fc-word-${palavra}"
      draggable="true"
      ondragstart="fcDragStart(event,'${palavra}','bank')"
      ondragend="fcDragEnd(event)"
      onclick="fcWordClick('${palavra}')"
      class="fc-word"
      style="${_fcCliqueWord === palavra ? 'background:#1e40af;border-color:#3b82f6' : ''}"
    >${palavra}</span>
  `).join("");

  layout("Flashcard", `
    <div class="card" id="fc-card" onclick="fcVirar()" style="cursor:pointer">
      <div class="card-inner" id="fc-inner">
        <div class="card-front">${frente}</div>
        <div class="card-back">${verso}</div>
      </div>
    </div>
    <p class="text-center text-xs text-slate-400 mt-1" id="fc-hint">
      ${_fcFlipped ? 'Toque nas palavras e nas lacunas para preencher' : 'Toque no cartão para ver a frase'}
    </p>
    <div class="fc-banco" id="fc-bank"
         ondragover="fcDragOver(event)"
         ondragleave="fcDragLeave(event)"
         ondrop="fcDropBank(event)">
      ${bancoPalavras}
    </div>
    <button class="btn btn-success mt-2" onclick="fcVerificar()">✔ Verificar resposta</button>
  `);

  if (_fcFlipped) {
    const inner = $("fc-inner");
    if (inner) inner.style.transform = "rotateY(180deg)";
  }
}

function fcVirar() {
  if (estado.respondido) return;
  _fcFlipped = !_fcFlipped;
  const inner = $("fc-inner");
  if (inner) inner.style.transform = _fcFlipped ? "rotateY(180deg)" : "";
  const hint = $("fc-hint");
  if (hint) hint.textContent = _fcFlipped
    ? "Toque nas palavras e nas lacunas para preencher"
    : "Toque no cartão para ver a frase";
}

function fcDragStart(e, palavra, origem) { _fcDragWord = palavra; _fcDragFrom = origem; e.dataTransfer.effectAllowed = "move"; e.currentTarget.style.opacity = ".4"; }
function fcDragEnd(e)  { e.currentTarget.style.opacity = ""; }
function fcDragOver(e) { e.preventDefault(); e.currentTarget.style.borderColor = "#3b82f6"; }
function fcDragLeave(e){ e.currentTarget.style.borderColor = ""; }

function fcDrop(e, slotIdx) {
  e.preventDefault(); e.stopPropagation();
  e.currentTarget.style.borderColor = "";
  if (!_fcDragWord) return;
  if (_fcDragFrom && _fcDragFrom.startsWith("slot-")) {
    const fromIdx = parseInt(_fcDragFrom.split("-")[1]);
    _fcSlots[fromIdx] = null;
  }
  _fcSlots[slotIdx] = _fcDragWord;
  _fcDragWord = null; _fcDragFrom = null;
  _renderFlashcard();
}

function fcDropBank(e) {
  e.preventDefault();
  e.currentTarget.style.borderColor = "";
  if (!_fcDragWord || !_fcDragFrom) return;
  if (_fcDragFrom.startsWith("slot-")) {
    const fromIdx = parseInt(_fcDragFrom.split("-")[1]);
    _fcSlots[fromIdx] = null;
    _fcDragWord = null; _fcDragFrom = null;
    _renderFlashcard();
  }
}

function fcWordClick(palavra) {
  if (estado.respondido) return;
  if (_fcCliqueWord === palavra) { _fcCliqueWord = null; _renderFlashcard(); return; }
  _fcCliqueWord = palavra;
  _renderFlashcard();
}

function fcSlotClick(slotIdx) {
  if (estado.respondido) return;
  if (_fcCliqueWord) {
    _fcSlots[slotIdx] = _fcCliqueWord;
    _fcCliqueWord = null;
    _renderFlashcard();
  } else if (_fcSlots[slotIdx]) {
    _fcSlots[slotIdx] = null;
    _renderFlashcard();
  }
}

function fcVerificar() {
  if (estado.respondido) return;
  const q = _fcQ;
  let acertos = 0;
  for (let s = 0; s < q.slots.length; s++) {
    if (_fcSlots[s] && _fcSlots[s].toLowerCase() === q.slots[s].toLowerCase()) acertos++;
  }
  _fcBancoOrdem = null; _fcCliqueWord = null;
  if (acertos === q.slots.length) { acertar(); }
  else if (acertos >= Math.ceil(q.slots.length / 2)) { estado.pontos += 5; errar(); }
  else { errar(); }
}

// =====================================================================
// JOGO: MEMÓRIA
// =====================================================================
function jogoMemoria() {
  _memAcertos = 0; _memSelecionadas = []; _memBloqueado = false;
  const pares  = embaralhar(_memPares).slice(0, 6);
  const cartas = embaralhar([
    ...pares.map(p => ({ par: p.par, face: p.texto })),
    ...pares.map(p => ({ par: p.par, face: p.emoji }))
  ]);
  _memCartas = cartas.map((c, i) => ({ id: i, par: c.par, face: c.face, virada: false, acertada: false }));
  _renderMemoria();
  iniciarTimer(90);
}

function _renderMemoria() {
  const grid = _memCartas.map(c => {
    let bg = "#334155", texto = "?", cursor = "pointer";
    if (c.acertada) { bg = "#166534"; texto = c.face; cursor = "default"; }
    else if (c.virada) { bg = "#1e40af"; texto = c.face; }
    return `<div id="mc-${c.id}" onclick="virarCarta(${c.id})" class="mem-card" style="background:${bg};cursor:${cursor}">${texto}</div>`;
  }).join("");

  layout("Memória", `
    <p class="text-center font-semibold text-sm mb-1">Encontre os pares!</p>
    <p class="text-center text-xs text-slate-400 mb-2">Acertos: <span id="mem-acertos">${_memAcertos}</span> / ${_memCartas.length / 2}</p>
    <div class="mem-grid">${grid}</div>
  `);
}

function virarCarta(id) {
  if (estado.respondido || _memBloqueado) return;
  const carta = _memCartas[id];
  if (!carta || carta.virada || carta.acertada) return;
  carta.virada = true;
  _memSelecionadas.push(id);
  _atualizarCartaUI(id);
  if (_memSelecionadas.length < 2) return;
  _memBloqueado = true;
  const [idA, idB] = _memSelecionadas;
  _memSelecionadas = [];
  const cA = _memCartas[idA], cB = _memCartas[idB];
  if (cA.par === cB.par) {
    cA.acertada = cB.acertada = true;
    _memAcertos++;
    const span = document.getElementById("mem-acertos");
    if (span) span.textContent = _memAcertos;
    _atualizarCartaUI(idA); _atualizarCartaUI(idB);
    _memBloqueado = false;
    if (_memAcertos === _memCartas.length / 2) acertar();
  } else {
    setTimeout(() => {
      cA.virada = cB.virada = false;
      _atualizarCartaUI(idA); _atualizarCartaUI(idB);
      _memBloqueado = false;
    }, 800);
  }
}

function _atualizarCartaUI(id) {
  const el = document.getElementById("mc-" + id);
  if (!el) return;
  const c = _memCartas[id];
  if (c.acertada)     { el.style.background = "#166534"; el.textContent = c.face; el.style.cursor = "default"; }
  else if (c.virada)  { el.style.background = "#1e40af"; el.textContent = c.face; }
  else                { el.style.background = "#334155"; el.textContent = "?"; }
}

// =====================================================================
// JOGO: PALAVRAS CRUZADAS
// =====================================================================
function _pcGerarCruzadinha() {
  const pool    = embaralhar([..._PC_BANCO]);
  const QTDE    = 7 + Math.floor(Math.random() * 3);
  const escolha = pool.slice(0, QTDE);
  for (let t = 0; t < 40; t++) {
    const r = _pcTentarGerar(embaralhar([...escolha]));
    if (r && r.length >= 5) return r;
  }
  return _pcLayoutFallback();
}

function _pcTentarGerar(palavras) {
  const MAX = 22;
  const tmp = Array.from({ length: MAX }, () => Array(MAX).fill(null));
  const colocadas = [];
  const p0 = palavras[0];
  const ini0L = Math.floor(MAX / 2);
  const ini0C = Math.floor((MAX - p0.palavra.length) / 2);
  _pcEscreverTemp(tmp, p0.palavra, "H", ini0L, ini0C);
  colocadas.push({ ...p0, id: 1, dir: "H", lin: ini0L, col: ini0C });
  for (let i = 1; i < palavras.length; i++) {
    const pos = _pcEncontrarEncaixe(tmp, palavras[i].palavra, colocadas, MAX);
    if (pos) {
      _pcEscreverTemp(tmp, palavras[i].palavra, pos.dir, pos.lin, pos.col);
      colocadas.push({ ...palavras[i], id: colocadas.length + 1, dir: pos.dir, lin: pos.lin, col: pos.col });
    }
  }
  if (colocadas.length < 5) return null;
  let minL = MAX, maxL = 0, minC = MAX, maxC = 0;
  colocadas.forEach(pw => _pcCellsDePW(pw).forEach(({ l, c }) => {
    if (l < minL) minL = l; if (l > maxL) maxL = l;
    if (c < minC) minC = c; if (c > maxC) maxC = c;
  }));
  return colocadas.map(pw => ({ ...pw, lin: pw.lin - minL, col: pw.col - minC }));
}

function _pcEscreverTemp(tmp, palavra, dir, lin, col) {
  for (let i = 0; i < palavra.length; i++) {
    const l = dir === "H" ? lin : lin + i;
    const c = dir === "H" ? col + i : col;
    tmp[l][c] = palavra[i];
  }
}

function _pcEncontrarEncaixe(tmp, palavra, colocadas, MAX) {
  for (const existente of embaralhar([...colocadas])) {
    for (const dir of embaralhar(["H", "V"])) {
      if (dir === existente.dir) continue;
      for (let ni = 0; ni < palavra.length; ni++) {
        const letra = palavra[ni];
        for (let ei = 0; ei < existente.palavra.length; ei++) {
          if (existente.palavra[ei] !== letra) continue;
          const lin = dir === "H" ? existente.lin + ei : existente.lin - ni;
          const col = dir === "H" ? existente.col - ni : existente.col + ei;
          if (_pcCabeNaGrade(tmp, palavra, dir, lin, col, MAX) &&
              _pcSemConflito(tmp, palavra, dir, lin, col, ni, MAX))
            return { dir, lin, col };
        }
      }
    }
  }
  return null;
}

function _pcCabeNaGrade(tmp, palavra, dir, lin, col, MAX) {
  if (lin < 0 || col < 0) return false;
  for (let i = 0; i < palavra.length; i++) {
    const l = dir === "H" ? lin : lin + i;
    const c = dir === "H" ? col + i : col;
    if (l >= MAX || c >= MAX) return false;
  }
  return true;
}

function _pcSemConflito(tmp, palavra, dir, lin, col, niCruz, MAX) {
  const lBef = dir === "H" ? lin : lin - 1;
  const cBef = dir === "H" ? col - 1 : col;
  if (lBef >= 0 && cBef >= 0 && tmp[lBef][cBef] !== null) return false;
  const lAft = dir === "H" ? lin : lin + palavra.length;
  const cAft = dir === "H" ? col + palavra.length : col;
  if (lAft < MAX && cAft < MAX && tmp[lAft] && tmp[lAft][cAft] !== null) return false;
  for (let i = 0; i < palavra.length; i++) {
    const l = dir === "H" ? lin : lin + i;
    const c = dir === "H" ? col + i : col;
    const cel = tmp[l][c];
    if (cel !== null) {
      if (cel !== palavra[i] || i !== niCruz) return false;
    } else {
      if (i !== niCruz) {
        if (dir === "H") { if ((l > 0 && tmp[l-1][c] !== null) || (l < MAX-1 && tmp[l+1][c] !== null)) return false; }
        else             { if ((c > 0 && tmp[l][c-1] !== null) || (c < MAX-1 && tmp[l][c+1] !== null)) return false; }
      }
    }
  }
  return true;
}

function _pcCellsDePW(pw) {
  return Array.from({ length: pw.palavra.length }, (_, i) => ({
    l: pw.dir === "H" ? pw.lin     : pw.lin + i,
    c: pw.dir === "H" ? pw.col + i : pw.col
  }));
}

function _pcLayoutFallback() {
  return [
    { id:1, palavra:"JESUS",   dica:"Filho de Deus",           dir:"H", lin:0, col:0 },
    { id:2, palavra:"DEUS",    dica:"Criador de tudo",         dir:"V", lin:0, col:0 },
    { id:3, palavra:"GRACA",   dica:"Favor imerecido",         dir:"H", lin:2, col:0 },
    { id:4, palavra:"AMOR",    dica:"Sentimento divino",       dir:"H", lin:4, col:0 },
    { id:5, palavra:"CRUZ",    dica:"Instrumento de redenção", dir:"V", lin:0, col:4 },
    { id:6, palavra:"FE",      dica:"Meio de salvação",        dir:"V", lin:0, col:2 },
    { id:7, palavra:"PECADO",  dica:"Transgressão da Lei",     dir:"V", lin:2, col:2 }
  ];
}

function _pcConstruirGrade(palavras) {
  let maxL = 0, maxC = 0;
  palavras.forEach(pw => _pcCellsDePW(pw).forEach(({ l, c }) => {
    if (l > maxL) maxL = l; if (c > maxC) maxC = c;
  }));
  _pcLinhas  = maxL + 1;
  _pcColunas = maxC + 1;

  _pcGrade = Array.from({ length: _pcLinhas }, () =>
    Array.from({ length: _pcColunas }, () => ({ letra: null, editavel: false, num: null }))
  );

  palavras.forEach(pw => {
    _pcCellsDePW(pw).forEach(({ l, c }, i) => {
      _pcGrade[l][c].letra    = pw.palavra[i];
      _pcGrade[l][c].editavel = true;
    });
    if (!_pcGrade[pw.lin][pw.col].num) _pcGrade[pw.lin][pw.col].num = pw.id;
  });

  _pcRespostas = {};
  for (let l = 0; l < _pcLinhas; l++) {
    _pcRespostas[l] = {};
    for (let c = 0; c < _pcColunas; c++) _pcRespostas[l][c] = "";
  }
}

function jogoPalavrasCruzadas() {
  _pcPalavrasGeradas = _pcGerarCruzadinha();
  _pcConstruirGrade(_pcPalavrasGeradas);
  _pcAtiva        = null;
  _pcPalavraAtiva = null;
  _renderPC();
  iniciarTimer(180);
}

function _pcPalavrasDaCelula(lin, col) {
  return _pcPalavrasGeradas.filter(pw =>
    _pcCellsDePW(pw).some(cl => cl.l === lin && cl.c === col)
  );
}

function _renderPC() {
  const dicasH = _pcPalavrasGeradas.filter(p => p.dir === "H")
    .map(p => `<span><b>${p.id}→</b> ${p.dica}</span>`).join(" · ");
  const dicasV = _pcPalavrasGeradas.filter(p => p.dir === "V")
    .map(p => `<span><b>${p.id}↓</b> ${p.dica}</span>`).join(" · ");

  const rows = Array.from({ length: _pcLinhas }, (_, l) => {
    const cells = Array.from({ length: _pcColunas }, (_, c) => {
      const cel = _pcGrade[l][c];

      if (!cel.editavel) {
        return `<td class="pc-cell pc-cell-vazia" onclick="pcClicarCelula(${l},${c})">`;
      }

      const resp    = _pcRespostas[l][c] || "";
      const correta = cel.letra === resp;
      const isAtiva = _pcAtiva && _pcAtiva.l === l && _pcAtiva.c === c;

      let cls = "pc-cell pc-cell-edit";
      if (isAtiva) {
        cls += " pc-cell-ativa";
      } else if (_pcPalavraAtiva) {
        const pw = _pcPalavrasGeradas.find(p => p.id === _pcPalavraAtiva);
        if (pw && _pcCellsDePW(pw).some(cl => cl.l === l && cl.c === c)) cls += " pc-cell-word";
      }
      if (resp && correta)       cls += " pc-cell-certa";
      else if (resp && !correta) cls += " pc-cell-errada";

      const num    = cel.num ? `<span class="pc-num">${cel.num}</span>` : "";
      const letter = resp    ? `<span class="pc-letter">${resp}</span>` : "";

      return `<td class="${cls}" onclick="pcClicarCelula(${l},${c})">
        <div class="pc-cell-content">${num}${letter}</div>
      </td>`;
    }).join("");
    return `<tr>${cells}</tr>`;
  }).join("");

  const dicaAtual = _pcPalavraAtiva
    ? (() => {
        const pw = _pcPalavrasGeradas.find(p => p.id === _pcPalavraAtiva);
        return pw
          ? `<p class="text-center text-blue-300 text-xs mt-2 font-semibold">${pw.id}${pw.dir === "H" ? "→" : "↓"} ${pw.dica}</p>`
          : "";
      })()
    : `<p class="text-center text-slate-400 text-xs mt-2">Toque numa célula para começar</p>`;

  layout("Palavras Cruzadas", `
    <div class="pc-grid-wrap">
      <table class="pc-table"><tbody>${rows}</tbody></table>
    </div>
    ${dicaAtual}
    <details class="mt-2">
      <summary class="text-xs text-slate-400 cursor-pointer select-none">📋 Ver todas as dicas</summary>
      <div class="text-xs text-slate-300 mt-2 leading-relaxed space-y-1">
        <p><b>Horizontal →</b><br>${dicasH}</p>
        <p><b>Vertical ↓</b><br>${dicasV}</p>
      </div>
    </details>
    <input id="pc-input" class="input mt-2"
           maxlength="1" placeholder="Digite uma letra..."
           oninput="pcDigitar(event)" onkeydown="pcNavegar(event)"
           autocomplete="off" autocorrect="off" spellcheck="false"
           inputmode="text"
           style="text-transform:uppercase;text-align:center;letter-spacing:.15em">
    <button class="btn btn-success mt-2" onclick="pcVerificar()">✔ Verificar</button>
  `);

  if (_pcAtiva) {
    const inp = $("pc-input");
    if (inp) { inp.value = ""; inp.focus(); }
  }
}

function pcClicarCelula(lin, col) {
  if (estado.respondido) return;
  const cel = _pcGrade[lin][col];
  if (!cel || !cel.editavel) return;
  const pws = _pcPalavrasDaCelula(lin, col);
  if (!pws.length) return;
  if (_pcAtiva && _pcAtiva.l === lin && _pcAtiva.c === col && pws.length > 1) {
    const idx = pws.findIndex(p => p.id === _pcPalavraAtiva);
    _pcPalavraAtiva = pws[(idx + 1) % pws.length].id;
  } else {
    _pcPalavraAtiva = pws[0].id;
  }
  _pcAtiva = { l: lin, c: col };
  _renderPC();
}

function pcDigitar(e) {
  if (estado.respondido || !_pcAtiva) return;
  const letra = e.target.value.toUpperCase().replace(/[^A-Z]/g, "");
  if (!letra) return;
  _pcRespostas[_pcAtiva.l][_pcAtiva.c] = letra;
  _pcAvancarCursor();
  _renderPC();
}

function pcNavegar(e) {
  if (!_pcAtiva) return;
  if (e.key === "Backspace") {
    e.preventDefault();
    if (_pcRespostas[_pcAtiva.l][_pcAtiva.c]) _pcRespostas[_pcAtiva.l][_pcAtiva.c] = "";
    else _pcRecuarCursor();
    _renderPC();
  }
}

function _pcAvancarCursor() {
  if (!_pcPalavraAtiva || !_pcAtiva) return;
  const pw    = _pcPalavrasGeradas.find(p => p.id === _pcPalavraAtiva);
  if (!pw) return;
  const cells = _pcCellsDePW(pw);
  const idx   = cells.findIndex(cl => cl.l === _pcAtiva.l && cl.c === _pcAtiva.c);
  if (idx < cells.length - 1) _pcAtiva = cells[idx + 1];
}

function _pcRecuarCursor() {
  if (!_pcPalavraAtiva || !_pcAtiva) return;
  const pw    = _pcPalavrasGeradas.find(p => p.id === _pcPalavraAtiva);
  if (!pw) return;
  const cells = _pcCellsDePW(pw);
  const idx   = cells.findIndex(cl => cl.l === _pcAtiva.l && cl.c === _pcAtiva.c);
  if (idx > 0) _pcAtiva = cells[idx - 1];
}

function pcVerificar() {
  if (estado.respondido) return;
  let corretas = 0;
  _pcPalavrasGeradas.forEach(pw => {
    const cells = _pcCellsDePW(pw);
    if (cells.every(cl => _pcRespostas[cl.l][cl.c] === _pcGrade[cl.l][cl.c].letra)) corretas++;
  });
  const total = _pcPalavrasGeradas.length;
  if (corretas === total)                        { acertar(); }
  else if (corretas >= Math.ceil(total * 0.6))   { estado.pontos += 5; acertar(); }
  else                                            { errar(); }
}

// =====================================================================
// FINAL
// =====================================================================
async function finalizar() {
  pararTimer();
  $("game").classList.add("hidden");
  $("final").classList.remove("hidden");
  $("resultado").textContent = `${estado.nome} — ${estado.pontos} pontos 🎉`;
  
  await salvarPontuacao(estado.nome, estado.pontos);
  await verificarPosicaoNoRanking(estado.pontos);
}
