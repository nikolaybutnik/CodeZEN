const API = {
  getPhotos: () => {
    return fetch(
      'https://api.unsplash.com/photos/?client_id=hWXpDLkq8si4lnWuLGecXoSKivOG3F3Tc2g-zcgcnBs'
    ).then((res) => res.json())
  },
}

export default API
