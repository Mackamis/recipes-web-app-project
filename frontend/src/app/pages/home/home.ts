import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface RecipeCard {
  name: string;
  description: string;
  time: number;
  category: string;
  imageUrl: string;
}

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  readonly latestRecipes: RecipeCard[] = [
    {
      name: 'Roasted tomato orzo',
      description: 'A cozy one-pan dinner with herbs and a little parmesan.',
      time: 30,
      category: 'Dinner',
      imageUrl: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Lemon herb chickpeas',
      description: 'Bright, comforting, and ready for a generous squeeze of lemon.',
      time: 20,
      category: 'Vegetarian',
      imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Golden apple crumble',
      description: 'Warm cinnamon apples under a crisp, buttery topping.',
      time: 45,
      category: 'Dessert',
      imageUrl: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=800&q=80',
    },
  ];

  readonly popularRecipes: RecipeCard[] = [
    {
      name: 'Creamy Tuscan beans',
      description: 'Silky white beans with greens, garlic, and crusty bread.',
      time: 25,
      category: 'Vegetarian',
      imageUrl: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Sunday tomato pasta',
      description: 'A rich, slow-simmered sauce that tastes like home.',
      time: 40,
      category: 'Dinner',
      imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Fluffy blueberry pancakes',
      description: 'Soft, golden pancakes with berries in every bite.',
      time: 20,
      category: 'Breakfast',
      imageUrl: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=800&q=80',
    },
  ];

  readonly pantryRecipes: RecipeCard[] = [
    {
      name: 'Crispy chickpea bowls',
      description: 'Chickpeas, grains, and a quick dressing make an easy lunch.',
      time: 25,
      category: 'Lunch',
      imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Fridge-raid fried rice',
      description: 'A flexible weeknight favorite for leftover vegetables.',
      time: 15,
      category: 'Quick & easy',
      imageUrl: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Simple lentil soup',
      description: 'A hearty pantry staple with warming spices.',
      time: 35,
      category: 'Soup',
      imageUrl: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80',
    },
  ];
}
