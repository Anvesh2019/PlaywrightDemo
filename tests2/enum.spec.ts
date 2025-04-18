import {test} from '@playwright/test'
test('learn enums',async()=>{
    enum Weekday {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
      }
      console.log(Weekday.Monday);
      console.log(Weekday.Tuesday);
      console.log(Weekday.Wednesday);
      console.log(Weekday.Thursday);
      console.log(Weekday.Friday);
});
