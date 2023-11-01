import React, { useState, ChangeEvent } from "react";

const App2: React.FC = () => {
  const [decimal, setDecimal] = useState<string>("");
  const [binary, setBinary] = useState<string>("");
  const [binary5, setBinary5] = useState<string>("");
  const [xorResult, setXorResult] = useState<string>("");
  const num1: number = 2244899301;

  const handleDecimalChange = (event: ChangeEvent<HTMLInputElement>) => {
    const decimalValue = event.target.value;
    setDecimal(decimalValue);
    const binaryValue = decimalToBinary(BigInt(decimalValue));
    const shiftedBinary = shiftBinary(binaryValue, 5);
    setBinary(binaryValue);
    setBinary5(shiftedBinary);
    const num1bin = decimalToBinary(BigInt(num1));
    setXorResult(XOR(num1bin, shiftedBinary));
  };

  const decimalToBinary = (decimal: bigint): string => {
    if (decimal === BigInt(0)) {
      return "0";
    }

    let binary = "";
    while (decimal > BigInt(0)) {
      binary = Number(decimal % BigInt(2)) + binary;
      decimal = decimal / BigInt(2);
    }

    return binary;
  };

  const shiftBinary = (binary: string, shift: number): string => {
    if (binary.length <= shift) {
      return binary;
    }

    return binary.slice(shift) + binary.slice(0, shift);
  };

  const XOR = (binary1: string, binary2: string): string => {
    const num1 = parseInt(binary1, 2);
    const num2 = parseInt(binary2, 2);
    return ((num1 ^ num2) >>> 0).toString(2);
  };

  return (
    <div>
      <label>
        Десятичное число:
        <input type="text" value={decimal} onChange={handleDecimalChange} />
      </label>
      <p>Двоичное число: {binary}</p>
      <p>Двоичное число со смещением: {binary5}</p>
      <p>Результат операции XOR: {xorResult}</p>
    </div>
  );
};

export default App2;
