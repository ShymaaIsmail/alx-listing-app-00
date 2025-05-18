export interface CardProps {
  title: string;           // required string prop
  description: string;      // required string prop
  imageSrc: string;        // required image 
  footer?: React.ReactNode;        // optional footer prop
  children?: React.ReactNode; // optional children prop
  onClick?: () => void;    // optional click handler
}
export interface ButtonProps {
  label: string;           // required string prop
  onClick: () => void;     // required click handler
  disabled?: boolean;      // optional disabled prop
  variant?: 'primary' | 'secondary'; // optional variant prop
}
