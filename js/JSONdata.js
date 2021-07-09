// HOMEPAGE PHOTOGRAPHY INFO

fetch("FishEyeData.json")
	.then(response => response.json())
	.then(data => {
    // Photographer 1
        // name
		console.log(data.photographers[0].name)
		document.querySelector("#photographer__name-1").innerText = data.photographers[0].name
        // city
        console.log(data.photographers[0].city+', '+data.photographers[0].country)
		document.querySelector("#photographer__city-1").innerText = data.photographers[0].city+', '+data.photographers[0].country
        // tagline
        console.log(data.photographers[0].tagline)
		document.querySelector("#photographer__tagline-1").innerText = data.photographers[0].tagline
        // price
        console.log(data.photographers[0].price)
		document.querySelector("#photographer__price-1").innerText = data.photographers[0].price+'€/jour'
        // tags
        // tag 1
        console.log(data.photographers[0].tags[0])
		document.querySelector("#photographer__tags1-1").innerText = '#'+data.photographers[0].tags[0]
        // tag 2
        console.log(data.photographers[0].tags[1])
		document.querySelector("#photographer__tags2-1").innerText = '#'+data.photographers[0].tags[1]
        // tag 3
        console.log(data.photographers[0].tags[2])
		document.querySelector("#photographer__tags3-1").innerText = '#'+data.photographers[0].tags[2]
        // tag 4
        console.log(data.photographers[0].tags[3])
		document.querySelector("#photographer__tags4-1").innerText = '#'+data.photographers[0].tags[3]

    // Photographer 2
        // name
		console.log(data.photographers[1].name)
		document.querySelector("#photographer__name-2").innerText = data.photographers[1].name
        // city
        console.log(data.photographers[1].city+', '+data.photographers[1].country)
		document.querySelector("#photographer__city-2").innerText = data.photographers[1].city+', '+data.photographers[1].country
        // tagline
        console.log(data.photographers[1].tagline)
		document.querySelector("#photographer__tagline-2").innerText = data.photographers[1].tagline
        // price
        console.log(data.photographers[1].price)
		document.querySelector("#photographer__price-2").innerText = data.photographers[1].price+'€/jour'
        // tags
        // tag 1
        console.log(data.photographers[1].tags[0])
		document.querySelector("#photographer__tags1-2").innerText = '#'+data.photographers[1].tags[0]
        // tag 2
        console.log(data.photographers[1].tags[1])
		document.querySelector("#photographer__tags2-2").innerText = '#'+data.photographers[1].tags[1]

        // Photographer 3
        // name
		console.log(data.photographers[2].name)
		document.querySelector("#photographer__name-3").innerText = data.photographers[2].name
        // city
        console.log(data.photographers[2].city+', '+data.photographers[2].country)
		document.querySelector("#photographer__city-3").innerText = data.photographers[2].city+', '+data.photographers[2].country
        // tagline
        console.log(data.photographers[2].tagline)
		document.querySelector("#photographer__tagline-3").innerText = data.photographers[2].tagline
        // price
        console.log(data.photographers[2].price)
		document.querySelector("#photographer__price-3").innerText = data.photographers[2].price+'€/jour'
        // tags
        // tag 1
        console.log(data.photographers[2].tags[0])
		document.querySelector("#photographer__tags1-3").innerText = '#'+data.photographers[2].tags[0]
        // tag 2
        console.log(data.photographers[2].tags[1])
		document.querySelector("#photographer__tags2-3").innerText = '#'+data.photographers[2].tags[1]
        // tag 3
        console.log(data.photographers[2].tags[2])
		document.querySelector("#photographer__tags3-3").innerText = '#'+data.photographers[2].tags[2]

        // Photographer 4
        // name
		console.log(data.photographers[3].name)
		document.querySelector("#photographer__name-4").innerText = data.photographers[3].name
        // city
        console.log(data.photographers[3].city+', '+data.photographers[3].country)
		document.querySelector("#photographer__city-4").innerText = data.photographers[3].city+', '+data.photographers[3].country
        // tagline
        console.log(data.photographers[3].tagline)
		document.querySelector("#photographer__tagline-4").innerText = data.photographers[3].tagline
        // price
        console.log(data.photographers[3].price)
		document.querySelector("#photographer__price-4").innerText = data.photographers[3].price+'€/jour'
        // tags
        // tag 1
        console.log(data.photographers[3].tags[0])
		document.querySelector("#photographer__tags1-4").innerText = '#'+data.photographers[3].tags[0]
        // tag 2
        console.log(data.photographers[3].tags[1])
		document.querySelector("#photographer__tags2-4").innerText = '#'+data.photographers[3].tags[1]

        // Photographer 5
        // name
		console.log(data.photographers[4].name)
		document.querySelector("#photographer__name-5").innerText = data.photographers[4].name
        // city
        console.log(data.photographers[4].city+', '+data.photographers[4].country)
		document.querySelector("#photographer__city-5").innerText = data.photographers[4].city+', '+data.photographers[4].country
        // tagline
        console.log(data.photographers[4].tagline)
		document.querySelector("#photographer__tagline-5").innerText = data.photographers[4].tagline
        // price
        console.log(data.photographers[4].price)
		document.querySelector("#photographer__price-5").innerText = data.photographers[4].price+'€/jour'
        // tags
        // tag 1
        console.log(data.photographers[4].tags[0])
		document.querySelector("#photographer__tags1-5").innerText = '#'+data.photographers[4].tags[0]
        // tag 2
        console.log(data.photographers[4].tags[1])
		document.querySelector("#photographer__tags2-5").innerText = '#'+data.photographers[4].tags[1]
        // tag 3
        console.log(data.photographers[4].tags[2])
		document.querySelector("#photographer__tags3-5").innerText = '#'+data.photographers[4].tags[2]
        // tag 4
        console.log(data.photographers[4].tags[3])
		document.querySelector("#photographer__tags4-5").innerText = '#'+data.photographers[4].tags[3]
        
        // Photographer 6
        // name
		console.log(data.photographers[5].name)
		document.querySelector("#photographer__name-6").innerText = data.photographers[5].name
        // city
        console.log(data.photographers[5].city+', '+data.photographers[5].country)
		document.querySelector("#photographer__city-6").innerText = data.photographers[5].city+', '+data.photographers[5].country
        // tagline
        console.log(data.photographers[5].tagline)
		document.querySelector("#photographer__tagline-6").innerText = data.photographers[5].tagline
        // price
        console.log(data.photographers[5].price)
		document.querySelector("#photographer__price-6").innerText = data.photographers[5].price+'€/jour'
        // tags
        // tag 1
        console.log(data.photographers[5].tags[0])
		document.querySelector("#photographer__tags1-6").innerText = '#'+data.photographers[5].tags[0]
        // tag 2
        console.log(data.photographers[5].tags[1])
		document.querySelector("#photographer__tags2-6").innerText = '#'+data.photographers[5].tags[1]
	})
