const fs = require('fs');

const rawMenuData = {
  "Juice & Mocktails": [
    "Pineapple Juice", "Black Grapes Juice", "Green Grapes & Kiwi Juice", "Orange, Mosambi & Pineapple Juice", 
    "Falsa & Watermelon Juice", "Mixed Fruit Cocktail", "Red Jamfal", "Orange Juice", "Mosambi Juice", 
    "Kiwi Margherita", "Palak Shorba", "Kiwi", "Coconut & Litchi", "Strawberry", "Pina Colada", 
    "Blue Lagoon", "Ginger & Mint", "Lemon", "Orange Tarana", "Pineapple & Khus", "Black Grapes", "Fruit Punch"
  ],
  "Soups": [
    "Tomato Soup", "Mexican Tortilla Soup", "Tomato Coriander Soup", "Coconut Shorba", "Celery Almond", 
    "Tomato Orange Carrot", "Bouillabaisse French Soup", "Lettuce Almond Soup", "Spinach Cheese Corn Soup", 
    "Celery Sweet Corn Soup", "Spinach Baby Corn Soup", "Vegetable Chowder Soup", "Pumpkin Corn Almond Soup", 
    "Herb Mungdal", "Veg Clear Soup", "Tom Yam Soup", "Mix Veg Chimney Soup", "Laal Tomato Dhaniya Shorba", 
    "Fresh Onion Garlic Soup", "Cream of Tomato Soup", "Cheese Corn Tomato Soup", "Italian Tomato Soup", 
    "Tomato Orange Soup", "Sweet Corn Vegetable Soup", "Broccoli Almond Soup", "Hot n Sour Soup", 
    "Minestrone Soup", "Veg Manchaw Soup", "Lemon Coriander Soup", "Carrot Digli Soup", "Coconut Coriander Soup", 
    "Veg Italian Herb Soup", "Corn Chowder Soup", "Mexican Chilli Beans Soup", "Tomato Cappuccino Soup", 
    "Spinach Parsaly Cappuccino Soup", "Green Peas Mint Soup", "Tom Khaji Soup", "Potato Leek Soup", 
    "Khau Shey Soup", "Multani Soup", "Pumpkin Soup", "Roasted Tomato bell Peper Soup", 
    "Pumpkin Corn Roasted Bell Pepper Soup", "Potato Cheese Corn Chowder Soup", "Italian Peas Basil Spinach Onion Soup", 
    "Winter Herb Soup", "Red Laska Soup", "Sweet Potato Peanut Soup", "Corn Carrot Onion Apple Soup"
  ],
  "Starters": [
    "Green Tikki", "Corn Capsicum Tikki", "Ponk Tikki", "Cheese Paneer Balls", "Peanut Palak Coriander Bhakharvadi", 
    "Cheese Green Onion Bhakharvadi", "Coin Pizza", "Chaat Basket", "Corn Basket", "Mexican Basket", "Pizza Basket", 
    "Mexican Tacos", "Vegetable Gold Coin", "Cheese Paneer Garlic Stew", "Chinese Stew", "Cheese Chili Wonton", 
    "Mexican Quesadilla", "American Volvo", "Vegetable Fritters", "Chinese Frankie", "Vegetable Frankie", 
    "Potato Rosti", "Vietnamese Roll", "Paneer Cheese & Grapes Croquet", "Cajun Spicy Cottage Cheese", 
    "Shawarna Paneer Wraps on Tawa", "Potato Rosti with Mexican Fried Beans", "Spanish Rosti", 
    "Potato Corn Water Chestnut Cakes", "Cheese Corn Water Chestnut Balls", "Cheese Chili Pesto Toast", 
    "Cheese Chili Apple Toast", "Hugarian Potatoes", "Macaroni Cheese Balls in Pomodoro Sauce", 
    "Paneer Tikka in Pita Pocket", "Paneer Shashlik with Bell Pepers", "Fragrant Thai Cottage Cheese", 
    "Thai Lettuce Wraps", "Morocco Shawarma in Pita", "Thai Potato Cake", "Barbequed Paneer - Teppanyaki", 
    "Mini Masala Bun with Butter", "Cheese Fondue", "Cheese Capsicum Croissant", "Stuffed Dinner Roll", 
    "Falafel Sandwich", "Panini", "Bruschetta", "Hara bhara kabab", "Veg cheese potato balls", 
    "Malesian paneer satey", "Papad paneer kabab", "Bread Nest", "Mexican indian Volvo", "Green Bhel", 
    "Mexican volvo chat", "Potato Chaat", "Cheese paneer potli", "Shambo shake", "Dahi kabab", 
    "Green lolypop", "Green bhajiya", "Chinese cigar", "Mexican tikki", "Dal wada", "Dragon paneer", 
    "Spinach corn stick", "Tandoori veg nuggets", "Focasia sandwitch", "Veg koliwada", "Jalapino cheese ball", 
    "Veg cheese empiladas", "Veg frotan balls", "Green peas galauti kabab", "Makai Masti", "Veg sesame roll", 
    "Bread cheese roll", "Mexican tostadas", "Green Panini", "Grill sandwitch", "Cheese garlic bread"
  ],
  "Chaat & Cold Counters": [
    "Kalkatti Pan Chaat", "Nim Patta Chaat", "Navratna Rajbhog Chaat", "Sendwich Dahi Bhalla Chaat", 
    "Fresh Fruit Papadi Chaat", "Jhansi ka Khasta Karela", "Tadke ka Dahi Bhalla Chaat", "Papdi Chat", 
    "Aloo Tikki Chaat", "Chhole Samosa", "Bombey Tawa Tikka Pav", "Modi Nagar ki Tikki", "Lachchha Chaat", 
    "Paththarwali Chaat", "Navratna Tikki Chaat", "Bread Mutter Chaat", "Jaipuri Chilla", "Tikki with Ragada", 
    "Tikki with Chhole", "Dhokla Chaat", "Imarti Chaat", "Paneer Chilla", "Pani Puri", "Ghebar Chaat"
  ],
  "Back Dish": [
    "Pineappel Macaroni", "Cannelloni", "Mexican", "Italian", "Thai", "Lasagna", "Enchiladas", "Vegetable Florentine", "Bake Tray"
  ],
  "World Vision - Live Counters": [
    "Chinese Bhel", "Paneer Chii Fry", "Dry Manchurian", "Fried Rice Manchurian", "Vegetable Noodles", 
    "Hakka noodles", "Manchurian gravy", "Fried rice", "Paneer with schezwan", "Veg crispy", 
    "Paneer chilli dry with Manchurian", "Honey chilli potato", "Potato plum sauce", "Americam chopsuey", 
    "Chowmin", "Ginger garlic noodles", "Idli takatak", "Mangolian star fried", "Manchurian fried rice", 
    "Crispy corn salt pepper", "Chinese sizzler", "Italian pasta 3 type", "Revoli pasta with Garlic Bread", 
    "Cheese potato roasti", "Spinach roasti", "Potato dumpling", "Rulade", "Italian sizzler", "Spagati Olio oli", 
    "Thin crust pizza", "Italian pizza", "Papper Thin Pizza", "Paneer Tikka Pizza", "Sesly Pizza", 
    "Brocoli Reaby Loaf", "Apricoat Loaf", "Potato Chili Fry", "Honey Potato Chili", "Makhani Surprice Fondue", 
    "Bhaji Pav Fondue", "Cheese Fondue", "Brocoli Risotto", "Italian Sizzler", "Paneer Stroganoff Sizzler", "Recle",
    "Miso Soup", "Manchurian noodles", "Cucumber Sushi", "Spring Roll", "Avocado Sushi", "Salmon Sushi", 
    "Passion Sushi", "Bambo Spicey Sushi", "Franchia Roll", "Teppanyaki", "Ba Ta Ko", "Teppan Airlick Rice", 
    "Vegetable Tempura", "Celamon Salad", "Marinted Cucumber & Corn", "Japnese Vegetable Curry", 
    "Miso Noodles with Vegetable", "Steamed Rice", "Assorted Sushi", "Hoso Maki Sushi", "Ura Maki Sushi", 
    "Nigiri Sushi", "Japnese Bean Curd", "Paneer lachani", "Pita Sandwith", "Hungerian wrap", "Falafel", 
    "Paneer wrap", "Baba Ghanoush", "Vegetable wrap", "Humus", "Bread Basket", "Lebanese Stir-Fry", 
    "Potato Leak Soup", "Seasme Ginger Soup", "Green Serock Soup", "Falafal / Lavas", "Thai Flat Noodles Or Rice", 
    "Assorted Saute Vegetable", "Paneer tikka with pita", "Paneer sorrma", "Thai Rice", "Thai Curry", 
    "Thai Spring Roll", "Thai Crispy Vegetable", "Thai Noodles", "Thai Salad", "Thai Sizzler", "Thai Stir-Fry", 
    "Thai Pancake with Satay Sauce", "Thai Red Curry", "Thai Green Curry", "Thai Yellow Curry", "Thai Masaman Curry", 
    "Thai Khause Curry", "Thai Corn Ball", "Thai Corn Tikki with Almond", "Thai Flat noodles", "Basil Rice", 
    "Thai corn Wrap", "Laab Moo with Sticky Rice", "Thai Rapmul Rice", "Samrab Rice with Veg Curry", "Som Tom veg Ratnaa",
    "Mexican Rellenos", "Mexican Bhel", "Mexican Salad", "Mexican Tacos", "Nachos with Corn Chips", 
    "Mexican Curry", "Mexican Corn Rice", "Mexican Enchiladas", "Mexican Quesadilla", "Mexican Tikki", 
    "Mexican Barbeque", "Mexican Sizzler", "Mexican basket", "Mexican rice with tit bit", "Mexican tostadas",
    "Idli", "Sambhar", "Madrasi Chutney", "Tomato Chutney", "Jodhpuri Dosa", "Three Layered Dosa", "Medu Vada", 
    "Vegetable Uttapam", "Rasam", "Kanjipuram Paniyaram Idli", "Amli Rice", "Appam", "Vegetable Stew", 
    "Molaga Podi Powder", "Idli Chili Fry", "African Barbeque", "Lahori Paneer Tikka", "Afgani Barbequ", 
    "Kalmai Potato Kebabe", "Stuff Mushroom Tikk", "Veg Multani Tikkaa", "Paneer Achari Tikk", "Aloo Ki Nazakat Tikkaa", 
    "Fool Ka Tikk", "Kangoro Paneer Sekwarea", "Sofiyani paneer tikka", "Basil paneer tikka", "Paneer Momo", 
    "Cheese Momo", "Veg Momo", "Toffu Momo", "Tofu Paneer Momo"
  ],
  "Regional Indian Counters": [
    "Sarson da Saag", "Makki di Roti", "Gud - Ghee - Makhan - Onion", "Garlic Chutney", "Butter Milk", 
    "Churma", "Dal Baati", "Gatta nu Shaak", "Masala Baati", "Panchkutti Shaak", "Medeen Vegetable", 
    "Mirchi Vada", "Dahi Vada", "Pyaaz Kachori", "Masala Khichiya", "Gavarfari nu Shaak", "Dahi Bhindi nu Shaak", 
    "Bharel Tinshi", "Bharel Bhinda", "Amritsari Chhole", "Kulcha", "Raita - Achar", "Pyaaz - Limbu", 
    "Bengan Bhartha", "Bajre Ka Rotla", "Sev Tameta nu Shak", "Paratha", "Kathiyawadi Kadhi", "Kathiyawadi Khichdi", 
    "Lili Dungri", "Lasan ni Chutney"
  ],
  "Farsan": [
    "Tirangi Patties", "Lilva na Ghughra", "Ratalu Maska Patties", "Ratalu Puri", "Lila Chana ni Tikki", 
    "Aloo Matar Mint Envelope", "Corn Paneer Ghughra", "Spring Roll", "Green Kabab", "Bhel Sanjori", 
    "Vegetable Burmese Roll", "Lili Hardar nu Shaak", "Dosa Balls", "Methi Vadi nu Shaak", "Papad Methi nu Shaak", 
    "Corn Palak Paneer Roll with Herb Sauce", "Rajasthani Bataki", "Chinese Cigar", "Lilva Corn", "Kadhi", 
    "Idli Bonda", "Mung Dal ni Tikki", "Khasta Kachori", "Green Sanjori", "Ravioli Pasta with Tar Tar Sauce", 
    "Vegetable Florentine Roll with Herb Sauce", "Chimichanga", "Sorwoll Dosa", "Corn Cutlets with Corn Sauce", 
    "Fried Cannelloni", "Hungarian Potato", "Corn Paneer Puff with Salsa Sauce", "Chinese Dumpling with Sauce", 
    "Patra", "Khandvi", "Sev Khamani", "Chola Dal - Methi ni Bhaji na Dhokla", "Cake Dhokla", "Marivala Dhokla", 
    "Corn Vegetable Handvo", "Puran Poli", "Ratalu Matar Handvo", "Hot Magas", "Dahi Gunja", "Khajur Anjir Vedhmi", 
    "Bengali Dahivada", "Apple Jalebi", "Mayur Bhajiya", "Sev Roll", "Corn Samosa", "Navtad Samosa", 
    "Lilwa Kachori", "Live Dhokala"
  ],
  "Sweets": [
    "Pista Lange", "Strawberry Sandesh", "Mango Sandwich", "Kaju Pista Sandwich", "Chocolate Tart", 
    "Kaju Walnut Bolls", "Kaju Pineapple Tawa Puri", "Assorted Chocolate", "Sitafal Basundi", "Orange Basundi", 
    "Srawberry Basundi", "Green Anjir Basundi", "Indrani Basundi", "Apple Channapai", "Pista Coated Basundi", 
    "Sutterfeni Basundi", "Walnut Anjir Basundi", "Cadbury Basundi", "Kiwi Basundi", "Mango Cream", 
    "Litchi Rabdi", "Pina Orange Rasmalai", "Srawberry Rasmalai", "Fruit Rasmalai", "Kiwi Plaza", 
    "Srawberry Plaza", "Sitafal Plaza", "Mix Dry Fruit Halwa", "Shahi Halwa", "Kaju Akhrot Halwa", 
    "Dal Badam Halwa", "Pista Kambal", "Bundi Channapai", "Kaju Akhrot Kalakand", "Kaju Coconut Halwa", 
    "Mung Dal Halwa", "Malpua with Rabdi", "Dal Badam Baked Halwa", "Jalebi with Rabdi", "Almond Pizza", 
    "Rajwadi Thal", "Mava Kachori with Rabdi", "Mini Ghebar with Rabdi", "Kaju Bundi with Rabdi", 
    "Pista Samosa", "Imarti with Rabdi", "Sona Rash", "Tawa Sizzler Sweets", "Tawa Sizzler Halwas", 
    "Baklava", "Suffed Gulab Jamun", "Chandni Bahar", "Malpua", "Stuffed Gulab Jamun", "Kesar Jalebi", 
    "Mava Kachori", "Imarti", "Khajur Anjir Pancake", "Garam Bundi with Gulab Jamun", "Dryfruit Shrikhand", 
    "Mango Shrikhand", "Fruit Shrikhand", "Pista Shrikhand", "Dudhpak", "Carrot Almond Kheer", "Dudhi Pista Kheer", 
    "Almond Payasam", "Pahadi Kheer", "Caremle Carnival", "Madhumati Malti", "Red Velvet", "Litchi Blosme", 
    "Dryfruit Tawa Halwa", "Mango Plaza", "Baked Badam Roti", "Kalkatti Pan Rasmalai", "Ghever Rabdi", 
    "Anjir Akhrot Halwa", "Kaju Kasatta", "Gulab Jamun", "Kala Jam", "Kesar Pista Rasmalai", "Pina Orange", 
    "Walnut Pudding", "Kaju Khoya", "Angoori Basundi", "Panchrtna Halwa", "Mini Ghebar", "American Cruise", 
    "Pina Cruise", "Dryfruit Baked Halwa", "Ras Madhuri", "Baked Badam Kesar Jalwa", "Moongdal Halwa", 
    "Khajur Hot Basket Rasgulla", "Dal Badam Kesar Halwa", "Butter Scoch Badam Roti", "Ro Coconut Halwa", 
    "Stuff Malpuva", "Kesariya Kadhai Milk"
  ],
  "Vegetables": [
    "Paneer Indichini methi masala", "Paneer Avadhi", "Paneer Amritsari", "Paneer Khawalia", "Paneer Chaman", 
    "Paneer Steek Makhani", "Paneer Gujara", "Veg Belayati", "Veg Banjara", "Veg Tarkari", "Ludhaniya Kofta", 
    "Paneer Patiyala", "Paneer Lajavab", "Balti Paneer", "Mughlai Paneer", "Paneer Bhurji", "Malai Chamaniya Kofta", 
    "Paneer Capsicum", "Methi Malai Matar Paneer", "Corn Capsicum Paneer", "Paneer Baby Corn", "Vegetable Kadai", 
    "Molded Potato", "Malai Kofta", "Punjabi Chhole", "Corn Capsicum Bataki", "Tawa Sabji", "Dum Aloo", 
    "Vegetable Assorted", "Green Vegetable Rezala", "Undhiya", "Surti Masala Undhiya", "Mix Dana", 
    "Papdi Dana Muthiya", "Lilva Ratalu", "Dana Bataki", "Bharela Parver", "Panchratna Karela", "Turiya Patra Vatana", 
    "Fansi Makai Vatana", "Mix Tawa Sabji", "Stuffed Bhindi with Capsicum Tomato", "Cauliflower with Capsicum Tomato", 
    "Curd Potato", "Goan Potato", "Hyderabadi Potato", "Shorbaaji Potato", "Green Sukhi Bhaji", "Rajasthani Bataki", 
    "Bataka nu Rasavalu Shaak", "Veg Hydrabadi", "Veg Makhanwala", "Tawa Mehfil", "Green Undhiyu", "Red Undhiyu"
  ],
  "Indian Breads": [
    "Puri", "Masala Puri", "Bedegar Puri", "Fulka Roti", "Be-Pad Roti", "Rumali Roti", "Missi Roti", 
    "Baajri na Rotla", "Methi na Thepla", "Bhakhri", "Biscuit Bhakhri", "Stuffed Paratha", "Chinese Paratha", 
    "Pudina Paratha", "Cheese Paneer Paratha", "Vegetable Paratha", "Lachchha Paratha", "Pudina Naan", 
    "Stuffed Naan", "Khandari Naan", "Tandoori Roti", "Baby Butter Naan", "Amritsari Kulcha", "Cheese & Paneer Kulcha"
  ],
  "Dal & Rice": [
    "Dal tadka", "Dal makhani", "Dal panchkoti", "Dal fried", "Dal palak", "Dal Bukhara", "Dal pahadi", 
    "Gujarati Dal", "Hyderabadi Dal", "Rajasthani Dal", "Mughlai Dal", "Dhan Shak Dal", "Thai Curry", 
    "Thai Rice", "Mexican Curry", "Mexican Rice", "Coconut Curry", "Steamed Rice", "Maharashtrian Curry", 
    "Maharashtrian Pulao", "Masala Pulao", "Tirangi Pulao", "Veg Pulao", "Green Peas Pulao", "Gatta no Pulao", 
    "Biryani", "Hydrabadi Biryani", "Taj Laving Rice", "Damfuk Biryani", "Jeera Rice", "Mint Lemon Rice", 
    "Brown Rice", "Bamboo Rice", "Gujarati Kadhi", "Rajasthani Kadhi", "Dabka Kadhi", "Onion Tomato Kadhi", 
    "Palak Kadhi", "Bhindi Kadhi", "Fajeto"
  ],
  "Accompaniments": [
    "Red Chutney", "Green Chutney", "Tomato Chutney", "Mint Chutney", "Tomato Ketchup", "Cucumber Raita", 
    "Veg Raita", "Pineapple Raita", "Mix Fruit Raita", "Bundi Raita", "Carrot Raita", "Khajur Palak Raita", 
    "Alvi Raita", "Raiwala Marcha", "Tindoda Methiya", "Green Grapes Methiya", "Fried Papad", "Roasted Papad", 
    "Disco Papad", "Masala Papad", "Bikaneri Papad Double Mari", "Sarevada", "Mix Fryums", "Mathiya", 
    "Wafers", "Gavar Sing", "Soneri Bhindi", "Fresh Dressing Salad", "Thai Salad", "Mexican Salad", 
    "Green Tray with Dip", "Corn Burnt Salad", "Ponk Capsicum Singoda Salad", "Fruit Bolar Salad", 
    "Cheese Apricot Salad", "Green Tray with Salad", "Smoky Aloo Salad", "Ponk Capsicum Salad", 
    "Lentin Burger Salad", "Carrot Date Salad", "Florida Salad", "Orange Apricot Salad", "Pina Apricot Salad", 
    "Srilankan Salad", "Russian Salad", "Kiwi Apricot Salad", "Waldorf Salad", "Fresh Orange Dressing Salad", 
    "Fruit Boiled Salad with Dip", "Italian Raita", "Green Grape Kivimold Salad", "American Gerkin Salad", 
    "Russian and Peas Salad", "Mexican Raita", "Kachi Keri Methiya", "Kachi Keri Sweet Achar", "Mix Panjabi Achar", 
    "Keri Chhundo", "Red Golden Chili", "Green Golden Chili", "Bengali Achar", "Lemon Mayonnaise", 
    "Mustard Mayonnaise", "Cheese Mayonnaise", "Thousand Island", "Garlic Mayonnaise", "Salsa Sauce", 
    "Avocado", "Sour Cream", "Mint Dip", "Tandoori Dip", "Honey Dressing", "Corn Pasta Salad", "Veg Crunchy Salad", 
    "Greek Monsa Salad", "Green Garden Kitchen Salad", "Spanich Colina Salad", "Creamy Cucumber Salad", 
    "Smokey Potato With Paneer Salad", "Tokye Kimchi Salad", "365 Days Green Garden Healthy Salad", 
    "Apricoat Polanta Salad", "Real House Salad", "Rambow Salad", "Som Tom Salad", "Pan Counter", "Pan Bida", "Lili Variyali"
  ],
  "Desserts": [
    "Ice-Cream (Shankar/Jaysing/Havmor)", "Vanila Ice-Cream with Hot Chocolate Sauce", "Kulfi (Anando/Asarfi)", 
    "Pudding", "Hot Brownie", "Khajur Pancake with Vanilla", "Fruits (Local & Imported)", "Mukhvas (Dry)", 
    "Sweet Pan", "Masala Kharek", "Pan Shots"
  ]
};

const allMenuProductsWithGoogleLinks = Object.entries(rawMenuData).flatMap(([category, items]) => {
  return items.map((itemName) => {
    
    // Formatting the name for URL links
    const productSlug = itemName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');

    // By dynamically using Unsplash source API and passing descriptive tags, 
    // the browser will automatically fetch high-quality placeholder images of the dishes!
    const searchTags = "indian,food," + encodeURIComponent(itemName.replace(/\\s+/g, ','));

    return {
      name: itemName,
      category: category,
      link: "/menu/" + productSlug,
      // Generates an auto-resolving image placeholder (loremflickr routes directly to beautiful Unsplash photos)
      googleImageUrl: "https://loremflickr.com/600/400/" + searchTags
    };
  });
});

const exportContent = "export const rawMenuData = " + JSON.stringify(rawMenuData, null, 2) + ";\n\n" +
"export const allMenuProductsWithGoogleLinks = " + JSON.stringify(allMenuProductsWithGoogleLinks, null, 2) + ";\n";

fs.writeFileSync('src/utils/menuData.ts', exportContent);
console.log('Successfully generated menuData.ts with dynamic image URLs!');
