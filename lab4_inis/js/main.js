
function view(shirts){
    let div = document.querySelector('.main');

    shirts.forEach(function(item, i)
    { //item - object
        let elem = document.createElement('li');
        elem.classList.add('product');

        try{
            let keys = Object.keys(item.colors); 
            let keys_photo = Object.keys(item.colors[keys[0]]); //image 

            let src = item.colors[keys[0]][keys_photo[0]]; 
            let img = new Image();
            img.src = src;
            elem.appendChild(img);
        } catch(error)
        {
            let keys_default = Object.keys(item.default);
            let src = item.default[keys_default[0]]; 
            let img = new Image();
            img.src = src;
            elem.appendChild(img);
        }

        let p1 = document.createElement('p'); //name
        if(item["name"]){
            p1.textContent = item["name"];
        }
        else {
            p1.textContent = "Underfined";
        }
        elem.appendChild(p1);
        p1.classList.add('product_name');

        try{
            let keys = Object.keys(item.colors); 
            let p2 = document.createElement('p'); //colors
            p2.textContent = "Available in "+ keys.length +" colors";
            elem.appendChild(p2);
            p2.classList.add('product_available');
        } catch(error)
        {
            let p2 = document.createElement('p'); 
            p2.textContent = "Available in 0 colors";
            elem.appendChild(p2);
            p2.classList.add('product_available');
        }

        let button_quick = document.createElement('button'); //quick view button
        button_quick.textContent = "Quick View";
        elem.appendChild(button_quick);
        button_quick.classList.add('product_button');
        button_quick.setAttribute("id", i);
        button_quick.setAttribute("onclick", "quickView(this);");

        let a = document.createElement('a');
        a.href = "details.html";
        let button_see = document.createElement('button'); //see page button
        button_see.textContent = "See Page";
        a.appendChild(button_see);
        elem.appendChild(a);
        button_see.classList.add('product_button');
        button_see.setAttribute("id", i);
        button_see.setAttribute("onclick", "setId(this);");
        
        div.appendChild(elem);
    });
}

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

view(shirts);


function quickView(obj) {
    let quickViewPanel = document.querySelector('.quickView');
    let quickViewInfo = document.querySelector('.quickView_info');
    quickViewPanel.style.visibility = "visible";

    let product = shirts[obj.id];

    let photo1 = document.querySelector('.photo1'); //photo
    photo1.setAttribute("src", product["colors"]['white']['front']);
    quickViewPanel.appendChild(photo1);

    let photo2 = document.querySelector('.photo2'); //photo
    photo2.setAttribute("src", product["colors"]['white']['back']);
    quickViewPanel.appendChild(photo2);

    let name = document.querySelector('.quickView_name'); //name
    name.textContent = product["name"];
    quickViewInfo.appendChild(name);

    let price = document.querySelector('.quickView_price'); //price
    price.textContent = product["price"];
    quickViewInfo.appendChild(price);

    let button = document.querySelector('.quickView_button'); //button
    quickViewInfo.appendChild(button);

    quickViewPanel.appendChild(quickViewInfo);
}

function closePanel(){
    let quickViewPanel = document.querySelector('.quickView');
    quickViewPanel.style.visibility = "hidden";
}

function setId(obj){
    localStorage.setItem('product_id', obj.id);
}
