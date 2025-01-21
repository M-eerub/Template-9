import { MenuItem } from '@/app/type/menu';

export const menuItems: MenuItem[] = [
  // Starter Menu (20 items)
  {
    id: 'crispy-calamari',
    name: 'Crispy Calamari',
    description: 'Tender squid rings lightly coated in seasoned flour and fried until golden, served with zesty marinara sauce and lemon wedges.',
    ingredients: ['Fresh squid', 'Seasoned flour', 'Marinara sauce', 'Lemon', 'Parsley', 'Garlic aioli'],
    calories: 420,
    priceRange: { min: 12, max: 18 },
    image: '/images/calamary.jpeg',
    category: 'starter'
  },
  {
    id: 'bruschetta',
    name: 'Classic Bruschetta',
    description: 'Toasted artisan bread topped with diced tomatoes, fresh basil, garlic, and extra virgin olive oil.',
    ingredients: ['Artisan bread', 'Roma tomatoes', 'Fresh basil', 'Garlic', 'Olive oil', 'Balsamic glaze'],
    calories: 280,
    priceRange: { min: 8, max: 14 },
    image: '/images/download.jpeg',
    category: 'starter'
  },
  {
    id: 'spinach-artichoke-dip',
    name: 'Spinach Artichoke Dip',
    description: 'Creamy blend of spinach, artichokes, and melted cheeses, served with tortilla chips.',
    ingredients: ['Spinach', 'Artichoke hearts', 'Cream cheese', 'Mozzarella', 'Parmesan', 'Garlic', 'Tortilla chips'],
    calories: 520,
    priceRange: { min: 10, max: 16 },
    image: '/images/spinach.jpeg',
    category: 'starter'
  },
  {
    id: 'shrimp-cocktail',
    name: 'Classic Shrimp Cocktail',
    description: 'Chilled jumbo shrimp served with spicy cocktail sauce and fresh lemon.',
    ingredients: ['Jumbo shrimp', 'Cocktail sauce', 'Lemon', 'Fresh herbs', 'Black pepper'],
    calories: 180,
    priceRange: { min: 15, max: 22 },
    image: '/images/shrimpcock.jpeg',
    category: 'starter'
  },
  {
    id: 'buffalo-wings',
    name: 'Buffalo Wings',
    description: 'Crispy chicken wings tossed in spicy buffalo sauce, served with blue cheese dressing and celery.',
    ingredients: ['Chicken wings', 'Buffalo sauce', 'Blue cheese', 'Celery', 'Butter', 'Garlic'],
    calories: 650,
    priceRange: { min: 12, max: 18 },
    image: '/images/buffwing.jpeg',
    category: 'starter'
  },
  {
    id: 'mozzarella-sticks',
    name: 'Mozzarella Sticks',
    description: 'Breaded mozzarella sticks fried until golden, served with marinara sauce.',
    ingredients: ['Mozzarella cheese', 'Breadcrumbs', 'Marinara sauce', 'Italian herbs', 'Garlic powder'],
    calories: 460,
    priceRange: { min: 9, max: 15 },
    image: '/images/mozstick.jpeg',
    category: 'starter'
  },
  {
    id: 'hummus-platter',
    name: 'Mediterranean Hummus Platter',
    description: 'Creamy hummus served with warm pita bread, olives, and fresh vegetables.',
    ingredients: ['Chickpeas', 'Tahini', 'Olive oil', 'Pita bread', 'Mixed vegetables', 'Olives'],
    calories: 420,
    priceRange: { min: 11, max: 17 },
    image: '/images/platter.jpeg',
    category: 'starter'
  },
  {
    id: 'coconut-shrimp',
    name: 'Coconut Shrimp',
    description: 'Butterflied shrimp coated in coconut breading, fried golden brown, served with sweet chili sauce.',
    ingredients: ['Shrimp', 'Coconut', 'Panko breadcrumbs', 'Sweet chili sauce', 'Lime'],
    calories: 380,
    priceRange: { min: 13, max: 19 },
    image: '/images/cocoshripms.jpeg',
    category: 'starter'
  },
  {
    id: 'stuffed-mushrooms',
    name: 'Stuffed Mushrooms',
    description: 'Button mushrooms filled with herb-seasoned breadcrumbs and Italian sausage.',
    ingredients: ['Mushrooms', 'Italian sausage', 'Breadcrumbs', 'Parmesan', 'Herbs', 'Garlic'],
    calories: 340,
    priceRange: { min: 10, max: 16 },
    image: '/images/stuffmush.jpeg',
    category: 'starter'
  },
  {
    id: 'nachos',
    name: 'Loaded Nachos',
    description: 'Tortilla chips topped with melted cheese, beans, jalapeños, and all the fixings.',
    ingredients: ['Tortilla chips', 'Cheese', 'Beans', 'Jalapeños', 'Sour cream', 'Guacamole', 'Salsa'],
    calories: 820,
    priceRange: { min: 12, max: 18 },
    image: '/images/nachos.jpeg',
    category: 'starter'
  },
  {
    id: 'spring-rolls',
    name: 'Vegetable Spring Rolls',
    description: 'Crispy spring rolls filled with vegetables, served with sweet chili sauce.',
    ingredients: ['Mixed vegetables', 'Spring roll wrappers', 'Sweet chili sauce', 'Carrots', 'Cabbage'],
    calories: 280,
    priceRange: { min: 8, max: 14 },
    image: '/images/springroll.jpeg',
    category: 'starter'
  },
  {
    id: 'crab-cakes',
    name: 'Mini Crab Cakes',
    description: 'Pan-seared lump crab cakes served with remoulade sauce.',
    ingredients: ['Lump crab meat', 'Breadcrumbs', 'Mayo', 'Dijon mustard', 'Old Bay seasoning'],
    calories: 380,
    priceRange: { min: 15, max: 22 },
    image: '/images/crabcack.jpeg',
    category: 'starter'
  },
  {
    id: 'onion-rings',
    name: 'Beer Battered Onion Rings',
    description: 'Thick-cut onion rings in beer batter, fried until crispy.',
    ingredients: ['Sweet onions', 'Beer batter', 'Seasoning', 'Ranch dressing'],
    calories: 440,
    priceRange: { min: 8, max: 14 },
    image: '/images/battonion.jpeg',
    category: 'starter'
  },
  {
    id: 'garlic-bread',
    name: 'Cheesy Garlic Bread',
    description: 'Toasted French bread with garlic butter and melted mozzarella.',
    ingredients: ['French bread', 'Garlic butter', 'Mozzarella', 'Parsley', 'Italian seasoning'],
    calories: 380,
    priceRange: { min: 7, max: 13 },
    image: '/images/cheesebread.jpeg',
    category: 'starter'
  },
  {
    id: 'potato-skins',
    name: 'Loaded Potato Skins',
    description: 'Crispy potato skins topped with cheese, bacon, and green onions.',
    ingredients: ['Potatoes', 'Cheddar cheese', 'Bacon', 'Green onions', 'Sour cream'],
    calories: 520,
    priceRange: { min: 9, max: 15 },
    image: '/images/load.jpeg',
    category: 'starter'
  },
  {
    id: 'chicken-satay',
    name: 'Chicken Satay',
    description: 'Grilled marinated chicken skewers served with peanut sauce.',
    ingredients: ['Chicken breast', 'Thai spices', 'Peanut sauce', 'Cucumber relish'],
    calories: 310,
    priceRange: { min: 11, max: 17 },
    image: '/images/salmon.jpeg',
    category: 'starter'
  },
  {
    id: 'quesadilla',
    name: 'Cheese Quesadilla',
    description: 'Grilled flour tortilla filled with melted cheese and served with salsa.',
    ingredients: ['Flour tortilla', 'Mixed cheese', 'Salsa', 'Sour cream', 'Guacamole'],
    calories: 460,
    priceRange: { min: 9, max: 15 },
    image: '/images/cheeseques.jpeg',
    category: 'starter'
  },
  {
    id: 'soup-day',
    name: 'Soup of the Day',
    description: 'Fresh made soup that changes daily, served with crackers.',
    ingredients: ['Daily fresh ingredients', 'House-made stock', 'Herbs', 'Crackers'],
    calories: 280,
    priceRange: { min: 6, max: 12 },
    image: '/images/day.jpeg',
    category: 'starter'
  },
  {
    id: 'brussel-sprouts',
    name: 'Crispy Brussels Sprouts',
    description: 'Fried brussels sprouts tossed with balsamic glaze and parmesan.',
    ingredients: ['Brussels sprouts', 'Balsamic glaze', 'Parmesan', 'Pine nuts'],
    calories: 260,
    priceRange: { min: 9, max: 15 },
    image: '/images/roasted.jpeg',
    category: 'starter'
  },
  {
    id: 'antipasto',
    name: 'Antipasto Platter',
    description: 'Selection of Italian meats, cheeses, and marinated vegetables.',
    ingredients: ['Cured meats', 'Italian cheeses', 'Olives', 'Marinated vegetables', 'Crackers'],
    calories: 580,
    priceRange: { min: 16, max: 24 },
    image: '/images/anti.jpeg',
    category: 'starter'
  },

  // Main Courses (20 items)
  {
    id: 'ribeye-steak',
    name: 'Ribeye Steak',
    description: 'Grilled 12oz ribeye steak with herb butter and roasted vegetables.',
    ingredients: ['Ribeye steak', 'Herb butter', 'Roasted vegetables', 'Garlic mashed potatoes'],
    calories: 850,
    priceRange: { min: 32, max: 45 },
    image: '/images/steak.jpeg',
    category: 'main'
  },
  {
    id: 'salmon-fillet',
    name: 'Grilled Salmon',
    description: 'Fresh Atlantic salmon with lemon butter sauce and asparagus.',
    ingredients: ['Atlantic salmon', 'Lemon butter', 'Asparagus', 'Rice pilaf', 'Fresh herbs'],
    calories: 620,
    priceRange: { min: 24, max: 35 },
    image: '/images/salmon.jpeg',
    category: 'main'
  },
  {
    id: 'chicken-marsala',
    name: 'Chicken Marsala',
    description: 'Pan-seared chicken breast in marsala wine sauce with mushrooms.',
    ingredients: ['Chicken breast', 'Marsala wine', 'Mushrooms', 'Garlic', 'Fresh herbs'],
    calories: 580,
    priceRange: { min: 20, max: 28 },
    image: '/images/chicksatay.jpeg',
    category: 'main'
  },
  {
    id: 'pasta-alfredo',
    name: 'Fettuccine Alfredo',
    description: 'Fettuccine pasta in creamy parmesan sauce with grilled chicken.',
    ingredients: ['Fettuccine', 'Heavy cream', 'Parmesan', 'Grilled chicken', 'Garlic'],
    calories: 920,
    priceRange: { min: 18, max: 26 },
    image: '/beef.jpeg',
    category: 'main'
  },
  {
    id: 'beef-burger',
    name: 'Classic Beef Burger',
    description: 'Half-pound Angus beef burger with all the fixings on a brioche bun.',
    ingredients: ['Angus beef', 'Brioche bun', 'Lettuce', 'Tomato', 'Onion', 'Cheese'],
    calories: 780,
    priceRange: { min: 15, max: 22 },
    image: '/pasta.jpeg',
    category: 'main'
  },
  // ... Continue with 15 more main course items

  // Desserts (20 items)
  {
    id: 'chocolate-cake',
    name: 'Triple Chocolate Cake',
    description: 'Rich chocolate layer cake with chocolate ganache and chocolate shavings.',
    ingredients: ['Dark chocolate', 'Cocoa powder', 'Heavy cream', 'Butter', 'Vanilla'],
    calories: 580,
    priceRange: { min: 8, max: 14 },
    image: '/choco.jpeg',
    category: 'desert'
  },
  // ... Continue with 19 more dessert items

  // Drinks (20 items)
  {
    id: 'classic-margarita',
    name: 'Classic Margarita',
    description: 'Premium tequila, fresh lime juice, and triple sec, served on the rocks.',
    ingredients: ['Tequila', 'Triple sec', 'Lime juice', 'Salt rim'],
    calories: 220,
    priceRange: { min: 9, max: 15 },
    image: '/mar.jpeg',
    category: 'drink'
  },
  // ... Continue with 19 more drink items
];

