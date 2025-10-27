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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 pt-16 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white bg-opacity-20 backdrop-blur-md mb-8 border border-white border-opacity-30 shadow-2xl">
            <span className="text-4xl">⚙️</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight">
            Bearing Specification
          </h1>
          <p className="text-xl text-blue-50 max-w-2xl mx-auto font-light leading-relaxed">
            Generate professional bearing and accessories specifications with ease. Streamlined tools for industrial excellence.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Form Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-blue-100">
          {/* Form Section */}
          <div className="p-8 sm:p-16">
            {/* Bearing Details Section */}
            <section className="mb-16">
              <div className="mb-16">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-1.5 h-8 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full"></div>
                  <h2 className="text-3xl font-bold text-gray-900">Bearing Details</h2>
                </div>
                <p className="text-gray-500 ml-8 text-sm font-medium">Configure your bearing specifications below</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-10">
                {/* Bearing Type */}
                <div className="flex flex-col">
                  <label className="block text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">
                    Bearing Type
                  </label>
                  <select
                    value={bearingType}
                    onChange={(e) => setBearingType(e.target.value)}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl bg-white text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-gray-300"
                  >
                    <option>Deep Groove Ball Bearing</option>
                    <option>Angular Contact Ball Bearing</option>
                    <option>Tapered Roller Bearing</option>
                    <option>Thrust Ball Bearing</option>
                  </select>
                </div>

                {/* Sub-Type */}
                <div className="flex flex-col">
                  <label className="block text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">
                    Bearing Sub-Type
                  </label>
                  <select
                    value={subType}
                    onChange={(e) => setSubType(e.target.value)}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl bg-white text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-gray-300"
                  >
                    <option>6000 Series</option>
                    <option>6200 Series</option>
                    <option>6300 Series</option>
                    <option>6400 Series</option>
                  </select>
                </div>

                {/* Bearing Number */}
                <div className="flex flex-col">
                  <label className="block text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">
                    Bearing Number / Code
                  </label>
                  <input
                    type="text"
                    value={bearingNumber}
                    onChange={(e) => setBearingNumber(e.target.value)}
                    placeholder="e.g., NU210"
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl bg-white text-gray-900 font-medium placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-gray-300"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-10">
                {/* Seals/Shields */}
                <div className="flex flex-col">
                  <label className="block text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">
                    Seals / Shields
                  </label>
                  <select
                    value={seal}
                    onChange={(e) => setSeal(e.target.value)}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl bg-white text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-gray-300"
                  >
                    <option>OPEN (Default)</option>
                    <option>ZZ (Metal Shields)</option>
                    <option>2RS (Rubber Seals)</option>
                    <option>DU (Dustproof Type)</option>
                  </select>
                </div>

                {/* Other Suffixes */}
                <div className="flex flex-col">
                  <label className="block text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">
                    Other Suffixes
                  </label>
                  <input
                    type="text"
                    value={suffixes}
                    onChange={(e) => setSuffixes(e.target.value)}
                    placeholder="e.g., TN9, P6"
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl bg-white text-gray-900 font-medium placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-gray-300"
                  />
                </div>

                {/* C3 Checkbox */}
                <div className="flex flex-col justify-end">
                  <label className="flex items-center gap-3 px-5 py-4 border-2 border-gray-200 rounded-2xl bg-white cursor-pointer hover:bg-blue-50 transition-all hover:border-blue-300 h-full">
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

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">
                  Make / Application (Optional)
                </label>
                <input
                  type="text"
                  value={make}
                  onChange={(e) => setMake(e.target.value)}
                  placeholder="e.g., Toyota, SKF, Front Wheel Hub"
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl bg-white text-gray-900 font-medium placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-gray-300"
                />
              </div>
            </section>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-12 border-t border-gray-200">
              <button
                onClick={handleGenerate}
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:from-blue-700 hover:to-blue-600 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-lg"
              >
                <span>🔍</span>
                Generate Specification
              </button>
              <button
                onClick={handleReset}
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-lg"
              >
                <span>♻️</span>
                Reset
              </button>
            </div>
          </div>

          {/* Output Section */}
          {generatedName && (
            <div className="bg-gradient-to-br from-blue-50 to-blue-25 border-t-2 border-blue-100 p-8 sm:p-16">
              <div className="max-w-4xl mx-auto">
                <div className="mb-12">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-1.5 h-8 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full"></div>
                    <h3 className="text-3xl font-bold text-gray-900">Generated Specification</h3>
                  </div>
                  <p className="text-gray-500 ml-8 text-sm font-medium">Your complete bearing specification details</p>
                </div>

                <div className="space-y-8">
                  {/* Generated Name */}
                  <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-blue-200 shadow-lg hover:shadow-xl transition-shadow">
                    <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">
                      📋 Specification
                    </p>
                    <p className="text-lg sm:text-xl font-bold text-gray-900 break-words leading-relaxed">{generatedName}</p>
                  </div>

                  {/* Full Description */}
                  <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-blue-200 shadow-lg hover:shadow-xl transition-shadow">
                    <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">
                      📝 Full Description
                    </p>
                    <p className="text-gray-700 leading-relaxed break-words text-base">{fullDescription}</p>
                  </div>

                  {/* Make / Application */}
                  {make && (
                    <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-blue-200 shadow-lg hover:shadow-xl transition-shadow">
                      <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">
                        🏢 Make / Application
                      </p>
                      <p className="text-gray-700 text-base font-medium">{make}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-25 border-t border-blue-100 mt-20 py-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-gray-600 font-medium">Professional bearing specifications for industrial applications</p>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
