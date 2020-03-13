window.onscroll = () => {
  const nav = document.querySelector('#navbar');
  if(this.scrollY <= 20) nav.className = ''; else nav.className = 'scroll';
};
