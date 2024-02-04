class openBlock {
  constructor(
    block,
    trigger,
    text = 'Показать все',
    className = 'swiper--open'
  ) {
    ;(this.block = document.querySelector('#' + block)),
      (this.trigger = document.querySelector('#' + trigger))
    this.isOpen = false
    this.text = text
    this.className = className

    this.trigger.addEventListener('click', () => {
      if (!this.isOpen) {
        this.trigger.classList.add('read-go--close')
        this.trigger.textContent = 'Скрыть'
        this.block.classList.add(this.className)
        this.isOpen = true
      } else {
        this.trigger.classList.remove('read-go--close')
        this.trigger.textContent = this.text
        this.block.classList.remove(this.className)
        this.isOpen = false
      }
    })
  }
}

export default openBlock
