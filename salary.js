
function calculateNSSFDeduction(basicSalary) {
  // New NSSF rates for Tier I and Tier II contributions
  const tier1 = Math.min(basicSalary, 6000) * 0.06;
  const tier2 = Math.max(0, Math.min(basicSalary - 6000, 12000)) * 0.06;
  return tier1 + tier2;
}

// Function to calculate NHIF Deduction
function calculateNHIFDeduction(grossSalary) {
  let nhif = 0;
  if (grossSalary <= 5999) nhif = 150;
  else if (grossSalary <= 7999) nhif = 300;
  else if (grossSalary <= 11999) nhif = 400;
  else if (grossSalary <= 14999) nhif = 500;
  else if (grossSalary <= 19999) nhif = 600;
  else if (grossSalary <= 24999) nhif = 750;
  else if (grossSalary <= 29999) nhif = 850;
  else if (grossSalary <= 34999) nhif = 900;
  else if (grossSalary <= 39999) nhif = 950;
  else if (grossSalary <= 44999) nhif = 1000;
  else if (grossSalary <= 49999) nhif = 1100;
  else if (grossSalary <= 59999) nhif = 1200;
  else if (grossSalary <= 69999) nhif = 1300;
  else if (grossSalary <= 79999) nhif = 1400;
  else if (grossSalary <= 89999) nhif = 1500;
  else if (grossSalary <= 99999) nhif = 1600;
  else nhif = 1700;
  return nhif;
}

// Function to calculate PAYE (Tax)
function calculatePAYE(grossSalary) {
  let taxableIncome = grossSalary - calculateNSSFDeduction(grossSalary);
  let paye = 0;

  if (taxableIncome <= 24000) {
    paye = taxableIncome * 0.1;
  } else if (taxableIncome <= 32333) {
    paye = 2400 + (taxableIncome - 24000) * 0.25;
  } else {
    paye = 2400 + 2083.25 + (taxableIncome - 32333) * 0.3;
  }

  // Apply personal relief (as per the current rates, Ksh 2400 per month)
  const personalRelief = 2400;
  paye = Math.max(paye - personalRelief, 0);

  return paye;
}

// Function to calculate the Net Salary
function calculateNetSalary(basicSalary, benefits) {
  const grossSalary = basicSalary + benefits;
  const nssfDeduction = calculateNSSFDeduction(grossSalary);
  const nhifDeduction = calculateNHIFDeduction(grossSalary);
  const payeTax = calculatePAYE(grossSalary);
  const netSalary = grossSalary - nssfDeduction - nhifDeduction - payeTax;

  return {
    grossSalary,
    nssfDeduction,
    nhifDeduction,
    payeTax,
    netSalary,
  };
}

// Main function to get inputs and display the results
function main() {
  const basicSalary = parseFloat(("200000:"));
  const benefits = parseFloat(("20000:"));

  const {
    grossSalary,
    nssfDeduction,
    nhifDeduction,
    payeTax,
    netSalary,
  } = calculateNetSalary(basicSalary, benefits);

  console.log("Gross Salary: Ksh", grossSalary.toFixed(2));
  console.log("NSSF Deduction: Ksh", nssfDeduction.toFixed(2));
  console.log("NHIF Deduction: Ksh", nhifDeduction.toFixed(2));
  console.log("PAYE (Tax): Ksh", payeTax.toFixed(2));
  console.log("Net Salary: Ksh", netSalary.toFixed(2));
}

// Run the main function
main();