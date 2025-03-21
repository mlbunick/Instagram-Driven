import React from "react";

export default function User() {
    const [nome, setNome] = React.useState("catanacomics");
    const [imagem, setImagem] = React.useState("assets/img/catanacomics.svg");

    function inserirNome() {
        const nomeUsuario = prompt("Insira o seu nome de usuário:");
        if (nomeUsuario && nomeUsuario.trim() !== "") {
            setNome(nomeUsuario);
        }
    }

    function inserirImagem() {
        const linkImagem = prompt("Insira um link para definir a sua foto de perfil:");

        if (linkImagem && linkImagem.trim() !== "") {
            validarImagem(linkImagem, (ehValida) => {
                if (ehValida) {
                    setImagem(linkImagem);
                } else {
                    alert("O link inserido não é uma imagem válida. Tente novamente.");
                }
            });
        }
    }

    function validarImagem(url, callback) {
        const img = new Image();
        img.src = url;
        img.onload = () => callback(true);
        img.onerror = () => callback(false);
    }

    return (
        <div className="usuario">
            <img src={imagem} alt="imagem de perfil" onClick={inserirImagem} />
            <div className="texto">
                <span>
                    <strong>{nome}</strong>
                    <ion-icon name="pencil" onClick={inserirNome}></ion-icon>
                </span>
            </div>
        </div>
    );
}
