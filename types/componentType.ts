interface Cards {
  id: number;
  image: string;
  title: string;
  description: string;
}

export interface CardProps {
  card: Cards[];
}

export default Cards;
