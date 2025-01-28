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
    },
    {
        title: "software.title",
        duration: "software.duration",
        price: "software.price",
        description: "software.description",
        features: ["software.features.quality", "software.features.scalable", "software.features.custom", "software.features.support"]
    },
    {
        title: "integration.title",
        duration: "integration.duration",
        price: "integration.price",
        description: "integration.description",
        features: ["integration.features.seamless", "integration.features.optimization", "integration.features.automation", "integration.features.efficiency"]
    },
    {
        title: "support.title",
        duration: "support.duration",
        price: "support.price",
        description: "support.description",
        features: ["support.features.247", "support.features.monitoring", "support.features.updates", "support.features.maintenance"]
    },
    {
        title: "mvp.title",
        duration: "mvp.duration",
        price: "mvp.price",
        description: "mvp.description",
        features: ["mvp.features.fast", "mvp.features.core", "mvp.features.testing", "mvp.features.iteration"]
    },
    {
        title: "consulting.title",
        duration: "consulting.duration",
        price: "consulting.price",
        description: "consulting.description",
        features: ["consulting.features.analysis", "consulting.features.strategy", "consulting.features.expertise", "consulting.features.solutions"]
    },
    {
        title: "iot.title",
        duration: "iot.duration",
        price: "iot.price",
        description: "iot.description",
        features: ["iot.features.smart", "iot.features.connectivity", "iot.features.monitoring", "iot.features.analytics"]
    },
    {
        title: "infrastructure.title",
        duration: "infrastructure.duration",
        price: "infrastructure.price",
        description: "infrastructure.description",
        features: ["infrastructure.features.reliability", "infrastructure.features.security", "infrastructure.features.scalability", "infrastructure.features.support"]
    },
    {
        title: "outsourcing.title",
        duration: "outsourcing.duration",
        price: "outsourcing.price",
        description: "outsourcing.description",
        features: ["outsourcing.features.efficiency", "outsourcing.features.cost", "outsourcing.features.expertise", "outsourcing.features.flexibility"]
    },
    {
        title: "custom.title",
        duration: "custom.duration",
        price: "custom.price",
        description: "custom.description",
        features: ["custom.features.unique", "custom.features.adaptation", "custom.features.integration", "custom.features.support"]
    },
    {
        title: "mobile.title",
        duration: "mobile.duration",
        price: "mobile.price",
        description: "mobile.description",
        features: ["mobile.features.native", "mobile.features.ux", "mobile.features.performance", "mobile.features.updates"]
    },
    {
        title: "web.title",
        duration: "web.duration",
        price: "web.price",
        description: "web.description",
        features: ["web.features.responsive", "web.features.modern", "web.features.seo", "web.features.performance"]
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