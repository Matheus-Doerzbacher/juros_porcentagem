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
            label: "My first Graph",
            data: data1,
            fill: false,
            borderColor: "rgba(255, 99, 132, 1)",
            tension: 0.1,
          },
          {
            label: "# of Votes",
            data: data2,
            fill: false,
            borderColor: "rgba(255, 205, 86, 1)",
            tension: 0.1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            stacked: true,
          },
        },
      },
    });

    // Limpa o gráfico ao desmontar o componente
    return () => {
      myChart.destroy();
    };
  }, [data1, data2, labels]);

  return <canvas ref={canvasRef} id="myChart"></canvas>;
}
