(function () {
  const inputs = document.querySelectorAll('.controls input');

  inputs.forEach(input => input.addEventListener('change' ,handleChange));

  function handleChange() {
    const suffix = this.dataset.size || '',
          htmlStyle = document.documentElement.style,
          name = this.name,
          value = this.value;

    htmlStyle.setProperty(`--${name}`, value + suffix);
  }
}());