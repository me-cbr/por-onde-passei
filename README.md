# README - Por Onde Passei 📍📱

## Descrição do Projeto
Aplicativo mobile para registrar locais visitados com fotos e geolocalização automática. Permite visualizar os registros em lista ou em um mapa interativo.

## 📌 Funcionalidades

- 📸 Captura de fotos com a câmera do dispositivo
- 🗺️ Registro automático da localização
- 📅 Data e hora automaticamente associadas
- 🔒 Autenticação por biometria (Face ID/Touch ID)
- 🏠 Listagem dos locais visitados
- 🗺️ Visualização em mapa com marcadores

## 🚀 Tecnologias Utilizadas

- React Native com Expo
- Expo Camera (para captura de fotos)
- Expo Location (para geolocalização)
- React Navigation (navegação entre telas)
- React Native Maps (mapa interativo)
- AsyncStorage (armazenamento local)
- Expo Local Authentication (biometria

## 📦 Como Executar o Projeto

### Pré-requisitos
- Node.js (v16 ou superior)
- Expo CLI instalado globalmente (npm install -g expo-cli)
- Dispositivo móvel com o app Expo Go ou emulador configurado

### Instalação
1. Clone o repositório:
   bash
   git clone https://github.com/seu-usuario/por-onde-passei.git
   cd por-onde-passei
   

2. Instale as dependências:
   bash
   npm install
   

3. Inicie o servidor de desenvolvimento:
   bash
   expo start
   

4. Escaneie o QR code com o app Expo Go ou execute no emulador.

## Estrutura do Projeto

por-onde-passei/
├── assets/            # Ícones e imagens
├── components/        # Componentes reutilizáveis
├── screens/           # Telas do aplicativo
│   ├── HomeScreen.js  # Lista de locais
│   ├── AddScreen.js   # Adicionar novo local
│   └── MapScreen.js   # Visualização em mapa
├── navigation/        # Configuração de navegação
├── App.js             # Ponto de entrada
└── app.json           # Configuração do Expo


## Configuração
O arquivo app.json contém todas as configurações necessárias, incluindo:
- Permissões de câmera e localização
- Configurações de biometria
- Identificação do app
- Ícones e splash screen

## Capturas de Tela
(Adicione imagens das telas do seu app aqui)

## 📄 Licença
Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 👥 Desenvolvedores
- Maria Eduarda Coelho - [mecoelhodev@gmail.com](mailto:mecoelhodev@gmail.com)
- Lucas Moyses - [lucasmoyses88@gmail.com](mailto:mecoelhodev@gmail.com)
- Eduardo Paixão - [ra202210694@univassouras.edu.br](ra202210694@univassouras.edu.br)

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.
