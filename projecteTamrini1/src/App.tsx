import React, { useState, useMemo } from "react";
import "./App.css";
import Input from "./components/Input/Input";
import Modal from "./components/Modal/Modal";
import Button from "./components/Button/Button";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [text, setText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const formData = useMemo(
    () => ({
      name,
      email,
      password,
      text,
    }),
    [name, email, password, text]
  );

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsModalOpen(true);
  };


  return (
    <>
      <h3>Welcome to the form</h3>
      <form onSubmit={handleFormSubmit}>
        <div className="flex flex-col space-y-4">
          <Input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Input
            type="text"
            placeholder="Text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
        </div>
        <Button />
      </form>
      {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen} formData={formData}/>
      )}
    </>
  );
}

export default App;
