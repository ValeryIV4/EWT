const shirts = [{
    "name": "Beep Boop",
    "description": "Once upon a time, a mighty guide guarded the intersection of Forbes and Morewood, and would dutifully direct distracted college students when it was safe to cross the street. Its voice was soothing, strong, and steady. Its name was beep boop.",
    "price": "$19.99",
    "colors": {
        "white": {
            "front": "shirt_images/beepboop-white-front.png",
            "back": "shirt_images/beepboop-white-back.png"
        },
        "blue": {
            "front": "shirt_images/beepboop-blue-front.png",
            "back": "shirt_images/beepboop-blue-back.png"
        },
        "pink": {
            "front": "shirt_images/beepboop-pink-front.png",
            "back": "shirt_images/beepboop-pink-back.png"
        },
        "red": {
            "front": "shirt_images/beepboop-red-front.png",
            "back": "shirt_images/beepboop-red-back.png"
        }
    },
    "default": {
        "front": "shirt_images/default-m-front.png",
        "back": "shirt_images/default-m-back.png"
    }
},
{
    "name": "Car",
    "description": "As you move in to campus, one of the first memories so many students have is driving up to their dorm, unloading their bags, and moving in. How do they arrive to campus? By car, of course!",
    "price": "$10.99",
    "colors": {
        "white": {
            "front": "shirt_images/car-white-front.png",
            "back": "shirt_images/car-white-back.png"
        },
        "blue": {
            "front": "shirt_images/car-blue-front.png",
            "back": "shirt_images/car-blue-back.png"
        },
        "green": {
            "front": "shirt_images/car-green-front.png",
            "back": "shirt_images/car-green-back.png"
        },
        "yellow": {
            "front": "shirt_images/car-yellow-front.png",
            "back": "shirt_images/car-yellow-back.png"
        },
        "red": {
            "front": "shirt_images/car-red-front.png",
            "back": "shirt_images/car-red-back.png"
        }
    },
    "default": {
        "front": "shirt_images/default-w-front.png",
        "back": "shirt_images/default-w-back.png"
    }
},
{
    "name": "Forever Plaid",
    "price": "$13.99",
    "description": "Proudly wear your tartan plaid as a patch on your front shirt pocket. And on the back, ask the important question that all CMU students should know the answer to: got plaid?",
    "colors": {
        "white": {
            "front": "shirt_images/plaid-white-front.png",
            "back": "shirt_images/plaid-white-back.png"
        },
        "pink": {
            "front": "shirt_images/plaid-pink-front.png",
            "back": "shirt_images/plaid-pink-back.png"
        }
    },
    "default": {
        "front": "shirt_images/default-w-front.png",
        "back": "shirt_images/default-w-back.png"
    }
},
{
    "name": "BSUIR",
    "description": "BSUIR mission is to train engineers and scientists capable of generating and implementing innovative ideas, creating competitive high technology products in the spheres of computer science and electronics.",
    "price": "$6.99",
    "colors": {
        "white": {
            "front": "shirt_images/bsuir-white-front.png",
            "back": "shirt_images/bsuir-white-back.png"
        }
    },
    "default": {
        "front": "shirt_images/default-m-front.png",
        "back": "shirt_images/default-m-back.png"
    }
}];

let id = localStorage.getItem('product_id');
let product = shirts[id];

function view(product){
    localStorage.setItem('side', 'front');
    localStorage.setItem('color', 'white');

    let div = document.querySelector('.product_page');
    let info = document.querySelector('.product_info');
    let flex = document.querySelector('.flex');

    let name = document.querySelector('.product_name'); //name
    name.textContent = product['name'];
    div.appendChild(name);

    let photo = document.querySelector('.product_photo'); //photo
    photo.setAttribute("src", product["colors"]['white']['front']);
    flex.appendChild(photo);

    let price = document.querySelector('.product_price'); //name
    price.textContent = product['price'];
    info.appendChild(price);

    let desc = document.querySelector('.product_desc'); //description
    desc.textContent = product['description'];
    info.appendChild(desc);

    let side = document.createElement('p'); //side
    side.textContent = 'Side:';
    info.appendChild(side);

    if(product["colors"]['white']['front'])
    {
        let button_front = document.createElement('button');
        button_front.textContent = "front";
        button_front.classList.add('product_button');
        button_front.setAttribute("onclick", "setSide(this);");
        info.appendChild(button_front);
    }
    if(product["colors"]['white']['back'])
    {
        let button_back = document.createElement('button');
        button_back.textContent = "back";
        button_back.classList.add('product_button');
        button_back.setAttribute("onclick", "setSide(this);");
        info.appendChild(button_back);
    }

    var color_keys = Object.keys(product["colors"]);

    let color = document.createElement('p'); //color
    color.textContent = "Color: ";
    color.classList.add('product_color');
    info.appendChild(color);

    (color_keys).forEach(element => { //color buttons
        let button = document.createElement('button');
        button.textContent = element;
        button.style.backgroundColor = element;
        button.classList.add('button_color');
        button.setAttribute("onclick", "setColor(this);");
        info.appendChild(button);
    });

    flex.appendChild(info);
    div.appendChild(flex);
}

view(product);


function setSide(element) {
    let container = document.querySelector('.flex');
    let color = localStorage.getItem('color');

    let photo = document.querySelector('.product_photo'); //photo
    photo.setAttribute("src", product["colors"][color][element.textContent]);
    container.appendChild(photo);

    let info = document.querySelector('.product_info');
    container.appendChild(info);

    localStorage.setItem('side', element.textContent);
}

function setColor(element) {
    let container = document.querySelector('.flex');
    let side = localStorage.getItem('side');

    let photo = document.querySelector('.product_photo'); //photo
    photo.setAttribute("src", product["colors"][element.textContent][side]);
    container.appendChild(photo);

    let info = document.querySelector('.product_info');
    container.appendChild(info);

    localStorage.setItem('color', element.textContent);
}