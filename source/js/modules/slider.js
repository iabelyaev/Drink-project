const rangeSliderInit = () => {
  const range = document.querySelector('.slider__range');
  const inputMin = document.getElementById('min');
  const inputMax = document.getElementById('max');

  if (!range || !inputMin || !inputMax) return

  const inputs = [inputMin, inputMax];

  noUiSlider.create(range, {
      start: [0, 900],
      connect: true,
      range: {
        'min': 0,
        'max': 1000
      },
      format: {
        to: (value) => value.toFixed(0),
        from: (value) => value
      }
    }
  )

  range.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = parseInt(values[handle]);
  });

  inputMin.addEventListener('change', function () {
    range.noUiSlider.set([this.value, null]);
  });

  inputMax.addEventListener('change', function () {
    range.noUiSlider.set([null, this.value]);
  });

}

const init = () => {
  rangeSliderInit()
}

export default init;
