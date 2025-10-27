import React, { useState } from "react";

const SearchForm = () => {
  const [bearingType, setBearingType] = useState("Deep Groove Ball Bearing");
  const [subType, setSubType] = useState("6000 Series");
  const [bearingNumber, setBearingNumber] = useState("");
  const [seal, setSeal] = useState("OPEN (Default)");
  const [suffixes, setSuffixes] = useState("");
  const [hasC3, setHasC3] = useState(false);
  const [make, setMake] = useState("");
  const [generatedName, setGeneratedName] = useState("");
  const [fullDescription, setFullDescription] = useState("");

  const handleGenerate = () => {
    const suffixText = `${suffixes}${hasC3 ? " C3" : ""}`;
    const name = `${bearingType} | ${subType} | ${bearingNumber || "N/A"} | ${seal} | ${suffixText}`.trim();
    const description = `${bearingType} (${subType}) ${bearingNumber ? `code ${bearingNumber}` : ""} ${seal} ${suffixText} ${make ? `- ${make}` : ""}`.trim();

    setGeneratedName(name);
    setFullDescription(description);
  };

  const handleReset = () => {
    setBearingType("Deep Groove Ball Bearing");
    setSubType("6000 Series");
    setBearingNumber("");
    setSeal("OPEN (Default)");
    setSuffixes("");
    setHasC3(false);
    setMake("");
    setGeneratedName("");
    setFullDescription("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl border border-blue-200 p-8">
        {/* Header */}
        <h1 className="text-3xl font-extrabold text-center text-blue-800 mb-8">
          ⚙️ Bearing & Accessories Specification
        </h1>

        {/* Bearing Details */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">Bearing Details</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Bearing Type */}
            <div className="flex flex-col">
              <label className="font-medium text-gray-700 mb-1">Bearing Type:</label>
              <select
                value={bearingType}
                onChange={(e) => setBearingType(e.target.value)}
                className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
              >
                <option>Deep Groove Ball Bearing</option>
                <option>Angular Contact Ball Bearing</option>
                <option>Tapered Roller Bearing</option>
                <option>Thrust Ball Bearing</option>
              </select>
            </div>

            {/* Sub-Type */}
            <div className="flex flex-col">
              <label className="font-medium text-gray-700 mb-1">Bearing Sub-Type:</label>
              <select
                value={subType}
                onChange={(e) => setSubType(e.target.value)}
                className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
              >
                <option>6000 Series</option>
                <option>6200 Series</option>
                <option>6300 Series</option>
                <option>6400 Series</option>
              </select>
            </div>

            {/* Bearing Number */}
            <div className="flex flex-col">
              <label className="font-medium text-gray-700 mb-1">Bearing Number / Code:</label>
              <input
                type="text"
                value={bearingNumber}
                onChange={(e) => setBearingNumber(e.target.value)}
                placeholder="e.g., NU210"
                className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {/* Seals/Shields */}
            <div className="flex flex-col">
              <label className="font-medium text-gray-700 mb-1">Seals/Shields:</label>
              <select
                value={seal}
                onChange={(e) => setSeal(e.target.value)}
                className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
              >
                <option>OPEN (Default)</option>
                <option>ZZ (Metal Shields)</option>
                <option>2RS (Rubber Seals)</option>
                <option>DU (Dustproof Type)</option>
              </select>
            </div>

            {/* Other Suffixes */}
            <div className="flex flex-col">
              <label className="font-medium text-gray-700 mb-1">Other Suffixes:</label>
              <input
                type="text"
                value={suffixes}
                onChange={(e) => setSuffixes(e.target.value)}
                placeholder="e.g., TN9, P6"
                className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
              />
              <label className="flex items-center gap-2 mt-2 text-gray-700">
                <input
                  type="checkbox"
                  checked={hasC3}
                  onChange={() => setHasC3(!hasC3)}
                  className="h-4 w-4 text-blue-500"
                />
                <span>C3</span>
              </label>
            </div>

            {/* Make / Application */}
            <div className="flex flex-col">
              <label className="font-medium text-gray-700 mb-1">Make / Application (Optional):</label>
              <input
                type="text"
                value={make}
                onChange={(e) => setMake(e.target.value)}
                placeholder="e.g., Toyota, SKF, Front Wheel Hub"
                className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>
        </section>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={handleGenerate}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md transition-all"
          >
            🔍 Generate Specification
          </button>
          <button
            onClick={handleReset}
            className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-2 rounded-lg shadow-md transition-all"
          >
            ♻️ Reset
          </button>
        </div>

        {/* Output Section */}
        {generatedName && (
          <div className="bg-gradient-to-r from-green-50 to-green-100 border border-green-300 p-6 rounded-xl shadow-inner">
            <h3 className="text-lg font-semibold text-green-800 mb-2">🧾 Generated Specification</h3>
            <p className="text-gray-900 mb-4 font-medium">{generatedName}</p>

            <h3 className="text-lg font-semibold text-green-800 mb-2">📄 Full Description</h3>
            <p className="text-gray-900 mb-4">{fullDescription}</p>

            <h3 className="text-lg font-semibold text-green-800 mb-2">🏷️ Make / Application</h3>
            <p className="text-gray-900">{make || "N/A"}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchForm;
