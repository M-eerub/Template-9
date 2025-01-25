import { MenuItem } from '@/app/type/menu';

export const menuItems: MenuItem[] = [
  // Starter Menu (20 items)
  {
    id: 'arrabiata-pasta',
    name: 'Arrabiata-pasta',
    description: 'Tender squid rings lightly coated in seasoned flour and fried until golden, served with zesty marinara sauce and lemon wedges.',
    ingredients: ['Fresh squid', 'Seasoned flour', 'Marinara sauce', 'Lemon', 'Parsley', 'Garlic aioli'],
    calories: 420,
    priceRange: { min: 12, max: 18 },
    image: '/aqsa/starter menu/arrabiata-pasta.jpg',
    category: 'starter'
  },
  {
    id: 'chapli-kabab',
    name: 'Chapli-kabab-bread-cutlets',
    description: 'Toasted artisan bread topped with diced tomatoes, fresh basil, garlic, and extra virgin olive oil.',
    ingredients: ['Artisan bread', 'Roma tomatoes', 'Fresh basil', 'Garlic', 'Olive oil', 'Balsamic glaze'],
    calories: 280,
    priceRange: { min: 8, max: 14 },
    image: '/aqsa/starter menu/chapli-kabab-bread-cutlets.jpg',
    category: 'starter'
  },
  {
    id: 'Cheesy grilled',
    name: 'Cheesy-grilled-pepperoni-sandwich',
    description: 'Creamy blend of spinach, artichokes, and melted cheeses, served with tortilla chips.',
    ingredients: ['Spinach', 'Artichoke hearts', 'Cream cheese', 'Mozzarella', 'Parmesan', 'Garlic', 'Tortilla chips'],
    calories: 520,
    priceRange: { min: 10, max: 16 },
    image: '/aqsa/starter menu/cheesy-grilled-pepperoni-sandwich.jpg',
    category: 'starter'
  },
  {
    id: 'chicken-nuggets',
    name: 'Chicken-nuggets',
    description: 'Chilled jumbo shrimp served with spicy cocktail sauce and fresh lemon.',
    ingredients: ['Jumbo shrimp', 'Cocktail sauce', 'Lemon', 'Fresh herbs', 'Black pepper'],
    calories: 180,
    priceRange: { min: 15, max: 22 },
    image: '/aqsa/starter menu/chicken-nuggets.jpg',
    category: 'starter'
  },
  {
    id: 'chipotle-chicken-sandwich',
    name: 'Chipotle-chicken-sandwich',
    description: 'Crispy chicken wings tossed in spicy buffalo sauce, served with blue cheese dressing and celery.',
    ingredients: ['Chicken wings', 'Buffalo sauce', 'Blue cheese', 'Celery', 'Butter', 'Garlic'],
    calories: 650,
    priceRange: { min: 12, max: 18 },
    image: '/aqsa/starter menu/chipotle-chicken-sandwich.jpg',
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
    id: 'crispy_fried_chicken',
    name: 'Crispy_fried_chicken',
    description: 'Creamy hummus served with warm pita bread, olives, and fresh vegetables.',
    ingredients: ['Chickpeas', 'Tahini', 'Olive oil', 'Pita bread', 'Mixed vegetables', 'Olives'],
    calories: 420,
    priceRange: { min: 11, max: 17 },
    image: '/aqsa/starter menu/crispy_fried_chicken.jpg',
    category: 'starter'
  },
  {
    id: 'Crispy-Bread-Cones',
    name: 'Crispy-Bread-Cones',
    description: 'Butterflied shrimp coated in coconut breading, fried golden brown, served with sweet chili sauce.',
    ingredients: ['Shrimp', 'Coconut', 'Panko breadcrumbs', 'Sweet chili sauce', 'Lime'],
    calories: 380,
    priceRange: { min: 13, max: 19 },
    image: '/aqsa/starter menu/Crispy-Bread-Cones.jpg',
    category: 'starter'
  },
  {
    id: 'crispy-fish-nuggets',
    name: 'Crispy-fish-nuggets',
    description: 'Button mushrooms filled with herb-seasoned breadcrumbs and Italian sausage.',
    ingredients: ['Mushrooms', 'Italian sausage', 'Breadcrumbs', 'Parmesan', 'Herbs', 'Garlic'],
    calories: 340,
    priceRange: { min: 10, max: 16 },
    image: '/aqsa/starter menu/crispy-fish-nuggets.jpg',
    category: 'starter'
  },
  {
    id: 'crispy-fried-chicken-with-arabian-rice',
    name: 'Crispy-fried-chicken-with-arabian-rice',
    description: 'Tortilla chips topped with melted cheese, beans, jalapeños, and all the fixings.',
    ingredients: ['Tortilla chips', 'Cheese', 'Beans', 'Jalapeños', 'Sour cream', 'Guacamole', 'Salsa'],
    calories: 820,
    priceRange: { min: 12, max: 18 },
    image: '/aqsa/starter menu/crispy-fried-chicken-with-arabian-rice.jpg',
    category: 'starter'
  },
  {
    id: 'croquettes-tikka-basket',
    name: 'Croquettes-tikka',
    description: 'Crispy spring rolls filled with vegetables, served with sweet chili sauce.',
    ingredients: ['Mixed vegetables', 'Spring roll wrappers', 'Sweet chili sauce', 'Carrots', 'Cabbage'],
    calories: 280,
    priceRange: { min: 8, max: 14 },
    image: '/aqsa/starter menu/croquettes-tikka-basket.jpg',
    category: 'starter'
  },
  {
    id: 'dynamite-wrap-with-pizza-sticks',
    name: 'Dynamite-wrap-with-pizza-sticks',
    description: 'Pan-seared lump crab cakes served with remoulade sauce.',
    ingredients: ['Lump crab meat', 'Breadcrumbs', 'Mayo', 'Dijon mustard', 'Old Bay seasoning'],
    calories: 380,
    priceRange: { min: 15, max: 22 },
    image: '/aqsa/starter menu/dynamite-wrap-with-pizza-sticks.jpg',
    category: 'starter'
  },
  {
    id: 'fajita_pasta_with_nuggets',
    name: 'Fajita_pasta_with_nuggets',
    description: 'Thick-cut onion rings in beer batter, fried until crispy.',
    ingredients: ['Sweet onions', 'Beer batter', 'Seasoning', 'Ranch dressing'],
    calories: 440,
    priceRange: { min: 8, max: 14 },
    image: '/aqsa/starter menu/fajita_pasta_with_nuggets.jpg',
    category: 'starter'
  },
  {
    id: 'fried-wonton',
    name: 'Fried-wonton',
    description: 'Toasted French bread with garlic butter and melted mozzarella.',
    ingredients: ['French bread', 'Garlic butter', 'Mozzarella', 'Parsley', 'Italian seasoning'],
    calories: 380,
    priceRange: { min: 7, max: 13 },
    image: '/aqsa/starter menu/fried-wonton.jpg',
    category: 'starter'
  },
  {
    id: 'grilled-cheese-patty',
    name: 'Grilled-cheese-patty',
    description: 'Crispy potato skins topped with cheese, bacon, and green onions.',
    ingredients: ['Potatoes', 'Cheddar cheese', 'Bacon', 'Green onions', 'Sour cream'],
    calories: 520,
    priceRange: { min: 9, max: 15 },
    image: '/aqsa/starter menu/grilled-cheese-patty.jpg',
    category: 'starter'
  },
  {
    id: 'korean-style-sausage-sticks',
    name: 'Korean-style-sausage-sticks',
    description: 'Grilled marinated chicken skewers served with peanut sauce.',
    ingredients: ['Chicken breast', 'Thai spices', 'Peanut sauce', 'Cucumber relish'],
    calories: 310,
    priceRange: { min: 11, max: 17 },
    image: '/aqsa/starter menu/korean-style-sausage-sticks.jpg',
    category: 'starter'
  },
  {
    id: 'matka-lasagna',
    name: 'Matka-lasagna',
    description: 'Grilled flour tortilla filled with melted cheese and served with salsa.',
    ingredients: ['Flour tortilla', 'Mixed cheese', 'Salsa', 'Sour cream', 'Guacamole'],
    calories: 460,
    priceRange: { min: 9, max: 15 },
    image: '/aqsa/starter menu/matka-lasagna.jpg',
    category: 'starter'
  },
  {
    id: 'mexican-style-nugget-shawarma',
    name: 'Mexican-style-nugget-shawarma',
    description: 'Fresh made soup that changes daily, served with crackers.',
    ingredients: ['Daily fresh ingredients', 'House-made stock', 'Herbs', 'Crackers'],
    calories: 280,
    priceRange: { min: 6, max: 12 },
    image: '/aqsa/starter menu/mexican-style-nugget-shawarma.jpg',
    category: 'starter'
  },
  {
    id: 'pizza-skewers',
    name: 'Pizza-skewers',
    description: 'Fried brussels sprouts tossed with balsamic glaze and parmesan.',
    ingredients: ['Brussels sprouts', 'Balsamic glaze', 'Parmesan', 'Pine nuts'],
    calories: 260,
    priceRange: { min: 9, max: 15 },
    image: '/aqsa/starter menu/pizza-skewers.jpg',
    category: 'starter'
  },
  {
    id: 'Spicy-Cheese-Balls',
    name: 'Spicy-Cheese-Balls',
    description: 'Selection of Italian meats, cheeses, and marinated vegetables.',
    ingredients: ['Cured meats', 'Italian cheeses', 'Olives', 'Marinated vegetables', 'Crackers'],
    calories: 580,
    priceRange: { min: 16, max: 24 },
    image: '/aqsa/starter menu/Spicy-Cheese-Balls.jpg',
    category: 'starter'
  },

  // Main Courses (20 items)
  {
    id: 'Beef-pulao',
    name: 'Beef-pulao',
    description: 'Grilled 12oz ribeye steak with herb butter and roasted vegetables.',
    ingredients: ['Ribeye steak', 'Herb butter', 'Roasted vegetables', 'Garlic mashed potatoes'],
    calories: 850,
    priceRange: { min: 32, max: 45 },
    image: '/aqsa/main course/Beef-pulao.jpg',
    category: 'main'
  },
  {
    id: 'chapli-Kabab',
    name: 'Chapli-Kabab',
    description: 'Fresh Atlantic salmon with lemon butter sauce and asparagus.',
    ingredients: ['Atlantic salmon', 'Lemon butter', 'Asparagus', 'Rice pilaf', 'Fresh herbs'],
    calories: 620,
    priceRange: { min: 24, max: 35 },
    image: '/aqsa/main course/chapli-Kabab.jpg',
    category: 'main'
  },
  {
    id: 'Chicken-karahi',
    name: 'Chicken-karahi',
    description: 'Pan-seared chicken breast in marsala wine sauce with mushrooms.',
    ingredients: ['Chicken breast', 'Marsala wine', 'Mushrooms', 'Garlic', 'Fresh herbs'],
    calories: 580,
    priceRange: { min: 20, max: 28 },
    image: '/aqsa/main course/Chicken-karahi.jpg',
    category: 'main'
  },
  {
    id: 'fish-fry',
    name: 'Fish-fry',
    description: 'Fettuccine pasta in creamy parmesan sauce with grilled chicken.',
    ingredients: ['Fettuccine', 'Heavy cream', 'Parmesan', 'Grilled chicken', 'Garlic'],
    calories: 920,
    priceRange: { min: 18, max: 26 },
    image: '/aqsa/main course/fish-fry.jpg',
    category: 'main'
  },
  {
    id: 'mutton-karahi',
    name: 'Mutton-karahi',
    description: 'Half-pound Angus beef burger with all the fixings on a brioche bun.',
    ingredients: ['Angus beef', 'Brioche bun', 'Lettuce', 'Tomato', 'Onion', 'Cheese'],
    calories: 780,
    priceRange: { min: 15, max: 22 },
    image: '/aqsa/main course/mutton-karahi.jpg',
    category: 'main'
  },
  // ... Continue with 15 more main course items

  // Desserts (20 items)
  {
    id: 'chocolate-cake',
    name: 'Cupcakes',
    description: 'Rich chocolate layer cake with chocolate ganache and chocolate shavings.',
    ingredients: ['Dark chocolate', 'Cocoa powder', 'Heavy cream', 'Butter', 'Vanilla'],
    calories: 580,
    priceRange: { min: 8, max: 14 },
    image: '/aqsa/desert/cupcakes.jpg',
    category: 'desert'
  },
  // ... Continue with 19 more dessert items

  // Drinks (20 items)
  {
    id: 'cocktail',
    name: 'Cocktail',
    description: 'Premium tequila, fresh lime juice, and triple sec, served on the rocks.',
    ingredients: ['Tequila', 'Triple sec', 'Lime juice', 'Salt rim'],
    calories: 220,
    priceRange: { min: 9, max: 15 },
    image: '/aqsa/drink/Cocktails.jpg',
    category: 'drink'
  },
  // ... Continue with 19 more drink items
];

