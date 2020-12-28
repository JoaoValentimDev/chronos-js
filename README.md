

# Chronos.js 0.1.1 River Song 🕚



Chronos.js é uma nova utilidade Javascript que lida com datas em seu app web. Ja imaginou criar um relogio digital em apenas uma linha, sim, com o Chronos isso é possivel em uma unica linha, ou você talvez queira viajar em intervalos de dias entre datas para fazer dado calculo em seu app, há é claro podemos também saber se o ano é bisexto em uma linha.

Claro que essa utilidade ainda é nova mas com todo potencial para se expandir, caso queira usa-la basta clonar esse repositório. Você tera o arquivo **chronos.dev.js** e o **chronos.js** (este você usa e o anterior modifique do modo como queira, **mas deixe os creditos a o criador**).

Na versão **0.1.2 Clara Oswald** iremos concertar alguns bugs e adicionar novas fetures.



## Um gostinho do Chronos

Instaciar com formato:

- dd-mm-yyyy
- yyyy-mm-dd
- dd-mm-yy
- yy-mm-dd
- dd/mm/yyyy
- dd/mm/yy
- yyyy/mm/dd
- yy/mm/dd

Estes são os formatos atuais, abaixo temos o formato dia/mes/ano_completo

```js
// instanciar Chronos com o formato dd/mm/yyyy
const chronos = new Chronos('dd/mm/yyyy');
console.log(chronos); // { calendar : ..., clock: ... }
```

Já demorou um tempão para criar o esqueleto do seu relógio digital para aplicar depois o css, então deixe o Chronos fazer isso por você e o css fica por sua conta:

```js
Chronos.createDigitalClock().setDOMElementSelector('div#clock').showDigitalClock(); // Relógio digital: 22:22:10
```



