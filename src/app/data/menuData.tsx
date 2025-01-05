export interface MenuItem {
    id: string;
    name: string;
    description: string;
    price: number;
    category: 'starter' | 'main' | 'desert' | 'drink';
  }
  
  export const menuItems: MenuItem[] = [
    // Starter Menu
    { id: 'spring-rolls', name: 'Spring Rolls', description: 'Crispy vegetable spring rolls', price: 5.99, category: 'starter' },
    { id: 'chicken-wings', name: 'Chicken Wings', description: 'Spicy buffalo chicken wings', price: 7.99, category: 'starter' },
    { id: 'garlic-bread', name: 'Garlic Bread', description: 'Toasted bread with garlic butter', price: 4.99, category: 'starter' },
    { id: 'mozzarella-sticks', name: 'Mozzarella Sticks', description: 'Breaded and fried mozzarella cheese', price: 6.99, category: 'starter' },
    { id: 'onion-rings', name: 'Onion Rings', description: 'Crispy battered onion rings', price: 5.99, category: 'starter' },
    // Add 15 more starter items here...
  
    // Main Courses
    { id: 'classic-burger', name: 'Classic Burger', description: 'Beef patty with lettuce, tomato, and cheese', price: 12.99, category: 'main' },
    { id: 'chicken-tikka', name: 'Chicken Tikka', description: 'Grilled marinated chicken pieces', price: 14.99, category: 'main' },
    { id: 'beef-kebab', name: 'Beef Kebab', description: 'Grilled seasoned beef skewers', price: 15.99, category: 'main' },
    { id: 'veggie-burger', name: 'Veggie Burger', description: 'Plant-based patty with fresh veggies', price: 11.99, category: 'main' },
    { id: 'fish-and-chips', name: 'Fish and Chips', description: 'Battered fish with crispy fries', price: 13.99, category: 'main' },
    // Add 15 more main course items here...
  
    // Deserts
    { id: 'chocolate-cake', name: 'Chocolate Cake', description: 'Rich chocolate layer cake', price: 6.99, category: 'desert' },
    { id: 'cheesecake', name: 'Cheesecake', description: 'New York style cheesecake', price: 7.99, category: 'desert' },
    { id: 'ice-cream', name: 'Ice Cream', description: 'Assorted flavors of ice cream', price: 4.99, category: 'desert' },
    { id: 'apple-pie', name: 'Apple Pie', description: 'Warm apple pie with vanilla ice cream', price: 6.99, category: 'desert' },
    { id: 'tiramisu', name: 'Tiramisu', description: 'Classic Italian coffee-flavored dessert', price: 7.99, category: 'desert' },
    // Add 15 more desert items here...
  
    // Drinks
    { id: 'cola', name: 'Cola', description: 'Classic cola drink', price: 2.99, category: 'drink' },
    { id: 'lemonade', name: 'Lemonade', description: 'Freshly squeezed lemonade', price: 3.99, category: 'drink' },
    { id: 'iced-tea', name: 'Iced Tea', description: 'Chilled black tea with lemon', price: 3.49, category: 'drink' },
    { id: 'orange-juice', name: 'Orange Juice', description: 'Freshly squeezed orange juice', price: 4.49, category: 'drink' },
    { id: 'mango-lassi', name: 'Mango Lassi', description: 'Yogurt-based mango drink', price: 4.99, category: 'drink' },
    // Add 15 more drink items here...
  ];
  
  