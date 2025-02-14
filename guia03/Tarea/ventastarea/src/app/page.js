"use client";

import { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, LineChart, Line } from "recharts";
import data from "./data.json";
import "./styles.css"

export default function SalesChart() {
  const [year, setYear] = useState(2022);
  const [salesData, setSalesData] = useState([]);
  const [isClient, setIsClient] = useState(false);


  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const selectedData = data.find((entry) => entry.year === year);
    setSalesData(selectedData ? selectedData.sales : []);
  }, [year]);

  return (
    <div className="container">
      <h1 className="title">Ventas Mensuales</h1>

      {/* Selector de Año */}
      <select className="year-selector" value={year} onChange={(e) => setYear(Number(e.target.value))}>
        {data.map((entry) => (
          <option key={entry.year} value={entry.year}>
            {entry.year}
          </option>
        ))}
      </select>

      {/* Gráfica de Barras */}
      <BarChart width={600} height={300} data={salesData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="amount" fill="#82ca9d" />
      </BarChart>

      {/* Gráfica de Líneas */}
      <LineChart width={600} height={300} data={salesData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="amount" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}
