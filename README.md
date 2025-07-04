# WAi Sports - Plataforma Inteligente de Fitness

Uma plataforma de treino inteligente que combina inteligência artificial para criar planos de treino personalizados, com uma interface moderna e integrações com Strava e Hotmart.

## 🚀 Características Principais

### 🎯 Dashboard Inteligente
- **Visão Semanal**: Calendário com visualização de treinos da semana
- **Drag & Drop**: Reorganize treinos entre os dias facilmente
- **Indicador de Descanso**: Exibe "Descanso" nos dias sem treinos
- **Estatísticas em Tempo Real**: Km percorridos, ritmo médio, frequência cardíaca

### 🤖 Inteligência Artificial
- **Planos Personalizados**: IA gera treinos baseados no seu perfil
- **Dicas Inteligentes**: Sugestões personalizadas de melhoria
- **Chatbot Motivacional**: Assistente para tirar dúvidas e motivar

### 🏃 Integrações
- **Strava**: Importação automática de atividades
- **Hotmart**: Gerenciamento de assinaturas e pagamentos
- **OpenAI**: Geração de conteúdo e análise de dados

### 📱 PWA (Progressive Web App)
- **Instalação**: Funciona como app nativo no celular
- **Offline**: Funciona sem conexão com internet
- **Notificações**: Lembretes de treinos e motivação

## 🛠 Tecnologias Utilizadas

### Frontend
- **React** com TypeScript
- **Tailwind CSS** para estilização
- **Radix UI** componentes acessíveis
- **TanStack Query** para gerenciamento de estado
- **Wouter** para roteamento
- **Vite** para desenvolvimento

### Backend
- **Node.js** com Express
- **PostgreSQL** (Neon Serverless)
- **Drizzle ORM** para banco de dados
- **OpenAI API** para IA
- **Strava API** para integração
- **Hotmart API** para pagamentos

### Autenticação
- **Replit Auth** com OpenID Connect
- **Sessões seguras** com PostgreSQL

## 🎨 Interface

### Tema Escuro Moderno
- **Cores**: Esquema escuro com acentos em laranja e azul neon
- **Animações**: Fundo com partículas flutuantes
- **Responsivo**: Funciona perfeitamente em mobile e desktop
- **Glassmorphism**: Efeitos visuais modernos

### Layout do Dashboard
- **Sidebar**: Dicas da IA, Status do Strava, Ações Rápidas
- **Área Principal**: Treino de Hoje, Calendário Semanal, Progresso
- **Rodapé**: Estatísticas detalhadas (Km, Ritmo, Treinos, BPM)

## 🗂 Estrutura do Projeto

```
├── client/                 # Frontend React
│   ├── src/
│   │   ├── components/     # Componentes reutilizáveis
│   │   ├── hooks/          # Hooks personalizados
│   │   ├── pages/          # Páginas da aplicação
│   │   └── lib/            # Utilitários e configurações
├── server/                 # Backend Express
│   ├── services/           # Serviços externos (Strava, OpenAI)
│   └── routes.ts           # Rotas da API
├── shared/                 # Código compartilhado
│   └── schema.ts           # Esquemas do banco de dados
└── README.md              # Documentação
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+
- PostgreSQL
- Contas: OpenAI, Strava, Hotmart (opcionais)

### Instalação
```bash
# Clone o repositório
git clone https://github.com/Welisson-spec/wai-sports-fitness.git

# Entre no diretório
cd wai-sports-fitness

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env

# Execute o projeto
npm run dev
```

### Variáveis de Ambiente
```env
DATABASE_URL=postgresql://...
OPENAI_API_KEY=sk-...
STRAVA_CLIENT_ID=...
STRAVA_CLIENT_SECRET=...
HOTMART_WEBHOOK_SECRET=...
```

## 🔧 Funcionalidades Implementadas

### ✅ Autenticação
- Login/logout com Replit Auth
- Sessões seguras
- Perfil de usuário obrigatório

### ✅ Dashboard
- Calendário semanal com drag & drop
- Cards de treino com informações detalhadas
- Indicador de dias de descanso
- Estatísticas em tempo real

### ✅ Treinos
- Criação de sessões de treino
- Edição e exclusão
- Diferentes tipos de treino
- Progresso visual com gráficos

### ✅ IA
- Geração de planos personalizados
- Dicas motivacionais
- Chatbot integrado
- Análise de dados de treino

### ✅ Integrações
- Strava para importar atividades
- Hotmart para gerenciar assinaturas
- OpenAI para recursos de IA

### ✅ PWA
- Instalação como app nativo
- Ícones personalizados
- Service worker para cache
- Funcionalidade offline

## 📊 Banco de Dados

### Tabelas Principais
- `users`: Dados dos usuários
- `user_profiles`: Perfis com informações de treino
- `training_sessions`: Sessões de treino
- `training_plans`: Planos de treino
- `chat_messages`: Mensagens do chatbot
- `subscriptions`: Assinaturas do Hotmart

## 🔒 Segurança

- Autenticação com OpenID Connect
- Sessões criptografadas
- Validação de dados com Zod
- Proteção contra CSRF
- Headers de segurança

## 📈 Próximos Passos

- [ ] Notificações push
- [ ] Integração com Apple Health
- [ ] Relatórios avançados
- [ ] Competições entre usuários
- [ ] Análise de vídeo de corrida
- [ ] Integração com wearables

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT.

## 🎉 Agradecimentos

- Replit pela plataforma incrível
- OpenAI pela tecnologia de IA
- Strava pela API de dados esportivos
- Comunidade open source

---

Desenvolvido com ❤️ por Welisson usando Replit