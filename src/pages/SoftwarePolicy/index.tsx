import React from 'react';
import {TFunction, withTranslation} from 'react-i18next';
import { Row, Col } from "antd";
import Container from "../../common/Container";
import {
    PrinciplesWrapper,
    PrinciplesContainer,
    PrinciplesTitle,
    SectionTitle,
    PrinciplesText,
    ListItem,
} from './styles';

const SoftwarePrinciples = ({ t }: { t: TFunction }) => {
    return (
        <PrinciplesWrapper>
            <Container>
                <Row justify="center">
                    <Col lg={20} md={20} sm={24} xs={24}>
                        <PrinciplesContainer>
                            <PrinciplesTitle>Принципы программного обеспечения</PrinciplesTitle>

                            <SectionTitle>1. Качество разработки</SectionTitle>
                            <PrinciplesText>
                                Наша команда придерживается высоких стандартов разработки программного обеспечения,
                                обеспечивая надежность и эффективность каждого проекта.
                            </PrinciplesText>

                            <ListItem>
                                Чистый и поддерживаемый код с подробными комментариями
                            </ListItem>
                            <ListItem>
                                Оптимизация производительности и скорости работы
                            </ListItem>
                            <ListItem>
                                Регулярное тестирование и отладка
                            </ListItem>

                            <SectionTitle>2. Технологический стек</SectionTitle>
                            <PrinciplesText>
                                Мы используем современные и проверенные технологии для создания надежных решений.
                            </PrinciplesText>

                            <ListItem>
                                React, Node.js, TypeScript для веб-разработки
                            </ListItem>
                            <ListItem>
                                Docker для контейнеризации приложений
                            </ListItem>
                            <ListItem>
                                AWS и другие облачные сервисы для масштабирования
                            </ListItem>

                            <SectionTitle>3. Безопасность</SectionTitle>
                            <PrinciplesText>
                                Безопасность является ключевым приоритетом в нашей разработке.
                            </PrinciplesText>

                            <ListItem>
                                Регулярные проверки безопасности кода
                            </ListItem>
                            <ListItem>
                                Защита данных и шифрование
                            </ListItem>
                            <ListItem>
                                Соответствие стандартам безопасности
                            </ListItem>

                            <SectionTitle>4. Гибкая методология</SectionTitle>
                            <PrinciplesText>
                                Мы применяем гибкие методологии разработки для эффективного управления проектами.
                            </PrinciplesText>

                            <ListItem>
                                Итеративный подход к разработке
                            </ListItem>
                            <ListItem>
                                Регулярные обновления и улучшения
                            </ListItem>
                            <ListItem>
                                Быстрая адаптация к изменениям требований
                            </ListItem>

                            <SectionTitle>5. Поддержка и сопровождение</SectionTitle>
                            <PrinciplesText>
                                Мы обеспечиваем полную поддержку наших решений после внедрения.
                            </PrinciplesText>

                            <ListItem>
                                Техническая поддержка 24/7
                            </ListItem>
                            <ListItem>
                                Регулярные обновления и улучшения
                            </ListItem>
                            <ListItem>
                                Мониторинг производительности
                            </ListItem>
                        </PrinciplesContainer>
                    </Col>
                </Row>
            </Container>
        </PrinciplesWrapper>
    );
};

export default withTranslation()(SoftwarePrinciples);