function filter(category) {
    const images = document.getElementsByClassName('image');
  
    if (category === 'all') {
      for (let i = 0; i < images.length; i++) {
        images[i].style.display = 'block';
      }
    } else {
      for (let i = 0; i < images.length; i++) {
        if (images[i].classList.contains(category)) {
          images[i].style.display = 'block';
        } else {
          images[i].style.display = 'none';
        }
      }
    }
  }
  