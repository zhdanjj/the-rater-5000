const total = document.getElementById('total-value');

document.querySelector('textarea').addEventListener('input', function() {
  let min = max = 0;
  this.value.split('\n').forEach(function(line) {
    const re = /(?<min>\d+(\.\d+)?)(-(?<max>\d+(\.\d+)?))?$/.exec(line);
    if (!re) {
      return;
    }
    const min_ = re.groups?.min;
    const max_ = re.groups?.max;
    min += parseFloat(min_ || 0);
    max += parseFloat(max_ || min_ || 0);
  });
  if (max > 0 && max !== min) {
    total.textContent = `${min}-${max}`;
  } else {
    total.textContent = `${min}`;
  }
});

document.getElementById('no-support').style.display = 'none';
document.getElementById('rater-app').style.display = 'block';
