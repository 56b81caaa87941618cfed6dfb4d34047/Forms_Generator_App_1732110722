import React from 'react';

const Header: React.FC = () => {
  const [selectedFruit, setSelectedFruit] = React.useState<string>('');
  const [selectedColor, setSelectedColor] = React.useState<string>('');
  const [title, setTitle] = React.useState<string>('FormCraft');


  const handleFruitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFruit(event.target.value);
    updateTitle(event.target.value, selectedColor);
  };

  const handleColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedColor(event.target.value);
    updateTitle(selectedFruit, event.target.value);
  };

  const updateTitle = (fruit: string, color: string) => {
    if (fruit && color) {
      setTitle(`FormCraft - ${fruit} ${color}`);
    } else if (fruit) {
      setTitle(`FormCraft - ${fruit}`);
    } else if (color) {
      setTitle(`FormCraft - ${color}`);
    } else {
      setTitle('FormCraft');
    }
  };



  return (
    <header className="bg-blue-500 text-white p-4 w-full h-full bg-cover bg-center relative" style={{backgroundImage: "url('https://raw.githubusercontent.com/56b81caaa87941618cfed6dfb4d34047/Forms_Generator_App_1732110722/main/src/assets/images/723944a963784706bf363131300b01bc.jpeg')"}}>
      <div className="absolute inset-0 backdrop-blur-sm"></div>
      <div className="container mx-auto flex justify-between items-center h-full relative z-10">
        <div className="text-2xl font-bold">{title}</div>
        <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-4">
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
          <form className="flex items-center">
            <label htmlFor="colorSelect" className="mr-2">Favorite Color:</label>
            <select
              id="colorSelect"
              value={selectedColor}
              onChange={handleColorChange}
              className="bg-white text-blue-500 p-2 rounded-lg"
            >
              <option value="">Select a color</option>
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
              <option value="yellow">Yellow</option>
            </select>
          </form>
          <div className="flex justify-center ml-4">
            <img src="https://raw.githubusercontent.com/56b81caaa87941618cfed6dfb4d34047/Forms_Generator_App_1732110722/main/src/assets/images/f15e4ee10ed24166995b7b1be64795dc.jpeg" alt="Car" className="h-8 w-auto" />
          </div>
        </div>
      </div>
    </header>
  );
};
  );
};

export { Header as component };