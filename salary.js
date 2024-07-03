
function calculateNetSalary(basicSalary, benefits) {
  // the basicSalary is the sum of the basicSalary and the benefits 
  const taxRate = 0.2
  const nhifRate = 0.1
  const nssfRate = 0.2

  
  const grossSalary = basicSalary + benefits;

  
  const tax = grossSalary * taxRate;
  const nhif = grossSalary * nhifRate;
  const nssf = grossSalary * nssfRate;

  
  const netSalary = grossSalary - (tax + nhif + nssf);

  return {
    grossSalary,
    tax,
    nhif,
    nssf,
    netSalary
  };
}


const basicSalary = 59000; 
const benefits =4500; 
const result = calculateNetSalary(basicSalary, benefits);
console.log("Net Salary Calculation Results:");
console.log("Gross Salary:", result.grossSalary);
console.log("Tax:", result.tax);
console.log("NHIF Deductions:", result.nhif);
console.log("NSSF Deductions:", result.nssf);
console.log("Net Salary:", result.netSalary);


  