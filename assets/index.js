// Создаем массив с двенадцатью разными оценками от 1 до 100
const marks=Array.from({length:12},
    ()=>Math.floor(Math.random()*100)+1);
console.log(marks)

// Рассчитать средний балл
let sum = 0;
marks.forEach((mark) => {
  sum += mark;
});
const average = sum/marks.length;
console.log("Средний балл:", average.toFixed(2));

// Находим максимальный балл:
const maxMark=Math.max(...marks);
console.log(maxMark)

// Находим минимальный балл
const minMark=Math.min(...marks);
console.log(minMark)

// Считаем студентов с положительной оценкой
const positiveMarks=marks.filter(mark=>mark>=60);
console.log(positiveMarks.length)

// Считаем студентов с отрицательной оценкой
const negativeMarks=marks.filter(mark=>mark<60);
console.log(negativeMarks.length)

// Преобразуем числовые оценки в буквенные
const letterMarks=marks.map(mark=>
{
    if(mark>80 && mark<=100)
        return `A`;
  if(mark>60 && mark<=79)
    return `B`;
  if(mark>40 && mark<=59)
    return `C`;
  if(mark>20 && mark<=39)
    return `D`;
return `E`;
});
console.log(letterMarks)