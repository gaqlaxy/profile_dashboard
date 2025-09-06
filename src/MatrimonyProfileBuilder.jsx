// import { useMemo, useState } from "react";

// function TextInput({ label, value, onChange, placeholder }) {
//   return (
//     <label className="block mb-3">
//       <span className="block text-sm font-medium text-gray-700">{label}</span>
//       <input
//         className="mt-1 w-full rounded-xl border px-3 py-2 outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-blue-500"
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//         placeholder={placeholder}
//       />
//     </label>
//   );
// }

// function RaasiInputGrid({ title, values, onChange }) {
//   return (
//     <div className="mb-4">
//       <div className="font-semibold mb-2">{title}</div>
//       <div className="grid grid-cols-4 gap-2">
//         {values.map((v, i) => (
//           <input
//             key={i}
//             className="rounded-lg border px-2 py-1 text-center ring-1 ring-gray-300 focus:ring-2 focus:ring-blue-500"
//             value={v}
//             onChange={(e) => {
//               const next = [...values];
//               next[i] = e.target.value;
//               onChange(next);
//             }}
//             placeholder={String(i + 1)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default function MatrimonyProfileBuilder() {
//   const [fullNameEn, setFullNameEn] = useState("");
//   const [fullNameTa, setFullNameTa] = useState("");
//   const [dob, setDob] = useState("");
//   const [caste, setCaste] = useState("");
//   const [photoDataUrl, setPhotoDataUrl] = useState("");

//   const [raasi, setRaasi] = useState(Array(12).fill(""));
//   const [navamsa, setNavamsa] = useState(Array(12).fill(""));

//   // helper: read image as dataURL
//   function handlePhotoFile(e) {
//     const file = e.target.files?.[0];
//     if (!file) return;
//     const reader = new FileReader();
//     reader.onload = () => setPhotoDataUrl(String(reader.result));
//     reader.readAsDataURL(file);
//   }

//   // A tiny helper object to keep absolute positions in one place (in mm)
//   // Adjust these values to align exactly with your PNG.
//   const pos = useMemo(
//     () => ({
//       nameEn: { top: 48, left: 40 }, // mm
//       nameTa: { top: 60, left: 40 },
//       dob: { top: 70, left: 40 },
//       caste: { top: 80, left: 40 },

//       photo: { top: 50, right: 20, width: 35, height: 45 }, // mm

//       raasi: { top: 120, left: 40, size: 60 }, // grid is 60x60 mm
//       navamsa: { top: 120, right: 40, size: 60 }, // grid is 60x60 mm
//     }),
//     []
//   );

//   return (
//     <div className="h-screen w-full grid grid-cols-1 lg:grid-cols-[420px_1fr]">
//       {/* LEFT: Form */}
//       <div className="border-r p-5 overflow-y-auto">
//         <h1 className="text-xl font-bold">Matrimony Profile — Form</h1>
//         <p className="text-sm text-gray-600 mb-4">
//           Fill the fields. The right side shows a live A4 preview on your PNG
//           template.
//         </p>

//         <TextInput
//           label="Full Name (EN)"
//           value={fullNameEn}
//           onChange={setFullNameEn}
//           placeholder="e.g., Prakash"
//         />
//         <TextInput
//           label="பெயர் (TA)"
//           value={fullNameTa}
//           onChange={setFullNameTa}
//           placeholder="உதா: பிரகாஷ்"
//         />
//         <TextInput
//           label="Date of Birth"
//           value={dob}
//           onChange={setDob}
//           placeholder="YYYY-MM-DD"
//         />
//         <TextInput
//           label="Caste / Religion"
//           value={caste}
//           onChange={setCaste}
//           placeholder=""
//         />

//         <label className="block mb-4">
//           <span className="block text-sm font-medium text-gray-700">Photo</span>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handlePhotoFile}
//             className="mt-1"
//           />
//         </label>

//         <RaasiInputGrid
//           title="Raasi (12 boxes)"
//           values={raasi}
//           onChange={setRaasi}
//         />
//         <RaasiInputGrid
//           title="Navamsa (12 boxes)"
//           values={navamsa}
//           onChange={setNavamsa}
//         />
//       </div>

//       {/* RIGHT: A4 Preview with background PNG */}
//       <div className="p-5 overflow-auto bg-gray-50">
//         <div
//           className="relative shadow-xl mx-auto"
//           style={{
//             width: "210mm",
//             height: "297mm",
//             fontFamily: "var(--ta)",
//             background: "white",
//           }}
//         >
//           {/* Background PNG (full bleed) */}
//           <img
//             src="/bgtemplate.png"
//             alt="Form Background"
//             className="absolute inset-0 w-full h-full"
//             draggable={false}
//           />

//           {/* Overlay fields (absolute positions in mm) */}
//           <div
//             className="absolute text-[12pt]  outline-1 outline-red-500"
//             style={{ top: `${pos.nameEn.top}mm`, left: `${pos.nameEn.left}mm` }}
//           >
//             {fullNameEn}
//           </div>
//           <div
//             className="absolute text-[12pt]"
//             style={{ top: `${pos.nameTa.top}mm`, left: `${pos.nameTa.left}mm` }}
//           >
//             {fullNameTa}
//           </div>
//           <div
//             className="absolute text-[12pt]"
//             style={{ top: `${pos.dob.top}mm`, left: `${pos.dob.left}mm` }}
//           >
//             {dob}
//           </div>
//           <div
//             className="absolute text-[12pt]"
//             style={{ top: `${pos.caste.top}mm`, left: `${pos.caste.left}mm` }}
//           >
//             {caste}
//           </div>

//           {/* Photo box */}
//           <div
//             className="absolute border overflow-hidden"
//             style={{
//               top: `${pos.photo.top}mm`,
//               right: `${pos.photo.right}mm`,
//               width: `${pos.photo.width}mm`,
//               height: `${pos.photo.height}mm`,
//             }}
//           >
//             {photoDataUrl ? (
//               <img
//                 src={photoDataUrl}
//                 alt="Profile"
//                 className="w-full h-full object-cover"
//               />
//             ) : null}
//           </div>

//           {/* Raasi grid */}
//           <div
//             className="absolute grid grid-cols-4 grid-rows-3 border"
//             style={{
//               top: `${pos.raasi.top}mm`,
//               left: `${pos.raasi.left}mm`,
//               width: `${pos.raasi.size}mm`,
//               height: `${pos.raasi.size}mm`,
//             }}
//           >
//             {raasi.map((cell, i) => (
//               <div
//                 key={i}
//                 className="border text-[10pt] flex items-center justify-center"
//               >
//                 {cell}
//               </div>
//             ))}
//           </div>

//           {/* Navamsa grid */}
//           <div
//             className="absolute grid grid-cols-4 grid-rows-3 border"
//             style={{
//               top: `${pos.navamsa.top}mm`,
//               right: `${pos.navamsa.right}mm`,
//               width: `${pos.navamsa.size}mm`,
//               height: `${pos.navamsa.size}mm`,
//             }}
//           >
//             {navamsa.map((cell, i) => (
//               <div
//                 key={i}
//                 className="border text-[10pt] flex items-center justify-center"
//               >
//                 {cell}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

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
          {/* <div
            className="absolute grid grid-cols-4 grid-rows-3 border"
            style={{
              top: `${fieldPositions.raasi.top}mm`,
              left: `${fieldPositions.raasi.left}mm`,
              width: `${fieldPositions.raasi.size}mm`,
              height: `${fieldPositions.raasi.size}mm`,
            }}
          >
            {formData.raasi.map((val, i) => (
              <div
                key={i}
                className="border text-[9pt] flex items-center justify-center"
              >
                {val}
              </div>
            ))}
          </div> */}

          {/* Navamsa grid */}
          {/* <div
            className="absolute grid grid-cols-4 grid-rows-3 border"
            style={{
              top: `${fieldPositions.navamsa.top}mm`,
              right: `${fieldPositions.navamsa.right}mm`,
              width: `${fieldPositions.navamsa.size}mm`,
              height: `${fieldPositions.navamsa.size}mm`,
            }}
          >
            {formData.navamsa.map((val, i) => (
              <div
                key={i}
                className="border text-[9pt] flex items-center justify-center"
              >
                {val}
              </div>
            ))}
          </div> */}

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
                className="absolute border text-[9pt] flex items-center justify-center outline-1 outline-red-700"
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
