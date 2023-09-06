require('dotenv').config(); // Load environment variables from .env file

const hl7v2 = require("hl7v2");
const net = require('net');

const PORT = process.env.PORT || 5000; // Use the PORT environment variable if it exists, otherwise use 5000
const IP = process.env.IP || '0.0.0.0'; // Use the IP environment variable if it exists, otherwise use 0.0.0.0

const server = new hl7v2.HL7Server();
server.listen(PORT, IP, () => {
    console.log(`Server listening on ${IP}:${PORT}`);
})