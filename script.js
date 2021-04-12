function Country (country, capital, population, territory) {
    this.country = country;
    this.capital = capital;
    this.population = population;
    this.territory = territory;
    
}

const str = 'Германия, Берлин, 83млн, 357.4тыс.кв.км; Беларусь, Минск, 9.4млн, 207.6тыс.кв.км; Польша, Варшава, 37.9млн, 312.6тыс.кв.км; Франция, Париж, 67.8млн, 643.8тыс.кв.км; Нидерланды, Амстердам, 17.4млн, 41.5тыс.кв.км; Испания, Мадрид, 44.3млн, 505.9тыс.кв.км; Бельгия, Брюссель, 11.4млн, 30.5тыс.кв.км';

let arr = str.split(';');
arr = arr.map((countryStr) => {
   const  countryArr = countryStr.split(',');
   return new Country(countryArr[0].trim(), countryArr[1].trim(), parseFloat(countryArr[2]), parseFloat(countryArr[3]));
});
console.log(arr);

let populationResult = arr.reduce((prev, number) => {
    return prev + number.population;
}, 0);

let territoryResult = arr.reduce((prev, number) => {
    return prev + number.territory;
}, 0);

let arrMain = new Country('Лонг Лендс', 'Минск', populationResult, territoryResult);
console.log(arrMain);

