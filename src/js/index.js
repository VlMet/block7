import '../scss/style.scss'

import resizableSwiper from './swiper-init'

import openBlock from './open-block'
import initModal from './modal'
import closeArea from './closeArea'

window.addEventListener('DOMContentLoaded', () => {
  resizableSwiper('(max-width: 767px)', '#swiper1', {
    loop: true,
    slidesPerView: 'auto',
    //slidesPerGroupSkip: 1,
    spaceBetween: 16,
    pagination: {
      el: '#pagination1'
    }
  })

  resizableSwiper('(max-width: 767px)', '#swiper2', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 16,
    pagination: {
      el: '#pagination2'
    }
  })

  resizableSwiper('(max-width: 1120px)', '#swiper3', {
    freeMode: true,
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 16
  })

  resizableSwiper('(max-width: 767px)', '#swiper4', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 16,
    pagination: {
      el: '#pagination4'
    }
  })

  const open1 = new openBlock('swiper1', 'trigger1')
  const open2 = new openBlock('swiper2', 'trigger2')
  const open3 = new openBlock(
    'main-desc',
    'trigger3',
    'Читать далее',
    'info-block__text--open'
  )
  const area = new closeArea('.blur-window')
  const modal1 = new initModal('#feedback', '#feedback-trigger-main', 'right')
  const modal2 = new initModal('#call', '#call-trigger-main', 'right')
  const modal3 = new initModal('#menu', '#menu-trigger')
  const modal4 = new initModal('#feedback', '#feedback-trigger', 'right')
  const modal6 = new initModal('#call', '#call-trigger', 'right')
  const modal7 = new initModal('#call', '#call-btn1', 'right')
  const modal8 = new initModal('#call', '#call-btn2', 'right')
  const modal9 = new initModal('#feedback', '#chat-btn1', 'right')
  const modal0 = new initModal('#feedback', '#chat-btn2', 'right')

  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      document.querySelector('.blur-window').dispatchEvent(new Event('click'))
    }
  })
})
