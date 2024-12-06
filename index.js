const fetchOpengraph = require('fetch-opengraph');

(async () => {
  const data = await fetchOpengraph.fetch('https://mobilon.ru');
  console.log(data)
})()


/*
response:
{
  url: 'https://mobilon.ru',
  raw: null,
  description: 'Единая платформа для звонков и общения в мессенджерах. С полным контролем и аналитикой.',
  'og:url': 'https://mobilon.ru',
  'og:title': 'Мобилон — IP-телефония и мессенджеры в CRM. Контроль и аналитика.',
  'og:description': 'Единая платформа для звонков и общения в мессенджерах. С полным контролем и аналитикой.',
  'og:type': 'website',
  'og:image': 'https://static.tildacdn.com/tild6131-3265-4563-b833-373066313839/photo.png',
  'twitter:image': 'https://static.tildacdn.com/tild6131-3265-4563-b833-373066313839/photo.png',
  image: 'https://static.tildacdn.com/tild6131-3265-4563-b833-373066313839/photo.png',
  video: null,
  'twitter:url': 'https://mobilon.ru',
  'twitter:description': 'Единая платформа для звонков и общения в мессенджерах. С полным контролем и аналитикой.',
  'twitter:title': 'Мобилон — IP-телефония и мессенджеры в CRM. Контроль и аналитика.',
  title: 'Мобилон — IP-телефония и мессенджеры в CRM. Контроль и аналитика.'
}

*/