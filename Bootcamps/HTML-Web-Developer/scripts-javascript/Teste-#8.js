let distancia = parseInt(gets()); //Distância total percorrida pelo automóvel
let combustivelConsumido = parseFloat(gets()); //Combustível consumido pelo automóvel
let consumoMedio = parseFloat(distancia/combustivelConsumido).toFixed(3); //Calcula o consumo médio e define três casas decimais após a vírtula

console.log(consumoMedio + ' km/l');
