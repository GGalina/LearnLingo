import React, { useState } from 'react';

export const Filter = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleLevelChange = (event) => {
    setSelectedLevel(event.target.value);
  };

  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
  };

  return (
    <>
      <label htmlFor="language">Languages:</label>
      <select id="language" value={selectedLanguage} onChange={handleLanguageChange}>
        <option value="">Select a language</option>
        <option value="French">French</option>
        <option value="English">English</option>
        <option value="German">German</option>
        <option value="Ukrainian">Ukrainian</option>
        <option value="Polish">Polish</option>
      </select>

      <label htmlFor="level">Level of Knowledge:</label>
      <select id="level" value={selectedLevel} onChange={handleLevelChange}>
        <option value="">Select a level</option>
        <option value="A1">A1 Beginner</option>
        <option value="A2">A2 Elementary</option>
        <option value="B1">B1 Intermediate</option>
        <option value="B2">B2 Upper-Intermediate</option>
      </select>

      <label htmlFor="price">Price:</label>
      <select id="price" value={selectedPrice} onChange={handlePriceChange}>
        <option value="">Select a price</option>
        <option value="10">$10</option>
        <option value="20">$20</option>
        <option value="30">$30</option>
        <option value="40">$40</option>
      </select>
    </>
  );
};
