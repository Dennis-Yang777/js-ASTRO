// function bmiCalculator(height, weight) {
// 	// 實作內容
//   }
  
//   // 身高 170 公分、體重 65 公斤
//   console.log(bmiCalculator(170, 65))  // 印出 22.4

// wiki 
// BMI = 體重(公斤) / 身高(公尺)的平方

// function bmiCalculator(height, weight) {
// 	return Math.floor(weight / ((height / 100) ** 2) * 10) / 10
// }


const bmiCalculator = (height, weight) => Math.floor(weight / ((height / 100) ** 2) * 10) / 10

console.log(bmiCalculator(170, 65))