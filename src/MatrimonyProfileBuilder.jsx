import { useState } from "react";
import { initialFormData, fieldPositions } from "./formData";
import bg from "/bgtemplate.png";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useRef } from "react";
import { registerLathaFont } from "./latha";

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
  const previewRef = useRef();

  async function handleDownloadPDF() {
    const pdf = new jsPDF("p", "mm", "a4");

    // A4 size
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    // Add background image
    const img = new Image();
    img.src = bg;
    await new Promise((resolve) => {
      img.onload = resolve;
    });
    pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);

    // Register Tamil font
    registerLathaFont(pdf);

    // Font color based on gender
    const color =
      formData.gender === "male"
        ? [165, 42, 42] // brown
        : formData.gender === "female"
        ? [0, 128, 0] // green
        : [0, 0, 0];
    pdf.setTextColor(...color);

    // Utility: detect Tamil characters
    const isTamil = (text) => /[\u0B80-\u0BFF]/.test(text);

    // Overlay fields
    Object.keys(fieldPositions).forEach((key) => {
      if (["photo", "raasi", "navamsa", "houseTypeTicks"].includes(key)) return;
      const pos = fieldPositions[key];
      const value = formData[key];
      if (!value) return;

      // Decide font
      const font = isTamil(value) ? "Latha" : "helvetica";
      try {
        pdf.setFont(font, "normal");
      } catch {
        pdf.setFont("helvetica", "normal");
      }

      if (["work", "address"].includes(key)) {
        // Multiline
        const splitText = pdf.splitTextToSize(value, 60);
        pdf.text(splitText, pos.left, pos.top);
      } else {
        pdf.text(value, pos.left, pos.top);
      }
    });

    // Raasi cells
    // fieldPositions.raasiCells.forEach((cell, i) => {
    //   if (!formData.raasi[i]) return;
    //   const font = isTamil(formData.raasi[i]) ? "Latha" : "helvetica";
    //   pdf.setFont(font, "normal");
    //   pdf.text(
    //     formData.raasi[i],
    //     cell.left + cell.w / 2,
    //     cell.top + cell.h / 2,
    //     { align: "center", baseline: "middle" }
    //   );
    // });
    // Raasi cells
    fieldPositions.raasiCells.forEach((cell, i) => {
      if (!formData.raasi[i]) return;
      const font = isTamil(formData.raasi[i]) ? "Latha" : "helvetica";
      pdf.setFont(font, "normal");

      const x = fieldPositions.raasi.left + cell.left + cell.w / 2;
      const y = fieldPositions.raasi.top + cell.top + cell.h / 2;

      pdf.text(formData.raasi[i], x, y, {
        align: "center",
        baseline: "middle",
      });
    });

    // Navamsa cells
    // fieldPositions.navamsaCells.forEach((cell, i) => {
    //   if (!formData.navamsa[i]) return;
    //   const font = isTamil(formData.navamsa[i]) ? "Latha" : "helvetica";
    //   pdf.setFont(font, "normal");
    //   pdf.text(
    //     formData.navamsa[i],
    //     cell.left + cell.w / 2,
    //     cell.top + cell.h / 2,
    //     { align: "center", baseline: "middle" }
    //   );
    // });
    // Navamsa cells
    fieldPositions.navamsaCells.forEach((cell, i) => {
      if (!formData.navamsa[i]) return;
      const font = isTamil(formData.navamsa[i]) ? "Latha" : "helvetica";
      pdf.setFont(font, "normal");

      // Navamsa is positioned using "right", so calculate from total width
      const x =
        pdf.internal.pageSize.getWidth() -
        fieldPositions.navamsa.right -
        fieldPositions.navamsa.size +
        cell.left +
        cell.w / 2;
      const y = fieldPositions.navamsa.top + cell.top + cell.h / 2;

      pdf.text(formData.navamsa[i], x, y, {
        align: "center",
        baseline: "middle",
      });
    });

    // Photo
    if (formData.photo) {
      pdf.addImage(
        formData.photo,
        "JPEG",
        pdfWidth - fieldPositions.photo.right - fieldPositions.photo.width,
        fieldPositions.photo.top,
        fieldPositions.photo.width,
        fieldPositions.photo.height
      );
    }

    // House type tick
    if (formData.houseType) {
      const tickPos = fieldPositions.houseTypeTicks[formData.houseType];
      pdf.setFontSize(14);
      pdf.text("✓", tickPos.left, tickPos.top);
    }

    // ✅ Final save (only once)
    pdf.save("matrimony-profile.pdf");
  }

  return (
    <div className="h-screen w-full grid grid-cols-1 lg:grid-cols-[420px_1fr]">
      {/* LEFT: Form */}
      <div className="border-r p-5 overflow-y-auto">
        <h1 className="text-xl font-bold mb-4">Matrimony Profile Form</h1>

        <label className="block mb-3">
          <span className="block text-sm font-medium">Gender</span>
          <select
            value={formData.gender}
            onChange={(e) => handleChange("gender", e.target.value)}
            className="mt-1 w-full rounded-lg border px-3 py-2 outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>

        {/* Overlay text fields */}

        {Object.keys(initialFormData).map((key) => {
          if (key === "raasi" || key === "navamsa" || key === "photo")
            return null;

          return (
            <label key={key} className="block mb-3">
              <span className="block text-sm font-medium capitalize">
                {key}
              </span>

              {["work", "address"].includes(key) ? (
                <textarea
                  value={formData[key]}
                  onChange={(e) => handleChange(key, e.target.value)}
                  rows={3}
                  className="mt-1 w-full rounded-lg border px-3 py-2 outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <input
                  type="text"
                  value={formData[key]}
                  onChange={(e) => handleChange(key, e.target.value)}
                  className="mt-1 w-full rounded-lg border px-3 py-2 outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-blue-500"
                />
              )}
            </label>
          );
        })}

        {/* Photo upload */}
        <label className="block mb-4">
          <span className="block text-sm font-medium">Photo</span>
          <input type="file" accept="image/*" onChange={handlePhoto} />
        </label>

        <label className="block mb-3">
          <span className="block text-sm font-medium">House Type</span>
          <select
            value={formData.houseType}
            onChange={(e) => handleChange("houseType", e.target.value)}
            className="mt-1 w-full rounded-lg border px-3 py-2 outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select...</option>
            <option value="own">Own</option>
            <option value="rental">Rental</option>
            <option value="lease">Lease</option>
          </select>
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

        <button
          onClick={handleDownloadPDF}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Save as PDF
        </button>
      </div>

      {/* RIGHT: A4 Preview */}
      <div className="p-5 overflow-auto bg-gray-50">
        <div
          id="a4-preview"
          ref={previewRef}
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

          {/* Overlay text fields */}
          {Object.keys(fieldPositions).map((key) => {
            if (key === "photo" || key === "raasi" || key === "navamsa")
              return null;
            const isMultiline = ["work", "address"].includes(key);
            return (
              <div
                key={key}
                className="absolute text-[11pt] whitespace-pre-wrap"
                style={{
                  top: `${fieldPositions[key].top}mm`,
                  left: `${fieldPositions[key].left}mm`,
                  width: isMultiline ? "60mm" : "auto",
                  lineHeight: "1.2",
                  color:
                    formData.gender === "male"
                      ? "brown"
                      : formData.gender === "female"
                      ? "green"
                      : "black",
                  fontFamily:
                    formData.language === "ta"
                      ? "'Latha', 'Noto Sans Tamil', sans-serif"
                      : "Arial, sans-serif",
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
                  fontFamily:
                    formData.language === "ta"
                      ? "'Latha', 'Noto Sans Tamil', sans-serif"
                      : "Arial, sans-serif",
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
                className="absolute text-[9pt] flex items-center justify-center"
                style={{
                  top: `${cellPos.top}mm`,
                  left: `${cellPos.left}mm`,
                  width: `${cellPos.w}mm`,
                  height: `${cellPos.h}mm`,
                  fontFamily:
                    formData.language === "ta"
                      ? "'Latha', 'Noto Sans Tamil', sans-serif"
                      : "Arial, sans-serif",
                }}
              >
                {formData.navamsa[i]}
              </div>
            ))}
          </div>

          {/* House Type Tick */}
          {formData.houseType && (
            <div
              className="absolute text-[14pt] font-bold text-blue-600"
              style={{
                top: `${
                  fieldPositions.houseTypeTicks[formData.houseType].top
                }mm`,
                left: `${
                  fieldPositions.houseTypeTicks[formData.houseType].left
                }mm`,
              }}
            >
              ✅
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
