import React from 'react';
import { Row, Col } from 'antd';
import * as S from './styles';

const services = [
    {
        title: "LANDING PAGE",
        duration: "от 3 недель",
        price: "от 140 000 ₽",
        description: "Эффективно стимулирует продажи, мотивируя посетителя к совершению целевого действия.",
        features: ["Интерактивность", "Продажи", "1 страница", "Эффективность"]
    },
    {
        title: "САЙТ-ВИЗИТКА",
        duration: "от 1 месяца",
        price: "от 180 000 ₽",
        description: "Предоставляет полную информацию о компании, позволяя выделиться среди конкурентов и заявить о себе.",
        features: ["Информативность", "Имидж", "До 5 страниц", "Базовый функционал"]
    },
    {
        title: "САЙТ ДЛЯ КОМПАНИИ",
        duration: "от 1.5 месяцев",
        price: "от 220 000 ₽",
        description: "Крупный проект, направленный на повышение узнаваемости и привлечение внимания к компании.",
        features: ["Масштабируемость", "Комплексность", "Множество страниц", "Расширенный функционал"]
    },
    {
        title: "КОНТЕКСТНАЯ РЕКЛАМА",
        duration: "1 месяц",
        price: "от 20 000 ₽",
        description: "Быстрый способ привлечь клиентов, обеспечивающий заявки с сайта уже в течение недели после запуска.",
        features: ["Быстрый старт", "Таргетинг", "Аналитика", "Оптимизация"]
    }
];

const ServiceBlock = () => {
    return (
        <S.Container>
            <S.Title>УСЛУГИ</S.Title>
            <S.Description>
                Все проекты нашей студии проходят тщательный контроль, поэтому в будущем вам
                не потребуется нанимать специалистов для доработок.
            </S.Description>

            <Row gutter={[32, 32]}>
                {services.map((service, index) => (
                    <Col key={index} xs={24} md={12}>
                        <S.ServiceCard>
                            <S.Duration>{service.duration}</S.Duration>
                            <S.ServiceTitle>{service.title}</S.ServiceTitle>
                            <S.Price>{service.price}</S.Price>
                            <S.ServiceDescription>{service.description}</S.ServiceDescription>
                            <S.Features>
                                {service.features.map((feature, idx) => (
                                    <S.Feature key={idx}>{feature}</S.Feature>
                                ))}
                            </S.Features>
                            <S.Button>Подробнее</S.Button>
                        </S.ServiceCard>
                    </Col>
                ))}
            </Row>
        </S.Container>
    );
};

export default ServiceBlock;