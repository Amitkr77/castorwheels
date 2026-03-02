import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());
app.use(express.json());

const ZOHO_WEBHOOK =
    "https://flow.zoho.in/60066021469/flow/webhook/incoming?zapikey=1001.ddf8db4a7653b304ef959a6abe7f3ab2.77e32b2eb9c29b55b4a02ed44dd85358&isdebug=false";


const ZOHO_WEBHOOK_SHEET_2 = "https://flow.zoho.in/60066021469/flow/webhook/incoming?zapikey=1001.17fdab6d6b598d4303a7a15c4700dc71.121b7eba719c08582beb6ed62dc2d2dc&isdebug=false";

app.post("/api/enquiry", async (req, res) => {
    try {
        const response = await fetch(ZOHO_WEBHOOK, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(req.body),
        });

        if (!response.ok) {
            return res.status(500).json({ error: "Zoho failed" });
        }

        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
});

app.post("/api/requestForm", async (req, res) => {
    try {
        const response = await fetch(ZOHO_WEBHOOK_SHEET_2, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(req.body),
        });

        res.json({ success: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: err.message });
    }
});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});