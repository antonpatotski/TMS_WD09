export const lesson_8 = () => {
  const test1 = () => {
    console.log('Start')


    const timerId = setTimeout(() => {
      console.log('Timeout');
    }, 500);

    const timer2 = setInterval(() => {
      console.log((new Date()).toLocaleTimeString())
    }, 1000)

    const result = fetch('https://jsonplaceholder.typicode.com/posts', { method: 'POST' })
      .then(response => response.json())
      .then(result => {
        clearInterval(timer2)
      })

    // const fetch2 = (url) => { // example what fetch is
    //   return new Promise((resolve, reject) => {
    //     const request = new XMLHttpRequest();
    //
    //     setTimeout(() => {
    //       if (request.status === 4) {
    //         resolve(request.response)
    //       } else if (request.status === 5) {
    //         reject(request.response.error)
    //       }
    //     }, 2)
    //   })
    // }


    //infinity loop

    console.log('End')
  }

  const test2 = () => {
    const testPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('reject')
      }, 3000)
    }).then((result) => {
      console.log(result);
      return 'Then 2'
    }).then((result) => {
      console.log(2, result)
    }).catch(error => {
      console.log('error', error)
    })
  }
  const renderPhotos = (photos) => {
    const container = document.querySelector('#app');

    container.innerHTML = photos.reduce((acc, photo) => {
      return acc + `
          <img src="${photo.url}" />
        `
    }, '')

    // [1, 2] => '<img src="1" /><img src="2" />'
  };

  const test3 = () => {
    const photos = fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => {
        console.log(response)
        return response.json();
      })
      .then(photos => {
        console.log(photos)
        renderPhotos(photos.slice(0, 10))
      }).catch((error) => {
        console.error(error)
      })
  }

  const test4 = async () => {
    let photos;

    try {
      photos = await fetch('https://jsonplacaasdeholder.typicode.com/photos').then(response => response.json());
    } catch (e) {
      console.warn(e)
    }

    const data = photos?.slice(0, 10);

    if (data) {
      renderPhotos(data);
    }
  }

  const request = (url) => {
    return fetch(url).then(response => response.json());
  }

  const requestAll = (urls) => {
    return Promise.all(urls.map(url => fetch(url).then(response => response.json())));
    // Promise.all(array).then(result [item 1 result, item 2 result])
    /*return Promise.all([
      fetch(url1).then(response => response.json()),
      fetch(url2).then(response => response.json())
    ])*/


    // Race example Promise.race([]) => first loaded data
  }

  const test5 = async () => {
    let photos;
    let users;
    let result;

    try {
      // photos = await request('https://jsonplaceholder.typicode.com/photos');
      // users = await request('https://jsonplaceholder.typicode.com/users');
      result = await requestAll([
        'https://jsonplaceholder.typicode.com/photos',
        'https://jsonplaceholder.typicode.com/users'
      ])
    } catch (e) {
      console.warn(e)
    }

    console.log('result', result) // => array [photos, users]
    console.log(users, photos);

    const data = result[0]?.slice(0, 10);

    if (data) {
      renderPhotos(data);
    }
  }

  const test6 = () => {
    setTimeout(() => {
      console.log('Timeout')
    }, 0)

    new Promise((resolve, reject) => {
      resolve('Promise')
    }).then(result => {
      console.log(result);
    })
  }

  // test5();
}

lesson_8()
