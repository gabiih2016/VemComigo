function validacao(){

    let email = document.getElementById("i_email");
    let senha = document.getElementById("i_senha");

    let sty_1 = "2px solid red";
    let sty_2 = "1px solid white";

    input_style(nome, sty_1, sty_2);
    input_style(data, sty_1, sty_2);
    input_style(telefone, sty_1, sty_2);
    input_style(genero, sty_1, sty_2);
    input_style(email, sty_1, sty_2);
    input_style(senha, sty_1, sty_2);
    input_style(conf_senha, sty_1, sty_2);

}

function input_style(input, style_1, style_2){

    if(!input.checkValidity()){
        input.style.border = style_1;
        return input.style.border;
    }

    if(input.checkValidity()){
        input.style.border = style_2;
        return input.style.border;
    }
}