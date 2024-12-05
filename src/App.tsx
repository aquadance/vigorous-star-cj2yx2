import React, { useState } from 'react';

const SteamChecker = () => {
  const [steamId, setSteamId] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSteamId(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(steamId);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-center">
      <div className="bg-gray-800 rounded-lg p-8 w-96">
        <h1 className="text-3xl text-white font-bold mb-4">SteamChecker</h1>
        <form onSubmit={handleSubmit}>
          <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="steamId">Enter your Steam ID:</label>
          <input
            id="steamId"
            type="text"
            value={steamId}
            onChange={handleInputChange}
            className="bg-gray-700 text-white rounded-lg p-2 w-full mb-4"
            placeholder="Enter your Steam ID"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg p-2 w-full"
          >
            Check Steam ID
          </button>
        </form>
      </div>
    </div>
  );
};

export default SteamChecker;