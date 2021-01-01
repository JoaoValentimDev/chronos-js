# Chronos v0.1.2 Clara Oswald


Chronos.js é uma utilidade Javascript para trabalhar com o tempo em dias, meses, anos, horas, minutos, segundos e por ai vai. Mas você deve estar se perguntando : "Em js basta eu dizer um new Date() e pronto! por que o Chronos?".  Chronos é muito mais que somente um "new Date()" ele é capaz de formatar a data tanto no padrão BR e dos States, como também tem embutido um agendador de taréfas super intuitivo e alem de um simples "setTimeout".  

Chronos pode traduzir as datas  para "pt-BR" e "en-US" (no momento), porem há muita coisa pela frente.  

### Relógio digital em uma linha de código 

Sim é isso mesmo, Chronos é capaz de montar um relógio digital que você gastaria tempo para montar em uma unica linha. Veja:

```js
const chronos = new Chronos({    
    lang: 'pt-BR',
    formatDate: 'yy-mm-dd'  
}); // opcional formato e lingua
chronos.digitalClock('.clock'); // pronto agora é só retocar
```

Mas não  é só isso, você pode colocar estilo no relógio via js. Veja:

```js 
const chronos = new Chronos({    
    lang: 'pt-BR',
    formatDate: 'yy-mm-dd'  
}); // opcional formato e lingua

chronos.digitalClock('.clock', {
   displayStyle: 'font-size: 20px; text-align: center',
   clockStyle: 'color: orange',
   dateStyle: 'color: blue'
});
```

### Agendador de processos do Chronos

Sim o chronos possui um agendador de processos, claro, ainda em fase de desenvolvimento, mas esta funcional e você pode usa-lo como bem entender para trabalhar com processos agendados. Veja:

```js
const chronos = new Chronos();
chronos.executeTask('Minha task', () => console.log(1 + 1), { seconds: 10 }); // nome, callback e tempo
```

### O que tem mais ?

Chronos possui muitos outros metodos como o de ano bisexto, ***isLeapYear*** que retorna valores boleanos. Ainda temos muito mais trabalho pela frente. 
