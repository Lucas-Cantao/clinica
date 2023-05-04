let width = window.innerWidth
        let tela = document.querySelector(".tela")
        if(width <= 894){
            tela.innerHTML = "<div class='tratamentos'><div id='extracao'><div class='extracao'></div><p>extrações</p><div class='texto'>A dor causada por dentes comprometidos pode ser facilmente resolvida com a extração do mesmo, e com a nossa clínica você pode realizar esse procedimento com segurança e qualidade.</div></div><div id='odontopediatria'><div class='odontopediatria'></div><p>odontopediatria</p><div class='texto'>Aqui temos profissionais capacitados com o atendimento infantil, possibilitando que você faça o tratamento da saíde bucal do seu pequeno, e, em conjunto a sua.</div></div></div>"
            tela.innerHTML += "<div class='tratamentos'><div id='estetica'><div class='estetica'></div><p>estética (facetas)</p><div class='texto'>É essencial que tenhamos uma boca saudável e bonita, as nossas facetas de deixam com um sorriso incrível, e com outros procedimentos, você pode voltar para casa com um sorriso bonito e ainda por cima saudável.</div></div><div id='apOrtodonticos'><div class='apOrtodonticos'></div><p>aparelhos ortodonticos</p><div class='texto'>Para te deixar com um sorriso lindo e alinhado, temos os aparelhos ortodontico, trabalhamos com 3 tipos de aparelho, sendo eles <strong>FIXO, MÓVEL E INVISALIGN</strong>, fornecendo um tratamento rápido e eficaz.</div></div></div>"
            tela.innerHTML += "<div class='tratamentos'><div id='protese'><div class='protese'></div><p>prótese</p><div class='texto'>Nós oferecemos trabalho de prótese fixa, removível e PT, sempre com os melhores produtos de alta qualidade.</div></div><div id='implante'><div class='implante'></div><p>implantes</p><div class='texto'>Sabemos que nada substitui nosso dente natural, mas o melhor oferecido pela odontologia é o implante dentário.</div></div></div>"
        }
