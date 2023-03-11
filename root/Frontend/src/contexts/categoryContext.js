import { createContext, useContext, useState } from "react";

const CategoryContext = createContext(null);

export const CategoryProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);

    return (
        <CategoryContext.Provider value={{ categories, setCategories }}>
            {children}
        </CategoryContext.Provider>
    )
};

export const useCategoryContext = () => useContext(CategoryContext);