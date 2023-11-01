// src/App.tsx

import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";

const App: React.FC = () => {
  // Состояния компонента:
  const [inputText, setInputText] = useState("");
  const [key, setKey] = useState("");
  const [encryptedText, setEncryptedText] = useState("");
  const [decryptedText, setDecryptedText] = useState("");

  // Функция для шифрования текста
  const handleEncrypt = () => {
    let result = "";
    for (let i = 0; i < inputText.length; i++) {
      const charCode = inputText.charCodeAt(i);
      const keyCode = key.charCodeAt(i % key.length);
      const encryptedCharCode = charCode ^ keyCode; // Применение XOR
      result += String.fromCharCode(encryptedCharCode); // Преобразование числового значения символа в символ
    }
    setEncryptedText(result); // Установка зашифрованного текста
  };

  // Функция для расшифровки текста
  const handleDecrypt = () => {
    let result = "";
    for (let i = 0; i < encryptedText.length; i++) {
      const charCode = encryptedText.charCodeAt(i);
      const keyCode = key.charCodeAt(i % key.length);
      const decryptedCharCode = charCode ^ keyCode;
      result += String.fromCharCode(decryptedCharCode);
    }
    setDecryptedText(result); // Установка расшифрованного текста в состояние
  };

  return (
    <div>
      <div>
        <label>
          Введите текст:
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Введите ключ:
          <input
            type="text"
            value={key}
            onChange={(e) => setKey(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleEncrypt}>Зашифровать</button>
      <div>
        <strong>Зашифрованный текст:</strong>
        <div>{encryptedText}</div>
      </div>
      <button onClick={handleDecrypt}>Расшифровать</button>
      <div>
        <strong>Расшифрованный текст:</strong>
        <div>{decryptedText}</div>
      </div>
    </div>
  );
};

export default App;
