// 1. Import the interface from index.ts
import { FC } from "react";
import { CardProps } from "../../interfaces/index";

// 2. Define the Card component using the imported interface
const Card: FC<CardProps> = ({ title, description, footer }) => {
    return (
        <div className="card">
        <h2>{title}</h2>
        <p>{description}</p>
        {footer && <div className="card-footer">{footer}</div>}
        </div>
    );
    }

// 3. Export the component
export default Card;
