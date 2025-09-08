import { useState } from "react";
import { initialFormData, fieldPositions } from "./formData";
import bg from "/bgtemplate.png";

export default function MatrimonyProfileBuilder() {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoto = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => handleChange("photo", reader.result);
    reader.readAsDataURL(file);
  };

  const handleGridChange = (type, index, value) => {
    setFormData((prev) => {
      const updated = [...prev[type]];
      updated[index] = value;
      return { ...prev, [type]: updated };
    });
  };

  return (
    <div className="h-screen w-full grid grid-cols-1 lg:grid-cols-[420px_1fr]">
      {/* LEFT: Form */}
      <div className="border-r p-5 overflow-y-auto">
        <h1 className="text-xl font-bold mb-4">Matrimony Profile Form</h1>

        {Object.keys(initialFormData).map((key) => {
          if (key === "raasi" || key === "navamsa" || key === "photo")
            return null;

          return (
            <label key={key} className="block mb-3">
              <span className="block text-sm font-medium capitalize">
                {key}
              </span>
              <input
                type="text"
                value={formData[key]}
                onChange={(e) => handleChange(key, e.target.value)}
                className="mt-1 w-full rounded-lg border px-3 py-2 outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-blue-500"
              />
            </label>
          );
        })}

        {/* Photo upload */}
        <label className="block mb-4">
          <span className="block text-sm font-medium">Photo</span>
          <input type="file" accept="image/*" onChange={handlePhoto} />
        </label>

        {/* Raasi */}
        <h3 className="font-semibold">Raasi (12 boxes)</h3>
        <div className="grid grid-cols-4 gap-1 mb-4">
          {formData.raasi.map((v, i) => (
            <input
              key={i}
              value={v}
              onChange={(e) => handleGridChange("raasi", i, e.target.value)}
              className="border text-center text-sm"
            />
          ))}
        </div>

        {/* Navamsa */}
        <h3 className="font-semibold">Navamsa (12 boxes)</h3>
        <div className="grid grid-cols-4 gap-1 mb-4">
          {formData.navamsa.map((v, i) => (
            <input
              key={i}
              value={v}
              onChange={(e) => handleGridChange("navamsa", i, e.target.value)}
              className="border text-center text-sm"
            />
          ))}
        </div>
      </div>

      {/* RIGHT: A4 Preview */}
      <div className="p-5 overflow-auto bg-gray-50">
        <div
          className="relative shadow-xl mx-auto"
          style={{
            width: "210mm",
            height: "297mm",
            background: "white",
          }}
        >
          {/* Background */}
          <img
            src={bg}
            alt="Template"
            className="absolute inset-0 w-full h-full"
          />

          {/* Overlay text fields */}
          {Object.keys(fieldPositions).map((key) => {
            if (key === "photo" || key === "raasi" || key === "navamsa")
              return null;
            return (
              <div
                key={key}
                className="absolute text-[11pt]"
                style={{
                  top: `${fieldPositions[key].top}mm`,
                  left: `${fieldPositions[key].left}mm`,
                }}
              >
                {formData[key]}
              </div>
            );
          })}

          {/* Photo */}
          <div
            className="absolute border overflow-hidden"
            style={{
              top: `${fieldPositions.photo.top}mm`,
              right: `${fieldPositions.photo.right}mm`,
              width: `${fieldPositions.photo.width}mm`,
              height: `${fieldPositions.photo.height}mm`,
            }}
          >
            {formData.photo && (
              <img
                src={formData.photo}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            )}
          </div>

          {/* Raasi grid */}
          <div
            className="absolute"
            style={{
              top: `${fieldPositions.raasi.top}mm`,
              left: `${fieldPositions.raasi.left}mm`,
              width: `${fieldPositions.raasi.size}mm`,
              height: `${fieldPositions.raasi.size}mm`,
            }}
          >
            {fieldPositions.raasiCells.map((cellPos, i) => (
              <div
                key={i}
                className="absolute  text-[9pt] flex items-center justify-center"
                // className="absolute border text-[9pt] flex items-center justify-center outline-1 outline-red-700"
                style={{
                  top: `${cellPos.top}mm`,
                  left: `${cellPos.left}mm`,
                  width: `${cellPos.w}mm`,
                  height: `${cellPos.h}mm`,
                }}
              >
                {formData.raasi[i]}
              </div>
            ))}
          </div>

          {/* Navamsa grid */}
          <div
            className="absolute"
            style={{
              top: `${fieldPositions.navamsa.top}mm`,
              right: `${fieldPositions.navamsa.right}mm`,
              width: `${fieldPositions.navamsa.size}mm`,
              height: `${fieldPositions.navamsa.size}mm`,
            }}
          >
            {fieldPositions.navamsaCells.map((cellPos, i) => (
              <div
                key={i}
                className="absolute border text-[9pt] flex items-center justify-center"
                style={{
                  top: `${cellPos.top}mm`,
                  left: `${cellPos.left}mm`,
                  width: `${cellPos.w}mm`,
                  height: `${cellPos.h}mm`,
                }}
              >
                {formData.navamsa[i]}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
