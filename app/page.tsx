import { Metadata } from 'next';
import './page.css'

export const metadata: Metadata = {
  title: 'Обо мне / maxpryadkin.ru',
}

export default function Home() {
  
  return (
    <>
      <h1>Обо мне</h1>
      <div className='block_row'>
        <div className='block_column'>
          <div className='block_info'>
            <h3>Максим Прядкин</h3>
            <p>Привет, меня зовут Максим, веб—разработкой занимаюсь с 2011 года. 
               Изучил варианты и для старта выбрал WordPress, а в процессе работы освоил HTML, CSS.</p>
               <br/>
            <p>Далее освоил SEO и стал продвигать сайты. Устроился на работу в веб—студию. 
               В процессе работы создавал, запускал и поддерживал проекты различной сложности.</p>
               <br/>
            <p>Изучил основы JavaScript, углубился в React и Next.js.</p>
               <div className='contakt_content info_about'>
               <ul>
                <li>
                <span>Адрес: </span>
                <span>Санкт—Петербург</span>
                </li>
                <li>
                  <span>Образование: </span>
                  <span>Высшие, ВГАУ</span>
                  </li>
                  <li>
                    <span>Увлечения: </span>
                    <span>Музыкант</span>
                  </li>
            </ul>
            </div>
          </div>
        </div>
        <div className='block_column'>
          <div className='block_img'>
          <div className='img_background'></div>
          </div>
        </div>
      </div>
      <h2>Навыки</h2>
        <div className="skills_row">
          <div className='skills_column'>
            <h4>Junior Frontend—разработчик</h4>
            <ul>
              <li>React</li>
              <li>Next.js</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>HTML5, CSS3</li>
            </ul>
          </div>
          <div className='skills_column'>
            <h4>SEO—специалист</h4>
            <ul>
              <li>Внутренняя оптимизация</li>
              <li>Семантическое ядро</li>
              <li>Внешняя оптимизация</li>
              <li>Аналитика</li>
              <li>Email—маркетинг</li>
            </ul>
          </div>
        </div>
        <h2>Контакты</h2>
        <div className='contakt_content'>
        <ul>
          <li>
            <span>Телефон:</span>
            <span>+7 (920) 469-12-86</span>
          </li>
          <li>
            <span>Cоцсети:</span>
            <span>maxpryadkin</span>
            </li>
          <li>
            <span>Почта:</span>
            <span>lahma@yandex.ru</span>
            </li>
        </ul>
        </div>
    </>
  )
}