document.addEventListener('DOMContentLoaded', () => {

    const tabs = () => {
      const head = document.querySelector('.booking-tabs__head') // находится блок с кнопками по классу и записывается в константу
      const body = document.querySelector('.booking-tabs__body') // находится блок с контентом по классу и записывается в константу
  
      const getActiveTabName = () => { // функция возвращает значние data-tab активной вкладкт
        return head.querySelector('.booking-tabs__caption_active').dataset.tab
      }
  
      const setActiveContent = () => { // присвание активного элемента
        if (body.querySelector('.booking-tabs__content_active')) { // если есть активный элемент
          body.querySelector('.booking-tabs__content_active').classList.remove('booking-tabs__content_active') // элемент скрывается
        }
        body.querySelector(`[data-tab=${getActiveTabName()}]`).classList.add('booking-tabs__content_active') // элемент с совпадающим значением data-tab отображается
      }
  
      if (!head.querySelector('.booking-tabs__caption_active')) {  // если активной вкладки нет
        head.querySelector('.booking-tabs__caption').classList.add('booking-tabs__caption_active') // первая вкладка становится активной
      }
  
      setActiveContent(getActiveTabName())
  
      head.addEventListener('click', e => { // при клике на блок со вкладками
        const caption = e.target.closest('.booking-tabs__caption') // переменной присваивается истинное значение, если клик был по кнопке
        if (!caption) return // если ложное значение, то выполнение функции прекращается
        if (caption.classList.contains('booking-tabs__caption_active')) return // если клик был на активной кнопке, то тоже прерываем выполнение функции и ничего не делаем
        
        if (head.querySelector('.booking-tabs__caption_active')) { // если уже есть активная кнопка
          head.querySelector('.booking-tabs__caption_active').classList.remove('booking-tabs__caption_active') // то удаляется класс активной кнопки
        }
  
        caption.classList.add('booking-tabs__caption_active') // затем добавляется класс активной кнопки 
  
        setActiveContent(getActiveTabName()) // устанавливается в соответствии с активной кнопкой
      })
    }
  
    tabs()
  
  })