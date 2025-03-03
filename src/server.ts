import app from "./app";
import dotenv from "dotenv";
import Database from "./config/database";

dotenv.config();

const PORT = process.env.PORT || 5000;

const startServer = async () => {
    try {
        await Database.connect();
        app.listen(PORT, () => {
            console.log(`🚀 Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error("❌ Server failed to start:", error);
    }
};

startServer();
