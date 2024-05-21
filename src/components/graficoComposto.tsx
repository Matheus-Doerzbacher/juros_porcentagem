"use client";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,
  Title,
  Tooltip,
  Legend,
  LineController,
  LineElement,
  PointElement,
} from "chart.js";
import { useEffect, useRef } from "react";

// Registrar os componentes necessários do Chart.js
Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,
  Title,
  Tooltip,
  Legend,
  LineController,
  LineElement,
  PointElement
);
interface GraficoCompostoProps {
  labels: string[];
  data1: number[];
  data2: number[];
}

export default function GraficoComposto({
  data1,
  data2,
  labels,
}: GraficoCompostoProps) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    const myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Composto",
            data: data1,
            fill: false,
            borderColor: "rgba(255, 0, 0, 1)",
            tension: 0.1,
          },
          {
            label: "Simples",
            data: data2,
            fill: false,
            borderColor: "rgba(0, 0, 255, 1)",
            tension: 0.1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: false,
          },
        },
      },
    });

    // Limpa o gráfico ao desmontar o componente
    return () => {
      myChart.destroy();
    };
  }, [data1, data2, labels]);

  return (
    <canvas
      ref={canvasRef}
      id="myChart"
      className="max-w-3xl max-h-96"
    ></canvas>
  );
}
