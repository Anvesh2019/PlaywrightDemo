import {Page,chromium, test, expect} from '@playwright/test';

enum Color {
    Red,
    Green,
    Blue
}
enum Days{
sunday=1,
monday=2,
tuesday=3,
wednesday=4,
thursday=5,
friday=6,
saturday=7
}

test('Using enums', async () => {
    let myColor: Color = Color.Red;
    console.log(myColor); // Output: 0
    console.log(Days.sunday); // Output: 1
});