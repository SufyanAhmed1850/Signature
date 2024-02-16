import React, { useState } from "react";

const SignatureGenerator = () => {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [background, setBackground] = useState("white");

    const handleDownload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = 250;
        canvas.height = 100;

        if (background === "transparent") {
            ctx.fillStyle = "transparent";
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        } else {
            ctx.fillStyle = "#ffffff";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        ctx.font = "72px Sacramento";
        ctx.fillStyle = "#3153eb";
        ctx.fillText(`${name}`, 25, 60);

        ctx.font = "600 16px Poppins";
        ctx.fillStyle = "#3153eb";
        ctx.fillText(`${date}`, 150, 90);

        const image = canvas
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
        const link = document.createElement("a");
        link.download = "signature.png";
        link.href = image;
        link.click();
    };

    return (
        <main>
            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <select
                value={background}
                onChange={(e) => setBackground(e.target.value)}
            >
                <option value="white">White Background</option>
                <option value="transparent">Transparent Background</option>
            </select>
            <button onClick={handleDownload}>Download Signature</button>
            <div className="signature-container">
                <h1 className="signature-name">{name}</h1>
                <p className="signature-date">{date}</p>
            </div>
        </main>
    );
};

export default SignatureGenerator;
