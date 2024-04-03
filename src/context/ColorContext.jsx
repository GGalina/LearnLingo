import React,
{
    useState,
    useEffect,
    useContext,
    createContext,
} from 'react';

const ColorContext = createContext();

export const useColor = () => {
    const context = useContext(ColorContext);

    if (!context) {
        throw new Error('useColor must be used within a ColorProvider');
    }
    return context;
};

export const ColorProvider = ({ children }) => {
    const [selectedColor, setSelectedColor] = useState('');

    useEffect(() => {
        const generateColorPalette = () => {
            const colorPalette = [
                '#F4C550', '#FBE9BA', '#9FBAAE',
                '#CBDED3', '#9FB7CE', '#BFD6EA',
                '#E0A39A', '#F2C0BD', '#F0AA8D',
                '#F4C8BA'];
            const randomColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
            setSelectedColor(randomColor);
        };
        generateColorPalette();
    }, []); 

    return (
        <ColorContext.Provider value={{ selectedColor }}>
            {children}
        </ColorContext.Provider>
    );
};
