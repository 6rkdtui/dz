const positionLat = 1; // текущеее положение по широте
const positionLong = 2; // текущеее положение по долготе 
const addresLat = 3; // адрес назначения по широте
const addresLong = 4; // адрес назначения по долготе

// 1 способ (через оператор **)
const distance = ((addresLat - positionLat)**2 + (addresLong - positionLong)**2)**2;
console.log(`Рассчитанная дистанция: ${distance}`);

// 2 способ (через метод Math.pow())
const distance2 = Math.pow(Math.pow(addresLat - positionLat,2) + Math.pow(addresLong - positionLong, 2),2);
console.log(`Рассчитанная дистанция: ${distance2}`);
