import {test} from '@playwright/test';

test('Learn Map1',async({})=>{

const employees = new Map<string, number>();
await employees.set("anand",1);
await employees.set("anvesh",2);
await employees.set("asha",3);
await employees.set("santhi",3);
console.log(employees.size);
//console.log(employees.entries.length);
});

test('Learn Map2', async () => {
    const map = new Map<string, number>();
    map.set('Alice', 30);
    map.set('Bob', 25);
    map.set('Charlie', 35);

    console.log('Size:', map.size);
    console.log('Alice age:', map.get('Alice')); //get value
    console.log('Has Bob:', map.has('Bob')); //contains key

    map.delete('Bob');
    console.log('After delete, has Bob:', map.has('Bob'));

    map.forEach((value, key) => {
        console.log(`${key} => ${value}`);
    });
});

test('Map from entries3', async () => {
    const entries: [string, string][] = [
        ['name', 'Anand'],
        ['city', 'Hyderabad'],
        ['role', 'QA'],
    ];
    const map = new Map<string, string>(entries);
    console.log('name:', map.get('name'));
    console.log('city:', map.get('city'));

    for (const [key, value] of map) {
        console.log(`${key} => ${value}`);
    }
});
