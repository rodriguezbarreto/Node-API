# Preparando o ambiente de desenvolvimento

<br>

## Instalando Nodejs

### Passo 1: Baixar o Instalador do Node.js

1. Abra o navegador e acesse o site oficial do Node.js: [nodejs.org](https://nodejs.org).
2. Na página inicial, você verá duas opções de download: LTS (Long Term Support) e Current. Recomendo baixar a versão LTS para maior estabilidade.
3. Clique no botão para baixar o instalador da versão LTS.

### Passo 2: Executar o Instalador

1. Após o download, execute o instalador (`node-vxx.xx.xx-x64.msi`).
2. Na tela de boas-vindas, clique em "Next".
3. Leia e aceite os termos do contrato de licença e clique em "Next".
4. Escolha o diretório de instalação (o padrão é geralmente recomendado) e clique em "Next".

### Passo 3: Selecionar Componentes

1. Na tela de seleção de componentes, certifique-se de que todas as opções estão marcadas. Isso incluirá o npm (Node Package Manager) e outras ferramentas úteis.
2. Clique em "Next".

### Passo 4: Configurar o PATH

1. Na próxima tela, marque a opção que adiciona o Node.js ao PATH do sistema. Isso permitirá que você execute o Node.js e o npm a partir do prompt de comando.
2. Clique em "Next".

### Passo 5: Instalar

1. Clique em "Install" para iniciar a instalação.
2. Pode ser necessário fornecer permissões de administrador para continuar.
3. Aguarde até que a instalação seja concluída.

### Passo 6: Verificar a Instalação

1. Abra o Prompt de Comando (CMD) ou o PowerShell.
2. Digite o seguinte comando para verificar a versão do Node.js instalada:

   ```bash
   node -v
   ```

   Você deve ver a versão do Node.js instalada.

3. Digite o seguinte comando para verificar a versão do npm instalada:

   ```bash
   npm -v
   ```

   Você deve ver a versão do npm instalada.

### Passo 7: Atualizar o npm (Opcional)

1. Se desejar atualizar o npm para a versão mais recente, execute o seguinte comando no Prompt de Comando ou PowerShell:

   ```bash
   npm install -g npm
   ```

<br>
<br>
<br>

## Instalando o VScode



### Passo 1: Baixar o Instalador do VS Code

1. Abra o navegador e acesse o site oficial do Visual Studio Code: [code.visualstudio.com](https://code.visualstudio.com).
2. Na página inicial, clique no botão "Download for Windows".

### Passo 2: Executar o Instalador

1. Após o download, execute o instalador (`VSCodeSetup-x.xx.x.exe`).
2. Na tela de boas-vindas, clique em "Next".

### Passo 3: Aceitar os Termos de Uso

1. Leia os termos do contrato de licença e, se concordar, marque a opção "I accept the agreement".
2. Clique em "Next".

### Passo 4: Selecionar Diretório de Instalação

1. Escolha o diretório onde você deseja instalar o VS Code. O padrão geralmente é recomendado.
2. Clique em "Next".

### Passo 5: Selecionar Componentes Adicionais

1. Na tela de seleção de componentes, você pode marcar opções adicionais conforme necessário. Recomendo marcar as seguintes opções:
   - "Add 'Open with Code' action to Windows Explorer file context menu" (Adicionar ação 'Abrir com Code' ao menu de contexto de arquivo do Windows Explorer)
   - "Add 'Open with Code' action to Windows Explorer directory context menu" (Adicionar ação 'Abrir com Code' ao menu de contexto de diretório do Windows Explorer)
   - "Register Code as an editor for supported file types" (Registrar Code como um editor para tipos de arquivos suportados)
   - "Add to PATH" (Adicionar ao PATH)

2. Clique em "Next".

### Passo 6: Criar Ícone no Menu Iniciar

1. Escolha se deseja criar um ícone no menu iniciar e clique em "Next".

### Passo 7: Instalar

1. Clique em "Install" para iniciar a instalação.
2. Aguarde até que a instalação seja concluída.

### Passo 8: Concluir a Instalação

1. Quando a instalação for concluída, você verá a tela de conclusão. Marque a opção "Launch Visual Studio Code" (Iniciar Visual Studio Code) se desejar abrir o VS Code imediatamente.
2. Clique em "Finish".

### Passo 9: Configurar o VS Code (Opcional)

1. Ao abrir o VS Code pela primeira vez, você pode ver algumas janelas de boas-vindas e tutoriais. Siga as instruções para configurar o ambiente conforme suas preferências.
2. Você pode instalar extensões úteis para a sua linguagem de programação ou framework favorito, acessando a seção de extensões no VS Code (ícone de quadrado no lado esquerdo ou `Ctrl+Shift+X`).

<br>
<br>
<br>

## Instalando o postman

### Passo 1: Baixar o Instalador do Postman

1. Abra o navegador e acesse o site oficial do Postman: [postman.com/downloads](https://www.postman.com/downloads/).
2. Na página de downloads, clique no botão "Download for Windows".

### Passo 2: Executar o Instalador

1. Após o download, localize o arquivo do instalador (`Postman-win64-x.x.x-Setup.exe`) e execute-o.
2. O instalador começará automaticamente a instalação. Aguarde até que a instalação seja concluída.

### Passo 3: Abrir o Postman

1. Quando a instalação for concluída, o Postman será iniciado automaticamente.
2. Se o Postman não iniciar automaticamente, você pode abri-lo através do menu iniciar ou procurando pelo ícone do Postman na área de trabalho.

### Passo 4: Configurar o Postman

1. Ao abrir o Postman pela primeira vez, você verá a tela de boas-vindas.
2. Você pode fazer login com sua conta do Postman ou criar uma nova conta. Se preferir, pode usar o Postman sem uma conta, clicando em "Skip signing in and take me straight to the app" (Pular login e levar-me diretamente ao aplicativo).

### Passo 5: Familiarizar-se com o Postman

1. Após o login ou pular o login, você será levado à interface principal do Postman.
2. Você pode explorar tutoriais e documentações fornecidas pela equipe do Postman para entender melhor como utilizar a ferramenta.

### Passo 6: Criar uma Nova Requisição (Opcional)

1. Para criar uma nova requisição, clique no botão "New" no canto superior esquerdo e selecione "Request".
2. Dê um nome à sua requisição e escolha a coleção onde deseja salvá-la (ou crie uma nova coleção).
3. Clique em "Save to [Collection Name]".
4. Na nova janela de requisição, você pode inserir a URL da API, selecionar o método HTTP (GET, POST, PUT, DELETE, etc.) e adicionar headers, parâmetros e corpo da requisição conforme necessário.
5. Clique em "Send" para enviar a requisição e visualizar a resposta.

<br>
<br>
<br>

## Rodando o projeto

### Passo 1: Clonar o repositório

1. Abra o terminal ou prompt de comando.
2. Navegue até o diretório onde deseja clonar o repositório.
3. Execute o seguinte comando para clonar o repositório:

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```

   Substitua `seu-usuario` pelo seu nome de usuário do GitHub e `seu-repositorio` pelo nome do seu repositório.

### Passo 2: Instalar as dependências

1. Navegue até o diretório do projeto clonado.
2. Execute o seguinte comando para instalar as dependências do projeto:

   ```bash
   npm install
   ```

### Passo 4: Iniciar o servidor

1. No diretório do projeto, execute o seguinte comando para iniciar o servidor:

   ```bash
   npm start
   ```



