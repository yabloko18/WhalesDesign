import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    portfolio: [
      { id: 1, title: 'Site №1', src: 'img/static/Image-Shape.jpg', srcset: 'img/static/Image-Shape.webp', value: 'portfolio-site' },
      { id: 2, title: 'Site №2', src: 'img/static/Image-Shape.jpg', srcset: 'img/static/Image-Shape.webp', value: 'portfolio-site' },
      { id: 3, title: 'Logo №1', src: 'img/static/Image-Shape.jpg', srcset: 'img/static/Image-Shape.webp', value: 'portfolio-logo' },
      { id: 4, title: 'Creative №1', src: 'img/static/Image-Shape.jpg', srcset: 'img/static/Image-Shape.webp', value: 'portfolio-creative' },
      { id: 5, title: 'Logo №2', src: 'img/static/Image-Shape.jpg', srcset: 'img/static/Image-Shape.webp', value: 'portfolio-logo' },
      { id: 6, title: 'Site №3', src: 'img/static/Image-Shape.jpg', srcset: 'img/static/Image-Shape.webp', value: 'portfolio-site' },
      { id: 7, title: 'Style №1', src: 'img/static/Image-Shape.jpg', srcset: 'img/static/Image-Shape.webp', value: 'portfolio-style' },
      { id: 8, title: 'Presentation №1', src: 'img/static/Image-Shape.jpg', srcset: 'img/static/Image-Shape.webp', value: 'portfolio-presentation' },
      { id: 9, title: 'Style №2', src: 'img/static/Image-Shape.jpg', srcset: 'img/static/Image-Shape.webp', value: 'portfolio-style' },
      { id: 10, title: 'Illustration №1', src: 'img/static/Image-Shape.jpg', srcset: 'img/static/Image-Shape.webp', value: 'portfolio-illustration' },
      { id: 11, title: 'Creative №2', src: 'img/static/Image-Shape.jpg', srcset: 'img/static/Image-Shape.webp', value: 'portfolio-creative' },
      { id: 12, title: 'Site №4', src: 'img/static/Image-Shape.jpg', srcset: 'img/static/Image-Shape.webp', value: 'portfolio-site' },
      { id: 13, title: 'Style №3', src: 'img/static/Image-Shape.jpg', srcset: 'img/static/Image-Shape.webp', value: 'portfolio-style' },
      { id: 14, title: 'Logo №3', src: 'img/static/Image-Shape.jpg', srcset: 'img/static/Image-Shape.webp', value: 'portfolio-logo' },
      { id: 15, title: 'Creative №3', src: 'img/static/Image-Shape.jpg', srcset: 'img/static/Image-Shape.webp', value: 'portfolio-creative' },
      { id: 16, title: 'Illustration №2', src: 'img/static/Image-Shape.jpg', srcset: 'img/static/Image-Shape.webp', value: 'portfolio-illustration' },
      { id: 17, title: 'Illustration №3', src: 'img/static/Image-Shape.jpg', srcset: 'img/static/Image-Shape.webp', value: 'portfolio-illustration' },
      { id: 18, title: 'Presentation №2', src: 'img/static/Image-Shape.jpg', srcset: 'img/static/Image-Shape.webp', value: 'portfolio-presentation' },
      { id: 19, title: 'Site №1', src: 'img/static/Image-Shape.jpg', srcset: 'img/static/Image-Shape.webp', value: 'portfolio-site' },
      { id: 20, title: 'Site №2', src: 'img/static/Image-Shape.jpg', srcset: 'img/static/Image-Shape.webp', value: 'portfolio-site' },
      { id: 21, title: 'Logo №1', src: 'img/static/Image-Shape.jpg', srcset: 'img/static/Image-Shape.webp', value: 'portfolio-logo' },
      { id: 22, title: 'Creative №1', src: 'img/static/Image-Shape.jpg', srcset: 'img/static/Image-Shape.webp', value: 'portfolio-creative' },
      { id: 23, title: 'Logo №2', src: 'img/static/Image-Shape.jpg', srcset: 'img/static/Image-Shape.webp', value: 'portfolio-logo' },
      { id: 24, title: 'Site №3', src: 'img/static/Image-Shape.jpg', srcset: 'img/static/Image-Shape.webp', value: 'portfolio-site' },
      { id: 25, title: 'Style №1', src: 'img/static/Image-Shape.jpg', srcset: 'img/static/Image-Shape.webp', value: 'portfolio-style' },
      { id: 26, title: 'Presentation №1', src: 'img/static/Image-Shape.jpg', srcset: 'img/static/Image-Shape.webp', value: 'portfolio-presentation' },
      { id: 27, title: 'Style №2', src: 'img/static/Image-Shape.jpg', srcset: 'img/static/Image-Shape.webp', value: 'portfolio-style' },
      { id: 28, title: 'Illustration №1', src: 'img/static/Image-Shape.jpg', srcset: 'img/static/Image-Shape.webp', value: 'portfolio-illustration' },
      { id: 29, title: 'Creative №2', src: 'img/static/Image-Shape.jpg', srcset: 'img/static/Image-Shape.webp', value: 'portfolio-creative' },
      { id: 30, title: 'Site №4', src: 'img/static/Image-Shape.jpg', srcset: 'img/static/Image-Shape.webp', value: 'portfolio-site' },
      { id: 31, title: 'Style №3', src: 'img/static/Image-Shape.jpg', srcset: 'img/static/Image-Shape.webp', value: 'portfolio-style' },
      { id: 32, title: 'Logo №3', src: 'img/static/Image-Shape.jpg', srcset: 'img/static/Image-Shape.webp', value: 'portfolio-logo' },
      { id: 33, title: 'Creative №3', src: 'img/static/Image-Shape.jpg', srcset: 'img/static/Image-Shape.webp', value: 'portfolio-creative' },
      { id: 34, title: 'Illustration №2', src: 'img/static/Image-Shape.jpg', srcset: 'img/static/Image-Shape.webp', value: 'portfolio-illustration' }
    ],
    briefList: [
      { id: '01', title: 'Веб Дизайн', text: 'Бриф на разработку веб дизайна', url: 'web-design' },
      { id: '02', title: 'Лого', text: 'Бриф на разработку логотипа', url: 'logo' },
      { id: '04', title: 'Призентация', text: 'Бриф на разработку презентации', url: 'presentation' },
      { id: '05', title: 'Айдентика', text: 'Бриф на разработку айдентики', url: 'identity' },
      { id: '06', title: 'Креатив', text: 'Бриф на разработку креатива', url: 'creatives' }
    ],
    servicesList: [
      { id: 1, title: 'Айдентика', text: 'Мы занимаемся дизайном логотипов, элементов фирменного стиля', src: 'img/static/services/Object-27.png', srcset: 'img/static/services/Object-27.webp', url: 'identity' },
      { id: 2, title: 'Иллюстрации', text: 'Мы занимаемся созданием иллюстрации', src: 'img/static/services/casual-life-3d-stilus1.png', srcset: 'img/static/services/casual-life-3d-stilus1.webp', url: 'illustration' },
      { id: 3, title: 'Логотипы', text: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat', src: 'img/static/services/Saly-27.png', srcset: 'img/static/services/Saly-27.webp', url: 'logo' },
      { id: 4, title: 'Веб сайты', text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa deserunt', src: 'img/static/services/Object-21.png', srcset: 'img/static/services/Object-21.webp', url: 'web-design' },
      { id: 5, title: 'Креативы', text: 'Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation', src: 'img/static/services/Object-23.png', srcset: 'img/static/services/Object-23.webp', url: 'creatives' },
      { id: 6, title: 'Презентации', text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum', src: 'img/static/services/OfficeGal.png', srcset: 'img/static/services/OfficeGal.webp', url: 'presentation' }
    ],
    aboutItems: [
      { id: '01', title: 'Экономия', text: 'Отсутствие офиса, помогает нам оказывать услуги премиального качества, за более низкую цену' },
      { id: '02', title: 'Скорость', text: 'У нас небольшая команда, а значит принятие решений занимает гораздо меньшее количество времени' },
      { id: '03', title: 'Прозрачность', text: 'Сразу после начала работы, вы будете подключены к нашему удаленному офису, где напрямую сможете общаться с Дизайнером, Менеджером или же Руководителем агентства' },
      { id: '04', title: 'Удобство', text: 'Мы будем предоставлять вам регулярные отчеты о стадии на которой, находится ваш дизайн' }
    ],
    homeLink: '/',
    portfolioLink: '/portfolio',
    servicesLink: '/services',
    aboutLink: '/about',
    contactsLink: '/contacts',
    projectLink: '/project',
    logoLink: '/logo',
    identityLink: '/identity',
    creativesLink: '/creatives',
    presentationLink: '/presentation',
    webDesignLink: '/web-design',
    briefLink: '/brief',
    formPosition: ''
  },
  mutations: {
    updateForm(state, formPosition) {
      state.formPosition = formPosition
    }
  },
  actions: {
    async formTopPosition (ctx) {
      let formPosition = document.querySelector('.mail-form').offsetTop

      ctx.commit('updateForm', formPosition)
    }
  },
  getters: {
    allPortfolio (state) {
      return state.portfolio
    },
    briefList (state) {
      return state.briefList
    },
    servicesList (state) {
      return state.servicesList
    },
    aboutItems (state) {
      return state.aboutItems
    },
    filterValue (state) {
      return state.filterValue
    },
    homeLink (state) {
      return state.homeLink
    },
    portfolioLink (state) {
      return state.portfolioLink
    },
    servicesLink (state) {
      return state.servicesLink
    },
    aboutLink (state) {
      return state.aboutLink
    },
    contactsLink (state) {
      return state.contactsLink
    },
    projectLink (state) {
      return state.projectLink
    },
    logoLink (state) {
      return state.logoLink
    },
    identityLink (state) {
      return state.identityLink
    },
    creativesLink (state) {
      return state.creativesLink
    },
    presentationLink (state) {
      return state.presentationLink
    },
    webDesignLink (state) {
      return state.webDesignLink
    },
    briefLink (state) {
      return state.briefLink
    },
    forms (state) {
      return state.formPosition
    }
  },
  modules: {
  }
})
