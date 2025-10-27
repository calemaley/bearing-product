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

    try {
      const data = await api.postGenerate(form);
      setResult(data.result || "CYLINDRICAL ROLLER BEARING NU210 C3 ZZ");
      setDescription(data.description || "SINGLE ROW CYLINDRICAL ROLLER BEARING NU210 C3 ZZ Z2");
    } catch (err) {
      alert(err.message);
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
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded-2xl">
      <h1 className="text-2xl font-semibold mb-4">Bearing & Accessories Specification</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={form.category}
            disabled
            className="border p-2 w-full rounded"
          />
        </div>

        <h2 className="text-lg font-medium border-b pb-1">Bearing Details</h2>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <label>Bearing Type:</label>
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className="border p-2 w-full rounded"
            >
              <option>Deep Groove Ball Bearing</option>
              <option>Cylindrical Roller Bearing</option>
              <option>Taper Roller Bearing</option>
              <option>Angular Contact Ball Bearing</option>
            </select>
          </div>

          <div>
            <label>Bearing Sub-Type:</label>
            <select
              name="subtype"
              value={form.subtype}
              onChange={handleChange}
              className="border p-2 w-full rounded"
            >
              <option>6000 Series</option>
              <option>6200 Series</option>
              <option>6300 Series</option>
              <option>NU Series</option>
            </select>
          </div>

          <div>
            <label>Bearing Number / Code:</label>
            <input
              type="text"
              name="number"
              value={form.number}
              onChange={handleChange}
              placeholder="e.g., NU210"
              className="border p-2 w-full rounded"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <label>Seals/Shields:</label>
            <select
              name="seals"
              value={form.seals}
              onChange={handleChange}
              className="border p-2 w-full rounded"
            >
              <option>OPEN (Default)</option>
              <option>ZZ</option>
              <option>2RS</option>
            </select>
          </div>

          <div>
            <label>Other Suffixes:</label>
            <input
              type="text"
              name="suffixes"
              value={form.suffixes}
              onChange={handleChange}
              placeholder="e.g., TN9, P6"
              className="border p-2 w-full rounded"
            />
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="c3"
              checked={form.c3}
              onChange={handleChange}
            />
            <label>C3</label>
          </div>
        </div>

        <div>
          <label>Make / Application (Optional):</label>
          <input
            type="text"
            name="make"
            value={form.make}
            onChange={handleChange}
            placeholder="e.g., Toyota, SKF, Front Wheel Hub"
            className="border p-2 w-full rounded"
          />
        </div>

        <div className="space-x-2">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? "Generating..." : "Generate Name"}
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
          >
            Reset
          </button>
        </div>
      </form>

      {result && (
        <div className="mt-6 border-t pt-4">
          <p><strong>Generated Specification:</strong></p>
          <p className="font-semibold">{result}</p>
          <p className="mt-3"><strong>Full Description:</strong></p>
          <p className="italic">{description}</p>
        </div>
      )}
    </div>
  );
}
