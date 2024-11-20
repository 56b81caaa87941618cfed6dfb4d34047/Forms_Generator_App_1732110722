import React from 'react';

const Header: React.FC = () => {
  const [selectedFruit, setSelectedFruit] = React.useState<string>('');

  const handleFruitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFruit(event.target.value);
  };

  return (
    <header className="bg-blue-500 text-white p-4 w-full h-full">
      <div className="container mx-auto flex justify-between items-center h-full">
        <div className="text-2xl font-bold">FormCraft</div>
        <form className="flex items-center">
          <label htmlFor="fruitSelect" className="mr-2">Favorite Fruit:</label>
          <select
            id="fruitSelect"
            value={selectedFruit}
            onChange={handleFruitChange}
            className="bg-white text-blue-500 p-2 rounded-lg"
          >
            <option value="">Select a fruit</option>
            <option value="apple">Apple</option>
            <option value="banana">Banana</option>
            <option value="orange">Orange</option>
            <option value="grape">Grape</option>
          </select>
        </form>
      </div>
    </header>
  );
};

export { Header as component };