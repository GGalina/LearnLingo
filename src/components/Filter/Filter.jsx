import React, { useState } from 'react';
import { useColor } from '../../context/ColorContext';
import { Label, CustomSelect, FilterContainer, FilterItemWrapper } from './Filter.styled';

export const Filter = ({ onFilterChange }) => {
  const { selectedColor } = useColor();
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');

 const handleLanguageChange = (selectedOption) => {
    setSelectedLanguage(selectedOption);
    onFilterChange({
      language: selectedOption.value,
      level: selectedLevel.value,
      price: selectedPrice.value
    });
  };

  const handleLevelChange = (selectedOption) => {
    setSelectedLevel(selectedOption);
    onFilterChange({
      language: selectedLanguage.value,
      level: selectedOption.value,
      price: selectedPrice.value
    });
  };

  const handlePriceChange = (selectedOption) => {
    setSelectedPrice(selectedOption);
    onFilterChange({
      language: selectedLanguage.value,
      level: selectedLevel.value,
      price: selectedOption.value
    });
  };

  const languageOptions = [
    { value: 'French', label: 'French' },
    { value: 'English', label: 'English' },
    { value: 'German', label: 'German' },
    { value: 'Ukrainian', label: 'Ukrainian' },
    { value: 'Polish', label: 'Polish' },
  ];

  const levelOptions = [
    { value: 'A1 Beginner', label: 'A1 Beginner' },
    { value: 'A2 Elementary', label: 'A2 Elementary' },
    { value: 'B1 Intermediate', label: 'B1 Intermediate' },
    { value: 'B2 Upper-Intermediate', label: 'B2 Upper-Intermediate' },
  ];

  const priceOptions = [
    { value: '10', label: '10$' },
    { value: '20', label: '20$' },
    { value: '30', label: '30$' },
    { value: '40', label: '40$' },
  ];

  return (
    <FilterContainer>
      <FilterItemWrapper>
        <Label htmlFor="language">Languages:</Label>
        <CustomSelect
          id="language"
          value={selectedLanguage}
          onChange={handleLanguageChange}
          options={languageOptions}
          $selcolor={selectedColor}
          classNamePrefix="react-select"
          className="react-select-container"
        />
      </FilterItemWrapper>

      <FilterItemWrapper>
        <Label htmlFor="level">Level of Knowledge:</Label>
        <CustomSelect
          id="level"
          value={selectedLevel}
          onChange={handleLevelChange}
          options={levelOptions}
          $selcolor={selectedColor}
          classNamePrefix="react-select"
          className="react-select-container"
        />
      </FilterItemWrapper>

      <FilterItemWrapper>
        <Label htmlFor="price">Price:</Label>
        <CustomSelect
          id="price"
          value={selectedPrice}
          onChange={handlePriceChange}
          options={priceOptions}
          $selcolor={selectedColor}
          classNamePrefix="react-select"
          className="react-select-container"
        />
      </FilterItemWrapper>
    </FilterContainer>
  );
};
