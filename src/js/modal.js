class initModal {
  constructor(modal, btnOpen, row = 'left') {
    ;(this.modal = document.querySelector(modal)),
      (this.btnOpen = document.querySelector(btnOpen)),
      (this.btnClose = document.querySelector(`${modal} .menu-btn--close`)),
      (this.blur = document.querySelector('.blur-window')),
      (this.row = row)

    this.btnOpen.addEventListener('click', () => {
      //this.blur.dispatchEvent(new Event('click'))
      if (this.blur.classList.contains('blur-window--active'))
        this.blur.dispatchEvent(new Event('click'))
      window.scrollTo(0, 0)
      this.modal.classList.remove(`modal-block--${this.row}--close`)
      this.modal.classList.add(`modal-block--${this.row}--open`)
      this.blur.classList.add('blur-window--active')
    })
    this.btnClose.addEventListener('click', () => {
      this.modal.classList.remove(`modal-block--${this.row}--open`)
      this.modal.classList.add(`modal-block--${this.row}--close`)
      this.blur.classList.remove('blur-window--active')
    })
  }
}

export default initModal
