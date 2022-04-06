const RadioButtons = () => {
  return ({
    template: `
  <main class="radio">
  <label class="radio__label radio__label_is--merriweather"
    for="merriweather"
    ><input
      class="radio__input"
      type="radio"
      checked
      id="merriweather"
      name="fontselect"
    />
    <div class="radio__letter radio__letter_merriweather">
      <div class="radio__letter-abs-wrapper">
        <i class="radio__letter-abs radio__letter-abs_is--merriweather">
          M</i
        >
      </div>
    </div>
    <ul class="radio__list">
      <li class="radio__list-item">
        Merriweather project is led by Sorkin Type
      </li>
    </ul></label
  ><label class="radio__label radio__label_is--roboto" for="roboto"
    ><input
      class="radio__input"
      type="radio"
      checked
      id="roboto"
      name="fontselect"
    />
    <div class="radio__letter radio__letter_roboto">
      <div class="radio__letter-abs-wrapper">
        <i class="radio__letter-abs radio__letter-abs_is--roboto"> R</i>
      </div>
    </div>
    <ul class="radio__list">
      <li class="radio__list-item">
        Roboto doesn't compromise, allowing letters
      </li>
    </ul></label
  ><label
    class="radio__label radio__label_is--noto-sans"
    for="noto-sans"
    ><input
      class="radio__input"
      type="radio"
      checked
      id="noto-sans"
      name="fontselect"
    />
    <div class="radio__letter radio__letter_ns">
      <div class="radio__letter-abs-wrapper">
        <i class="radio__letter-abs radio__letter-abs_is--noto-sans">
          NS</i
        >
      </div>
    </div>
    <ul class="radio__list">
      <li class="radio__list-item">Noto Sans covers over 30 scripts</li>
    </ul></label
  >
</main>`
  })
}

module.exports = {
  RadioButtons: RadioButtons().template
}