
function popupRegistrar() {

    var painel_login = document.getElementById('login');
    
    if (typeof(painel_login) != 'undefined' && painel_login != null) {
        popupFechar("login");
    }

    var valorHTML = document.body.innerHTML;
    
    document.body.innerHTML = `
    
    <div style="background-color: rgba(0, 0, 0, 0.637); color: white; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; position: fixed; z-index: 9999; padding-inline: 0;" id="register">
    <button type="button" style="background-color: transparent; color: gray; font-weight: bold; position: fixed; right: 1rem; top: 1rem; font-size: 1.5rem; border: none; padding: 1rem;" onclick="popupFechar('register');">X</button>
    <article id="bgRegister">
        <img src="assets/background/register.png" alt="Registrar">
    </article>
    <article id="registrarLogin" style="background-color: white; color: black; padding: 5rem; display: flex; justify-content: center; flex-direction: column; opacity: 1; transition: opacity 0.5s;">
        <h3>Registre-se!</h3>
        <p>Caso já tenha uma conta no Codinng, <a href="#" onclick="popupLogin();" style="color: initial; text-decoration: underline;">faça login</a></p>

        <form id="registrar" style="display: flex; flex-direction: column; flex-wrap: wrap; margin-block: 2rem;">
            <label for="nome">Nome de usuário</label>
            <input type="text" name="nome" id="nomeRegistrar" required>

            <label for="email">E-mail</label>
            <input type="email" name="email" id="emailRegistrar" required>

            <label for="senha">Senha</label>
            <input type="password" name="senha" id="senhaRegistrar" required>

            <label for="confirmarSenha">Confirme sua senha</label>
            <input type="password" name="confirmarSenha" id="confirmarSenhaRegistrar" required>

            <span style="margin-bottom: 2rem;">
                <input type="checkbox" name="termos" id="termos"><label for="termos">Li e concordo com os <a href="#">Termos de Uso</a> e<br><a href="#">Políticas de Privacidade</a> do Codinng&copy;.</label>
            </span>

            <button type="submit" class="buttonRegistrar">Registrar-se</button>
        </form>
    </article>
</div>` + valorHTML;

}

function popupFechar(elemento) {
    var registerDiv = document.getElementById(elemento);
    registerDiv.style.display = "none";
}

function popupLogin() {

    
    var painel_registro = document.getElementById('register');
    
    if (typeof(painel_registro) != 'undefined' && painel_registro != null) {
        popupFechar("register");
    }

    var valorHTML = document.body.innerHTML;
    
    document.body.innerHTML = `

    <div style="background-color: rgba(0, 0, 0, 0.637); color: white; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; position: fixed; z-index: 9999; padding-inline: 0;" id="login">
        <button type="button" style="background-color: transparent; color: gray; font-weight: bold; position: fixed; right: 1rem; top: 1rem; font-size: 1.5rem; border: none; padding: 1rem;" onclick="popupFechar('login');">X</button>
        <article id="bgLogin">
            <img src="assets/background/login.png" alt="Login">
        </article>
        <article id="registrarLogin" style="background-color: white; color: black; padding: 10rem 5rem; display: flex; justify-content: center; flex-direction: column; opacity: 1; transition: opacity 0.5s;">
            <h3>Faça login!</h3>
            <p>Caso ainda não tenha uma conta no Codinng, <a href="#" onclick="popupRegistrar();" style="color: initial; text-decoration: underline;">registre-se</a> agora!</p>
    
            <form id="registrar" style="display: flex; flex-direction: column; flex-wrap: wrap; margin-block: 2rem;">
                <label for="nome">Nome de usuário</label>
                <input type="text" name="nome" id="nomeRegistrar" required>
    
                <label for="senha">Senha</label>
                <input type="password" name="senha" id="senhaRegistrar" required>
    
                <span style="margin-bottom: 2rem;">
                    <input type="checkbox" name="termos" id="termos"><label for="termos">Lembrar sessão</label>
                </span>
    
                <button type="submit" class="buttonRegistrar">Fazer login</button>
            </form>
        </article>
    </div>
    ` + valorHTML;

}