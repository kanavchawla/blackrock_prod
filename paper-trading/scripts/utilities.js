// Formats a given number with an appropriate unit (K, M, B, etc.) based on its value
function formatNumber(number) {
    const units = ["", "K", "M", "B", "T"]; // Units for thousands, millions, billions, trillions, etc.
    let unitIndex = 0;
  
    while (Math.abs(number) >= 1000 && unitIndex < units.length - 1) {
      number /= 1000;
      unitIndex++;
    }
  
    return number.toFixed(2) + " " + units[unitIndex];
  }

  function formatNumberWithDecimal(number) {
    return number.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  
  
  export {formatNumber, formatNumberWithDecimal}