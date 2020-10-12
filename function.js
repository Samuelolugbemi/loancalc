document.getElementById("loan-form");
document.addEventListener("submit", calculateResults);
// Calculate Results
function calculateResults(e) {
  e.preventDefault();
  let amount = document.getElementById("amount");
  let interest = document.getElementById("interest");
  let years = document.getElementById("years");
  let monthlyPayment = document.getElementById("monthly-payment");
  let totalPayment = document.getElementById("total-payment");
  let totalInterest = document.getElementById("total-interest");

  let principal = parseFloat(amount.value);
  let calculatedInterest = parseFloat(interest.value) / 100 / 12;
  let calculatedPayments = parseFloat(years.value);

  // Computed Monthly payment
  let principalValue = principal * calculatedInterest;
  let nthMonth = (1 + calculatedInterest) ** calculatedPayments;
  let monthlyNumerator = principalValue * nthMonth;
  let monthlyPaymentDivisor = nthMonth - 1;
  let monthlyAmount = monthlyNumerator / monthlyPaymentDivisor;
  //   Overall Payment
  let overallPayment = calculatedPayments * monthlyAmount;
  // Interest++
  let interestOnLoan = overallPayment - principal;

  if (isFinite(monthlyAmount)) {
    console.log(monthlyAmount);
    monthlyPayment.value = monthlyAmount.toFixed(2);
    totalPayment.value = overallPayment.toFixed(2);
    totalInterest.value = interestOnLoan.toFixed(2);

    // Show Results
    document.getElementById("result").style.display = "block";

    // Hide Loader
  } else {
    showError("Please check number inputs");
  }
}
