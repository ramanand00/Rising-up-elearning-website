import React, { useState } from "react";

const MongoDBInfo = () => {
  const [copied, setCopied] = useState(false);

  const mongoConnectCode = `
const mongoose = require('mongoose');

// Replace with your MongoDB connection string
const uri = 'mongodb+srv://<username>:<password>@cluster0.mongodb.net/myDatabase?retryWrites=true&w=majority';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully!'))
.catch((err) => console.error('Connection error:', err));
`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(mongoConnectCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2s
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-green-600 text-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Learn MongoDB</h1>
          <nav>
            <ul className="flex gap-4">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Docs</a></li>
              <li><a href="#" className="hover:underline">Practice</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-6 bg-white mt-6 rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold mb-4 text-green-700">What is MongoDB?</h2>
        <p className="mb-4 text-lg">
          MongoDB is a popular NoSQL database that stores data in flexible,
          JSON-like documents. Unlike relational databases, MongoDB uses collections and documents.
        </p>

        {/* Features */}
        <h3 className="text-2xl font-semibold mt-6 text-green-600">Key Features:</h3>
        <ul className="list-disc pl-6 space-y-2 text-lg">
          <li>Document-oriented storage</li>
          <li>Flexible schema</li>
          <li>High performance</li>
          <li>Horizontal scalability</li>
          <li>Rich query language</li>
        </ul>

        {/* Terms */}
        <h3 className="text-2xl font-semibold mt-6 text-green-600">Basic Terms:</h3>
        <ul className="list-disc pl-6 space-y-2 text-lg">
          <li><strong>Database:</strong> Container for collections.</li>
          <li><strong>Collection:</strong> Group of MongoDB documents.</li>
          <li><strong>Document:</strong> Individual record in BSON/JSON format.</li>
        </ul>

        {/* Sample Document */}
        <h3 className="text-2xl font-semibold mt-6 text-green-600">Example Document:</h3>
        <pre className="bg-gray-200 rounded-md p-4 text-sm overflow-auto mb-6">
{`{
  _id: ObjectId("507f1f77bcf86cd799439011"),
  name: "Ramanand Mandal",
  course: "BSc.CSIT",
  interests: ["AI", "Software Engineering", "Web Development"]
}`}
        </pre>

        {/* MongoDB Connection Code */}
        <h3 className="text-2xl font-semibold text-green-600">Connect MongoDB with Node.js</h3>
        <p className="text-lg mb-2">Here’s how to connect MongoDB using Mongoose in Node.js:</p>
        
        <div className="relative">
          <pre className="bg-gray-800 text-green-200 p-4 rounded-md overflow-x-auto text-sm">
            <code>{mongoConnectCode}</code>
          </pre>
          <button
            onClick={copyToClipboard}
            className="absolute top-2 right-2 bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md text-sm"
          >
            {copied ? "Copied!" : "Copy Code"}
          </button>
        </div>
      </main>
    </div>
  );
};

export default MongoDBInfo;
