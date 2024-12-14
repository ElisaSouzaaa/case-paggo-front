import { useState } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';

const Home = () => {
  const [chat, setChat] = useState<{ question: string; answer: string }[]>([]);
  const [question, setQuestion] = useState('');
  const [documentId, setDocumentId] = useState<number | null>(null);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: async (acceptedFiles) => {
      const formData = new FormData();
      formData.append('file', acceptedFiles[0]);
      formData.append('title', acceptedFiles[0].name);
      formData.append('userId', '1'); // Replace with actual user ID

      const response = await axios.post('http://localhost:3000/documents', formData);
      setDocumentId(response.data.id);
    },
  });

  const askQuestion = async () => {
    if (!documentId || !question) return;
    const response = await axios.post('http://localhost:3000/interactions', {
      question,
      documentId,
    });
    setChat([...chat, { question, answer: response.data.answer }]);
    setQuestion('');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Document Uploader and Chat</h1>

      <div {...getRootProps()} style={{ border: '2px dashed #ccc', padding: '20px', marginBottom: '20px' }}>
        <input {...getInputProps()} />
        <p>Drag & drop a file here, or click to select a file</p>
      </div>

      {documentId && (
        <div style={{ marginBottom: '20px' }}>
          <h2>Chat</h2>
          <div style={{ marginBottom: '10px' }}>
            {chat.map((c, index) => (
              <div key={index}>
                <p><strong>Q:</strong> {c.question}</p>
                <p><strong>A:</strong> {c.answer}</p>
              </div>
            ))}
          </div>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask a question about the document"
            style={{ width: '80%', marginRight: '10px' }}
          />
          <button onClick={askQuestion} style={{ padding: '5px 10px' }}>Send</button>
        </div>
      )}
    </div>
  );
};

export default Home;