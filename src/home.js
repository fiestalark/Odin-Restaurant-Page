const createWebpage = () => {
    const content = document.querySelector('#content');

    // Create hero
    const hero = document.createElement('section');
    hero.classList.add('hero');

    const heroHeading = document.createElement('h2');
    heroHeading.textContent = 'Welcome to La Maison';

    const heroPara = document.createElement('p');
    heroPara.textContent = 'Experience authentic French cuisine in the heart of the city'

    hero.appendChild(heroHeading);
    hero.appendChild(heroPara);

    content.appendChild(hero);

    // Create About
    const about = document.createElement('section');
    about.id = 'about';

    const aboutHeading = document.createElement('h2');
    aboutHeading.textContent = 'About Us';

    const aboutPara = document.createElement('p');
    aboutPara.textContent = 'La Maison brings the finest French culinary traditions to your table. Our chef-driven menu features classic dishes prepared with modern techniques and locally-sourced ingredients.'

    about.appendChild(aboutHeading);
    about.appendChild(aboutPara);

    content.appendChild(about);

    // Create Menu

    const menu = document.createElement('section');
    menu.id = 'menu';

    const menuHeading = document.createElement('h2');
    menuHeading.textContent = 'Our Menu';

    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-section');

        // Menu Item 1

        const menuItem1 = document.createElement('div');
        menuItem1.classList.add('menu-item');

        const menuItem1Heading = document.createElement('h3');
        menuItem1Heading.textContent = 'Coq au vin';

        const menuItem1Para = document.createElement('p');
        menuItem1Para.textContent = 'Classic braised chicken in red wine sauce with pearl onions and mushrooms';

        const menuItem1Price = document.createElement('p');
        menuItem1Price.classList.add('price');
        menuItem1Price.textContent = '$32';

        menuItem1.appendChild(menuItem1Heading);
        menuItem1.appendChild(menuItem1Para);
        menuItem1.appendChild(menuItem1Price);

        // Menu Item 2
        const menuItem2 = document.createElement('div');
        menuItem2.classList.add('menu-item');

        const menuItem2Heading = document.createElement('h3');
        menuItem2Heading.textContent = 'Bouillabaisse';

        const menuItem2Para = document.createElement('p');
        menuItem2Para.textContent = 'Traditional Provençal fish stew served with rouille and crusty bread';

        const menuItem2Price = document.createElement('p');
        menuItem2Price.classList.add('price');
        menuItem2Price.textContent = '$38';

        menuItem2.appendChild(menuItem2Heading);
        menuItem2.appendChild(menuItem2Para);
        menuItem2.appendChild(menuItem2Price);

        // Menu Item 3
        const menuItem3 = document.createElement('div');
        menuItem3.classList.add('menu-item');

        const menuItem3Heading = document.createElement('h3');
        menuItem3Heading.textContent = 'Beef Bourguignon';

        const menuItem3Para = document.createElement('p');
        menuItem3Para.textContent = 'Tender beef braised in red wine with carrots and mushrooms';

        const menuItem3Price = document.createElement('p');
        menuItem3Price.classList.add('price');
        menuItem3Price.textContent = '$34';

        menuItem3.appendChild(menuItem3Heading);
        menuItem3.appendChild(menuItem3Para);
        menuItem3.appendChild(menuItem3Price);

    menuDiv.appendChild(menuItem1);
    menuDiv.appendChild(menuItem2);
    menuDiv.appendChild(menuItem3);

    menu.appendChild(menuHeading);
    menu.appendChild(menuDiv);

    content.appendChild(menu);

    // Hours
    const hours = document.createElement('hours')
    hours.id = 'hours';

    const hoursHeading = document.createElement('h2');
    hoursHeading.textContent = 'Hours of Operation';

    const hoursDiv = document.createElement('div');
    hoursDiv.classList.add('hours');

    const hoursMonThur = document.createElement('p');
    hoursMonThur.textContent = 'Monday - Thursday: 5:00 PM - 10:00 PM';

    const hoursFriSat = document.createElement('p');
    hoursFriSat.textContent = 'Friday - Saturday: 5:00 PM - 11:00 PM';

    const hoursSun = document.createElement('p');
    hoursSun.textContent = 'Sunday: 4:00 PM - 9:00 PM';

    hoursDiv.appendChild(hoursMonThur);
    hoursDiv.appendChild(hoursFriSat);
    hoursDiv.appendChild(hoursSun);

    hours.appendChild(hoursHeading);
    hours.appendChild(hoursDiv);

    content.appendChild(hours);

    // Contact
    const contact = document.createElement('section');
    contact.id = 'contact';

    const contactHeading = document.createElement('h2');
    contactHeading.textContent = 'Contact Us';

    const contactAddr = document.createElement('p');
    contactAddr.textContent = '123 Main Street';

    const contactPhone = document.createElement('p');
    contactPhone.textContent = 'Phone: (555) 123-4567';

    const contactEmail = document.createElement("p");
    contactEmail.textContent = 'Email: info@lamaison.com';

    contact.appendChild(contactHeading);
    contact.appendChild(contactAddr);
    contact.appendChild(contactPhone);
    contact.appendChild(contactEmail);

    content.appendChild(contact);

    // Footer
    const footer = document.createElement('footer');

    const footerPara = document.createElement('p');
    footerPara.textContent = '&copy; 2024 La Maison. All rights reserved.';

    footer.appendChild(footerPara);

    content.appendChild(footer);
}

export { createWebpage };
