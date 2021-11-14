$(function(){
  var $form = $('#vetuForm');
  if ($form.length) {
    $form.validate({
      rules:{
        login:{
          required: true
        },
        senha:{
          required: true
        },
        nomeCompleto:{
          required: true
        },
        dataNascimento:{
          required: true
        },
        telefoneResidencial:{
          required: true
        },
        telefoneCelular:{
          required: true
        },
        rua:{
          required: true
        },
        numero:{
          required: true
        },
        bairro:{
          required: true
        },
        cidade:{
          required: true
        },
        estado:{
          required: true
        },
        cep:{
          required: true
        },
        email:{
          required: true
        },
        confirmaEmail:{
          required: true
        },
        confirmaSenha:{
          required: true
        }
      },
      messages:{
        login:{
          required: "Preencha este campo!"
        },
        senha:{
          required: "Preencha este campo!"
        },
        nomeCompleto:{
          required: "Preencha este campo!"
        },
        dataNascimento:{
          required: "Preencha este campo!"
        },
        telefoneResidencial:{
          required: "Preencha este campo!"
        },
        telefoneCelular:{
          required: "Preencha este campo!"
        },
        rua:{
          required: "Preencha este campo!"
        },
        numero:{
          required: "Preencha este campo!"
        },
        bairro:{
          required: "Preencha este campo!"
        },
        cidade:{
          required: "Preencha este campo!"
        },
        estado:{
          required: "Preencha este campo!"
        },
        cep:{
          required: "Preencha este campo!"
        },
        email:{
          required: "Preencha este campo!"
        },
        confirmaEmail:{
          required: "Preencha este campo!"
        },
        confirmaSenha:{
          required: "Preencha este campo!"
        }
      }
    })
  }
})