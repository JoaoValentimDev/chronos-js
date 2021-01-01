# Chronos v0.1.2 Clara Oswald

<img src="data:image/png;base64,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" />

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
