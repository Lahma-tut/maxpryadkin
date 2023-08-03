import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Опыт работы / maxpryadkin.ru",
  }

export default function Work() {
    
    return (
        <div>
            <h1>Опыт работы</h1>
            <div className="work_body">
                <div className="work_item">
                    <h3>ООО Премьер—Агро 05.2019—н.в.</h3>
                    <p>pr—agro.ru</p>
                    <h4>SEO—специалист, Менеджер проекта</h4>
                    <ul>
                        <li>Проектирование пользовательских интерфейсов</li>
                        <li>Проектирование и разработка функционала</li>
                        <li>Запуск проекта</li>
                        <li>SEO продвижение</li>
                        <li>Аналитика</li>
                    </ul>
                </div>
                <div className="work_item">
                    <h3>ООО ЗемлякоФФ защита растений Центр 08.2014—05.2019</h3>
                    <p>zemlyakoff—centr.ru</p>
                    <h4>SEO—специалист, Интернет маркетолог</h4>
                    <ul>
                        <li>Разработка проекта с нуля</li>
                        <li>Проектирование пользовательских интерфейсов</li>
                        <li>Верстка, WordPress</li>
                        <li>SEO продвижение, поддержка проекта</li>
                        <li>SMM, Email-рассылка</li>
                    </ul>
                </div>
                <div className="work_item">
                    <h3>Evrone 12.2012—11.2013</h3>
                    <p>evrone.ru</p>
                    <h4>SEO—специалист</h4>
                    <div>
                        <ul>
                            <li>Создание спецпроектов</li>
                            <li>Проектирование пользовательских интерфейсов</li>
                            <li>Написание ТЗ для копирайтеров и дизайнеров</li>
                            <li>SEO оптимизация</li>
                            <li>Аналитика</li>
                        </ul>
                    </div>
                </div>
                <div className="work_item">
                    <h3>Студия Арктическая Лаборатория 03.2012—12.2012</h3>
                    <p>arcticlab.ru</p>
                    <h4>SEO—специалист</h4>
                    <ul>
                        <li>Сбор семантического ядра</li>
                        <li>Продвижение и оптимизация</li>
                        <li>Обучение, посещение конференций</li>
                        <li>Запуск проектов</li>
                    </ul>
                    </div>
                </div>
        </div>
    )
}