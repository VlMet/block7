class closeArea {
  constructor(area) {
    ;(this.area = document.querySelector(area)), (this.modalActive = undefined)

    this.area.addEventListener('click', () => {
      this.modalActive = document.querySelector('.modal-block--left--open')
      if (this.modalActive) {
        //console.log('left')
        this.modalActive.classList.remove('modal-block--left--open')
        this.modalActive.classList.add('modal-block--left--close')
        this.area.classList.remove('blur-window--active')
      } else {
        //console.log('right')
        this.modalActive = document.querySelector('.modal-block--right--open')
        this.modalActive.classList.remove('modal-block--right--open')
        this.modalActive.classList.add('modal-block--right--close')
        this.area.classList.remove('blur-window--active')
      }
    })
  }
}

export default closeArea
