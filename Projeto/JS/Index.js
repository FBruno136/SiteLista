$(document).ready(function () {
    $(Animes).hover(function () {
        $(".Fundo").css("background-image", "url('../Imagens/ImagensMain/Animes.png')");
    }, function () {
        $(".Fundo").css("background-image", "url('../Imagens/Fundo.gif')");
    });
}); 
$(document).ready(function () {
    $(Livros).hover(function () {
        $(".Fundo").css("background-image", "url('../Imagens/ImagensMain/Livros.jpg')");
    }, function () {
        $(".Fundo").css("background-image", "url('../Imagens/Fundo.gif')");
    });
});
$(document).ready(function () {
    $(Manga).hover(function () {
        $(".Fundo").css("background-image", "url('../Imagens/ImagensMain/Mangas.png')");
    }, function () {
        $(".Fundo").css("background-image", "url('../Imagens/Fundo.gif')");
    });
});

//Metodo de mostrar imagem quando o mouse estiver ativo encima 