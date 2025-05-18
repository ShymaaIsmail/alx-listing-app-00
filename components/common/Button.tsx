// 1. Import the interface from index.ts
import { FC } from "react";
import { ButtonProps } from "../../interfaces/index";

// 2. Define the Card component using the imported interface
const Button: FC<ButtonProps> = ({ label,onClick }) => {
    return (
        <button onClick={onClick} className="btn">
            {label}
        </button>
    );
    }

// 3. Export the component
export default Button;
