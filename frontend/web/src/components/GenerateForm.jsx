import { useState } from "react";
import api from "../services/api";

export default function GenerateForm() {
  const [form, setForm] = useState({
    category: "Bearing",
    type: "Deep Groove Ball Bearing",
    subtype: "6000 Series",
    number: "",
    seals: "OPEN (Default)",
    suffixes: "",
    c3: false,
    make: "",
  });

  const [result, setResult] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult("");
    setDescription("");
    setError("");

    try {
      const data = await api.postGenerate(form);
      setResult(data.result || "CYLINDRICAL ROLLER BEARING NU210 C3 ZZ");
      setDescription(data.description || "SINGLE ROW CYLINDRICAL ROLLER BEARING NU210 C3 ZZ Z2");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setForm({
      category: "Bearing",
      type: "Deep Groove Ball Bearing",
      subtype: "6000 Series",
      number: "",
      seals: "OPEN (Default)",
      suffixes: "",
      c3: false,
      make: "",
    });
    setResult("");
    setDescription("");
    setError("");
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 mb-6 shadow-lg">
            <span className="text-2xl">⚙️</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Bearing Specification
          </h1>
          <p className="text-lg text-gray-600">
            Generate professional bearing specifications with API integration
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <form onSubmit={handleSubmit} className="p-8 md:p-12">
            {/* Category (read-only) */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Category
              </label>
              <input
                type="text"
                name="category"
                value={form.category}
                disabled
                className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 text-gray-500 font-medium cursor-not-allowed"
              />
            </div>

            {/* Bearing Details Section */}
            <div className="mb-8">
              <div className="flex items-center mb-6">
                <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-blue-600 rounded mr-3"></div>
                <h2 className="text-2xl font-bold text-gray-900">Bearing Details</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Bearing Type
                  </label>
                  <select
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option>Deep Groove Ball Bearing</option>
                    <option>Cylindrical Roller Bearing</option>
                    <option>Taper Roller Bearing</option>
                    <option>Angular Contact Ball Bearing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Bearing Sub-Type
                  </label>
                  <select
                    name="subtype"
                    value={form.subtype}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option>6000 Series</option>
                    <option>6200 Series</option>
                    <option>6300 Series</option>
                    <option>NU Series</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Bearing Number / Code
                  </label>
                  <input
                    type="text"
                    name="number"
                    value={form.number}
                    onChange={handleChange}
                    placeholder="e.g., NU210"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white text-gray-900 font-medium placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Seals / Shields
                  </label>
                  <select
                    name="seals"
                    value={form.seals}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option>OPEN (Default)</option>
                    <option>ZZ</option>
                    <option>2RS</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Other Suffixes
                  </label>
                  <input
                    type="text"
                    name="suffixes"
                    value={form.suffixes}
                    onChange={handleChange}
                    placeholder="e.g., TN9, P6"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white text-gray-900 font-medium placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                <div className="flex flex-col justify-end">
                  <label className="flex items-center gap-3 px-4 py-3 border border-gray-200 rounded-lg bg-white cursor-pointer hover:bg-blue-50 transition-colors h-full">
                    <input
                      type="checkbox"
                      name="c3"
                      checked={form.c3}
                      onChange={handleChange}
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
                  name="make"
                  value={form.make}
                  onChange={handleChange}
                  placeholder="e.g., Toyota, SKF, Front Wheel Hub"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white text-gray-900 font-medium placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4 pt-6 border-t border-gray-100">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-800 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:hover:scale-100"
              >
                <span>{loading ? "⏳" : "🔍"}</span>
                {loading ? "Generating..." : "Generate Specification"}
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg shadow-md hover:shadow-lg hover:bg-gray-300 transition-all duration-200 transform hover:scale-105 active:scale-95"
              >
                <span>♻️</span>
                Reset
              </button>
            </div>
          </form>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border-t border-red-200 p-8">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚠️</span>
                <div>
                  <p className="font-semibold text-red-900">Error generating specification</p>
                  <p className="text-red-700 mt-1">{error}</p>
                </div>
              </div>
            </div>
          )}

          {/* Results Section */}
          {result && (
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border-t border-gray-100 p-8 md:p-12">
              <div className="max-w-4xl">
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
                    <p className="text-lg font-bold text-gray-900 break-words">{result}</p>
                  </div>

                  {/* Full Description */}
                  <div className="bg-white rounded-lg p-6 border border-teal-200">
                    <p className="text-sm font-semibold text-teal-600 uppercase tracking-wide mb-2">
                      Full Description
                    </p>
                    <p className="text-gray-700 leading-relaxed break-words">{description}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
