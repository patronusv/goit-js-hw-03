const findBestEmployee = function (employees) {
  'use strict';
  // Write code under this line
    const keys = Object.keys(employees);
    const values = Object.values(employees);
    let maxValue = 0;
    let maxValueKey = '';    
    
    for (let i = 0; i < values.length; i += 1) {
        if (maxValue < values[i]) {
            maxValue = values[i]
        } else {
            continue
        }
    }    
    let maxValueIndex = values.indexOf(maxValue);
    if (values.includes(maxValue)) {
        maxValueKey = keys[maxValueIndex];
    } else {
        maxValueKey = '';

    }

    

    // console.log('keys', keys);
    // console.log('keys.length', keys.length);
    // console.log('values', values);
    // console.log('maxValue', maxValue);
    // console.log('maxValueIndex', maxValueIndex);
    // console.log('maxValueKey', maxValueKey);
    return maxValueKey;
    
};


// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
}; 
console.log(findBestEmployee(developers)); 
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
}; 
console.log(findBestEmployee(supports)); 
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
}
console.log(findBestEmployee(sellers)); 
// 'lux'  

const drivers = {
}
console.log(findBestEmployee(drivers)); 
