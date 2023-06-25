import { ChangeEvent } from 'react';

interface IProps {
  oldName: string;
  newName: string;
  handleCompare: () => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Compare({ oldName, newName, handleCompare, handleChange }: IProps) {
  return (
    <div className="name-input-box">
      <input
        type="text"
        className="old-name"
        placeholder="Old name"
        value={oldName}
        name="oldName"
        onChange={handleChange}
        maxLength={12}
      />
      <input
        type="text"
        className="new-name"
        placeholder="New name"
        value={newName}
        name="newName"
        onChange={handleChange}
        maxLength={12}
      />
      <button onClick={handleCompare}>Compare</button>
    </div>
  );
}

export default Compare;
