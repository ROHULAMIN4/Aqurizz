import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";
import "./Chart.css";

const Chart = ({ data, COLORS }) => {
  return (
    <div>
      <Container className="mt-5">
        <Row className="g-4">
          <Col md={4}>
            <PieChart
              width={400}
              height={400}
              style={{ backgroundColor: "#ffffff" }}
            >
              <Pie
                data={data}
                dataKey="Quantity"
                cx="50%"
                cy="50%"
                outerRadius={60}
                fill="#8884d8"
                label
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </Col>
          <Col md={8}>
            <BarChart
              className="bar-chart"
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
              barSize={20}
            >
              <XAxis
                dataKey="name"
                scale="point"
                padding={{ left: 10, right: 10 }}
              />
              <YAxis />
              <Tooltip />
              <Legend />
              <CartesianGrid strokeDasharray="3 3" />
              <Bar
                dataKey="Quantity"
                fill="#8884d8"
                background={{ fill: "#eee" }}
              />
            </BarChart>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Chart;
