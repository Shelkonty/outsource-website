import styled from 'styled-components';

export const Container = styled.section`
  padding: 60px 0;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 32px;
  text-align: center;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  text-align: center;
  color: #666;
  margin-bottom: 40px;
  max-width: 800px;
  margin: 0 auto 40px;
`;

export const ServiceCard = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  height: 100%;
  min-height: 450px;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const Duration = styled.div`
  color: #666;
  font-size: 14px;
  margin-bottom: 15px;
`;

export const ServiceTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 15px;
`;

export const Price = styled.div`
  font-size: 28px;
  color: #1890ff;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const ServiceDescription = styled.p`
  color: #666;
  margin-bottom: 20px;
  flex-grow: 1;
`;

export const Features = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
`;

export const Feature = styled.span`
  background: #f5f5f5;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 14px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  background: #1890ff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #40a9ff;
  }
`;