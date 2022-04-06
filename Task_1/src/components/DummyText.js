const DummyText = () => {
  return ({
    template: `
      <div class="dummy-text">
      <div class="dummy-text__container">
      <h1 class="dummy-text__h1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quia eligendi porro fuga fugit a tempore officiis eius optio? Totam placeat obcaecati commodi voluptate fuga beatae! Aperiam neque repellat repudiandae.</h1>
      </div>
      </div>
    `
  })
}

module.exports = {
  DummyText: DummyText().template
}