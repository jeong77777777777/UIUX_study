// clone menu and info elements
const menu = document.querySelector('.navi');
const info = document.querySelector('.info');
const newMenubox = document.querySelector('.new-mobile-menu');
const newMenu = menu.cloneNode(true);
const newInfo = info.cloneNode(true);

newMenubox.insertAdjacentElement('beforeend', newMenu);
newMenubox.insertAdjacentElement('beforeend', newInfo);

// mobile menu toggle funtion
const mobileMenuIcon = document.querySelector('.mobile-icon');

mobileMenuIcon.addEventListener('click', (e) => {
  const target = e.currentTarget;

  target.classList.toggle('active');

  const menuHeight = document.querySelector('.new-mobile-menu').scrollHeight; // 요소가 펼쳐졌을때의 높이

  if (target.classList.contains('active')) {
    target.classList.remove('not-active');
    // newMenubox.style.height = menuHeight + 'px';
    newMenubox.style.height = `${menuHeight}px`;
  } else {
    target.classList.add('not-active');
    newMenubox.style.height = 0;
  }
});

// Fixed Header Style Change and meet section start animation When Scrolling Down
const header = document.querySelector('.header');
const meetSection = document.querySelector('.meet-section');
const meetSectionTop = meetSection.offsetTop;

const scrCtrl = () => {
  const scry = window.scrollY; // 화면 최상단이 위치한 스크롤 위치값
  if (scry > 0) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }

  if (scry > meetSectionTop - 200) {
    meetSection.classList.add('on');
  }
};

window.addEventListener('scroll', scrCtrl);

// features section data
const features = [
  {
    image: '/soaply/images/about-icon-1.svg',
    title: 'For All Skin Types',
    text: '이조문발 곤펧니균에서 어누욘 닛혼으의 둘희고슴아. 르뎐 앵간여지다 저겅닸덜이노가 뚤잇아세긍닉이나 허먀르거라 띰의는 온집일과',
  },
  {
    image: '/soaply/images/about-icon-2.svg',
    title: '100% Organic',
    text: '완가긑나로아 지탁너 긜후드놔만큼 구허멘잠은 이얼기우는 적힏워다 서헤바로 안뚀. 이얘앤을 근 비닐으이는',
  },
  {
    image: '/soaply/images/about-icon-3.svg',
    title: 'Cuelty Free',
    text: '더아암나를 아타 라트 미람던매음우앙도 옥가를 룸뫈을 뱜영쯨토면 엔디사 훈익고 여김이등굥이. 운여골을 고허조차에서',
  },
];

const featuresWrapper = document.querySelector('.features');

features.forEach((feature) => {
  const featureElm = `
  <div class="feature">
  <div class="feature-icon">
  <img src="${feature.image}" alt="" />
  </div>
  <h4>${feature.title}</h4>
  <p>${feature.text}</p>
  </div>
  `;

  featuresWrapper.insertAdjacentHTML('beforeend', featureElm);
});

// Swiper Slider Codes
const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  loop: true, // 반복 여부

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
