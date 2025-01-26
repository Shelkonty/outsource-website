import React from 'react';
import { Row, Col } from 'antd';
import { withTranslation, TFunction } from "react-i18next";
import * as S from './styles';

const services = [
    {
        title: "landing.title",
        duration: "landing.duration",
        price: "landing.price",
        description: "landing.description",
        features: ["landing.features.interactive", "landing.features.sales", "landing.features.onePage", "landing.features.efficiency"]
    },
    {
        title: "business.title",
        duration: "business.duration",
        price: "business.price",
        description: "business.description",
        features: ["business.features.informative", "business.features.image", "business.features.pages", "business.features.basic"]
    },
    {
        title: "corporate.title",
        duration: "corporate.duration",
        price: "corporate.price",
        description: "corporate.description",
        features: ["corporate.features.scalable", "corporate.features.complex", "corporate.features.multipage", "corporate.features.advanced"]
    },
    {
        title: "ads.title",
        duration: "ads.duration",
        price: "ads.price",
        description: "ads.description",
        features: ["ads.features.quickStart", "ads.features.targeting", "ads.features.analytics", "ads.features.optimization"]
    }
];

const ServiceBlock = ({ t }: { t: TFunction }) => {
    return (
        <S.Container>
            <S.Title>{t("services.title")}</S.Title>
            <S.Description>{t("services.description")}</S.Description>

            <Row gutter={[32, 32]}>
                {services.map((service, index) => (
                    <Col key={index} xs={24} md={12}>
                        <S.ServiceCard>
                            <S.Duration>{t(service.duration)}</S.Duration>
                            <S.ServiceTitle>{t(service.title)}</S.ServiceTitle>
                            <S.Price>{t(service.price)}</S.Price>
                            <S.ServiceDescription>{t(service.description)}</S.ServiceDescription>
                            <S.Features>
                                {service.features.map((feature, idx) => (
                                    <S.Feature key={idx}>{t(feature)}</S.Feature>
                                ))}
                            </S.Features>
                        </S.ServiceCard>
                    </Col>
                ))}
            </Row>
        </S.Container>
    );
};

export default withTranslation()(ServiceBlock);