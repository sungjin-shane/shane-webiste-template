export function getStyles (id) {
  id = parseInt(id)
  // background-image: url('img/intro-carousel/4.jpg');

  let imgFile = String(id).concat(`.jpg'`)
  let background = `'img/intro-carousel/`.concat(imgFile)

  let style = {
    backgroundImage: `url(${background})`
  }

  return style
}

export function setPolyColor (id) {
  id = parseInt(id)
  let polyColor = ''

  switch (id) {
    // case 1:
    //   polyColor = 'red'
    //   break
    // case 2:
    //   polyColor = 'blue'
    //   break
    // case 3:
    //   polyColor = 'white'
    //   break
    // case 4:
    //   polyColor = 'yellow'
    //   break
    // case 5:
    //   polyColor = 'orange'
    //   break
    // case 6:
    //   polyColor = 'navy'
    //   break
    // case 7:
    //   polyColor = 'black'
    //   break
    // case 8:
    //   polyColor = 'navy'
    //   break

    default: polyColor = 'gray'
  }
  return polyColor
}
