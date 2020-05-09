componentDidMount(){
		let proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    		targetUrl = 'http://catfacts-api.appspot.com/api/facts?number=99'
		fetch(proxyUrl + targetUrl)
  		.then(blob => blob.json())
  		.then(data => console.table(data));
	}