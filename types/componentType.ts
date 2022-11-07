interface Cards {
  id: string;
  image: string;
  title: string;
  description: string;
}

export interface CardProps {
  card: Cards[];
}

export default Cards;
