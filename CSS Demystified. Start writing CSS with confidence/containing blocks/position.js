var num1 = document.createElement('input');
num1.setAttribute('type', 'number');
document.body.appendChild(num1);
var num2 = document.createElement('input');
num2.setAttribute('type', 'number');
document.body.appendChild(num2);
var sum = document.createElement('div');
document.body.appendChild(sum);
num1.addEventListener('input', function() {
  var num1 = parseInt(this.value);
  var num2 = parseInt(num2.value);
  sum.innerHTML = num1 + num2;
});
num2.addEventListener('input', function() {
  var num1 = parseInt(num1.value);
  var num2 = parseInt(this.value);
  sum.innerHTML = num1 + num2;
});

export default sum;