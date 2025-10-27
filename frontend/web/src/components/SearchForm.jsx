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
    <div className="min-h-screen py-12 px-4">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 mb-6 shadow-lg">
            <span className="text-2xl">⚙️</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Bearing Specification
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Generate professional bearing and accessories specifications with ease
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          {/* Form Section */}
          <div className="p-8 md:p-12">
            {/* Bearing Details Section */}
            <section className="mb-10">
              <div className="flex items-center mb-6">
                <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-blue-600 rounded mr-3"></div>
                <h2 className="text-2xl font-bold text-gray-900">Bearing Details</h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {/* Bearing Type */}
                <div className="flex flex-col">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Bearing Type
                  </label>
                  <select
                    value={bearingType}
                    onChange={(e) => setBearingType(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option>Deep Groove Ball Bearing</option>
                    <option>Angular Contact Ball Bearing</option>
                    <option>Tapered Roller Bearing</option>
                    <option>Thrust Ball Bearing</option>
                  </select>
                </div>

                {/* Sub-Type */}
                <div className="flex flex-col">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Bearing Sub-Type
                  </label>
                  <select
                    value={subType}
                    onChange={(e) => setSubType(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option>6000 Series</option>
                    <option>6200 Series</option>
                    <option>6300 Series</option>
                    <option>6400 Series</option>
                  </select>
                </div>

                {/* Bearing Number */}
                <div className="flex flex-col">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Bearing Number / Code
                  </label>
                  <input
                    type="text"
                    value={bearingNumber}
                    onChange={(e) => setBearingNumber(e.target.value)}
                    placeholder="e.g., NU210"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white text-gray-900 font-medium placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-6">
                {/* Seals/Shields */}
                <div className="flex flex-col">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Seals / Shields
                  </label>
                  <select
                    value={seal}
                    onChange={(e) => setSeal(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option>OPEN (Default)</option>
                    <option>ZZ (Metal Shields)</option>
                    <option>2RS (Rubber Seals)</option>
                    <option>DU (Dustproof Type)</option>
                  </select>
                </div>

                {/* Other Suffixes */}
                <div className="flex flex-col">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Other Suffixes
                  </label>
                  <input
                    type="text"
                    value={suffixes}
                    onChange={(e) => setSuffixes(e.target.value)}
                    placeholder="e.g., TN9, P6"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white text-gray-900 font-medium placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                {/* C3 Checkbox */}
                <div className="flex flex-col justify-end">
                  <label className="flex items-center gap-3 px-4 py-3 border border-gray-200 rounded-lg bg-white cursor-pointer hover:bg-blue-50 transition-colors h-full">
                    <input
                      type="checkbox"
                      checked={hasC3}
                      onChange={() => setHasC3(!hasC3)}
                      className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer"
                    />
                    <span className="text-sm font-semibold text-gray-700">C3 Clearance</span>
                  </label>
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Make / Application (Optional)
                </label>
                <input
                  type="text"
                  value={make}
                  onChange={(e) => setMake(e.target.value)}
                  placeholder="e.g., Toyota, SKF, Front Wheel Hub"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white text-gray-900 font-medium placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
            </section>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4 pt-6 border-t border-gray-100">
              <button
                onClick={handleGenerate}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-105 active:scale-95"
              >
                <span>🔍</span>
                Generate Specification
              </button>
              <button
                onClick={handleReset}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg shadow-md hover:shadow-lg hover:bg-gray-300 transition-all duration-200 transform hover:scale-105 active:scale-95"
              >
                <span>♻️</span>
                Reset
              </button>
            </div>
          </div>

          {/* Output Section */}
          {generatedName && (
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border-t border-gray-100 p-8 md:p-12">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center mb-6">
                  <div className="w-1 h-6 bg-gradient-to-b from-emerald-500 to-teal-600 rounded mr-3"></div>
                  <h3 className="text-2xl font-bold text-gray-900">Generated Specification</h3>
                </div>

                <div className="space-y-6">
                  {/* Generated Name */}
                  <div className="bg-white rounded-lg p-6 border border-emerald-200">
                    <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wide mb-2">
                      Specification
                    </p>
                    <p className="text-lg font-bold text-gray-900 break-words">{generatedName}</p>
                  </div>

                  {/* Full Description */}
                  <div className="bg-white rounded-lg p-6 border border-teal-200">
                    <p className="text-sm font-semibold text-teal-600 uppercase tracking-wide mb-2">
                      Full Description
                    </p>
                    <p className="text-gray-700 leading-relaxed break-words">{fullDescription}</p>
                  </div>

                  {/* Make / Application */}
                  {make && (
                    <div className="bg-white rounded-lg p-6 border border-cyan-200">
                      <p className="text-sm font-semibold text-cyan-600 uppercase tracking-wide mb-2">
                        Make / Application
                      </p>
                      <p className="text-gray-700">{make}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto mt-12 text-center text-gray-600 text-sm">
        <p>Professional bearing specifications for industrial applications</p>
      </div>
    </div>
  );
};

export default SearchForm;
